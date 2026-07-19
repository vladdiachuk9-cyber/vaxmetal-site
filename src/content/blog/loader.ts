import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Locale } from "../types";

const ARTICLES_DIR = path.join(process.cwd(), "src/content/blog/articles");

export interface ArticleFrontmatter {
  key: string;
  slug: string;
  title: string;
  description: string;
  cluster: string;
  targetKeyword: string;
  publishedDate: string;
  updatedDate?: string;
}

export interface ArticleSummary extends ArticleFrontmatter {
  locale: Locale;
  readingMinutes: number;
}

export interface ArticleWithBody extends ArticleSummary {
  body: string;
}

function articlesDirFor(locale: Locale) {
  return path.join(ARTICLES_DIR, locale);
}

function readArticleFile(locale: Locale, filename: string): ArticleWithBody {
  const raw = fs.readFileSync(path.join(articlesDirFor(locale), filename), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ArticleFrontmatter;
  return {
    ...frontmatter,
    locale,
    body: content,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
  };
}

export function getAllArticles(locale: Locale): ArticleSummary[] {
  const dir = articlesDirFor(locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const article = readArticleFile(locale, filename);
      const summary: ArticleSummary = {
        key: article.key,
        slug: article.slug,
        title: article.title,
        description: article.description,
        cluster: article.cluster,
        targetKeyword: article.targetKeyword,
        publishedDate: article.publishedDate,
        updatedDate: article.updatedDate,
        locale: article.locale,
        readingMinutes: article.readingMinutes,
      };
      return summary;
    })
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}

export function getArticleBySlug(locale: Locale, slug: string): ArticleWithBody | undefined {
  const dir = articlesDirFor(locale);
  if (!fs.existsSync(dir)) return undefined;

  const filename = fs
    .readdirSync(dir)
    .find((f) => f.endsWith(".mdx") && readArticleFile(locale, f).slug === slug);

  return filename ? readArticleFile(locale, filename) : undefined;
}

/** Finds the equivalent article in another locale via the shared `key` field, for hreflang alternates. */
export function getArticleAlternateSlug(key: string, locale: Locale): string | undefined {
  return getAllArticles(locale).find((a) => a.key === key)?.slug;
}

export function getArticlesByCluster(locale: Locale, clusterKey: string): ArticleSummary[] {
  return getAllArticles(locale).filter((a) => a.cluster === clusterKey);
}
