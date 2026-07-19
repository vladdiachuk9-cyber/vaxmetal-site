import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { generateCapabilityStatementPdf } from "@/lib/pdf/capability-statement";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

const leadMagnetSchema = z.object({
  email: z.string().trim().email().max(200),
  name: z.string().trim().max(120).optional().default(""),
  consent: z.union([z.literal("true"), z.literal(true)]).transform(() => true),
});

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`lead-magnet:${ip}`, { windowMs: 60_000, max: 10 })) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadMagnetSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

   
  console.log("[lead-magnet download]", {
    email: parsed.data.email,
    name: parsed.data.name,
    asset: "capability-statement",
    at: new Date().toISOString(),
  });

  const pdfBytes = await generateCapabilityStatementPdf();

  return new NextResponse(Buffer.from(pdfBytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="capability-statement.pdf"',
    },
  });
}
