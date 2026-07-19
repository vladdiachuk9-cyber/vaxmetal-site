import type { Localized } from "../types";

export type ArticleIntent = "informational" | "commercial" | "comparison" | "reference";

export interface BacklogTitle {
  cluster: string;
  title: Localized<string>;
  targetKeyword: Localized<string>;
  intent: ArticleIntent;
  status: "planned";
}

/**
 * Planning backlog only — these are NOT routed pages. A title here is a
 * commitment to write real content later, not a live thin page. Move an
 * entry out of this file and into content/blog/articles/{locale}/*.mdx
 * only once it's actually written; never generate a route from this list
 * directly (that would be exactly the doorway-page pattern the brief warns
 * against).
 */
export const blogTitleBacklog: BacklogTitle[] = [
  // manufacturing
  { cluster: "manufacturing", title: { en: "What Is Contract Manufacturing? A Plain-English Guide", uk: "Що таке контрактне виробництво? Просте пояснення" }, targetKeyword: { en: "what is contract manufacturing", uk: "що таке контрактне виробництво" }, intent: "informational", status: "planned" },
  { cluster: "manufacturing", title: { en: "Overflow Manufacturing: What It Is and When to Use It", uk: "Надлишкове виробництво: що це і коли використовувати" }, targetKeyword: { en: "overflow manufacturing", uk: "надлишкове виробництво" }, intent: "informational", status: "planned" },
  { cluster: "manufacturing", title: { en: "White-Label vs ODM vs Contract Manufacturing: Key Differences", uk: "White-label, ODM та контрактне виробництво: у чому різниця" }, targetKeyword: { en: "odm vs contract manufacturing", uk: "odm та контрактне виробництво" }, intent: "comparison", status: "planned" },
  { cluster: "manufacturing", title: { en: "How to Vet a New Contract Manufacturer: A Due Diligence Checklist", uk: "Як перевірити нового контрактного виробника: чек-лист" }, targetKeyword: { en: "vet contract manufacturer", uk: "перевірка виробника" }, intent: "commercial", status: "planned" },
  { cluster: "manufacturing", title: { en: "Small-Batch Manufacturing: Why 100–5,000 Units Is a Hard Segment to Serve", uk: "Дрібносерійне виробництво: чому 100-5000 одиниць — складний сегмент" }, targetKeyword: { en: "small batch manufacturing", uk: "дрібносерійне виробництво" }, intent: "informational", status: "planned" },

  // cnc
  { cluster: "cnc", title: { en: "Understanding IT Tolerance Grades in CNC Machining", uk: "Класи точності IT у ЧПУ-обробці" }, targetKeyword: { en: "it tolerance grades", uk: "класи точності it" }, intent: "reference", status: "planned" },
  { cluster: "cnc", title: { en: "5 Design Mistakes That Make CNC Parts More Expensive", uk: "5 помилок конструювання, що здорожчують деталі ЧПУ" }, targetKeyword: { en: "reduce cnc machining cost", uk: "здешевити чпу деталі" }, intent: "informational", status: "planned" },
  { cluster: "cnc", title: { en: "Prototype vs Production CNC Machining: What Changes", uk: "Прототип і серійна ЧПУ-обробка: що змінюється" }, targetKeyword: { en: "cnc prototype vs production", uk: "прототип чпу серія" }, intent: "informational", status: "planned" },
  { cluster: "cnc", title: { en: "Surface Finish Callouts in CNC Machining, Explained", uk: "Позначення шорсткості поверхні у ЧПУ-обробці" }, targetKeyword: { en: "cnc surface finish", uk: "шорсткість поверхні чпу" }, intent: "reference", status: "planned" },

  // laser
  { cluster: "laser", title: { en: "Laser Cutting vs Waterjet vs Plasma: Choosing the Right Cutting Method", uk: "Лазерне різання, гідроабразив чи плазма: який метод обрати" }, targetKeyword: { en: "laser cutting vs waterjet", uk: "лазерне різання проти гідроабразивного" }, intent: "comparison", status: "planned" },
  { cluster: "laser", title: { en: "Laser Cutting Tolerances and Thickness Limits: A Practical Reference", uk: "Допуски та товщина лазерного різання: практичний довідник" }, targetKeyword: { en: "laser cutting tolerance", uk: "допуски лазерного різання" }, intent: "reference", status: "planned" },
  { cluster: "laser", title: { en: "Why Nitrogen Assist Matters for Stainless Steel Laser Cutting", uk: "Чому азотний піддув важливий для лазерного різання нержавіючої сталі" }, targetKeyword: { en: "nitrogen laser cutting stainless", uk: "азотне різання нержавіючої сталі" }, intent: "informational", status: "planned" },
  { cluster: "laser", title: { en: "Laser Cutting DXF Files: Common Mistakes That Delay Quotes", uk: "Файли DXF для лазерного різання: помилки, що затримують КП" }, targetKeyword: { en: "dxf file laser cutting", uk: "dxf файл лазерне різання" }, intent: "informational", status: "planned" },
  { cluster: "laser", title: { en: "Kerf Width and Why It Matters for Part Design", uk: "Ширина різу та її вплив на конструкцію деталі" }, targetKeyword: { en: "laser kerf width", uk: "ширина лазерного різу" }, intent: "reference", status: "planned" },

  // welding
  { cluster: "welding", title: { en: "Why Welding Is the Bottleneck Digital Cutting Platforms Can't Solve", uk: "Чому зварювання — вузьке місце, яке не вирішують цифрові платформи різання" }, targetKeyword: { en: "welding subcontracting europe", uk: "субпідряд зварювання європа" }, intent: "informational", status: "planned" },
  { cluster: "welding", title: { en: "Welding Stainless Steel Without Losing Corrosion Resistance", uk: "Зварювання нержавіючої сталі без втрати корозійної стійкості" }, targetKeyword: { en: "welding stainless steel corrosion", uk: "зварювання нержавіючої сталі корозія" }, intent: "informational", status: "planned" },
  { cluster: "welding", title: { en: "Spot Welding vs Continuous Welds for Sheet Metal Assemblies", uk: "Точкове чи суцільне зварювання для листових вузлів" }, targetKeyword: { en: "spot welding sheet metal", uk: "точкове зварювання листового металу" }, intent: "comparison", status: "planned" },
  { cluster: "welding", title: { en: "Europe's Certified Welder Shortage, Explained", uk: "Дефіцит сертифікованих зварників у Європі" }, targetKeyword: { en: "welder shortage europe", uk: "дефіцит зварників європа" }, intent: "informational", status: "planned" },

  // oem
  { cluster: "oem", title: { en: "RFQ Templates: What to Include for a Faster, More Accurate Quote", uk: "Шаблони заявки на КП: що вказати для швидшого й точнішого котирування" }, targetKeyword: { en: "rfq template manufacturing", uk: "шаблон заявки на кп" }, intent: "commercial", status: "planned" },
  { cluster: "oem", title: { en: "Nearshoring vs Offshoring for European OEMs: A Cost Comparison", uk: "Nearshoring чи offshoring для OEM Європи: порівняння витрат" }, targetKeyword: { en: "nearshoring vs offshoring europe", uk: "nearshoring і offshoring європа" }, intent: "comparison", status: "planned" },
  { cluster: "oem", title: { en: "How First-Order Trials Work With a New Manufacturing Subcontractor", uk: "Як проходить перше пробне замовлення з новим підрядником" }, targetKeyword: { en: "first order manufacturing trial", uk: "пробне замовлення виробництво" }, intent: "commercial", status: "planned" },
  { cluster: "oem", title: { en: "Working With a Manufacturing Partner in a Different Time Zone", uk: "Робота з виробничим партнером в іншому часовому поясі" }, targetKeyword: { en: "manufacturing partner communication", uk: "комунікація з виробником" }, intent: "informational", status: "planned" },

  // engineering-dfm
  { cluster: "engineering-dfm", title: { en: "Minimum Bend Radius: Why It Matters and How to Calculate It", uk: "Мінімальний радіус згину: чому важливий і як розрахувати" }, targetKeyword: { en: "minimum bend radius", uk: "мінімальний радіус згину" }, intent: "reference", status: "planned" },
  { cluster: "engineering-dfm", title: { en: "Designing Welded Assemblies for Easier Fabrication", uk: "Проєктування зварних вузлів для простішого виготовлення" }, targetKeyword: { en: "design welded assembly", uk: "проєктування зварного вузла" }, intent: "informational", status: "planned" },
  { cluster: "engineering-dfm", title: { en: "Tolerance Stacking in Multi-Part Assemblies", uk: "Накопичення допусків у багатодетальних вузлах" }, targetKeyword: { en: "tolerance stacking", uk: "накопичення допусків" }, intent: "reference", status: "planned" },
  { cluster: "engineering-dfm", title: { en: "When to Use an In-House Engineering Bureau vs Your Own Design Team", uk: "Коли використовувати конструкторське бюро підрядника, а коли власну команду" }, targetKeyword: { en: "odm engineering bureau", uk: "конструкторське бюро odm" }, intent: "informational", status: "planned" },

  // surface-treatment
  { cluster: "surface-treatment", title: { en: "RAL Colors Explained: A Quick Reference for Specifying Powder Coat", uk: "Кольори RAL: короткий довідник для специфікації порошкового фарбування" }, targetKeyword: { en: "ral color chart", uk: "таблиця кольорів ral" }, intent: "reference", status: "planned" },
  { cluster: "surface-treatment", title: { en: "Why Aluminum Needs Different Pretreatment Before Powder Coating", uk: "Чому алюміній потребує іншої підготовки перед порошковим фарбуванням" }, targetKeyword: { en: "aluminum powder coating pretreatment", uk: "підготовка алюмінію фарбування" }, intent: "informational", status: "planned" },
  { cluster: "surface-treatment", title: { en: "Coating Thickness Standards for Exterior Steel Equipment", uk: "Стандарти товщини покриття для зовнішнього сталевого обладнання" }, targetKeyword: { en: "powder coat thickness standard", uk: "товщина покриття стандарт" }, intent: "reference", status: "planned" },

  // cost-optimization
  { cluster: "cost-optimization", title: { en: "Why Series Size Changes Your Per-Unit Manufacturing Cost", uk: "Чому розмір серії змінює вартість одиниці виробництва" }, targetKeyword: { en: "manufacturing cost per unit series", uk: "вартість одиниці серії" }, intent: "informational", status: "planned" },
  { cluster: "cost-optimization", title: { en: "Material Cost vs Labor Cost in Welded Assemblies", uk: "Вартість матеріалу проти вартості праці у зварних вузлах" }, targetKeyword: { en: "welded assembly cost breakdown", uk: "вартість зварного вузла" }, intent: "informational", status: "planned" },
  { cluster: "cost-optimization", title: { en: "How Tolerance Requirements Drive Up Machining Cost", uk: "Як вимоги до допусків підвищують вартість обробки" }, targetKeyword: { en: "tight tolerance cost", uk: "вартість жорстких допусків" }, intent: "informational", status: "planned" },

  // european-manufacturing
  { cluster: "european-manufacturing", title: { en: "Germany's Manufacturing Capacity Crunch: What It Means for Buyers", uk: "Дефіцит виробничих потужностей у Німеччині: що це означає для покупців" }, targetKeyword: { en: "germany manufacturing capacity shortage", uk: "дефіцит потужностей німеччина" }, intent: "informational", status: "planned" },
  { cluster: "european-manufacturing", title: { en: "Poland vs Ukraine for Contract Manufacturing: An Honest Comparison", uk: "Польща чи Україна для контрактного виробництва: чесне порівняння" }, targetKeyword: { en: "poland vs ukraine manufacturing", uk: "польща і україна виробництво" }, intent: "comparison", status: "planned" },
  { cluster: "european-manufacturing", title: { en: "CBAM and Turkish Steel: What Changes for EU Buyers in 2026", uk: "CBAM і турецька сталь: що зміниться для покупців ЄС у 2026" }, targetKeyword: { en: "cbam turkish steel eu", uk: "cbam турецька сталь єс" }, intent: "informational", status: "planned" },

  // supply-chain
  { cluster: "supply-chain", title: { en: "Incoterms for Manufacturing Buyers: DAP vs FOB vs EXW", uk: "Інкотермс для покупців виробництва: DAP, FOB та EXW" }, targetKeyword: { en: "incoterms manufacturing dap fob", uk: "інкотермс виробництво dap fob" }, intent: "reference", status: "planned" },
  { cluster: "supply-chain", title: { en: "Managing Lead-Time Risk When Sourcing From a New Country", uk: "Управління ризиком строків при закупівлі в новій країні" }, targetKeyword: { en: "manufacturing lead time risk", uk: "ризик строків виробництва" }, intent: "informational", status: "planned" },
  { cluster: "supply-chain", title: { en: "Building a Second-Source Supplier Without Disrupting Production", uk: "Як додати другого постачальника без зупинки виробництва" }, targetKeyword: { en: "second source supplier manufacturing", uk: "другий постачальник виробництво" }, intent: "commercial", status: "planned" },
];
