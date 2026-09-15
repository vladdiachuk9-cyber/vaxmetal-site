import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneCustomEngineering({ locale }: { locale: Locale }) {
  const t = antiDronePage.customEngineering;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} subtitle={t.intro[locale]} />
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-sm font-semibold text-ink">{t.inputsLabel[locale]}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {t.inputs[locale].map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-border bg-white p-4">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
              <span className="text-sm font-medium text-ink">{item}</span>
            </li>
          ))}
        </ul>

        {t.supporting[locale] && <p className="mt-6 text-steel">{t.supporting[locale]}</p>}

        <p className="mt-8 rounded-md border border-pine-light/40 bg-pine-tint px-4 py-3 text-center font-mono text-xs uppercase tracking-wide text-pine-dark sm:text-sm">
          {t.flow[locale]}
        </p>

        <p className="mt-6 text-steel">{t.closing[locale]}</p>

        <a
          href="#antidrone-rfq"
          className="mt-6 inline-flex rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
        >
          {t.cta[locale]}
        </a>
      </div>
    </Section>
  );
}
