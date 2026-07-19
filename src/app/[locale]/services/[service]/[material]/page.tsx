import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { SpecTable } from "@/components/content/spec-table";
import { ContentPageCta } from "@/components/content/content-page-cta";
import {
  services,
  materials,
  getServiceBySlug,
  getCombinableMaterialsForService,
  getCombo,
  getCombosForService,
} from "@/content";
import type { Locale } from "@/content";
import { serviceJsonLd, localeAlternates } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ locale: Locale; service: string; material: string }>;
};

export function generateStaticParams({ params }: { params: { locale: string } }) {
  // Bottom-up: [service]/page.tsx is a sibling leaf route, not a layout, so
  // its generateStaticParams doesn't cascade here. This must independently
  // return every {service, material} pair — see Next's "Multiple Dynamic
  // Segments in a Route" docs (generate-static-params.md).
  const locale = params.locale as Locale;
  const results: { service: string; material: string }[] = [];

  for (const service of services) {
    for (const combo of getCombosForService(service.key)) {
      const material = materials.find((m) => m.key === combo.materialKey);
      if (!material) continue;
      results.push({ service: service.slug[locale], material: material.slug[locale] });
    }
  }

  return results;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service: serviceSlug, material: materialSlug } = await params;
  const service = getServiceBySlug(locale, serviceSlug);
  const material = service
    ? getCombinableMaterialsForService(service.key).find((m) => m.slug[locale] === materialSlug)
    : undefined;
  if (!service || !material) return {};

  const title =
    locale === "uk"
      ? `${service.name.uk} — ${material.name.uk}`
      : `${service.name.en} — ${material.name.en}`;

  return {
    title,
    description: getCombo(service.key, material.key)?.intro[locale] ?? service.shortDescription[locale],
    alternates: {
      canonical: `/${locale}/services/${service.slug[locale]}/${material.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/services/${service.slug.en}/${material.slug.en}`,
        uk: `/uk/services/${service.slug.uk}/${material.slug.uk}`,
      }),
    },
  };
}

export default async function ServiceMaterialPage({ params }: Props) {
  const { locale, service: serviceSlug, material: materialSlug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(locale, serviceSlug);
  if (!service) notFound();

  const material = getCombinableMaterialsForService(service.key).find(
    (m) => m.slug[locale] === materialSlug
  );
  if (!material) notFound();

  const combo = getCombo(service.key, material.key);
  if (!combo) notFound();

  const t = await getTranslations({ locale, namespace: "nav" });
  const title = locale === "uk" ? `${service.name.uk} — ${material.name.uk}` : `${service.name.en} — ${material.name.en}`;

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd({
              name: title,
              description: combo.intro[locale],
              url: `/${locale}/services/${service.slug[locale]}/${material.slug[locale]}`,
            })
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: t("services"), href: "/services" },
          { name: service.name[locale], href: `/services/${service.slug[locale]}` },
          { name: material.name[locale], href: `/services/${service.slug[locale]}/${material.slug[locale]}` },
        ]}
      />
      <ContentHero eyebrow={service.name[locale]} title={title} description={combo.intro[locale]} />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SpecTable
          specs={combo.specs.map((s) => ({ label: s.label[locale], value: s.value[locale] }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
