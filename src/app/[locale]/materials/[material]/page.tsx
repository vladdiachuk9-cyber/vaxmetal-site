import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { SpecTable } from "@/components/content/spec-table";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { materials, getMaterialBySlug, getServicesForMaterial } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale; material: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return materials.map((m) => ({ material: m.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, material: materialSlug } = await params;
  const material = getMaterialBySlug(locale, materialSlug);
  if (!material) return {};
  return {
    title: material.name[locale],
    description: material.shortDescription[locale],
    alternates: {
      canonical: `/${locale}/materials/${material.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/materials/${material.slug.en}`,
        uk: `/uk/materials/${material.slug.uk}`,
      }),
    },
  };
}

export default async function MaterialPage({ params }: Props) {
  const { locale, material: materialSlug } = await params;
  setRequestLocale(locale);
  const material = getMaterialBySlug(locale, materialSlug);
  if (!material) notFound();

  const relatedServices = getServicesForMaterial(material.key);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Матеріали" : "Materials", href: "/materials" },
          { name: material.name[locale], href: `/materials/${material.slug[locale]}` },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Матеріал" : "Material"}
        title={material.name[locale]}
        description={material.intro[locale]}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SpecTable
          specs={material.properties.map((s) => ({ label: s.label[locale], value: s.value[locale] }))}
        />
        {relatedServices.length > 0 && (
          <LinkCardGrid
            title={locale === "uk" ? "Послуги для цього матеріалу" : "Services for this material"}
            items={relatedServices.map((s) => ({
              name: s.name[locale],
              description: s.shortDescription[locale],
              href: `/services/${s.slug[locale]}`,
            }))}
          />
        )}
        <ContentPageCta />
      </div>
    </>
  );
}
