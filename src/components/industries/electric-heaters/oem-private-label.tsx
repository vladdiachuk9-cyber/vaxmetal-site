import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";

export function HeatersOemPrivateLabel({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.oemPrivateLabel;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} subtitle={t.intro[locale]} />
      <div className="mx-auto mt-10 max-w-3xl">
        <p className="text-sm font-semibold text-ink">{t.itemsLabel[locale]}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {t.items[locale].map((item) => (
            <li key={item} className="flex gap-3 rounded-lg border border-border bg-white p-4">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
              <span className="text-sm font-medium text-ink">{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-steel">{t.closing[locale]}</p>

        <a
          href="#heater-rfq"
          className="mt-6 inline-flex rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
        >
          {t.cta[locale]}
        </a>
      </div>
    </Section>
  );
}
