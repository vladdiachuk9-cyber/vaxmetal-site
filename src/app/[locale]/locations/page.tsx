import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { locationsEu } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Ринки ЄС" : "EU Markets";
  const description =
    locale === "uk"
      ? "Контрактне виробництво для Німеччини, Польщі та решти ЄС — доставка 3-7 днів, без мита за DCFTA."
      : "Contract manufacturing for Germany, Poland and the rest of the EU — 3-7 day delivery, duty-free under DCFTA.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/locations`,
      languages: localeAlternates({ en: "/en/locations", uk: "/uk/locations" }),
    },
  };
}

export default async function LocationsHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Ринки ЄС" : "EU Markets", href: "/locations" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Ринки" : "Markets"}
        title={locale === "uk" ? "Де ми доставляємо" : "Where we deliver"}
        description={
          locale === "uk"
            ? "Перша хвиля — Німеччина, Польща, Нідерланди, Швеція, Данія. Доставка 3-7 днів, без мита за угодою DCFTA."
            : "First wave: Germany, Poland, the Netherlands, Sweden, Denmark. 3-7 day delivery, duty-free under the DCFTA agreement."
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LinkCardGrid
          items={locationsEu.map((l) => ({
            name: l.countryOrCity[locale],
            description: l.shortDescription[locale],
            href: `/locations/${l.slug[locale]}`,
          }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
