import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { LinkCardGrid } from "@/components/content/link-card-grid";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { KpDownloadCard } from "@/components/conversion/kp-download-card";
import { industries, getIndustryBySlug, getServicesForIndustry } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale; industry: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return industries.map((i) => ({ industry: i.slug[locale] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, industry: industrySlug } = await params;
  const industry = getIndustryBySlug(locale, industrySlug);
  if (!industry) return {};
  return {
    title: industry.name[locale],
    description: industry.shortDescription[locale],
    alternates: {
      canonical: `/${locale}/industries/${industry.slug[locale]}`,
      languages: localeAlternates({
        en: `/en/industries/${industry.slug.en}`,
        uk: `/uk/industries/${industry.slug.uk}`,
      }),
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { locale, industry: industrySlug } = await params;
  setRequestLocale(locale);
  const industry = getIndustryBySlug(locale, industrySlug);
  if (!industry) notFound();

  const relatedServices = getServicesForIndustry(industry.key);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Напрямки" : "Industries", href: "/industries" },
          { name: industry.name[locale], href: `/industries/${industry.slug[locale]}` },
        ]}
      />
      <ContentHero
        eyebrow={industry.tag[locale]}
        title={industry.name[locale]}
        description={industry.intro[locale]}
      />
      {industry.image && (
        <div className="border-b border-border bg-background">
          <div className="relative mx-auto aspect-[21/9] max-w-7xl overflow-hidden sm:rounded-b-xl">
            <Image
              src={industry.image.src}
              alt={industry.image.alt[locale]}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-xl font-semibold text-ink">
              {locale === "uk" ? "Що ми виробляємо" : "What we build"}
            </h2>
            <ul className="mt-4 space-y-3">
              {industry.useCases[locale].map((useCase) => (
                <li key={useCase} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
                  <span className="text-steel">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-fog p-6">
            <h2 className="font-heading text-base font-semibold text-ink">
              {locale === "uk" ? "Клієнти" : "Customers"}
            </h2>
            <p className="mt-2 text-sm text-steel">{industry.customers[locale]}</p>
          </div>
        </div>

        {relatedServices.length > 0 && (
          <LinkCardGrid
            title={locale === "uk" ? "Задіяні послуги" : "Services involved"}
            items={relatedServices.map((s) => ({
              name: s.name[locale],
              description: s.shortDescription[locale],
              href: `/services/${s.slug[locale]}`,
            }))}
          />
        )}

        {industry.proposalPdf && (
          <div className="mt-10">
            <KpDownloadCard
              href={industry.proposalPdf}
              title={
                locale === "uk"
                  ? `Комерційна пропозиція — ${industry.name[locale]}`
                  : `Commercial Proposal — ${industry.name[locale]} (PDF, UK)`
              }
              subtitle={
                locale === "uk"
                  ? "Опис процесів, можливостей та як замовити розрахунок за цим напрямком."
                  : "Process breakdown, capabilities and how to request a quote for this track."
              }
              cta={locale === "uk" ? "Завантажити КП" : "Download proposal"}
            />
          </div>
        )}

        <ContentPageCta />
      </div>
    </>
  );
}
