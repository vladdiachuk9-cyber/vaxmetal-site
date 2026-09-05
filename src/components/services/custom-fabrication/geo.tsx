import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabGeo({ locale }: { locale: Locale }) {
  const t = customFabricationPage.geo;

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={t.h2[locale]} />
        <p className="mt-6 text-lg leading-relaxed text-steel">{t.body[locale]}</p>
      </div>
    </Section>
  );
}
