import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { SpecTable } from "@/components/content/spec-table";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { locationsUa, getLocationUaBySlug } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale; city: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return locationsUa.map((l) => ({ city: l.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, city: citySlug } = await params;
  const location = getLocationUaBySlug(locale, citySlug);
  if (!location) return {};
  return {
    title: location.pageTitle[locale],
    description: location.shortDescription[locale],
    alternates: {
      canonical: `/${locale}/locations-ua/${location.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/locations-ua/${location.slug.en}`,
        uk: `/uk/locations-ua/${location.slug.uk}`,
      }),
    },
  };
}

export default async function LocationUaPage({ params }: Props) {
  const { locale, city: citySlug } = await params;
  setRequestLocale(locale);
  const location = getLocationUaBySlug(locale, citySlug);
  if (!location) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Україна" : "Ukraine", href: "/locations-ua" },
          { name: location.countryOrCity[locale], href: `/locations-ua/${location.slug[locale]}` },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Місто" : "City"}
        title={location.pageTitle[locale]}
        description={location.intro[locale]}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SpecTable
          specs={location.facts.map((f) => ({ label: f.label[locale], value: f.value[locale] }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
