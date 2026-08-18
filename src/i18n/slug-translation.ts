import { services, materials, industries, locationsEu, locationsUa } from "@/content";
import type { Locale } from "@/content/types";
import { ARTICLE_SLUGS } from "@/content/blog/article-slug-map";

/**
 * Route leaf slugs are localized per entity (see slug: Localized<string> on
 * every content type) but top-level segments aren't (see TODO_VERIFY.md).
 * next-intl's usePathname()/router only swap the locale prefix, so without
 * this the locale switcher would carry a uk-language slug over to /en/...
 * (or vice versa) and hit notFound() on every detail page. Translates the
 * leaf slug(s) for the routes that have one; anything else (home, hub
 * pages, /privacy, /factory-tour) passes through unchanged since those
 * segments are identical in both locales.
 */
export function translatePathname(pathname: string, from: Locale, to: Locale): string {
  if (from === to) return pathname;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return pathname;

  const [root, ...rest] = segments;

  switch (root) {
    case "industries": {
      if (rest.length !== 1) return pathname;
      const item = industries.find((i) => i.slug[from] === rest[0]);
      return item ? `/industries/${item.slug[to]}` : pathname;
    }
    case "materials": {
      if (rest.length !== 1) return pathname;
      const item = materials.find((m) => m.slug[from] === rest[0]);
      return item ? `/materials/${item.slug[to]}` : pathname;
    }
    case "services": {
      if (rest.length === 1) {
        const item = services.find((s) => s.slug[from] === rest[0]);
        return item ? `/services/${item.slug[to]}` : pathname;
      }
      if (rest.length === 2) {
        const service = services.find((s) => s.slug[from] === rest[0]);
        const material = materials.find((m) => m.slug[from] === rest[1]);
        return service && material
          ? `/services/${service.slug[to]}/${material.slug[to]}`
          : pathname;
      }
      return pathname;
    }
    case "locations": {
      if (rest.length !== 1) return pathname;
      const item = locationsEu.find((l) => l.slug[from] === rest[0]);
      return item ? `/locations/${item.slug[to]}` : pathname;
    }
    case "locations-ua": {
      if (rest.length !== 1) return pathname;
      const item = locationsUa.find((l) => l.slug[from] === rest[0]);
      return item ? `/locations-ua/${item.slug[to]}` : pathname;
    }
    case "blog": {
      if (rest.length !== 1) return pathname;
      const item = ARTICLE_SLUGS.find((a) => a.slug[from] === rest[0]);
      return item ? `/blog/${item.slug[to]}` : pathname;
    }
    default:
      return pathname;
  }
}
