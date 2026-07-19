import type { Locale } from "./types";
import { services } from "./services";
import { materials } from "./materials";
import { industries } from "./industries";
import { locationsEu } from "./locations-eu";
import { locationsUa } from "./locations-ua";
import { getCombo, getCombosForService, serviceMaterialCombos } from "./service-material-combos";

export { services, materials, industries, locationsEu, locationsUa, serviceMaterialCombos, getCombo, getCombosForService };
export * from "./types";

export function getServiceBySlug(locale: Locale, slug: string) {
  return services.find((s) => s.slug[locale] === slug);
}

export function getMaterialBySlug(locale: Locale, slug: string) {
  return materials.find((m) => m.slug[locale] === slug);
}

export function getIndustryBySlug(locale: Locale, slug: string) {
  return industries.find((i) => i.slug[locale] === slug);
}

export function getLocationEuBySlug(locale: Locale, slug: string) {
  return locationsEu.find((l) => l.slug[locale] === slug);
}

export function getLocationUaBySlug(locale: Locale, slug: string) {
  return locationsUa.find((l) => l.slug[locale] === slug);
}

export function getMaterialsForService(serviceKey: string) {
  const service = services.find((s) => s.key === serviceKey);
  if (!service) return [];
  return materials.filter((m) => service.materialKeys.includes(m.key));
}

export function getServicesForMaterial(materialKey: string) {
  return services.filter((s) => s.materialKeys.includes(materialKey));
}

export function getServicesForIndustry(industryKey: string) {
  const industry = industries.find((i) => i.key === industryKey);
  if (!industry) return [];
  return services.filter((s) => industry.serviceKeys.includes(s.key));
}

export function getIndustriesForService(serviceKey: string) {
  const service = services.find((s) => s.key === serviceKey);
  if (!service) return [];
  return industries.filter((i) => service.industryKeys.includes(i.key));
}

/**
 * Services that have real, allowlisted material combo pages (excludes
 * umbrella/process services like contract-manufacturing-oem and assembly-qc
 * — see service-material-combos.ts for why).
 */
export function getCombinableMaterialsForService(serviceKey: string) {
  return getCombosForService(serviceKey)
    .map((combo) => materials.find((m) => m.key === combo.materialKey))
    .filter((m): m is NonNullable<typeof m> => Boolean(m));
}
