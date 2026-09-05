import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabWhyUs({ locale }: { locale: Locale }) {
  const t = customFabricationPage.whyUs;

  return (
    <Section tone="navy">
      <SectionHeading title={t.h2[locale]} tone="navy" />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.title.en} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine-light" aria-hidden />
            <div>
              <h3 className="font-heading text-base font-semibold text-white">{item.title[locale]}</h3>
              <p className="mt-1 text-sm leading-relaxed text-steel-light">{item.text[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
