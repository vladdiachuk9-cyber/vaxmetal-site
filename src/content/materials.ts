import type { MaterialContent } from "./types";

export const materials: MaterialContent[] = [
  {
    key: "steel",
    slug: { en: "steel", uk: "stal" },
    name: { en: "Steel", uk: "Сталь" },
    shortDescription: {
      en: "Structural and mild steel across all price segments — our default material for welded assemblies.",
      uk: "Конструкційна та маловуглецева сталь у всіх цінових сегментах — наш базовий матеріал для зварних вузлів.",
    },
    intro: {
      en: "Steel is our default material — sourced, cut, formed and welded in-house, with no premium tier the way aluminum carries. It's the right choice for structural frames, brackets and any part where cost matters more than weight.",
      uk: "Сталь — наш базовий матеріал: закуповується, ріжеться, формується та зварюється власними силами, без цінової надбавки, як у алюмінію. Правильний вибір для конструкційних рам, кронштейнів та будь-якої деталі, де вартість важливіша за вагу.",
    },
    properties: [
      { label: { en: "Typical grades", uk: "Типові марки" }, value: { en: "S235, S355 (and equivalents)", uk: "S235, S355 (та еквіваленти)" } },
      { label: { en: "Best for", uk: "Найкраще підходить для" }, value: { en: "Structural frames, brackets, chassis parts", uk: "Конструкційні рами, кронштейни, деталі шасі" } },
      { label: { en: "Finishing", uk: "Обробка" }, value: { en: "Powder coating, galvanizing on request", uk: "Порошкове фарбування, оцинкування за запитом" } },
    ],
    serviceKeys: ["laser-cutting", "cnc-turning", "cnc-milling", "sheet-metal-bending", "welding", "powder-coating"],
  },
  {
    key: "stainless-steel",
    slug: { en: "stainless-steel", uk: "nerzhaviyucha-stal" },
    name: { en: "Stainless Steel", uk: "Нержавіюча сталь" },
    shortDescription: {
      en: "Corrosion-resistant grades for outdoor, food-contact and hygienic applications.",
      uk: "Корозійностійкі марки для зовнішнього застосування, харчового контакту та гігієнічних умов.",
    },
    intro: {
      en: "Stainless steel for parts that face weather, moisture or hygiene requirements — exterior cabinets, fire equipment, food-adjacent equipment. TIG welding preserves corrosion resistance at the joint, where MIG can compromise it.",
      uk: "Нержавіюча сталь для деталей, що працюють в умовах негоди, вологи чи гігієнічних вимог — зовнішні шафи, пожежне обладнання, обладнання харчового призначення. TIG-зварювання зберігає корозійну стійкість у шві, тоді як MIG може її погіршити.",
    },
    properties: [
      { label: { en: "Typical grades", uk: "Типові марки" }, value: { en: "AISI 304, AISI 316", uk: "AISI 304, AISI 316" } },
      { label: { en: "Best for", uk: "Найкраще підходить для" }, value: { en: "Exterior cabinets, fire equipment, hygienic parts", uk: "Зовнішні шафи, пожежне обладнання, гігієнічні деталі" } },
      { label: { en: "Recommended welding", uk: "Рекомендоване зварювання" }, value: { en: "TIG", uk: "TIG" } },
    ],
    serviceKeys: ["laser-cutting", "cnc-turning", "cnc-milling", "sheet-metal-bending", "welding"],
  },
  {
    key: "aluminum",
    slug: { en: "aluminum", uk: "alyuminiy" },
    name: { en: "Aluminum", uk: "Алюміній" },
    shortDescription: {
      en: "Lightweight material positioned for higher-value parts, since Ukraine has no primary aluminum smelting.",
      uk: "Легкий матеріал, позиціонований для виробів з вищою доданою вартістю, оскільки в Україні немає первинного виробництва алюмінію.",
    },
    intro: {
      en: "Aluminum is available across our full process chain, but positioned for higher-value parts rather than priced to compete on cost — raw material is sourced internationally, since Ukraine has no primary smelting capacity. Best where weight matters more than price: masts, mobile equipment, enclosures.",
      uk: "Алюміній доступний по всьому нашому виробничому ланцюгу, але позиціонується для виробів з вищою доданою вартістю, а не для цінової конкуренції — сировина закуповується за кордоном, оскільки в Україні немає власного первинного виробництва. Найкраще підходить там, де вага важливіша за ціну: щогли, мобільне обладнання, корпуса.",
    },
    properties: [
      { label: { en: "Typical grades", uk: "Типові марки" }, value: { en: "5xxx, 6xxx series", uk: "серії 5xxx, 6xxx" } },
      { label: { en: "Best for", uk: "Найкраще підходить для" }, value: { en: "Masts, mobile equipment, lightweight enclosures", uk: "Щогли, мобільне обладнання, легкі корпуса" } },
      { label: { en: "Recommended welding", uk: "Рекомендоване зварювання" }, value: { en: "TIG", uk: "TIG" } },
    ],
    serviceKeys: ["laser-cutting", "cnc-turning", "cnc-milling", "sheet-metal-bending", "welding", "powder-coating"],
  },
];
