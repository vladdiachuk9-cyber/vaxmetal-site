import type { Localized } from "../types";

export interface BlogCluster {
  key: string;
  name: Localized<string>;
}

export const blogClusters: BlogCluster[] = [
  { key: "manufacturing", name: { en: "Manufacturing", uk: "Виробництво" } },
  { key: "cnc", name: { en: "CNC", uk: "ЧПУ" } },
  { key: "laser", name: { en: "Laser", uk: "Лазер" } },
  { key: "welding", name: { en: "Welding", uk: "Зварювання" } },
  { key: "oem", name: { en: "OEM", uk: "OEM" } },
  { key: "engineering-dfm", name: { en: "Engineering & DFM", uk: "Інжиніринг та DFM" } },
  { key: "surface-treatment", name: { en: "Surface Treatment", uk: "Обробка поверхні" } },
  { key: "cost-optimization", name: { en: "Cost Optimization", uk: "Оптимізація витрат" } },
  { key: "european-manufacturing", name: { en: "European Manufacturing", uk: "Виробництво в Європі" } },
  { key: "supply-chain", name: { en: "Supply Chain", uk: "Ланцюги постачання" } },
];

export function getClusterByKey(key: string) {
  return blogClusters.find((c) => c.key === key);
}
