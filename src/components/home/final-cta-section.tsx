import { useTranslations } from "next-intl";
import { RfqForm } from "@/components/conversion/rfq-form";
import { QuoteEstimatorWidget } from "@/components/conversion/quote-estimator-widget";
import { BookCallButton } from "@/components/conversion/book-call-button";

export function FinalCtaSection() {
  const t = useTranslations("finalCta");

  return (
    <section id="rfq" className="border-t border-border bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-md text-lg text-steel">{t("subtitle")}</p>
          <div className="mt-6">
            <BookCallButton label={t("ctaSecondary")} />
          </div>
          <div className="mt-8">
            <QuoteEstimatorWidget />
          </div>
        </div>
        <RfqForm />
      </div>
    </section>
  );
}
