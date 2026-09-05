import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabAudience({ locale }: { locale: Locale }) {
  const t = customFabricationPage.audience;

  return (
    <Section tone="fog">
      <SectionHeading title={t.h2[locale]} subtitle={t.body[locale]} />
      <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
        {t.items.map((item) => (
          <span
            key={item.en}
            className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-ink"
          >
            {item[locale]}
          </span>
        ))}
      </div>
    </Section>
  );
}
