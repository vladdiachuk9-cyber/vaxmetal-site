import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";
import { QuoteEstimatorWidget } from "@/components/conversion/quote-estimator-widget";

export function CalculatorSection() {
  const t = useTranslations("estimator");

  return (
    <Section id="calculator" tone="fog">
      <SectionHeading eyebrow="Calculator" title={t("title")} subtitle={t("subtitle")} />
      <div className="mx-auto mt-10 max-w-2xl">
        <QuoteEstimatorWidget />
      </div>
    </Section>
  );
}
