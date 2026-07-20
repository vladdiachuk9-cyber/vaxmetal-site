import { useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";

export function CapabilitiesSection() {
  const t = useTranslations("capabilities");
  const items = t.raw("items") as { name: string; detail: string }[];

  return (
    <Section tone="navy">
      <SectionHeading eyebrow="Capabilities" title={t("title")} subtitle={t("subtitle")} tone="navy" />
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.name} className="bg-navy p-6">
            <h3 className="font-heading text-base font-semibold text-white">{item.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-steel-light">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
