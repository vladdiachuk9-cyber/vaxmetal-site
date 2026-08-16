import { RfqForm } from "@/components/conversion/rfq-form";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastRfqSection({ locale }: { locale: Locale }) {
  const t = mastPage.rfq;

  return (
    <section id="mast-rfq" className="border-t border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.title[locale]}
          </h2>
          <p className="mt-4 max-w-md text-lg text-steel">{t.subtitle[locale]}</p>
        </div>
        <RfqForm variant="mast" />
      </div>
    </section>
  );
}
