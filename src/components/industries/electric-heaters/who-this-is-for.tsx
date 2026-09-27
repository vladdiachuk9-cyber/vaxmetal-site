import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";

export function HeatersWhoThisIsFor({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.whoThisIsFor;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.title.en} className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-heading text-base font-semibold text-ink">{item.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
