import { siteConfig } from "@/lib/site-config";
import type { RfqFormInput } from "./schema";
import type { StoredFile } from "./storage";

/**
 * Pluggable notification: sends via Resend when RESEND_API_KEY is set.
 * Otherwise falls back to a structured server log so the RFQ is never
 * silently dropped during local development or before an email provider
 * is configured.
 */
export async function notifyRfq(
  input: RfqFormInput,
  file: StoredFile | null
): Promise<{ delivered: boolean; provider: string }> {
  const summary = {
    type: "rfq-submission",
    receivedAt: new Date().toISOString(),
    name: input.name,
    email: input.email,
    company: input.company,
    material: input.material,
    quantity: input.quantity,
    finish: input.finish,
    tolerance: input.tolerance,
    message: input.message,
    locale: input.locale,
    file: file ? { key: file.key, provider: file.provider } : null,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = siteConfig.contact.salesEmail;

  if (apiKey && toEmail) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RFQ_FROM_EMAIL ?? "rfq@notifications.example", // TODO_VERIFY
        to: toEmail,
        subject: `New RFQ from ${input.name}${input.company ? ` (${input.company})` : ""}`,
        text: JSON.stringify(summary, null, 2),
      }),
    });

    if (res.ok) {
      return { delivered: true, provider: "resend" };
    }

     
    console.error("RFQ email delivery failed", await res.text());
  }

   
  console.log("[RFQ fallback log — no email provider configured]", summary);
  return { delivered: false, provider: "console-fallback" };
}
