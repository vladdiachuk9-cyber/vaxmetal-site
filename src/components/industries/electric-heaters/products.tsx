import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";

export function HeatersProducts({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.products;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.name} className="flex flex-col rounded-xl border border-border bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-ink">{item.title[locale]}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a
          href="#heater-rfq"
          className="inline-flex rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
        >
          {t.cta[locale]}
        </a>
      </div>
    </Section>
  );
}
