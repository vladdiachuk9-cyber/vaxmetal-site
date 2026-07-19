import type { LocationContent } from "./types";

export const locationsUa: LocationContent[] = [
  {
    key: "kyiv",
    slug: { en: "kyiv", uk: "kyiv" },
    countryOrCity: { en: "Kyiv", uk: "Київ" },
    pageTitle: {
      en: "Contract Manufacturing in Kyiv",
      uk: "Контрактне виробництво в Києві",
    },
    shortDescription: {
      en: "Full-cycle contract manufacturing for machinery, robotics and industrial clients based in Kyiv.",
      uk: "Контрактне виробництво повного циклу для машинобудівних, робототехнічних та промислових клієнтів у Києві.",
    },
    intro: {
      en: "We work with Kyiv-based machinery OEMs, robotics teams and industrial equipment builders on laser cutting, CNC turning and milling, welding, powder coating and assembly — the same full-cycle capability we export to the EU, available locally with shorter logistics.",
      uk: "Ми працюємо з київськими машинобудівними OEM, робототехнічними командами та виробниками промислового обладнання: лазерне різання, токарна та фрезерна обробка ЧПУ, зварювання, порошкове фарбування та складання — та сама компетенція повного циклу, яку ми експортуємо в ЄС, доступна локально з коротшою логістикою.",
    },
    facts: [
      { label: { en: "Delivery within Ukraine", uk: "Доставка по Україні" }, value: { en: "1–3 days", uk: "1–3 дні" } },
      { label: { en: "Quote turnaround", uk: "Строк котирування" }, value: { en: "24–48 hours", uk: "24–48 годин" } },
    ],
  },
];
