import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastConfiguration({ locale }: { locale: Locale }) {
  const t = mastPage.configuration;

  return (
    <Section>
      <SectionHeading title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-fog">
            <Image
              src="/images/industries/telescopic-masts/detail-clamps.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-4"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-fog">
            <Image
              src="/images/industries/telescopic-masts/detail-base.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-4"
            />
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {t.options.map((option) => (
            <li key={option.en} className="rounded-lg border border-border bg-white p-4 text-sm font-medium text-ink">
              {option[locale]}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
