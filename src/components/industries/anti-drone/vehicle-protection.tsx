import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneVehicleProtection({ locale }: { locale: Locale }) {
  const t = antiDronePage.vehicleProtection;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} />
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-border">
          <Image
            src="/images/industries/anti-drone-protection/vehicle-protection.png"
            alt={
              locale === "uk"
                ? "Металевий антидроновий каркас із захисною сіткою для пікапа"
                : "Custom anti-drone steel protection frame with netting for a pickup truck"
            }
            fill
            sizes="(min-width: 1024px) 512px, 90vw"
            className="object-cover"
          />
          <p className="absolute inset-x-0 bottom-0 bg-navy/80 px-3 py-2 text-center text-[11px] leading-snug text-steel-light">
            {antiDronePage.conceptLabel[locale]}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.factorsLabel[locale]}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {t.factors[locale].map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-border bg-white p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
                <span className="text-sm font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-steel">{t.beginText[locale]}</p>
          {t.supporting[locale] && <p className="mt-2 text-steel">{t.supporting[locale]}</p>}

          <p className="mt-6 text-sm font-semibold text-ink">{t.applicationsLabel[locale]}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {t.applications[locale].map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-fog px-3 py-1.5 text-xs font-medium text-steel"
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#antidrone-rfq"
            className="mt-6 inline-flex rounded-md bg-pine px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
          >
            {t.cta[locale]}
          </a>
        </div>
      </div>
    </Section>
  );
}
