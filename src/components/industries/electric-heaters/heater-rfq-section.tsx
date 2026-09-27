import { Section } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";
import { HeaterRfqForm } from "./heater-rfq-form";

export function HeaterRfqSection({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.rfq;

  return (
    <Section id="heater-rfq" tone="fog">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.title[locale]}
          </h2>
          <p className="mt-4 max-w-md text-lg text-steel">{t.subtitle[locale]}</p>
        </div>
        <HeaterRfqForm locale={locale} />
      </div>
    </Section>
  );
}
