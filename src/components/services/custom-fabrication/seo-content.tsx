import { Section } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabSeoContent({ locale }: { locale: Locale }) {
  const blocks = customFabricationPage.seoContent;

  return (
    <Section>
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        {blocks.map((block) => (
          <div key={block.h2.en}>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink">{block.h2[locale]}</h2>
            <p className="mt-3 leading-relaxed text-steel">{block.body[locale]}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
