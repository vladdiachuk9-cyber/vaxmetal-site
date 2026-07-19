import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { SpecTable } from "@/components/content/spec-table";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { locationsEu, getLocationEuBySlug } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale; country: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return locationsEu.map((l) => ({ country: l.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, country: countrySlug } = await params;
  const location = getLocationEuBySlug(locale, countrySlug);
  if (!location) return {};
  return {
    title: location.pageTitle[locale],
    description: location.shortDescription[locale],
    alternates: {
      canonical: `/${locale}/locations/${location.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/locations/${location.slug.en}`,
        uk: `/uk/locations/${location.slug.uk}`,
      }),
    },
  };
}

export default async function LocationEuPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  setRequestLocale(locale);
  const location = getLocationEuBySlug(locale, countrySlug);
  if (!location) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Ринки ЄС" : "EU Markets", href: "/locations" },
          { name: location.countryOrCity[locale], href: `/locations/${location.slug[locale]}` },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Ринок" : "Market"}
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
