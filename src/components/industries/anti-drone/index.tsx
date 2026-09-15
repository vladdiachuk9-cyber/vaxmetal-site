import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { getServicesForIndustry } from "@/content";
import type { IndustryContent, Locale } from "@/content/types";
import { AntiDroneHero } from "./hero";
import { AntiDroneProducts } from "./products";
import { AntiDroneCustomEngineering } from "./custom-engineering";
import { AntiDroneVehicleProtection } from "./vehicle-protection";
import { AntiDroneFixedAssets } from "./fixed-assets";
import { AntiDroneOemIntegrators } from "./oem-integrators";
import { AntiDroneManufacturingCapabilities } from "./manufacturing-capabilities";
import { AntiDroneProcess } from "./process";
import { AntiDroneApplications } from "./applications";
import { AntiDroneRfqSection } from "./antidrone-rfq-section";
import { AntiDroneFaq } from "./faq";
import { AntiDroneFinalCta } from "./final-cta";

export function AntiDroneProtectionPage({
  locale,
  industry,
}: {
  locale: Locale;
  industry: IndustryContent;
}) {
  const relatedServices = getServicesForIndustry(industry.key);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Напрямки" : "Industries", href: "/industries" },
          { name: industry.name[locale], href: `/industries/${industry.slug[locale]}` },
        ]}
      />
      <AntiDroneHero locale={locale} />
      <AntiDroneProducts locale={locale} />
      <AntiDroneCustomEngineering locale={locale} />
      <AntiDroneVehicleProtection locale={locale} />
      <AntiDroneFixedAssets locale={locale} />
      <AntiDroneOemIntegrators locale={locale} />
      <AntiDroneManufacturingCapabilities locale={locale} />
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
      <AntiDroneProcess locale={locale} />
      <AntiDroneApplications locale={locale} />
      <AntiDroneRfqSection locale={locale} />
      <AntiDroneFaq locale={locale} />
      <AntiDroneFinalCta locale={locale} />
    </>
  );
}
