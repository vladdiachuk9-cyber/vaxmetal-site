import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneFixedAssets({ locale }: { locale: Locale }) {
  const t = antiDronePage.fixedAssets;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} subtitle={t.intro[locale]} />
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-sm font-semibold text-ink">{t.applicationsLabel[locale]}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {t.applications[locale].map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-steel"
            >
              {item}
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
