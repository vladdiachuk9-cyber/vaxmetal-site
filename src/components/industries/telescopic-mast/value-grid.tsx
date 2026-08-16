import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage, type MastValueItem } from "@/content/telescopic-mast-page";
import { FieldPlatformIcon, RfDataLinkIcon, DeployableCommsIcon, OemAdaptationIcon } from "./icons";

const ICONS: Record<MastValueItem["icon"], typeof FieldPlatformIcon> = {
  field: FieldPlatformIcon,
  rf: RfDataLinkIcon,
  deployable: DeployableCommsIcon,
  oem: OemAdaptationIcon,
};

export function MastValueGrid({ locale }: { locale: Locale }) {
  const t = mastPage.value;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.text.en} className="flex flex-col items-start gap-3">
              <Icon className="size-10 text-navy" />
              <p className="text-sm leading-relaxed text-steel">{item.text[locale]}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
