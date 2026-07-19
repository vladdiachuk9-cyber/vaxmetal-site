/**
 * Best-effort in-memory rate limiter. Resets on server restart and does not
 * share state across serverless instances — good enough to blunt casual
 * form spam. Swap for Upstash Redis (or similar) behind the same signature
 * before relying on it at scale.
 */
const hits = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  { windowMs = 60_000, max = 5 }: { windowMs?: number; max?: number } = {}
): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  hits.set(key, timestamps);
  return timestamps.length > max;
}
