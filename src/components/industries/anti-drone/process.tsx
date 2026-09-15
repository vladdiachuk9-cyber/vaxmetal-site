import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneProcess({ locale }: { locale: Locale }) {
  const t = antiDronePage.process;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} />
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {t.steps.map((step) => (
          <li key={step.step} className="relative pl-14">
            <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-ink font-heading text-sm font-semibold text-white">
              {step.step}
            </span>
            <h3 className="font-heading text-base font-semibold text-ink">{step.title[locale]}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.text[locale]}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
