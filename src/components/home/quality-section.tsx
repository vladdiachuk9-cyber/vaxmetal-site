import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";

export function QualitySection() {
  const t = useTranslations("quality");
  const items = t.raw("items") as { name: string; description: string }[];

  return (
    <Section>
      <SectionHeading eyebrow="Quality" title={t("title")} />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div key={item.name} className="border-t-2 border-blue pt-4">
            <span className="font-heading text-xs font-semibold text-steel">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 font-heading text-base font-semibold text-ink">{item.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
