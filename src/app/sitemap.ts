import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { routing } from "@/i18n/routing";
import {
  services,
  materials,
  industries,
  locationsEu,
  locationsUa,
  getCombosForService,
  type Locale,
} from "@/content";
import { getAllArticles } from "@/content/blog/loader";

function entry(
  pathByLocale: Record<Locale, string>,
  priority: number
): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${siteConfig.url}/${locale}${pathByLocale[locale]}`])
  );

  return {
    url: `${siteConfig.url}/${routing.defaultLocale}${pathByLocale[routing.defaultLocale]}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
    alternates: { languages },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage per locale
  for (const locale of routing.locales) {
    entries.push({
      url: `${siteConfig.url}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: locale === routing.defaultLocale ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.url}/${l}`])
        ),
      },
    });
  }

  // Hub pages
  entries.push(entry({ en: "/services", uk: "/services" }, 0.8));
  entries.push(entry({ en: "/materials", uk: "/materials" }, 0.7));
  entries.push(entry({ en: "/industries", uk: "/industries" }, 0.8));
  entries.push(entry({ en: "/locations", uk: "/locations" }, 0.7));
  entries.push(entry({ en: "/locations-ua", uk: "/locations-ua" }, 0.6));
  entries.push(entry({ en: "/factory-tour", uk: "/factory-tour" }, 0.5));
  entries.push(entry({ en: "/blog", uk: "/blog" }, 0.7));

  // Blog articles (matched across locales by their shared frontmatter `key`)
  const enArticles = getAllArticles("en");
  const ukArticlesByKey = new Map(getAllArticles("uk").map((a) => [a.key, a]));
  for (const article of enArticles) {
    const ukMatch = ukArticlesByKey.get(article.key);
    if (!ukMatch) continue;
    entries.push(
      entry(
        {
          en: `/blog/${article.slug}`,
          uk: `/blog/${ukMatch.slug}`,
        },
        0.5
      )
    );
  }

  // Services + service x material combos
  for (const service of services) {
    entries.push(
      entry(
        {
          en: `/services/${service.slug.en}`,
          uk: `/services/${service.slug.uk}`,
        },
        0.7
      )
    );

    for (const combo of getCombosForService(service.key)) {
      const material = materials.find((m) => m.key === combo.materialKey);
      if (!material) continue;
      entries.push(
        entry(
          {
            en: `/services/${service.slug.en}/${material.slug.en}`,
            uk: `/services/${service.slug.uk}/${material.slug.uk}`,
          },
          0.6
        )
      );
    }
  }

  // Materials
  for (const material of materials) {
    entries.push(
      entry(
        {
          en: `/materials/${material.slug.en}`,
          uk: `/materials/${material.slug.uk}`,
        },
        0.6
      )
    );
  }

  // Industries
  for (const industry of industries) {
    entries.push(
      entry(
        {
          en: `/industries/${industry.slug.en}`,
          uk: `/industries/${industry.slug.uk}`,
        },
        0.7
      )
    );
  }

  // EU locations
  for (const location of locationsEu) {
    entries.push(
      entry(
        {
          en: `/locations/${location.slug.en}`,
          uk: `/locations/${location.slug.uk}`,
        },
        0.6
      )
    );
  }

  // UA locations
  for (const location of locationsUa) {
    entries.push(
      entry(
        {
          en: `/locations-ua/${location.slug.en}`,
          uk: `/locations-ua/${location.slug.uk}`,
        },
        0.5
      )
    );
  }

  return entries;
}
