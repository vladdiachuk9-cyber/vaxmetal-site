import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneOemIntegrators({ locale }: { locale: Locale }) {
  const t = antiDronePage.oemIntegrators;

  return (
    <Section tone="navy">
      <SectionHeading title={t.title[locale]} subtitle={t.intro[locale]} tone="navy" />
      <div className="mx-auto mt-8 max-w-2xl rounded-md border border-pine-light/40 bg-pine/15 px-6 py-3 text-center text-sm font-semibold text-pine-light">
        {t.subheading[locale]}
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-sm font-semibold text-white">{t.itemsLabel[locale]}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {t.items[locale].map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine-light" aria-hidden />
              <span className="text-sm leading-relaxed text-steel-light">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="#antidrone-rfq"
          className="mt-8 inline-flex rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
        >
          {t.cta[locale]}
        </a>
      </div>
    </Section>
  );
}
