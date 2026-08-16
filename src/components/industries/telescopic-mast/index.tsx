import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import type { IndustryContent, Locale } from "@/content/types";
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
  return (
    <>
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
      <MastRfqSection locale={locale} />
      <MastFaq locale={locale} />
      <MastFinalCta locale={locale} />
    </>
  );
}
