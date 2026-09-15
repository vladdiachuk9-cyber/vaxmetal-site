"use client";

import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/site-config";
import { antiDronePage } from "@/content/anti-drone-page";
import { trackEvent } from "@/lib/analytics/track-event";

export function AntiDroneFinalCta({ locale }: { locale: Locale }) {
  const t = antiDronePage.finalCta;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-navy p-8 text-white sm:flex-row sm:items-center">
        <div>
          <h2 className="font-heading text-2xl font-semibold">{t.title[locale]}</h2>
          <p className="mt-2 text-steel-light">{t.subtitle[locale]}</p>
          <p className="mt-3 text-sm text-steel-light">{siteConfig.contact.salesEmail}</p>
        </div>
        <a
          href="#antidrone-rfq"
          onClick={() => trackEvent("anti_drone_quote_click", { source: "final_cta" })}
          className="shrink-0 rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
        >
          {t.cta[locale]}
        </a>
      </div>
      <p className="mt-4 text-center text-xs text-steel">{antiDronePage.conceptLabel[locale]}</p>
    </div>
  );
}
