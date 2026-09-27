import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { serviceJsonLd } from "@/lib/seo/schema";
import { getServicesForIndustry } from "@/content";
import type { IndustryContent, Locale } from "@/content/types";
import { HeatersHero } from "./hero";
import { HeatersKeyFacts } from "./key-facts";
import { HeatersProducts } from "./products";
import { HeatersOemPrivateLabel } from "./oem-private-label";
import { HeatersManufacturingCapabilities } from "./manufacturing-capabilities";
import { HeatersWhoThisIsFor } from "./who-this-is-for";
import { HeatersProductionExperience } from "./production-experience";
import { HeatersRfqPrep } from "./rfq-prep";
import { HeaterRfqSection } from "./heater-rfq-section";
import { HeatersFaq } from "./faq";
import { HeatersFinalCta } from "./final-cta";

export function ElectricHeatersPage({
  locale,
  industry,
}: {
  locale: Locale;
  industry: IndustryContent;
}) {
  const relatedServices = getServicesForIndustry(industry.key);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: "OEM Electric Heater & Heating Panel Manufacturing",
              description:
                "OEM and contract manufacturing of VAXTherm heating panels, VAXDry heated towel rails and VAXRay industrial or outdoor electric heaters.",
              url: `/${locale}/industries/${industry.slug[locale]}`,
            })
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Напрямки" : "Industries", href: "/industries" },
          { name: industry.name[locale], href: `/industries/${industry.slug[locale]}` },
        ]}
      />
      <HeatersHero locale={locale} />
      <HeatersKeyFacts locale={locale} />
      <HeatersProducts locale={locale} />
      <HeatersOemPrivateLabel locale={locale} />
      <HeatersManufacturingCapabilities locale={locale} />
      {relatedServices.length > 0 && (
        <Section tone="fog">
          <LinkCardGrid
            title={locale === "uk" ? "Задіяні послуги" : "Services involved"}
            items={[
              ...relatedServices.map((s) => ({
                name: s.name[locale],
                description: s.shortDescription[locale],
                href: `/services/${s.slug[locale]}`,
              })),
              {
                name: locale === "uk" ? "Контакти / заявка" : "Contact / RFQ",
                description:
                  locale === "uk"
                    ? "Зв'яжіться з нами напряму щодо вашого проєкту."
                    : "Reach out directly about your project.",
                href: "/contact",
              },
            ]}
          />
        </Section>
      )}
      <HeatersWhoThisIsFor locale={locale} />
      <HeatersProductionExperience locale={locale} />
      <HeatersRfqPrep locale={locale} />
      <HeaterRfqSection locale={locale} />
      <HeatersFaq locale={locale} />
      <HeatersFinalCta locale={locale} />
    </>
  );
}
