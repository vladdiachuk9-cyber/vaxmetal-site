import { Truck, Factory, Tent, Cog } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage, type AntiDroneApplication } from "@/content/anti-drone-page";

const ICONS: Record<AntiDroneApplication["icon"], typeof Truck> = {
  industrial: Factory,
  vehicles: Truck,
  temporary: Tent,
  oem: Cog,
};

export function AntiDroneApplications({ locale }: { locale: Locale }) {
  const t = antiDronePage.applications;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.title.en} className="rounded-xl border border-border bg-white p-6">
              <Icon className="size-8 text-pine" aria-hidden />
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{item.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{item.text[locale]}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
