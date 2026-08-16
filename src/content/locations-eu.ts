import type { LocationContent } from "./types";

export const locationsEu: LocationContent[] = [
  {
    key: "germany",
    slug: { en: "germany", uk: "nimechchyna" },
    countryOrCity: { en: "Germany", uk: "Німеччина" },
    pageTitle: {
      en: "Contract Manufacturing for Germany",
      uk: "Контрактне виробництво для Німеччини",
    },
    shortDescription: {
      en: "Overflow contract manufacturing for German workshops short on welders and lead time.",
      uk: "Надлишкове контрактне виробництво для німецьких цехів, яким бракує зварників і часу.",
    },
    intro: {
      en: "Germany is the benchmark for quality and trust, and the highest-cost workshop rate in our comparison set. German shops charge roughly €50–85 per welding shop-hour and commonly quote 4–8 week lead times — often subcontracting the overflow themselves. We offer cost-competitive production against a typical German quote, with delivery FCA or DAP, duty-free under DCFTA where applicable.",
      uk: "Німеччина — еталон якості та довіри, і найдорожча цехова ставка в нашому порівнянні. Німецькі цехи беруть приблизно €50-85 за годину зварювальника і зазвичай котирують строки 4-8 тижнів — часто самі віддаючи надлишок на субпідряд. Ми пропонуємо конкурентну собівартість відносно типового німецького котирування, з доставкою на умовах FCA або DAP, безмитно за угодою DCFTA де це застосовно.",
    },
    facts: [
      { label: { en: "Typical shop rate (benchmark)", uk: "Типова цехова ставка (орієнтир)" }, value: { en: "€50–85/hr (welding)", uk: "€50–85/год (зварювання)" } },
      { label: { en: "Our price position", uk: "Наша цінова позиція" }, value: { en: "Cost-competitive vs. German quotes", uk: "Конкурентна собівартість відносно німецьких котирувань" } },
      { label: { en: "Delivery", uk: "Доставка" }, value: { en: "FCA / DAP, duty-free (DCFTA) where applicable", uk: "FCA / DAP, безмитно (DCFTA) де це застосовно" } },
      { label: { en: "Why now", uk: "Чому саме зараз" }, value: { en: "German workshops running at capacity, quoting 4–8 week lead times", uk: "Німецькі цехи завантажені на повну, строки котирування 4-8 тижнів" } },
    ],
  },
  {
    key: "poland",
    slug: { en: "poland", uk: "polshcha" },
    countryOrCity: { en: "Poland", uk: "Польща" },
    pageTitle: {
      en: "Contract Manufacturing for Poland",
      uk: "Контрактне виробництво для Польщі",
    },
    shortDescription: {
      en: "Overflow capacity for Polish workshops running at capacity with rising wages.",
      uk: "Надлишкові потужності для польських цехів, завантажених на повну з ростом зарплат.",
    },
    intro: {
      en: "Polish workshops offer strong logistics (1–3 days to most of the EU) and two decades of experience serving the German market, but they're running at capacity: workshop rates run roughly €30–45 per hour and are rising around 10% a year, and small custom series are increasingly turned away in favor of larger, standard runs. We offer cost-competitive production against a typical Polish quote and take on the custom, smaller-series work that busy Polish shops no longer want.",
      uk: "Польські цехи пропонують хорошу логістику (1-3 дні до більшості ЄС) та два десятиліття досвіду роботи з німецьким ринком, але завантажені на повну: цехові ставки становлять приблизно €30-45 на годину і зростають приблизно на 10% на рік, а малі кастомні серії дедалі частіше відхиляються на користь більших стандартних партій. Ми пропонуємо конкурентну собівартість відносно типового польського котирування і беремо кастомні, дрібносерійні замовлення, від яких завантажені польські цехи вже відмовляються.",
    },
    facts: [
      { label: { en: "Typical shop rate (benchmark)", uk: "Типова цехова ставка (орієнтир)" }, value: { en: "€30–45/hr", uk: "€30–45/год" } },
      { label: { en: "Our price position", uk: "Наша цінова позиція" }, value: { en: "Cost-competitive vs. Polish quotes", uk: "Конкурентна собівартість відносно польських котирувань" } },
      { label: { en: "Delivery", uk: "Доставка" }, value: { en: "FCA / DAP, duty-free (DCFTA) where applicable", uk: "FCA / DAP, безмитно (DCFTA) де це застосовно" } },
      { label: { en: "Why now", uk: "Чому саме зараз" }, value: { en: "Wages rising ~10%/year, capacity turning away small custom series", uk: "Зарплати ростуть ~10%/рік, потужності відмовляють малим кастомним серіям" } },
    ],
  },
];
