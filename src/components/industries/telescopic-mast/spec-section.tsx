import { Section, SectionHeading } from "@/components/ui/section";
import { SpecTable } from "@/components/content/spec-table";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastSpecSection({ locale }: { locale: Locale }) {
  const t = mastPage;

  return (
    <Section>
      <SectionHeading title={locale === "uk" ? "Ключові параметри" : "Key Parameters"} />
      <div className="mx-auto mt-10 max-w-3xl">
        <SpecTable
          specs={t.specs.map((spec) => ({ label: spec.label[locale], value: spec.value[locale] }))}
        />
        <p className="mt-4 text-xs text-steel">{t.specsNote[locale]}</p>
      </div>
    </Section>
  );
}
