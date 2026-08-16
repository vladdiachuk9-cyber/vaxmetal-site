import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastProof({ locale }: { locale: Locale }) {
  const t = mastPage.proof;

  return (
    <Section tone="navy">
      <SectionHeading title={t.title[locale]} tone="navy" />
      <div className="mx-auto mt-8 max-w-2xl rounded-md border border-pine-light/40 bg-pine/15 px-6 py-3 text-center text-sm font-semibold text-pine-light">
        {t.badge[locale]}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <div key={item.en} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine-light" aria-hidden />
            <span className="text-sm leading-relaxed text-steel-light">{item[locale]}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
