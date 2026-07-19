import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { materials } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Матеріали" : "Materials";
  const description =
    locale === "uk"
      ? "Сталь, нержавіюча сталь та алюміній — обробка повного циклу для кожного матеріалу."
      : "Steel, stainless steel and aluminum — full-cycle processing for each material.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/materials`,
      languages: localeAlternates({ en: "/en/materials", uk: "/uk/materials" }),
    },
  };
}

export default async function MaterialsHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Матеріали" : "Materials", href: "/materials" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Матеріали" : "Materials"}
        title={locale === "uk" ? "Матеріали, з якими ми працюємо" : "Materials we work with"}
        description={
          locale === "uk"
            ? "Сталь, нержавіюча сталь та алюміній — кожен матеріал з власним місцем у виробничому циклі."
            : "Steel, stainless steel and aluminum — each with its own place in the process chain."
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <LinkCardGrid
          items={materials.map((m) => ({
            name: m.name[locale],
            description: m.shortDescription[locale],
            href: `/materials/${m.slug[locale]}`,
          }))}
        />
        <ContentPageCta />
      </div>
    </>
  );
}
