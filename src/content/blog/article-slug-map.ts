import type { Localized } from "../types";

/**
 * Client-safe key -> per-locale slug map for blog articles, kept separate
 * from loader.ts because that file reads the filesystem (server/build-time
 * only) and can't be imported from client components like LocaleSwitcher.
 * Keep in sync with the `key`/`slug` frontmatter in
 * content/blog/articles/{en,uk}/*.mdx.
 */
export const ARTICLE_SLUGS: { key: string; slug: Localized<string> }[] = [
  {
    key: "buyers-guide-overflow-partner",
    slug: {
      en: "buyers-guide-overflow-manufacturing-partner",
      uk: "hid-pokuptsya-partner-nadlyshkovogo-vyrobnytstva",
    },
  },
  {
    key: "cnc-machining-cost",
    slug: { en: "how-much-does-cnc-machining-cost", uk: "skilky-koshtuye-chpu-obrobka" },
  },
  {
    key: "cnc-turning-vs-milling",
    slug: { en: "cnc-turning-vs-milling", uk: "tokarna-chy-frezerna-obrobka-chpu" },
  },
  {
    key: "dcfta-explained",
    slug: { en: "dcfta-explained-duty-free-access", uk: "dcfta-poyasneno-bezmytnyi-dostup-do-yes" },
  },
  {
    key: "dfm-sheet-metal-basics",
    slug: {
      en: "design-for-manufacturability-sheet-metal-basics",
      uk: "proyektuvannya-dlya-vyrobnytstva-osnovy-lystovogo-metalu",
    },
  },
  {
    key: "eu-nearshoring-ukraine",
    slug: {
      en: "why-eu-manufacturers-are-nearshoring-to-ukraine",
      uk: "chomu-vyrobnyky-yes-perenosyat-vyrobnytstvo-v-ukrainu",
    },
  },
  {
    key: "powder-coating-vs-galvanizing",
    slug: { en: "powder-coating-vs-galvanizing", uk: "poroshkove-farbuvannya-chy-otsynkuvannya" },
  },
  {
    key: "tig-mig-laser-welding",
    slug: { en: "tig-vs-mig-vs-laser-welding", uk: "tig-proty-mig-proty-lazernogo-zvaryuvannya" },
  },
];
