import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";

export function HeatersProductionExperience({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.productionExperience;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} />
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <p className="text-steel">{t.text[locale]}</p>
        <p className="mt-4 text-steel">{t.supporting[locale]}</p>
      </div>
    </Section>
  );
}
