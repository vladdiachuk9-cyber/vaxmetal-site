import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { industries } from "@/content";
import type { Locale } from "@/content";

export function TracksSection() {
  const t = useTranslations("tracks");
  const locale = useLocale() as Locale;

  return (
    <Section id="industries" tone="fog">
      <SectionHeading eyebrow="Industries" title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {industries.map((industry) => (
          <Link
            key={industry.key}
            href={`/industries/${industry.slug[locale]}`}
            className="group overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-blue"
          >
            {industry.image && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={industry.image.src}
                  alt={industry.image.alt[locale]}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-7">
              <span className="inline-block rounded-full bg-blue-tint px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-dark">
                {industry.tag[locale]}
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-ink">{industry.name[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{industry.shortDescription[locale]}</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-steel">
                {industry.customers[locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
