"use client";

import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";
import { trackEvent } from "@/lib/analytics/track-event";

export function AntiDroneProducts({ locale }: { locale: Locale }) {
  const t = antiDronePage.products;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => (
          <div key={item.title.en} className="flex flex-col rounded-xl border border-border bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-ink">{item.title[locale]}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
            <a
              href="#antidrone-rfq"
              onClick={() => trackEvent("anti_drone_quote_click", { product_card: item.title.en })}
              className="mt-4 text-sm font-semibold text-pine hover:text-pine-dark"
            >
              {item.cta[locale]} →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
