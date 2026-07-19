import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type StoredFile = {
  key: string;
  url: string | null;
  provider: "s3" | "local-dev";
};

/**
 * Pluggable storage: uses S3-compatible storage when RFQ_S3_* env vars are
 * present, otherwise falls back to writing into a local, gitignored
 * uploads/ directory so the flow is testable without cloud credentials.
 * Swap in a real S3 client (aws-sdk / @aws-sdk/client-s3) behind the same
 * function signature once credentials are provisioned.
 */
export async function storeRfqFile(
  file: File,
  buffer: Buffer
): Promise<StoredFile> {
  const key = `${randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;

  const hasS3Config =
    process.env.RFQ_S3_BUCKET &&
    process.env.RFQ_S3_REGION &&
    process.env.RFQ_S3_ACCESS_KEY_ID &&
    process.env.RFQ_S3_SECRET_ACCESS_KEY;

  if (hasS3Config) {
    // TODO_VERIFY: wire up @aws-sdk/client-s3 (or compatible provider) once
    // bucket credentials are issued. Kept as an explicit stub rather than a
    // half-working client so failures are loud, not silent.
    throw new Error(
      "S3 storage env vars are set but the S3 client is not yet implemented. " +
        "Install @aws-sdk/client-s3 and complete storeRfqFile() in src/lib/rfq/storage.ts."
    );
  }

  const uploadsDir = path.join(process.cwd(), "uploads", "rfq");
  await mkdir(uploadsDir, { recursive: true });
  await writeFile(path.join(uploadsDir, key), buffer);

  return { key, url: null, provider: "local-dev" };
}
