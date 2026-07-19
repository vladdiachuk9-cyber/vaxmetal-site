import type { ServiceContent } from "./types";

export const services: ServiceContent[] = [
  {
    key: "contract-manufacturing-oem",
    slug: { en: "contract-manufacturing-oem", uk: "kontraktne-vyrobnytstvo" },
    name: {
      en: "Contract Manufacturing for OEMs",
      uk: "Контрактне виробництво для OEM",
    },
    shortDescription: {
      en: "Welded sub-assemblies, brackets, frames and enclosures for machinery OEMs and integrators.",
      uk: "Зварні вузли, кронштейни, рами та корпуса для машинобудівних OEM та інтеграторів.",
    },
    intro: {
      en: "We take on the overflow work that busy German and Polish workshops subcontract out: welded sub-assemblies, brackets, frames and enclosures, delivered as a finished part rather than a stack of cut sheet. One RFQ covers cutting, machining, welding, finishing and assembly — no coordinating three vendors.",
      uk: "Ми беремо на себе надлишковий обсяг, який перевантажені німецькі та польські цехи віддають на субпідряд: зварні вузли, кронштейни, рами та корпуса — у вигляді готової деталі, а не стопки різаного листа. Одна заявка охоплює різання, механообробку, зварювання, обробку та складання — без координації трьох постачальників.",
    },
    specs: [
      { label: { en: "Typical series size", uk: "Типовий розмір серії" }, value: { en: "100–5,000 units", uk: "100–5000 шт" } },
      { label: { en: "Quote turnaround", uk: "Строк котирування" }, value: { en: "24–48 hours", uk: "24–48 годин" } },
      { label: { en: "First-order lead time", uk: "Строк першого замовлення" }, value: { en: "2–4 weeks", uk: "2–4 тижні" } },
      { label: { en: "EU delivery", uk: "Доставка в ЄС" }, value: { en: "3–7 days DAP, duty-free (DCFTA)", uk: "3–7 днів DAP, без мита (DCFTA)" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["trailer-truck-parts", "telescopic-masts", "robotics-ugv-chassis", "fire-emergency-equipment"],
  },
  {
    key: "laser-cutting",
    slug: { en: "laser-cutting", uk: "lazerne-rizannya" },
    name: { en: "Laser Cutting", uk: "Лазерне різання" },
    shortDescription: {
      en: "Sheet steel, stainless and aluminum cutting with tight tolerances, ready for bending or welding the same day.",
      uk: "Різання листової сталі, нержавіючої сталі та алюмінію з точними допусками, готове до гнуття чи зварювання того ж дня.",
    },
    intro: {
      en: "Fiber laser cutting of flat sheet, sized and profiled to drawing, feeding directly into our own bending and welding lines — so a cut part doesn't wait on a second vendor's queue before it becomes a finished one.",
      uk: "Різання листа волоконним лазером за кресленням, з прямою передачею на власні лінії гнуття та зварювання — так вирізана деталь не чекає в черзі іншого постачальника, перш ніж стати готовою.",
    },
    specs: [
      { label: { en: "Steel thickness", uk: "Товщина сталі" }, value: { en: "up to 20 mm", uk: "до 20 мм" } },
      { label: { en: "Stainless steel thickness", uk: "Товщина нержавіючої сталі" }, value: { en: "up to 15 mm", uk: "до 15 мм" } },
      { label: { en: "Aluminum thickness", uk: "Товщина алюмінію" }, value: { en: "up to 12 mm", uk: "до 12 мм" } },
      { label: { en: "Typical cutting tolerance", uk: "Типовий допуск різання" }, value: { en: "±0.1 mm", uk: "±0,1 мм" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["trailer-truck-parts", "telescopic-masts", "robotics-ugv-chassis", "fire-emergency-equipment"],
  },
  {
    key: "cnc-turning",
    slug: { en: "cnc-turning", uk: "tokarna-obrobka-chpu" },
    name: { en: "CNC Turning", uk: "Токарна обробка ЧПУ" },
    shortDescription: {
      en: "5x HAAS turning centers for shafts, bushings and rotationally symmetric parts in steel, stainless and aluminum.",
      uk: "5 токарних центрів HAAS для валів, втулок та тіл обертання зі сталі, нержавіючої сталі та алюмінію.",
    },
    intro: {
      en: "Five HAAS CNC turning centers producing shafts, bushings, spindles and other rotationally symmetric parts, from single prototypes through production series.",
      uk: "П'ять токарних центрів ЧПУ HAAS для виробництва валів, втулок, шпинделів та інших тіл обертання — від поодиноких прототипів до серійного виробництва.",
    },
    specs: [
      { label: { en: "Turning centers", uk: "Токарних центрів" }, value: { en: "5x HAAS", uk: "5x HAAS" } },
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "IT7–IT9 (≈ ±0.02–0.05 mm)", uk: "IT7–IT9 (≈ ±0,02–0,05 мм)" } },
      { label: { en: "Materials", uk: "Матеріали" }, value: { en: "Steel, stainless steel, aluminum", uk: "Сталь, нержавіюча сталь, алюміній" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["telescopic-masts", "robotics-ugv-chassis"],
  },
  {
    key: "cnc-milling",
    slug: { en: "cnc-milling", uk: "frezerna-obrobka-chpu" },
    name: { en: "CNC Milling", uk: "Фрезерна обробка ЧПУ" },
    shortDescription: {
      en: "5x HAAS milling centers for brackets, housings and precision machined components.",
      uk: "5 фрезерних центрів HAAS для кронштейнів, корпусів та точних механічних деталей.",
    },
    intro: {
      en: "Five HAAS CNC milling centers for brackets, housings and machined components that need to mate precisely with welded or cast assemblies.",
      uk: "П'ять фрезерних центрів ЧПУ HAAS для кронштейнів, корпусів та деталей, які мають точно з'єднуватися зі зварними чи литими вузлами.",
    },
    specs: [
      { label: { en: "Milling centers", uk: "Фрезерних центрів" }, value: { en: "5x HAAS", uk: "5x HAAS" } },
      { label: { en: "Typical achievable tolerance", uk: "Типовий досяжний допуск" }, value: { en: "±0.02–0.05 mm", uk: "±0,02–0,05 мм" } },
      { label: { en: "Materials", uk: "Матеріали" }, value: { en: "Steel, stainless steel, aluminum", uk: "Сталь, нержавіюча сталь, алюміній" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["telescopic-masts", "robotics-ugv-chassis"],
  },
  {
    key: "sheet-metal-bending",
    slug: { en: "sheet-metal-bending", uk: "hnuttya-lystovogo-metalu" },
    name: { en: "Sheet Metal & Bending", uk: "Листовий метал та гнуття" },
    shortDescription: {
      en: "CNC press brake forming, matched to laser-cut blanks for consistent, repeatable folds.",
      uk: "Гнуття на ЧПУ-пресі, узгоджене з лазерно-різаними заготовками для стабільного результату.",
    },
    intro: {
      en: "CNC press brake bending run directly against our own laser-cut blanks, so bend allowances and tooling are matched before the part ever reaches the brake — fewer trial folds, more repeatable series.",
      uk: "Гнуття на ЧПУ-пресі виконується безпосередньо з власних лазерно-різаних заготовок, тому припуски на гнуття та оснастка узгоджені ще до подачі деталі на прес — менше пробних згинів, стабільніший результат у серії.",
    },
    specs: [
      { label: { en: "Steel thickness (mild steel)", uk: "Товщина сталі (маловуглецева)" }, value: { en: "up to 12 mm", uk: "до 12 мм" } },
      { label: { en: "Max bend length", uk: "Макс. довжина згину" }, value: { en: "up to 4,000 mm", uk: "до 4000 мм" } },
      { label: { en: "Typical angle tolerance", uk: "Типовий допуск кута" }, value: { en: "±0.5°", uk: "±0,5°" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["trailer-truck-parts", "fire-emergency-equipment"],
  },
  {
    key: "welding",
    slug: { en: "welding", uk: "zvaryuvalni-roboty" },
    name: { en: "Welding", uk: "Зварювальні роботи" },
    shortDescription: {
      en: "TIG, laser, MIG/MAG and spot welding — the step most cutting-only platforms can't offer.",
      uk: "TIG, лазерне, MIG/MAG та точкове зварювання — етап, якого не мають більшість платформ різання.",
    },
    intro: {
      en: "Four welding processes under one roof, matched to the job: TIG for stainless and aluminum where finish quality matters, laser welding for thin-gauge precision joints with minimal heat distortion, MIG/MAG for structural steel assemblies, and spot welding for sheet sub-assemblies. This is the step that separates a cut part from a finished one — and where digital cutting platforms consistently fall short.",
      uk: "Чотири методи зварювання під одним дахом, підібрані під завдання: TIG — для нержавіючої сталі та алюмінію, де важлива якість шва; лазерне зварювання — для тонкостінних точних з'єднань з мінімальною деформацією; MIG/MAG — для сталевих конструкційних вузлів; точкове зварювання — для листових вузлів. Саме цей етап відрізняє вирізану деталь від готового виробу — і саме тут цифрові платформи різання системно програють.",
    },
    specs: [
      { label: { en: "TIG welding", uk: "TIG-зварювання" }, value: { en: "Stainless steel, aluminum", uk: "Нержавіюча сталь, алюміній" } },
      { label: { en: "Laser welding", uk: "Лазерне зварювання" }, value: { en: "Thin-gauge precision joints", uk: "Тонкостінні точні з'єднання" } },
      { label: { en: "MIG/MAG welding", uk: "MIG/MAG-зварювання" }, value: { en: "Structural steel assemblies", uk: "Сталеві конструкційні вузли" } },
      { label: { en: "Spot welding", uk: "Точкове зварювання" }, value: { en: "Sheet metal sub-assemblies", uk: "Листові вузли" } },
    ],
    materialKeys: ["steel", "stainless-steel", "aluminum"],
    industryKeys: ["trailer-truck-parts", "telescopic-masts", "robotics-ugv-chassis", "fire-emergency-equipment", "metal-wood-furniture"],
  },
  {
    key: "powder-coating",
    slug: { en: "powder-coating", uk: "poroshkove-farbuvannya" },
    name: { en: "Powder Coating", uk: "Порошкове фарбування" },
    shortDescription: {
      en: "In-house finishing so parts leave ready to install, not ready for a second subcontractor.",
      uk: "Власна лінія фарбування — деталі виходять готовими до монтажу, а не до другого підрядника.",
    },
    intro: {
      en: "In-house powder coating line, so painted parts leave our shop ready to install rather than queuing for an outside finisher. Any RAL color, applied after welding and surface preparation, before final assembly.",
      uk: "Власна лінія порошкового фарбування — пофарбовані деталі виходять з нашого цеху готовими до монтажу, а не в черзі до зовнішнього фарбувального цеху. Будь-який колір RAL, нанесення після зварювання та підготовки поверхні, перед фінальним складанням.",
    },
    specs: [
      { label: { en: "Color range", uk: "Колірна гама" }, value: { en: "Any RAL code", uk: "Будь-який код RAL" } },
      { label: { en: "Typical coating thickness", uk: "Типова товщина покриття" }, value: { en: "60–120 µm", uk: "60–120 мкм" } },
      { label: { en: "Applied to", uk: "Наноситься на" }, value: { en: "Steel, aluminum", uk: "Сталь, алюміній" } },
    ],
    materialKeys: ["steel", "aluminum"],
    industryKeys: ["trailer-truck-parts", "fire-emergency-equipment"],
  },
  {
    key: "assembly-qc",
    slug: { en: "assembly-qc", uk: "skladannya-i-kontrol-yakosti" },
    name: { en: "Assembly & Quality Control", uk: "Складання та контроль якості" },
    shortDescription: {
      en: "Sub-assembly, quality control and export packaging — you receive a finished unit, not a bag of parts.",
      uk: "Складання вузлів, контроль якості та експортне пакування — ви отримуєте готовий виріб, а не мішок деталей.",
    },
    intro: {
      en: "Sub-assembly of welded and machined components into a finished unit, with dimensional inspection at incoming, in-process and final stages, followed by export packaging suited to road or sea freight.",
      uk: "Складання зварних та механооброблених компонентів у готовий виріб, з розмірним контролем на вхідному, поопераційному та фінальному етапах, з подальшим експортним пакуванням, придатним для авто- чи морського транспорту.",
    },
    specs: [
      { label: { en: "Inspection stages", uk: "Етапи контролю" }, value: { en: "Incoming, in-process, final", uk: "Вхідний, поопераційний, фінальний" } },
      { label: { en: "Documentation", uk: "Документація" }, value: { en: "Packing lists, certificates of conformity", uk: "Пакувальні листи, сертифікати відповідності" } },
    ],
    materialKeys: [],
    industryKeys: ["trailer-truck-parts", "telescopic-masts", "robotics-ugv-chassis", "fire-emergency-equipment", "metal-wood-furniture"],
  },
];
