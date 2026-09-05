import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabStartWith({ locale }: { locale: Locale }) {
  const t = customFabricationPage.startWith;

  return (
    <Section tone="fog">
      <SectionHeading title={t.h2[locale]} subtitle={t.lead[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.title.en} className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-heading text-base font-semibold text-ink">{item.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm font-medium text-steel">{t.footer[locale]}</p>
    </Section>
  );
}
