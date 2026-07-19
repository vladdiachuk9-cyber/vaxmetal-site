import { z } from "zod";

export const ALLOWED_FILE_EXTENSIONS = [
  "step",
  "stp",
  "dxf",
  "dwg",
  "pdf",
  "zip",
] as const;

export const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB

export const rfqFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(200).optional().default(""),
  material: z.string().trim().max(120).optional().default(""),
  quantity: z.string().trim().max(50).optional().default(""),
  finish: z.string().trim().max(120).optional().default(""),
  tolerance: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(4000).optional().default(""),
  consent: z
    .union([z.literal("true"), z.literal("on"), z.literal(true)])
    .transform(() => true),
  // Honeypot: real users never fill this hidden field. Left unconstrained
  // (not max(0)) so a filled value still parses successfully and reaches
  // the route handler, which silently no-ops instead of leaking a 400 that
  // would tip off bots that the field is being checked.
  companyWebsite: z.string().max(500).optional().default(""),
  locale: z.enum(["en", "uk"]).default("en"),
});

export type RfqFormInput = z.infer<typeof rfqFormSchema>;

export function validateFile(file: File | null): string | null {
  if (!file) return null;

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return "File exceeds the 50MB size limit.";
  }

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext as (typeof ALLOWED_FILE_EXTENSIONS)[number])) {
    return `Unsupported file type ".${ext}". Allowed: ${ALLOWED_FILE_EXTENSIONS.join(", ")}.`;
  }

  return null;
}
