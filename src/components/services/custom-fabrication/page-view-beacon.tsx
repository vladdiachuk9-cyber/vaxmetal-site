"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/track-event";

/** Fires a GA4 page-view-style event once on mount, without forcing the rest of the page to be a client component. */
export function PageViewBeacon({ event }: { event: string }) {
  useEffect(() => {
    trackEvent(event);
  }, [event]);

  return null;
}
