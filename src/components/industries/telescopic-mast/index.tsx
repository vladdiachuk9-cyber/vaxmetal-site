import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";
import { productJsonLd } from "@/lib/seo/schema";
import { getServicesForIndustry } from "@/content";
import type { IndustryContent, Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";
import { MastHero } from "./hero";
import { MastValueGrid } from "./value-grid";
import { MastApplications } from "./applications";
import { MastFieldKit } from "./field-kit";
import { MastConfiguration } from "./configuration";
import { MastRotator } from "./rotator";
import { MastProof } from "./proof";
import { MastSpecSection } from "./spec-section";
import { MastDownloads } from "./downloads";
import { MastRfqSection } from "./mast-rfq-section";
import { MastFaq } from "./faq";
import { MastFinalCta } from "./final-cta";

export function TelescopicMastPage({
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
            productJsonLd({
              name: industry.name[locale],
              description: industry.shortDescription[locale],
              url: `/${locale}/industries/${industry.slug[locale]}`,
              material: locale === "uk" ? "Високоміцний алюміній" : "High-strength aluminium",
              additionalProperty: mastPage.specs.map((spec) => ({
                name: spec.label[locale],
                value: spec.value[locale],
              })),
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
      <MastHero locale={locale} />
      <MastValueGrid locale={locale} />
      <MastApplications locale={locale} />
      <MastFieldKit locale={locale} />
      <MastConfiguration locale={locale} />
      <MastRotator locale={locale} />
      <MastProof locale={locale} />
      <MastSpecSection locale={locale} />
      <MastDownloads locale={locale} />
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
      <MastRfqSection locale={locale} />
      <MastFaq locale={locale} />
      <MastFinalCta locale={locale} />
    </>
  );
}
