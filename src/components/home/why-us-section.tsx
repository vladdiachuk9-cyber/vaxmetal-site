import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

export function WhyUsSection() {
  const t = useTranslations("whyUs");
  const items = t.raw("items") as { name: string; description: string }[];

  return (
    <Section id="why-us" tone="fog">
      <SectionHeading eyebrow="Why us" title={t("title")} />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.name} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
            <div>
              <h3 className="font-heading text-base font-semibold text-ink">{item.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-steel">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
