import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import type { Locale, ServiceContent } from "@/content/types";
import { CustomFabHero } from "./hero";
import { CustomFabIntro } from "./intro";
import { CustomFabStartWith } from "./start-with";
import { CustomFabExamples } from "./examples";
import { CustomFabProcessCapabilities } from "./process-capabilities";
import { CustomFabMaterials } from "./materials";
import { CustomFabWorkflow } from "./workflow";
import { CustomFabPrototype } from "./prototype";
import { CustomFabAudience } from "./audience";
import { CustomFabGeo } from "./geo";
import { CustomFabWhyUs } from "./why-us";
import { CustomFabSeoContent } from "./seo-content";
import { CustomFabFaq } from "./faq";
import { CustomFabFormSection } from "./form-section";
import { PageViewBeacon } from "./page-view-beacon";
import { AntiDroneCtaLine } from "@/components/content/anti-drone-cta-line";

export function CustomFabricationPage({
  locale,
  service,
}: {
  locale: Locale;
  service: ServiceContent;
}) {
  return (
    <>
      <PageViewBeacon event="custom_project_view" />
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Послуги" : "Services", href: "/services" },
          { name: service.name[locale], href: `/services/${service.slug[locale]}` },
        ]}
      />
      <CustomFabHero locale={locale} />
      <CustomFabIntro locale={locale} />
      <CustomFabStartWith locale={locale} />
      <CustomFabExamples locale={locale} />
      <CustomFabProcessCapabilities locale={locale} />
      <CustomFabMaterials locale={locale} />
      <CustomFabWorkflow locale={locale} />
      <CustomFabPrototype locale={locale} />
      <CustomFabAudience locale={locale} />
      <CustomFabGeo locale={locale} />
      <CustomFabWhyUs locale={locale} />
      <CustomFabSeoContent locale={locale} />
      <CustomFabFaq locale={locale} />
      <AntiDroneCtaLine />
      <CustomFabFormSection locale={locale} />
    </>
  );
}
