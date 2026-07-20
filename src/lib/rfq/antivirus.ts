import net from "node:net";

export interface ScanResult {
  clean: boolean;
  provider: string;
  reason?: string;
}

/**
 * Single entry point for pre-storage virus scanning, regardless of which
 * scanner the owner ends up using. Selected via AV_PROVIDER; each branch
 * reads its own provider-specific env vars. If AV_PROVIDER is unset, this
 * is a plain no-op (scanning simply hasn't been configured yet) — but if it
 * IS set and misconfigured, or the scanner call itself fails, this throws
 * rather than silently letting an unscanned file through. The caller is
 * expected to fail closed (reject the upload) on any thrown error.
 */
export async function scanFileForViruses(
  buffer: Buffer,
  filename: string
): Promise<ScanResult> {
  const provider = process.env.AV_PROVIDER;

  switch (provider) {
    case undefined:
      return { clean: true, provider: "none" };
    case "clamav":
      return scanWithClamAv(buffer, filename);
    case "cloudmersive":
      return scanWithCloudmersive(buffer, filename);
    default:
      throw new Error(`Unknown AV_PROVIDER "${provider}".`);
  }
}

const CLAM_CHUNK_SIZE = 64 * 1024;
const CLAM_TIMEOUT_MS = 15_000;

/**
 * Talks the ClamAV clamd INSTREAM protocol directly over TCP (no client
 * library needed): send the command, stream the file as
 * length-prefixed chunks, terminate with a zero-length chunk, read the
 * verdict line back.
 * https://docs.clamav.net/manual/Usage/Scanning.html#instream
 */
function scanWithClamAv(buffer: Buffer, filename: string): Promise<ScanResult> {
  const host = process.env.CLAMAV_HOST;
  const port = Number(process.env.CLAMAV_PORT ?? "3310");
  if (!host) {
    throw new Error("AV_PROVIDER=clamav but CLAMAV_HOST is not set.");
  }

  return new Promise((resolve, reject) => {
    const socket = net.createConnection({ host, port });
    let response = "";
    let settled = false;

    function fail(err: Error) {
      if (settled) return;
      settled = true;
      socket.destroy();
      reject(err);
    }

    socket.setTimeout(CLAM_TIMEOUT_MS, () => {
      fail(new Error(`ClamAV scan timed out for "${filename}".`));
    });
    socket.on("error", fail);

    socket.on("connect", () => {
      socket.write("zINSTREAM\0");

      let offset = 0;
      while (offset < buffer.length) {
        const chunk = buffer.subarray(offset, offset + CLAM_CHUNK_SIZE);
        const sizePrefix = Buffer.alloc(4);
        sizePrefix.writeUInt32BE(chunk.length, 0);
        socket.write(sizePrefix);
        socket.write(chunk);
        offset += chunk.length;
      }
      socket.write(Buffer.alloc(4)); // zero-length chunk terminates the stream
    });

    socket.on("data", (data) => {
      response += data.toString("utf8");
    });

    socket.on("end", () => {
      if (settled) return;
      settled = true;
      const found = response.match(/stream:\s*(.+?)\s*FOUND/i);
      if (found) {
        resolve({ clean: false, provider: "clamav", reason: found[1] });
        return;
      }
      if (/stream:\s*OK/i.test(response)) {
        resolve({ clean: true, provider: "clamav" });
        return;
      }
      fail(new Error(`Unexpected ClamAV response: "${response.trim()}"`));
    });
  });
}

interface CloudmersiveScanResponse {
  CleanResult: boolean;
  FoundViruses?: { VirusName: string }[] | null;
}

async function scanWithCloudmersive(
  buffer: Buffer,
  filename: string
): Promise<ScanResult> {
  const apiKey = process.env.CLOUDMERSIVE_API_KEY;
  if (!apiKey) {
    throw new Error(
      "AV_PROVIDER=cloudmersive but CLOUDMERSIVE_API_KEY is not set."
    );
  }

  const form = new FormData();
  form.append("inputFile", new Blob([Uint8Array.from(buffer)]), filename);

  const res = await fetch("https://api.cloudmersive.com/virus/scan/file", {
    method: "POST",
    headers: { Apikey: apiKey },
    body: form,
  });

  if (!res.ok) {
    throw new Error(`Cloudmersive scan request failed with status ${res.status}.`);
  }

  const result = (await res.json()) as CloudmersiveScanResponse;
  return {
    clean: result.CleanResult,
    provider: "cloudmersive",
    reason: result.FoundViruses?.map((v) => v.VirusName).join(", "),
  };
}
