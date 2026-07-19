import { useLocale, useTranslations } from "next-intl";
import { Section, SectionHeading } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { services } from "@/content";
import type { Locale } from "@/content";

export function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale() as Locale;

  return (
    <Section id="services">
      <SectionHeading eyebrow="Services" title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Link
            key={service.key}
            href={`/services/${service.slug[locale]}`}
            className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="font-heading text-lg font-semibold text-ink">{service.name[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-steel">{service.shortDescription[locale]}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
