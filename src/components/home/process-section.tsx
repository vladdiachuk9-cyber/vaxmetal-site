import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";

export function ProcessSection() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as { step: string; name: string; description: string }[];

  return (
    <Section id="process">
      <SectionHeading eyebrow="Process" title={t("title")} />
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.step} className="relative pl-14">
            <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full bg-ink font-heading text-sm font-semibold text-white">
              {step.step}
            </span>
            <h3 className="font-heading text-base font-semibold text-ink">{step.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
