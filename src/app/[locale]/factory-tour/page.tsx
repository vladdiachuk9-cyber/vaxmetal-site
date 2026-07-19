import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { StationMap } from "@/components/factory-tour/station-map";
import { factoryStations } from "@/content/factory-stations";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Тур цехом" : "Factory Tour";
  const description =
    locale === "uk"
      ? "Клікабельна карта нашого цеху: від лазерного різання до експортного пакування."
      : "A clickable map of our shop floor, from laser cutting to export packaging.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/factory-tour`,
      languages: localeAlternates({ en: "/en/factory-tour", uk: "/uk/factory-tour" }),
    },
  };
}

export default async function FactoryTourPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Тур цехом" : "Factory Tour", href: "/factory-tour" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Тур цехом" : "Factory Tour"}
        title={locale === "uk" ? "Тур нашим цехом" : "Take a tour of our shop floor"}
        description={
          locale === "uk"
            ? "Клікніть на будь-яку станцію, щоб побачити, що там відбувається — від лазерного різання до експортного пакування, у порядку виробничого процесу."
            : "Click any station to see what happens there — from laser cutting to export packaging, in the order parts actually move through the shop."
        }
      />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <StationMap stations={factoryStations} />
        <ContentPageCta />
      </div>
    </>
  );
}
