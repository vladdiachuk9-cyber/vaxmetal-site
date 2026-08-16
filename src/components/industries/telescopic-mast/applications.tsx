import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage, type MastApplication } from "@/content/telescopic-mast-page";
import { UavGroundIcon, PublicSafetyIcon, MonitoringSensorIcon } from "./icons";

const ICONS: Record<MastApplication["icon"], typeof UavGroundIcon> = {
  uav: UavGroundIcon,
  safety: PublicSafetyIcon,
  monitoring: MonitoringSensorIcon,
};

export function MastApplications({ locale }: { locale: Locale }) {
  const t = mastPage.applications;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {t.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.title.en} className="overflow-hidden rounded-xl border border-border bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <Icon className="size-8 text-pine" />
                <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{item.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{item.description[locale]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
