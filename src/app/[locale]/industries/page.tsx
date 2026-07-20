import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { Link } from "@/i18n/navigation";
import { industries } from "@/content";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Напрямки" : "Industries";
  const description =
    locale === "uk"
      ? "Чотири продуктові напрямки плюс контрактні меблі як друга хвиля."
      : "Four product tracks, plus contract furniture as a second-wave line.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/industries`,
      languages: localeAlternates({ en: "/en/industries", uk: "/uk/industries" }),
    },
  };
}

export default async function IndustriesHubPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Напрямки" : "Industries", href: "/industries" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Напрямки" : "Industries"}
        title={locale === "uk" ? "Що ми виробляємо, окрім поодиноких деталей" : "What we build, beyond one-off parts"}
        description={
          locale === "uk"
            ? "Чотири продуктові напрямки на базі виробничих можливостей, які вже працюють щодня, плюс контрактні меблі як другий етап."
            : "Four product tracks built on manufacturing capability we already have in daily production, plus contract furniture as a second-wave line."
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.key}
              href={`/industries/${industry.slug[locale]}`}
              className="group overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-pine"
            >
              {industry.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={industry.image.src}
                    alt={industry.image.alt[locale]}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-7">
                <span className="inline-block rounded-full bg-pine-tint px-3 py-1 text-xs font-semibold font-mono uppercase tracking-wide text-pine-dark">
                  {industry.tag[locale]}
                </span>
                <h2 className="mt-3 font-heading text-xl font-semibold text-ink">{industry.name[locale]}</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{industry.shortDescription[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
        <ContentPageCta />
      </div>
    </>
  );
}
