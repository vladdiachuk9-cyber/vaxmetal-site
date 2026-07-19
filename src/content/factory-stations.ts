import type { Localized } from "./types";

export interface FactoryStation {
  key: string;
  step: number;
  name: Localized<string>;
  description: Localized<string>;
  relatedServiceKey?: string;
}

export const factoryStations: FactoryStation[] = [
  {
    key: "laser-cutting",
    step: 1,
    name: { en: "Laser Cutting", uk: "Лазерне різання" },
    description: {
      en: "Fiber laser cutting of steel, stainless and aluminum sheet up to 20 mm, sized and profiled to drawing.",
      uk: "Різання листової сталі, нержавіючої сталі та алюмінію волоконним лазером товщиною до 20 мм за кресленням.",
    },
    relatedServiceKey: "laser-cutting",
  },
  {
    key: "press-brake",
    step: 2,
    name: { en: "CNC Press Brake", uk: "ЧПУ прес-гальмо" },
    description: {
      en: "Bending of laser-cut blanks, bend allowances matched to our own cutting line for consistent, repeatable folds.",
      uk: "Гнуття лазерно-різаних заготовок, з припусками, узгодженими з власною лінією різання.",
    },
    relatedServiceKey: "sheet-metal-bending",
  },
  {
    key: "cnc-turning",
    step: 3,
    name: { en: "CNC Turning", uk: "Токарна обробка ЧПУ" },
    description: {
      en: "5x HAAS turning centers for shafts, bushings and rotationally symmetric parts.",
      uk: "5 токарних центрів HAAS для валів, втулок та тіл обертання.",
    },
    relatedServiceKey: "cnc-turning",
  },
  {
    key: "cnc-milling",
    step: 4,
    name: { en: "CNC Milling", uk: "Фрезерна обробка ЧПУ" },
    description: {
      en: "5x HAAS milling centers for brackets, housings and precision machined components.",
      uk: "5 фрезерних центрів HAAS для кронштейнів, корпусів та точних деталей.",
    },
    relatedServiceKey: "cnc-milling",
  },
  {
    key: "welding",
    step: 5,
    name: { en: "Welding Bays", uk: "Дільниці зварювання" },
    description: {
      en: "TIG, laser, MIG/MAG and spot welding — matched to material and joint type.",
      uk: "TIG, лазерне, MIG/MAG та точкове зварювання — підібрані під матеріал і тип з'єднання.",
    },
    relatedServiceKey: "welding",
  },
  {
    key: "powder-coating",
    step: 6,
    name: { en: "Powder Coating Line", uk: "Лінія порошкового фарбування" },
    description: {
      en: "In-house finishing in any RAL color, applied after welding and surface preparation.",
      uk: "Власна лінія фарбування в будь-якому кольорі RAL, після зварювання та підготовки поверхні.",
    },
    relatedServiceKey: "powder-coating",
  },
  {
    key: "assembly-qc",
    step: 7,
    name: { en: "Assembly & QC", uk: "Складання та контроль якості" },
    description: {
      en: "Sub-assembly and dimensional inspection at incoming, in-process and final stages.",
      uk: "Складання вузлів і розмірний контроль на вхідному, поопераційному та фінальному етапах.",
    },
    relatedServiceKey: "assembly-qc",
  },
  {
    key: "packaging",
    step: 8,
    name: { en: "Export Packaging", uk: "Експортне пакування" },
    description: {
      en: "Packing lists, certificates of conformity, and packaging suited to road or sea freight.",
      uk: "Пакувальні листи, сертифікати відповідності, пакування для авто- чи морського транспорту.",
    },
  },
];
