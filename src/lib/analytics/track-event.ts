declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Pushes a GA4/GTM event to window.dataLayer if it exists, no-ops otherwise
 * (e.g. before cookie consent, since GTM's own container load isn't gated —
 * see analytics-scripts.tsx — but this still degrades safely if dataLayer
 * isn't present for any other reason). No existing event-firing abstraction
 * was found elsewhere in the codebase to reuse.
 */
export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
