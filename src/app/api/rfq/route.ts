import { NextRequest, NextResponse } from "next/server";
import { rfqFormSchema, validateFile } from "@/lib/rfq/schema";
import { storeRfqFile } from "@/lib/rfq/storage";
import { notifyRfq } from "@/lib/rfq/notify";
import { sendLeadToCrm } from "@/lib/crm/adapter";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

// Magic-byte signatures for the file types we accept. Extension checks alone
// can be spoofed; this catches a mismatched/renamed payload.
const MAGIC_BYTES: Record<string, (buf: Buffer) => boolean> = {
  zip: (buf) => buf.length > 4 && buf[0] === 0x50 && buf[1] === 0x4b,
  pdf: (buf) => buf.slice(0, 4).toString("ascii") === "%PDF",
  dwg: (buf) => buf.slice(0, 4).toString("ascii") === "AC10",
  // STEP/STP and DXF are plain-text formats with no fixed magic number —
  // we only sanity-check that they decode as text rather than binary noise.
  step: (buf) => isLikelyText(buf),
  stp: (buf) => isLikelyText(buf),
  dxf: (buf) => isLikelyText(buf),
};

function isLikelyText(buf: Buffer): boolean {
  const sample = buf.slice(0, 512);
  let control = 0;
  for (const byte of sample) {
    if (byte === 0) return false;
    if (byte < 9 || (byte > 13 && byte < 32)) control++;
  }
  return control / Math.max(sample.length, 1) < 0.1;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`rfq:${ip}`, { windowMs: 60_000, max: 5 })) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid form submission." },
      { status: 400 }
    );
  }

  const raw = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === "string")
  );

  const parsed = rfqFormSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields and try again.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Honeypot tripped — pretend success so bots don't learn to skip the field.
  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const file = formData.get("file");
  const uploadedFile = file instanceof File && file.size > 0 ? file : null;

  const fileError = validateFile(uploadedFile);
  if (fileError) {
    return NextResponse.json({ ok: false, error: fileError }, { status: 400 });
  }

  let storedFile = null;
  if (uploadedFile) {
    const buffer = Buffer.from(await uploadedFile.arrayBuffer());
    const ext = uploadedFile.name.split(".").pop()?.toLowerCase() ?? "";
    const magicCheck = MAGIC_BYTES[ext];
    if (magicCheck && !magicCheck(buffer)) {
      return NextResponse.json(
        { ok: false, error: "File content does not match its extension." },
        { status: 400 }
      );
    }

    // TODO_VERIFY: wire up a virus-scan hook (e.g. ClamAV daemon or a
    // cloud AV API) here before the file is persisted, once available.

    try {
      storedFile = await storeRfqFile(uploadedFile, buffer);
    } catch (err) {
       
      console.error("RFQ file storage failed", err);
      return NextResponse.json(
        { ok: false, error: "File upload failed. Please try again or email the file directly." },
        { status: 500 }
      );
    }
  }

  const { delivered } = await notifyRfq(parsed.data, storedFile);

  // CRM delivery is a secondary channel — email notification above is the
  // reliable path, so a CRM failure logs but doesn't fail the submission.
  try {
    await sendLeadToCrm({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      message: parsed.data.message,
      material: parsed.data.material,
      quantity: parsed.data.quantity,
      finish: parsed.data.finish,
      tolerance: parsed.data.tolerance,
      locale: parsed.data.locale,
    });
  } catch (err) {
     
    console.error("CRM lead delivery failed", err);
  }

  return NextResponse.json({ ok: true, delivered });
}
