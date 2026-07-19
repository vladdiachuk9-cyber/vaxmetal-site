import type { ServiceMaterialCombo } from "./types";

/**
 * Explicit allowlist of service x material pages — not a blind cross-product.
 * Each entry needs real, differentiated substance (thickness ranges, process
 * notes) or it doesn't belong here. contract-manufacturing-oem and
 * assembly-qc are deliberately excluded: they're umbrella/process services,
 * not material-specific processes, so a "contract manufacturing x aluminum"
 * page would have nothing genuine to say beyond the parent page.
 */
export const serviceMaterialCombos: ServiceMaterialCombo[] = [
  {
    serviceKey: "laser-cutting",
    materialKey: "steel",
    intro: {
      en: "Fiber laser cutting of mild and structural steel sheet up to 20 mm, sized for direct hand-off to our own press brake and welding lines.",
      uk: "Різання маловуглецевої та конструкційної сталі волоконним лазером товщиною до 20 мм, з прямою передачею на власні лінії гнуття та зварювання.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "0.5–20 mm", uk: "0,5–20 мм" } },
      { label: { en: "Typical tolerance", uk: "Типовий допуск" }, value: { en: "±0.1 mm", uk: "±0,1 мм" } },
    ],
  },
  {
    serviceKey: "laser-cutting",
    materialKey: "stainless-steel",
    intro: {
      en: "Clean-edge cutting of stainless sheet up to 15 mm, with nitrogen assist to keep cut edges free of oxidation ahead of TIG welding or passivation.",
      uk: "Чисте різання нержавіючого листа товщиною до 15 мм з азотним піддувом, щоб краї реза лишались без окислення перед TIG-зварюванням чи пасивацією.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "0.5–15 mm", uk: "0,5–15 мм" } },
      { label: { en: "Edge quality", uk: "Якість краю" }, value: { en: "Oxide-free, nitrogen-assisted", uk: "Без окислення, з азотним піддувом" } },
    ],
  },
  {
    serviceKey: "laser-cutting",
    materialKey: "aluminum",
    intro: {
      en: "Aluminum sheet cutting up to 12 mm. Reflectivity and heat conductivity call for tuned parameters per alloy — handled in-house rather than passed to a generic cutting run.",
      uk: "Різання алюмінієвого листа товщиною до 12 мм. Відбивна здатність і теплопровідність вимагають підбору параметрів під кожен сплав — це вирішується власними силами, а не типовим шаблонним різанням.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "0.5–12 mm", uk: "0,5–12 мм" } },
      { label: { en: "Alloys", uk: "Сплави" }, value: { en: "5xxx, 6xxx series", uk: "серії 5xxx, 6xxx" } },
    ],
  },
  {
    serviceKey: "cnc-turning",
    materialKey: "steel",
    intro: {
      en: "Shafts, bushings and spindles turned from steel bar stock on 5x HAAS turning centers, from single prototypes to production series.",
      uk: "Вали, втулки та шпинделі, виточені зі сталевого прутка на 5 токарних центрах HAAS — від поодиноких прототипів до серійного виробництва.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "IT7–IT9", uk: "IT7–IT9" } },
    ],
  },
  {
    serviceKey: "cnc-turning",
    materialKey: "stainless-steel",
    intro: {
      en: "Stainless turning for parts exposed to moisture or hygiene requirements — pins, shafts and fittings that need to hold their finish in the field.",
      uk: "Токарна обробка нержавіючої сталі для деталей, що працюють у вологих умовах чи з гігієнічними вимогами — штифти, вали та фітинги, що мають зберігати вигляд в експлуатації.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "IT7–IT9", uk: "IT7–IT9" } },
    ],
  },
  {
    serviceKey: "cnc-turning",
    materialKey: "aluminum",
    intro: {
      en: "Aluminum turning for lightweight rotationally symmetric parts — mast sections, spacers and fittings where weight is the design driver.",
      uk: "Токарна обробка алюмінію для легких тіл обертання — секцій щогл, проставок і фітингів, де вага є визначальним фактором конструкції.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "IT7–IT9", uk: "IT7–IT9" } },
    ],
  },
  {
    serviceKey: "cnc-milling",
    materialKey: "steel",
    intro: {
      en: "Steel brackets and housings machined to mate precisely with welded assemblies — the parts that hold tolerance where a weldment alone can't.",
      uk: "Сталеві кронштейни та корпуса, механооброблені для точного з'єднання зі зварними вузлами — деталі, що тримають допуск там, де сама зварна конструкція не може.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "±0.02–0.05 mm", uk: "±0,02–0,05 мм" } },
    ],
  },
  {
    serviceKey: "cnc-milling",
    materialKey: "stainless-steel",
    intro: {
      en: "Stainless housings and fittings machined for corrosion resistance in exterior or hygienic applications.",
      uk: "Корпуса та фітинги з нержавіючої сталі, механооброблені для корозійної стійкості в зовнішніх чи гігієнічних умовах.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "±0.02–0.05 mm", uk: "±0,02–0,05 мм" } },
    ],
  },
  {
    serviceKey: "cnc-milling",
    materialKey: "aluminum",
    intro: {
      en: "Aluminum enclosures and brackets machined for robotics and mobile equipment, where every gram counts against payload or portability.",
      uk: "Алюмінієві корпуса та кронштейни, механооброблені для робототехніки та мобільного обладнання, де кожен грам впливає на корисне навантаження чи мобільність.",
    },
    specs: [
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "±0.02–0.05 mm", uk: "±0,02–0,05 мм" } },
    ],
  },
  {
    serviceKey: "sheet-metal-bending",
    materialKey: "steel",
    intro: {
      en: "Press brake forming of steel blanks up to 12 mm, bend allowances matched to our own laser-cut parts rather than a third party's tolerances.",
      uk: "Гнуття сталевих заготовок на ЧПУ-пресі товщиною до 12 мм, з припусками, узгодженими з власними лазерно-різаними деталями, а не з допусками стороннього постачальника.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "up to 12 mm", uk: "до 12 мм" } },
      { label: { en: "Max bend length", uk: "Макс. довжина згину" }, value: { en: "4,000 mm", uk: "4000 мм" } },
    ],
  },
  {
    serviceKey: "sheet-metal-bending",
    materialKey: "stainless-steel",
    intro: {
      en: "Stainless sheet bending for exterior cabinets and fittings, with tooling selected to avoid surface marking on visible faces.",
      uk: "Гнуття нержавіючого листа для зовнішніх шаф і фітингів, з підбором оснастки, що уникає слідів на видимих поверхнях.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "up to 8 mm", uk: "до 8 мм" } },
    ],
  },
  {
    serviceKey: "sheet-metal-bending",
    materialKey: "aluminum",
    intro: {
      en: "Aluminum bending for lightweight panels and ramps, accounting for the tighter minimum bend radius and springback aluminum requires versus steel.",
      uk: "Гнуття алюмінію для легких панелей та аппарелей, з урахуванням меншого мінімального радіуса згину та пружного повернення, характерних для алюмінію на відміну від сталі.",
    },
    specs: [
      { label: { en: "Thickness range", uk: "Діапазон товщини" }, value: { en: "up to 8 mm", uk: "до 8 мм" } },
    ],
  },
  {
    serviceKey: "welding",
    materialKey: "steel",
    intro: {
      en: "MIG/MAG welding for structural steel assemblies, and spot welding for steel sheet sub-assemblies — the two processes covering most structural work.",
      uk: "MIG/MAG-зварювання для сталевих конструкційних вузлів та точкове зварювання для листових сталевих вузлів — два процеси, що охоплюють більшість конструкційних робіт.",
    },
    specs: [
      { label: { en: "Processes", uk: "Процеси" }, value: { en: "MIG/MAG, spot", uk: "MIG/MAG, точкове" } },
    ],
  },
  {
    serviceKey: "welding",
    materialKey: "stainless-steel",
    intro: {
      en: "TIG welding for stainless steel, preserving corrosion resistance at the joint where MIG welding would compromise it.",
      uk: "TIG-зварювання нержавіючої сталі, що зберігає корозійну стійкість у шві там, де MIG-зварювання її б погіршило.",
    },
    specs: [
      { label: { en: "Process", uk: "Процес" }, value: { en: "TIG", uk: "TIG" } },
    ],
  },
  {
    serviceKey: "welding",
    materialKey: "aluminum",
    intro: {
      en: "TIG welding for aluminum, with laser welding available for thin-gauge joints where minimal heat distortion matters.",
      uk: "TIG-зварювання алюмінію, з можливістю лазерного зварювання для тонкостінних з'єднань, де важлива мінімальна деформація від нагріву.",
    },
    specs: [
      { label: { en: "Processes", uk: "Процеси" }, value: { en: "TIG, laser (thin-gauge)", uk: "TIG, лазерне (тонкостінне)" } },
    ],
  },
  {
    serviceKey: "powder-coating",
    materialKey: "steel",
    intro: {
      en: "Powder coating on steel after welding and surface preparation, any RAL code, applied in-house before final assembly.",
      uk: "Порошкове фарбування сталі після зварювання та підготовки поверхні, будь-який код RAL, наноситься власними силами перед фінальним складанням.",
    },
    specs: [
      { label: { en: "Typical coating thickness", uk: "Типова товщина покриття" }, value: { en: "60–120 µm", uk: "60–120 мкм" } },
    ],
  },
  {
    serviceKey: "powder-coating",
    materialKey: "aluminum",
    intro: {
      en: "Powder coating on aluminum, with pretreatment adapted to the alloy's natural oxide layer for proper adhesion.",
      uk: "Порошкове фарбування алюмінію з попередньою обробкою, адаптованою під природний оксидний шар сплаву для належної адгезії.",
    },
    specs: [
      { label: { en: "Typical coating thickness", uk: "Типова товщина покриття" }, value: { en: "60–120 µm", uk: "60–120 мкм" } },
    ],
  },
];

export function getCombo(serviceKey: string, materialKey: string) {
  return serviceMaterialCombos.find(
    (c) => c.serviceKey === serviceKey && c.materialKey === materialKey
  );
}

export function getCombosForService(serviceKey: string) {
  return serviceMaterialCombos.filter((c) => c.serviceKey === serviceKey);
}
