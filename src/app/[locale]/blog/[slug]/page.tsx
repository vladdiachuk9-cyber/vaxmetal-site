import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentPageCta } from "@/components/content/content-page-cta";
import { mdxComponents } from "@/components/content/mdx-components";
import { getAllArticles, getArticleBySlug, getArticleAlternateSlug } from "@/content/blog/loader";
import { getClusterByKey } from "@/content/blog/taxonomy";
import type { Locale } from "@/content";
import { articleJsonLd } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return getAllArticles(locale).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(locale, slug);
  if (!article) return {};

  const languages = Object.fromEntries(
    routing.locales
      .map((l) => {
        const altSlug = l === locale ? slug : getArticleAlternateSlug(article.key, l);
        return altSlug ? [l, `/${l}/blog/${altSlug}`] : null;
      })
      .filter((entry): entry is [string, string] => entry !== null)
  );

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/${locale}/blog/${article.slug}`,
      languages,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(locale, slug);
  if (!article) notFound();

  const cluster = getClusterByKey(article.cluster);

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: article.title,
              description: article.description,
              url: `/${locale}/blog/${article.slug}`,
              datePublished: article.publishedDate,
              dateModified: article.updatedDate,
            })
          ),
        }}
      />
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: locale === "uk" ? "Блог" : "Blog", href: "/blog" },
          { name: article.title, href: `/blog/${article.slug}` },
        ]}
      />
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
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
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-steel">{article.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article>
          <MDXRemote
            source={article.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
        <ContentPageCta />
      </div>
    </>
  );
}
