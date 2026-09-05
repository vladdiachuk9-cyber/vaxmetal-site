import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabMaterials({ locale }: { locale: Locale }) {
  const t = customFabricationPage.materials;

  return (
    <Section>
      <SectionHeading title={t.h2[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {t.items.map((item, i) => (
          <div key={item.title.en} className="border-t-2 border-pine pt-4">
            <span className="font-heading text-xs font-semibold text-steel">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-heading text-lg font-semibold text-ink">{item.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
