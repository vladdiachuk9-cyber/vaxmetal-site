import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { Link } from "@/i18n/navigation";
import { getAllArticles } from "@/content/blog/loader";
import { getClusterByKey } from "@/content/blog/taxonomy";
import type { Locale } from "@/content";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "uk" ? "Блог та база знань" : "Blog & Knowledge Base";
  const description =
    locale === "uk"
      ? "Практичні гіди з контрактного виробництва: матеріали, допуски, процеси та вартість."
      : "Practical guides to contract manufacturing: materials, tolerances, processes and cost.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: localeAlternates({ en: "/en/blog", uk: "/uk/blog" }),
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const articles = getAllArticles(locale);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Блог" : "Blog", href: "/blog" },
        ]}
      />
      <ContentHero
        eyebrow={locale === "uk" ? "Блог" : "Blog"}
        title={locale === "uk" ? "Блог та база знань" : "Blog & Knowledge Base"}
        description={
          locale === "uk"
            ? "Практичні гіди з контрактного виробництва: матеріали, допуски, процеси, вартість і те, що змінюється на ринку ЄС."
            : "Practical guides to contract manufacturing: materials, tolerances, processes, cost, and what's shifting in the EU market."
        }
      />
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="divide-y divide-border rounded-xl border border-border bg-white">
          {articles.map((article) => {
            const cluster = getClusterByKey(article.cluster);
            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block p-6 transition-colors hover:bg-fog"
              >
                <div className="flex items-center gap-3 text-xs font-semibold font-mono uppercase tracking-wide text-pine">
                  {cluster && <span>{cluster.name[locale]}</span>}
                  <span className="text-steel-light">
                    {new Date(article.publishedDate).toLocaleDateString(
                      locale === "uk" ? "uk-UA" : "en-GB",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                  <span className="text-steel-light">
                    {article.readingMinutes} {locale === "uk" ? "хв читання" : "min read"}
                  </span>
                </div>
                <h2 className="mt-2 font-heading text-xl font-semibold text-ink">{article.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">{article.description}</p>
              </Link>
            );
          })}
        </div>
        <ContentPageCta />
      </div>
    </>
  );
}
