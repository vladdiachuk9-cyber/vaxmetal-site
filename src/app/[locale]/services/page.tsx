import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { services } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "uk"
      ? "Послуги контрактного виробництва"
      : "Contract Manufacturing Services";
  const description =
    locale === "uk"
      ? "Лазерне різання, токарна та фрезерна обробка ЧПУ, гнуття, зварювання, порошкове фарбування, складання та контроль якості — під одним дахом."
      : "Laser cutting, CNC turning and milling, bending, welding, powder coating, assembly and QC — under one roof.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: localeAlternates({ en: "/en/services", uk: "/uk/services" }),
    },
  };
}

export default async function ServicesHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nav" });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: t("services"), href: "/services" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Послуги" : "Services"}
        title={locale === "uk" ? "Один цех — весь процес" : "One shop, the whole process"}
        description={
          locale === "uk"
            ? "Різання, формування, зварювання, обробка та складання під одним дахом — без передачі між підрядниками."
            : "Cutting, forming, welding, finishing and assembly under one roof — no hand-offs between subcontractors."
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LinkCardGrid
          items={services.map((s) => ({
            name: s.name[locale],
            description: s.shortDescription[locale],
            href: `/services/${s.slug[locale]}`,
          }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
