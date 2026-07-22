export type Locale = "en" | "uk";

export type Localized<T> = Record<Locale, T>;

export interface Spec {
  label: Localized<string>;
  value: Localized<string>;
}

export interface ServiceContent {
  key: string;
  slug: Localized<string>;
  name: Localized<string>;
  shortDescription: Localized<string>;
  intro: Localized<string>;
  specs: Spec[];
  materialKeys: string[];
  industryKeys: string[];
}

export interface MaterialContent {
  key: string;
  slug: Localized<string>;
  name: Localized<string>;
  shortDescription: Localized<string>;
  intro: Localized<string>;
  properties: Spec[];
  serviceKeys: string[];
}

export interface IndustryContent {
  key: string;
  slug: Localized<string>;
  tag: Localized<string>;
  name: Localized<string>;
  shortDescription: Localized<string>;
  intro: Localized<string>;
  useCases: Localized<string[]>;
  customers: Localized<string>;
  serviceKeys: string[];
  /** Illustrative stock photo — see TODO_VERIFY.md for licensing notes. */
  image?: { src: string; alt: Localized<string> };
  /** Path under /public to a direction-specific commercial proposal PDF, if one exists. */
  proposalPdf?: string;
}

export interface LocationContent {
  key: string;
  slug: Localized<string>;
  countryOrCity: Localized<string>;
  /**
   * Full page title, written out per locale rather than assembled by
   * concatenating countryOrCity into a template string — Ukrainian requires
   * the genitive case after "для" (e.g. "для Польщі", not "для Польща"),
   * which string interpolation can't produce correctly.
   */
  pageTitle: Localized<string>;
  shortDescription: Localized<string>;
  intro: Localized<string>;
  facts: Spec[];
}

export interface ServiceMaterialCombo {
  serviceKey: string;
  materialKey: string;
  intro: Localized<string>;
  specs: Spec[];
}
