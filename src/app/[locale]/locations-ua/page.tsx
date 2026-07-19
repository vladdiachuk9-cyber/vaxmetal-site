import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { locationsUa } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Виробництво в Україні" : "Manufacturing in Ukraine";
  const description =
    locale === "uk"
      ? "Контрактне виробництво повного циклу для клієнтів в Україні."
      : "Full-cycle contract manufacturing for clients based in Ukraine.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/locations-ua`,
      languages: localeAlternates({ en: "/en/locations-ua", uk: "/uk/locations-ua" }),
    },
  };
}

export default async function LocationsUaHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Україна" : "Ukraine", href: "/locations-ua" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Україна" : "Ukraine"}
        title={locale === "uk" ? "Виробництво в Україні" : "Manufacturing in Ukraine"}
        description={
          locale === "uk"
            ? "Та сама компетенція повного циклу, яку ми експортуємо в ЄС, доступна локально українським клієнтам."
            : "The same full-cycle capability we export to the EU, available locally to Ukrainian clients."
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LinkCardGrid
          items={locationsUa.map((l) => ({
            name: l.countryOrCity[locale],
            description: l.shortDescription[locale],
            href: `/locations-ua/${l.slug[locale]}`,
          }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
