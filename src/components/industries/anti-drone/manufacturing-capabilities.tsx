import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneManufacturingCapabilities({ locale }: { locale: Locale }) {
  const t = antiDronePage.manufacturingCapabilities;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} />
      <div className="mx-auto mt-10 max-w-3xl">
        <ul className="flex flex-wrap justify-center gap-2">
          {t.items[locale].map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-fog px-3 py-1.5 text-xs font-medium text-steel"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-steel">{t.closing[locale]}</p>
      </div>
    </Section>
  );
}
