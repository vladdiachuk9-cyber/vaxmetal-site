import { NextRequest, NextResponse } from "next/server";
import { getAllArticles } from "@/content/blog/loader";
import { siteConfig } from "@/lib/site-config";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/content";

export const runtime = "nodejs";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale: rawLocale } = await params;
  if (!routing.locales.includes(rawLocale as Locale)) {
    return new NextResponse("Not found", { status: 404 });
  }
  const locale = rawLocale as Locale;

  const articles = getAllArticles(locale);
  const siteUrl = `${siteConfig.url}/${locale}`;

  const items = articles
    .map(
      (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${siteUrl}/blog/${a.slug}</link>
      <guid>${siteUrl}/blog/${a.slug}</guid>
      <description>${escapeXml(a.description)}</description>
      <pubDate>${new Date(a.publishedDate).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)} Blog</title>
    <link>${siteUrl}/blog</link>
    <description>${escapeXml(siteConfig.tagline)}</description>
    <language>${locale}</language>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
