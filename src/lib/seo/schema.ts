import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/content/types";
import { siteConfig } from "@/lib/site-config";

/**
 * Use on thin/duplicate-risk routes that must stay crawlable-but-unlisted:
 * sort/filter variants, pagination beyond page 1, or a programmatic page
 * that failed the content substance gate. Keeps them out of the index
 * without blocking crawl (robots.txt disallow would hide them entirely,
 * which is the wrong tool for "exists but not worth ranking").
 */
export function noindexRobots(): Metadata["robots"] {
  return { index: false, follow: true };
}

/**
 * hreflang alternates for Metadata.alternates.languages. Pass the path
 * (no domain — metadataBase resolves it) this page lives at in EACH
 * locale, since slugs are localized (see content/*.ts) and not just a
 * find-replace of the current path.
 */
export function localeAlternates(pathByLocale: Record<Locale, string>) {
  return Object.fromEntries(
    routing.locales.map((l) => [l, pathByLocale[l]])
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
    },
    ...(siteConfig.contact.salesEmail
      ? { email: siteConfig.contact.salesEmail }
      : {}),
    ...(siteConfig.contact.phone
      ? { telephone: siteConfig.contact.phone }
      : {}),
    sameAs: [
      siteConfig.contact.linkedin,
      siteConfig.contact.telegram,
    ].filter(Boolean),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}${input.url}`,
    areaServed: input.areaServed ?? ["Europe", "Ukraine"],
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${siteConfig.url}${input.url}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
