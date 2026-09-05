import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { SpecTable } from "@/components/content/spec-table";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { CustomProjectCtaLine } from "@/components/content/custom-project-cta-line";
import { CustomFabricationPage } from "@/components/services/custom-fabrication";
import {
  services,
  getServiceBySlug,
  getCombinableMaterialsForService,
  getIndustriesForService,
} from "@/content";
import type { Locale } from "@/content";
import { serviceJsonLd, localeAlternates } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

const CUSTOM_FAB_SEO = {
  title: {
    en: "Custom Metal Fabrication from Idea or Drawing | VAXMetal",
    uk: "Металеві вироби на замовлення за ескізом чи кресленням | VAXMetal",
  },
  description: {
    en: "Custom metal parts, structures and assemblies from a drawing, sketch, photo or idea. Engineering, laser cutting, CNC, bending, welding and EU delivery.",
    uk: "Нестандартні металеві деталі, конструкції та вузли за ідеєю, фото, ескізом або кресленням. Інженерний аналіз, різання, CNC, згинання, зварювання.",
  },
} as const;

type Props = {
  params: Promise<{ locale: Locale; service: string }>;
};

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return services.map((s) => ({ service: s.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service: serviceSlug } = await params;
  const service = getServiceBySlug(locale, serviceSlug);
  if (!service) return {};
  const isCustomFab = service.key === "custom-metal-fabrication";

  return {
    title: isCustomFab ? CUSTOM_FAB_SEO.title[locale] : service.name[locale],
    description: isCustomFab ? CUSTOM_FAB_SEO.description[locale] : service.shortDescription[locale],
    openGraph: isCustomFab
      ? {
          type: "website",
          title: CUSTOM_FAB_SEO.title[locale],
          description: CUSTOM_FAB_SEO.description[locale],
          images: ["/images/services/custom-metal-fabrication/og.webp"],
        }
      : undefined,
    twitter: isCustomFab ? { card: "summary_large_image" } : undefined,
    alternates: {
      canonical: `/${locale}/services/${service.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/services/${service.slug.en}`,
        uk: `/uk/services/${service.slug.uk}`,
      }),
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { locale, service: serviceSlug } = await params;
  setRequestLocale(locale);
  const service = getServiceBySlug(locale, serviceSlug);
  if (!service) notFound();

  if (service.key === "custom-metal-fabrication") {
    return <CustomFabricationPage locale={locale} service={service} />;
  }

  const t = await getTranslations({ locale, namespace: "nav" });
  const materials = getCombinableMaterialsForService(service.key);
  const relatedIndustries = getIndustriesForService(service.key);

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: service.name[locale],
              description: service.intro[locale],
              url: `/${locale}/services/${service.slug[locale]}`,
            })
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: t("services"), href: "/services" },
          { name: service.name[locale], href: `/services/${service.slug[locale]}` },
        ]}
      />
      <ContentHero
        eyebrow={t("services")}
        title={service.name[locale]}
        description={service.intro[locale]}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SpecTable
          specs={service.specs.map((s) => ({ label: s.label[locale], value: s.value[locale] }))}
        />

        {materials.length > 0 && (
          <LinkCardGrid
            title={locale === "uk" ? "Матеріали для цієї послуги" : "Materials for this service"}
            items={materials.map((m) => ({
              name: m.name[locale],
              description: m.shortDescription[locale],
              href: `/services/${service.slug[locale]}/${m.slug[locale]}`,
            }))}
          />
        )}

        {relatedIndustries.length > 0 && (
          <LinkCardGrid
            title={locale === "uk" ? "Де це застосовується" : "Where this applies"}
            items={relatedIndustries.map((i) => ({
              name: i.name[locale],
              description: i.shortDescription[locale],
              href: `/industries/${i.slug[locale]}`,
            }))}
          />
        )}

        <CustomProjectCtaLine />
        <ContentPageCta />
      </div>
    </>
  );
}
