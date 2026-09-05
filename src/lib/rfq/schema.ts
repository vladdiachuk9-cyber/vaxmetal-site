import { z } from "zod";

export const ALLOWED_FILE_EXTENSIONS = [
  "step",
  "stp",
  "dxf",
  "dwg",
  "pdf",
  "zip",
] as const;

// Kept separate from ALLOWED_FILE_EXTENSIONS rather than merged into it: the
// generic and mast RFQ forms show that constant's contents verbatim in their
// upload label and `accept` attribute (CAD-only) — widening it sitewide
// would silently start accepting photos there while the UI still claims
// CAD-only. Only the custom-project multi-file upload uses the union below.
export const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"] as const;

export const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50MB, single-file forms
export const MAX_FILES = 8; // multi-file form; conservative given sequential AV-scan latency if AV_PROVIDER is ever set
export const MAX_TOTAL_UPLOAD_BYTES = 50 * 1024 * 1024; // 50MB combined, multi-file form

/** Discriminator value the custom-project form sets on `product` so the backend can tell it apart from a generic/mast RFQ. */
export const CUSTOM_PROJECT_PRODUCT = "Custom Metal Fabrication";

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
  // Product-specific fields (currently only the mast RFQ variant sends
  // these) — optional so the generic RFQ form is unaffected.
  product: z.string().trim().max(60).optional().default(""),
  application: z.string().trim().max(120).optional().default(""),
  mastHeight: z.string().trim().max(60).optional().default(""),
  payloadWeight: z.string().trim().max(60).optional().default(""),
  equipmentNotes: z.string().trim().max(1000).optional().default(""),
  destination: z.string().trim().max(120).optional().default(""),
  // Custom-project form fields — optional so every other RFQ form is unaffected.
  referenceUrl: z.string().trim().max(500).optional().default(""),
  approxDimensions: z.string().trim().max(200).optional().default(""),
  timeline: z.string().trim().max(60).optional().default(""),
  deliveryCountry: z.string().trim().max(120).optional().default(""),
  deliveryCity: z.string().trim().max(120).optional().default(""),
  ndaRequired: z
    .union([z.literal("true"), z.literal("on"), z.literal(true)])
    .optional()
    .transform((v) => v === "true" || v === "on" || v === true),
  // Hidden attribution fields (custom-project form only) — dropped silently
  // by zod's default object-strip behavior if absent, so every other form
  // is unaffected by their presence here.
  landingPage: z.string().trim().max(300).optional().default(""),
  sourcePage: z.string().trim().max(300).optional().default(""),
  referrer: z.string().trim().max(500).optional().default(""),
  utmSource: z.string().trim().max(200).optional().default(""),
  utmMedium: z.string().trim().max(200).optional().default(""),
  utmCampaign: z.string().trim().max(200).optional().default(""),
  timestamp: z.string().trim().max(60).optional().default(""),
}).superRefine((data, ctx) => {
  // `message` doubles as "project description" for the custom-project form,
  // where it's the primary required field (every other form leaves it optional).
  if (data.product === CUSTOM_PROJECT_PRODUCT && data.message.trim().length === 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["message"],
      message: "Please describe your project.",
    });
  }
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

const ALLOWED_MULTI_UPLOAD_EXTENSIONS: readonly string[] = [
  ...ALLOWED_FILE_EXTENSIONS,
  ...ALLOWED_IMAGE_EXTENSIONS,
];

/** Aggregate validation for the custom-project form's multi-file upload (count, combined size, per-file extension). */
export function validateFiles(files: File[]): string | null {
  if (files.length === 0) return null;

  if (files.length > MAX_FILES) {
    return `Too many files — please attach at most ${MAX_FILES}.`;
  }

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);
  if (totalSize > MAX_TOTAL_UPLOAD_BYTES) {
    return "Combined file size exceeds the 50MB limit.";
  }

  for (const file of files) {
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_MULTI_UPLOAD_EXTENSIONS.includes(ext)) {
      return `Unsupported file type ".${ext}" in "${file.name}". Allowed: ${ALLOWED_MULTI_UPLOAD_EXTENSIONS.join(", ")}.`;
    }
  }

  return null;
}
