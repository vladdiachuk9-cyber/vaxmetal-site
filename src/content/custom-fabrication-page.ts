import type { Localized } from "./types";

export interface StartWithItem {
  title: Localized<string>;
  text: Localized<string>;
}

export interface WorkflowStep {
  n: number;
  title: Localized<string>;
  text: Localized<string>;
}

export interface WhyUsItem {
  title: Localized<string>;
  text: Localized<string>;
}

export interface SeoContentBlock {
  h2: Localized<string>;
  body: Localized<string>;
}

export interface CustomFabFaqItem {
  question: Localized<string>;
  answer: Localized<string>;
}

export interface ProcessLink {
  label: Localized<string>;
  url: Localized<string>;
}

export interface ExampleImage {
  id: string;
  src: string;
  alt: Localized<string>;
}

/**
 * Bilingual content for the Custom Metal Fabrication service page — kept as
 * a dedicated module (not bolted onto the shared ServiceContent type used by
 * the other 8 simple services) since this page has ~12 rich sections.
 * Transcribed verbatim from the client-provided
 * VAXMetal_custom_project_FINAL_v1_1/content/page.{en,uk}.yaml.
 */
export const customFabricationPage = {
  hero: {
    eyebrow: {
      en: "CUSTOM METAL FABRICATION",
      uk: "ВИГОТОВЛЕННЯ МЕТАЛЕВИХ ВИРОБІВ НА ЗАМОВЛЕННЯ",
    } satisfies Localized<string>,
    h1: {
      en: "Custom Metal Fabrication from Idea, Sketch or Drawing",
      uk: "Виготовлення металевих виробів за ідеєю, ескізом або кресленням",
    } satisfies Localized<string>,
    lead: {
      en: "You don't need a finished CAD model or manufacturing specification. Send us a description, photo, sketch, reference product or drawing — we'll determine the practical next manufacturing step.",
      uk: "Вам не обов'язково мати готову CAD-модель або повне технічне завдання. Надішліть опис, фото, ескіз, приклад схожого виробу чи креслення — ми визначимо практичний наступний крок до виробництва.",
    } satisfies Localized<string>,
    primaryCta: { en: "Describe Your Project", uk: "Описати проєкт" } satisfies Localized<string>,
    secondaryCta: { en: "Upload a Photo or Drawing", uk: "Завантажити фото або креслення" } satisfies Localized<string>,
    trustLine: {
      en: "No CAD required · Initial review within 24–48h · EU delivery available",
      uk: "CAD не обов'язковий · Первинний розгляд зазвичай 24–48 год · Доставка до ЄС",
    } satisfies Localized<string>,
  },

  intro: {
    h2: {
      en: "Custom Metal Fabrication for Non-Standard Products",
      uk: "Нестандартні металеві вироби та конструкції",
    } satisfies Localized<string>,
    body: {
      en: "VAXMetal reviews and manufactures custom metal parts, frames, brackets, enclosures, structures and finished assemblies for commercial and industrial customers. A project can start with production-ready CAD files, but it can also start with a sketch, photograph, sample, reference product or a simple functional requirement. Depending on the product, the manufacturing route can combine laser cutting, CNC machining, sheet-metal bending, TIG or MIG/MAG welding, laser welding, powder coating, assembly and quality control.",
      uk: "VAXMetal розглядає та виготовляє нестандартні металеві деталі, рами, кронштейни, корпуси, конструкції та готові вузли для комерційних і промислових замовників. Проєкт може починатися з готових CAD-файлів, але також із ескізу, фотографії, зразка, посилання на схожий виріб або простого опису функції. Залежно від виробу маршрут може поєднувати лазерне різання, CNC-обробку, згинання листового металу, TIG або MIG/MAG зварювання, лазерне зварювання, порошкове фарбування, складання та контроль якості.",
    } satisfies Localized<string>,
  },

  startWith: {
    h2: { en: "Start with Whatever You Have", uk: "Почніть із того, що у вас вже є" } satisfies Localized<string>,
    lead: {
      en: "A complete RFQ is useful, but it isn't required. Any of the following can be enough to start the conversation.",
      uk: "Повний RFQ корисний, але не обов'язковий. Для першого контакту може вистачити будь-чого з нижче.",
    } satisfies Localized<string>,
    items: [
      {
        title: { en: "An idea", uk: "Ідея" },
        text: {
          en: "Tell us what the product needs to do, where it will be used and what problem it should solve.",
          uk: "Опишіть, що виріб має робити, де використовуватися і яку проблему вирішувати.",
        },
      },
      {
        title: { en: "A photo or screenshot", uk: "Фото або скриншот" },
        text: {
          en: "Show us something similar, an existing installation or the space where the product needs to fit.",
          uk: "Покажіть схожий виріб, існуючий монтаж або місце, куди конструкція має встановлюватися.",
        },
      },
      {
        title: { en: "A rough sketch", uk: "Ескіз від руки" },
        text: {
          en: "A hand drawing with approximate dimensions is often enough for an initial engineering review.",
          uk: "Навіть простий рисунок з приблизними розмірами часто достатній для первинного технічного аналізу.",
        },
      },
      {
        title: { en: "An existing product", uk: "Існуючий виріб" },
        text: {
          en: "Send a reference product that needs to be adapted, reinforced, resized, simplified or reproduced.",
          uk: "Надішліть зразок або посилання на продукт, який потрібно адаптувати, посилити, змінити за розміром або відтворити.",
        },
      },
      {
        title: { en: "Drawings or CAD", uk: "Креслення або CAD" },
        text: {
          en: "STEP, STP, DWG, DXF, PDF or other production documentation can be reviewed directly.",
          uk: "STEP, STP, DWG, DXF, PDF та іншу виробничу документацію можна надсилати одразу.",
        },
      },
      {
        title: { en: "A problem to solve", uk: "Проблема, яку треба вирішити" },
        text: {
          en: "For example: 'We need to mount this equipment on a vehicle and fold it down for transport.'",
          uk: "Наприклад: «Потрібно закріпити це обладнання на автомобілі та складати конструкцію для транспортування».",
        },
      },
    ] satisfies StartWithItem[],
    footer: {
      en: "Not sure what information matters? Send what you know. We'll ask for the rest.",
      uk: "Не знаєте, яка інформація важлива? Надішліть те, що знаєте. Решту ми уточнимо.",
    } satisfies Localized<string>,
  },

  examples: {
    h2: {
      en: "Custom Metal Parts, Products and Structures We Can Review",
      uk: "Які нестандартні металеві вироби ми можемо розглянути",
    } satisfies Localized<string>,
    lead: {
      en: "These examples show the type of projects we can evaluate — they are not a fixed catalogue.",
      uk: "Це приклади типів проєктів для оцінки, а не фіксований каталог.",
    } satisfies Localized<string>,
    items: [
      { en: "Machinery frames and equipment bases", uk: "Рами машин та основи обладнання" },
      { en: "Brackets and mounting systems", uk: "Кронштейни та монтажні системи" },
      { en: "Metal enclosures and cabinets", uk: "Металеві корпуси й шафи" },
      { en: "Vehicle-mounted metal structures", uk: "Конструкції для монтажу на транспорт" },
      { en: "Rooftop and solar-panel support structures", uk: "Дахові конструкції та опори для сонячних панелей" },
      { en: "Telescopic and adjustable structures", uk: "Телескопічні та регульовані конструкції" },
      { en: "Equipment racks and industrial carts", uk: "Стійки для обладнання та промислові візки" },
      { en: "Welded frames and sub-assemblies", uk: "Зварні рами й вузли" },
      { en: "Outdoor steel structures", uk: "Зовнішні сталеві конструкції" },
      { en: "Custom covers, guards and housings", uk: "Захисні кожухи та корпуси" },
      { en: "Prototype fabricated products", uk: "Прототипи металевих виробів" },
      { en: "Multi-process finished assemblies", uk: "Готові вузли з кількох виробничих процесів" },
    ] satisfies Localized<string>[],
    disclaimer: {
      en: "Concept visuals — illustrative examples of project types, not completed VAXMetal projects.",
      uk: "Концептуальні зображення — ілюстративні приклади типів проєктів, а не виконані VAXMetal проєкти.",
    } satisfies Localized<string>,
    images: [
      {
        id: "solar_roof",
        src: "/images/services/custom-metal-fabrication/example-solar-roof.webp",
        alt: {
          en: "Illustrative custom rooftop solar-panel support structure on a commercial van",
          uk: "Ілюстративна дахова конструкція для сонячних панелей на комерційному фургоні",
        },
      },
      {
        id: "machinery_frame",
        src: "/images/services/custom-metal-fabrication/example-machinery-frame.webp",
        alt: {
          en: "Illustrative custom welded machinery frame with machined mounting features",
          uk: "Ілюстративна нестандартна зварна рама для обладнання з точними монтажними елементами",
        },
      },
      {
        id: "enclosure",
        src: "/images/services/custom-metal-fabrication/example-enclosure.webp",
        alt: {
          en: "Illustrative custom sheet-metal industrial equipment enclosure",
          uk: "Ілюстративний нестандартний корпус промислового обладнання з листового металу",
        },
      },
      {
        id: "telescopic",
        src: "/images/services/custom-metal-fabrication/example-telescopic.webp",
        alt: {
          en: "Illustrative adjustable telescopic metal support structure",
          uk: "Ілюстративна регульована телескопічна металева опорна конструкція",
        },
      },
      {
        id: "vehicle_mount",
        src: "/images/services/custom-metal-fabrication/example-vehicle-mount.webp",
        alt: {
          en: "Illustrative custom metal equipment mounting frame on a commercial vehicle",
          uk: "Ілюстративна нестандартна металева рама для монтажу обладнання на комерційному транспорті",
        },
      },
    ] satisfies ExampleImage[],
  },

  processCapabilities: {
    h2: { en: "One Project, Multiple Metalworking Processes", uk: "Один проєкт — кілька процесів металообробки" } satisfies Localized<string>,
    body: {
      en: "You do not need to decide whether a project requires laser cutting, CNC machining, bending or welding before contacting us. We review the geometry, loads, environment, quantity, interfaces and target cost, then define a practical manufacturing route.",
      uk: "Клієнту не потрібно заздалегідь визначати, чи потрібні лазерне різання, CNC, згинання або зварювання. Ми оцінюємо геометрію, навантаження, середовище, кількість, інтерфейси та цільову собівартість і підбираємо практичний маршрут виробництва.",
    } satisfies Localized<string>,
    links: [
      {
        label: { en: "Contract Manufacturing for OEMs", uk: "Контрактне виробництво для OEM" },
        url: { en: "/services/contract-manufacturing-oem", uk: "/services/kontraktne-vyrobnytstvo" },
      },
      {
        label: { en: "Laser Cutting", uk: "Лазерне різання" },
        url: { en: "/services/laser-cutting", uk: "/services/lazerne-rizannya" },
      },
      {
        label: { en: "CNC Turning", uk: "Токарна обробка ЧПУ" },
        url: { en: "/services/cnc-turning", uk: "/services/tokarna-obrobka-chpu" },
      },
      {
        label: { en: "CNC Milling", uk: "Фрезерна обробка ЧПУ" },
        url: { en: "/services/cnc-milling", uk: "/services/frezerna-obrobka-chpu" },
      },
      {
        label: { en: "Sheet Metal & Bending", uk: "Листовий метал та гнуття" },
        url: { en: "/services/sheet-metal-bending", uk: "/services/hnuttya-lystovogo-metalu" },
      },
      {
        label: { en: "Welding", uk: "Зварювальні роботи" },
        url: { en: "/services/welding", uk: "/services/zvaryuvalni-roboty" },
      },
    ] satisfies ProcessLink[],
    secondaryCapabilities: [
      { en: "Powder coating", uk: "Порошкове фарбування" },
      { en: "Assembly", uk: "Складання" },
      { en: "Quality control", uk: "Контроль якості" },
      { en: "Export packaging", uk: "Експортне пакування" },
    ] satisfies Localized<string>[],
    image: "/images/services/custom-metal-fabrication/multi-process.webp",
    imageAlt: {
      en: "Illustration of a metal assembly combining sheet fabrication, machining and fasteners",
      uk: "Ілюстрація металевого вузла, що поєднує листову обробку, CNC та кріплення",
    } satisfies Localized<string>,
  },

  materials: {
    h2: { en: "Metals We Work With", uk: "Матеріали, з якими ми працюємо" } satisfies Localized<string>,
    items: [
      {
        title: { en: "Carbon Steel", uk: "Вуглецева сталь" },
        text: {
          en: "A practical default for welded frames, brackets, machinery components and structural assemblies.",
          uk: "Практичний базовий матеріал для зварних рам, кронштейнів, деталей машин та конструкцій.",
        },
      },
      {
        title: { en: "Stainless Steel", uk: "Нержавіюча сталь" },
        text: {
          en: "For corrosion-resistant, outdoor, hygienic or appearance-sensitive components and assemblies.",
          uk: "Для корозійностійких, зовнішніх, гігієнічних або візуально вимогливих деталей і вузлів.",
        },
      },
      {
        title: { en: "Aluminium", uk: "Алюміній" },
        text: {
          en: "For lightweight structures, covers, brackets and higher-value fabricated or machined parts.",
          uk: "Для легких конструкцій, кожухів, кронштейнів і більш дорогих виробів, де важлива маса.",
        },
      },
    ] satisfies { title: Localized<string>; text: Localized<string> }[],
  },

  workflow: {
    h2: { en: "From an Idea to a Manufacturable Metal Product", uk: "Від ідеї до виробничого виробу" } satisfies Localized<string>,
    steps: [
      {
        n: 1,
        title: { en: "Send what you have", uk: "Надішліть те, що маєте" },
        text: {
          en: "Describe the product or problem and add photos, sketches, links, drawings or CAD if available.",
          uk: "Опишіть виріб або проблему й додайте фото, ескізи, посилання, креслення або CAD.",
        },
      },
      {
        n: 2,
        title: { en: "Feasibility review", uk: "Первинна оцінка" },
        text: {
          en: "We identify the likely construction, materials, manufacturing processes and the information that is still missing.",
          uk: "Визначаємо можливу конструкцію, матеріали, процеси та інформацію, якої ще бракує.",
        },
      },
      {
        n: 3,
        title: { en: "Clarification", uk: "Уточнення" },
        text: {
          en: "We ask a short set of specific questions only where dimensions, loads, interfaces, environment, quantity or critical requirements need clarification.",
          uk: "Ставимо короткий набір конкретних питань щодо розмірів, навантажень, інтерфейсів, середовища, кількості та критичних вимог.",
        },
      },
      {
        n: 4,
        title: { en: "Engineering / DFM", uk: "Інженерія / DFM" },
        text: {
          en: "Where necessary, the design is adjusted for manufacturability, cost, repeatability and assembly.",
          uk: "За потреби адаптуємо конструкцію під технологічність, вартість, повторюваність та складання.",
        },
      },
      {
        n: 5,
        title: { en: "Quotation", uk: "Комерційна пропозиція" },
        text: {
          en: "Once the scope is clear, we confirm price, lead time and the agreed production route.",
          uk: "Після уточнення обсягу фіксуємо ціну, строк і виробничий маршрут.",
        },
      },
      {
        n: 6,
        title: { en: "Prototype or production", uk: "Прототип або виробництво" },
        text: {
          en: "Depending on the project, production can begin with a first article, prototype or initial batch before repeat manufacturing.",
          uk: "Залежно від проєкту можна почати з першого зразка, прототипу або стартової партії.",
        },
      },
      {
        n: 7,
        title: { en: "QC and delivery", uk: "Контроль і доставка" },
        text: {
          en: "Finished parts or assemblies are inspected, packed and prepared for FCA or DAP delivery.",
          uk: "Готові деталі або вузли перевіряються, пакуються та готуються до FCA або DAP доставки.",
        },
      },
    ] satisfies WorkflowStep[],
    responseNote: {
      en: "Initial review normally within 24–48 hours. This is an initial engineering response, not a guaranteed final quotation for every undefined project.",
      uk: "Первинний розгляд зазвичай займає 24–48 годин. Це первинна технічна відповідь, а не гарантія остаточної ціни для будь-якого невизначеного проєкту.",
    } satisfies Localized<string>,
  },

  prototype: {
    h2: { en: "From One Prototype to Repeat Production", uk: "Від одного прототипу до повторного виробництва" } satisfies Localized<string>,
    body: {
      en: "Some custom projects need a first article or prototype before repeat manufacturing. Prototype and low-volume production are available depending on the project, with the option to move into repeat serial production once the design and manufacturing route are validated.",
      uk: "Для частини нестандартних проєктів доцільно спочатку виготовити перший зразок або прототип. Можливість одиничного чи малосерійного виробництва залежить від конкретного проєкту; після перевірки конструкції й технології виріб може перейти у повторне серійне виробництво.",
    } satisfies Localized<string>,
    image: "/images/services/custom-metal-fabrication/sketch-to-product.webp",
    imageAlt: {
      en: "From a rough engineering sketch to a finished fabricated metal assembly",
      uk: "Від інженерного ескізу до готового металевого вузла",
    } satisfies Localized<string>,
  },

  audience: {
    h2: { en: "Built for Commercial and Industrial Projects", uk: "Для комерційних і промислових проєктів" } satisfies Localized<string>,
    body: {
      en: "The page should keep an industrial B2B position rather than read like a consumer welding workshop.",
      uk: "Позиціонування сторінки має залишатися B2B та industrial, а не виглядати як побутова зварювальна майстерня.",
    } satisfies Localized<string>,
    items: [
      { en: "Manufacturers", uk: "Виробники" },
      { en: "Machinery builders", uk: "Машинобудівні компанії" },
      { en: "Engineering companies", uk: "Інженерні компанії" },
      { en: "Product startups", uk: "Продуктові стартапи" },
      { en: "Vehicle builders", uk: "Виробники транспорту" },
      { en: "Construction companies", uk: "Будівельні компанії" },
      { en: "Energy companies", uk: "Енергетичні компанії" },
      { en: "Equipment integrators", uk: "Інтегратори обладнання" },
      { en: "European OEMs", uk: "Європейські OEM" },
    ] satisfies Localized<string>[],
  },

  geo: {
    h2: {
      en: "Custom Metal Fabrication in Ukraine for EU Customers",
      uk: "Виготовлення металевих виробів в Україні для клієнтів з ЄС",
    } satisfies Localized<string>,
    body: {
      en: "VAXMetal combines production in Ukraine with export-oriented delivery to European customers. Projects can be quoted in EUR and prepared for FCA or DAP shipment, with export packaging and documentation matched to the order.",
      uk: "VAXMetal поєднує виробництво в Україні з експортною доставкою європейським клієнтам. Проєкти можуть прораховуватися в EUR і готуватися до FCA або DAP відправлення з експортним пакуванням та документацією відповідно до замовлення.",
    } satisfies Localized<string>,
  },

  whyUs: {
    h2: { en: "Why Use VAXMetal for a Custom Metal Project?", uk: "Чому VAXMetal для нестандартного металевого проєкту" } satisfies Localized<string>,
    items: [
      {
        title: { en: "Engineering before manufacturing", uk: "Інженерний аналіз до виробництва" },
        text: {
          en: "We can review a requirement or sketch, not only production-ready drawings.",
          uk: "Можемо почати з вимоги чи ескізу, а не лише з готового виробничого креслення.",
        },
      },
      {
        title: { en: "Multiple processes in one workflow", uk: "Кілька процесів в одному маршруті" },
        text: {
          en: "Cutting, machining, bending, welding, finishing and assembly can be combined within one project.",
          uk: "Різання, CNC, згинання, зварювання, фініш і складання можна об'єднати в одному проєкті.",
        },
      },
      {
        title: { en: "Prototype to repeat production", uk: "Від прототипу до повторного виробництва" },
        text: {
          en: "Where the project fits, a first article can become a repeatable production item.",
          uk: "Якщо проєкт підходить, перший зразок може стати основою повторюваного серійного виробу.",
        },
      },
      {
        title: { en: "Ukraine → EU delivery", uk: "Україна → ЄС" },
        text: {
          en: "Export-oriented production with FCA / DAP delivery available for European customers.",
          uk: "Експортно орієнтоване виробництво з можливістю FCA / DAP доставки.",
        },
      },
      {
        title: { en: "DFM review", uk: "DFM" },
        text: {
          en: "We look for manufacturability, repeatability and unnecessary cost before production starts.",
          uk: "До запуску дивимося на технологічність, повторюваність і зайві витрати в конструкції.",
        },
      },
    ] satisfies WhyUsItem[],
  },

  seoContent: [
    {
      h2: {
        en: "Manufacturing from Drawings, Sketches, Photos or Samples",
        uk: "Виробництво за кресленням, ескізом, фото або зразком",
      },
      body: {
        en: "A custom fabricated product does not always begin with a complete engineering package. For an initial review, a clear photograph, hand sketch, reference link, sample or functional description can be enough to understand the direction of the project. If a production drawing is missing, we identify which dimensions, interfaces and performance requirements actually matter before moving toward a manufacturable definition. This reduces the amount of technical preparation required before first contact and makes it easier to evaluate unusual or early-stage products.",
        uk: "Нестандартний металевий виріб не завжди починається з повного комплекту документації. Для першого аналізу часто достатньо якісної фотографії, ескізу від руки, посилання на аналог, фізичного зразка або опису функції. Якщо готового виробничого креслення немає, ми визначаємо, які саме розміри, інтерфейси та експлуатаційні вимоги критичні, перш ніж переходити до виробничого визначення. Це дозволяє починати діалог раніше і швидше оцінювати незвичайні або ранні за стадією продукти.",
      },
    },
    {
      h2: {
        en: "Combining Laser Cutting, CNC Machining, Bending and Welding",
        uk: "Поєднання лазерного різання, CNC, згинання та зварювання",
      },
      body: {
        en: "Many non-standard metal products are not a single-process job. A welded enclosure may begin as laser-cut sheet, require press-brake bending, machined inserts, TIG or MIG/MAG welding, finishing and final assembly. A frame may combine tube or sheet fabrication with precision CNC components at mounting or bearing interfaces. The manufacturing route should therefore be selected around the finished function of the product rather than around one machine. VAXMetal's custom-project workflow is designed to review the complete assembly and route each feature through the process that best fits it.",
        uk: "Багато нестандартних металевих продуктів потребують не одного, а кількох процесів. Зварний корпус може починатися з лазерного різання листа, проходити згинання на пресі, отримувати CNC-вставки, TIG або MIG/MAG зварювання, фінішне покриття та складання. Рама може поєднувати зварні елементи з точними фрезерованими компонентами у місцях кріплення. Тому виробничий маршрут варто будувати від функції готового виробу, а не від однієї машини.",
      },
    },
    {
      h2: {
        en: "Custom Steel, Stainless Steel and Aluminium Fabrication",
        uk: "Нестандартні вироби зі сталі, нержавіючої сталі та алюмінію",
      },
      body: {
        en: "Material selection depends on load, corrosion exposure, target weight, finish, temperature, cost and the way the product will be manufactured. Carbon steel is often the most economical option for welded industrial frames and structural assemblies. Stainless steel is appropriate where corrosion resistance, hygiene or exposed finish matters. Aluminium can reduce weight and is useful for mobile, rooftop and higher-value equipment, although the most suitable alloy and process still depend on the design. If the material is not defined yet, the project can be reviewed from the functional requirements first.",
        uk: "Вибір матеріалу залежить від навантаження, корозійного середовища, цільової ваги, покриття, температури, вартості та технології виробництва. Вуглецева сталь часто є найекономічнішим рішенням для зварних промислових рам. Нержавіюча сталь потрібна там, де важлива корозійна стійкість, гігієна або зовнішній вигляд. Алюміній допомагає зменшити масу і добре підходить для мобільних, дахових та інших більш дорогих конструкцій. Якщо матеріал ще не визначений, можна почати з функціональних вимог.",
      },
    },
  ] satisfies SeoContentBlock[],

  faq: [
    {
      question: { en: "Do I need a technical drawing?", uk: "Чи потрібне технічне креслення?" },
      answer: {
        en: "No. A description, photograph, hand sketch, reference product or sample can be enough for an initial review. We will tell you which technical information is still required before quotation or production.",
        uk: "Ні. Для первинного розгляду може вистачити опису, фотографії, ескізу, прикладу схожого виробу або зразка. Ми скажемо, яка технічна інформація ще потрібна до прорахунку чи виробництва.",
      },
    },
    {
      question: { en: "Can you manufacture a metal product from a photo or sketch?", uk: "Чи можна виготовити виріб за фото або ескізом?" },
      answer: {
        en: "Potentially, yes. A photo or sketch can establish the concept, but critical dimensions, loads, interfaces and materials may still need to be confirmed before the design is production-ready.",
        uk: "Потенційно так. Фото чи ескіз можуть задати концепцію, але перед виробництвом необхідно підтвердити критичні розміри, навантаження, інтерфейси та матеріали.",
      },
    },
    {
      question: { en: "I don't know which material or manufacturing process I need. Is that a problem?", uk: "Я не знаю матеріал і технологію. Це проблема?" },
      answer: {
        en: "No. Tell us how the product will be used, what it needs to support, where it will operate and what constraints matter. We can use that information to recommend a practical material and manufacturing route.",
        uk: "Ні. Опишіть, як використовуватиметься виріб, що він має витримувати, де працюватиме та які обмеження важливі. На цій основі можна підібрати практичний матеріал і виробничий маршрут.",
      },
    },
    {
      question: { en: "Can you modify an existing design or product?", uk: "Чи можете ви змінити існуючу конструкцію?" },
      answer: {
        en: "Yes. Existing drawings, photographs, samples or reference products can be reviewed for changes in dimensions, materials, interfaces, strength, weight, finish or manufacturing method.",
        uk: "Так. Можна розглянути існуючі креслення, фото, зразки або референсні вироби й змінити габарити, матеріали, інтерфейси, міцність, вагу, покриття або технологію.",
      },
    },
    {
      question: { en: "Can you produce a prototype before a series?", uk: "Чи можна спочатку виготовити прототип?" },
      answer: {
        en: "Depending on the project, yes. A first article or prototype can be used to validate the design and manufacturing approach before repeat production.",
        uk: "Залежно від проєкту — так. Перший зразок або прототип може використовуватися для перевірки конструкції й технології перед повторним виробництвом.",
      },
    },
    {
      question: { en: "Do you manufacture one-off custom metal parts?", uk: "Чи беретеся за одиничні нестандартні вироби?" },
      answer: {
        en: "Selected one-off or prototype projects can be reviewed, especially where they can lead to repeat production or involve meaningful engineering and fabrication work. Suitability depends on the project.",
        uk: "Окремі одиничні або прототипні проєкти можна розглядати, особливо якщо вони мають потенціал повторного виробництва або містять суттєву інженерну та виробничу складову. Рішення залежить від конкретного запиту.",
      },
    },
    {
      question: { en: "What processes can be combined in one project?", uk: "Які процеси можна поєднати?" },
      answer: {
        en: "A project can combine laser cutting, CNC turning or milling, sheet-metal bending, TIG, laser, MIG/MAG or spot welding, powder coating, assembly, inspection and export packaging as required.",
        uk: "Залежно від проєкту можна поєднувати лазерне різання, CNC токарну та фрезерну обробку, згинання листа, TIG, лазерне, MIG/MAG або точкове зварювання, порошкове фарбування, складання, контроль та експортне пакування.",
      },
    },
    {
      question: { en: "Which metals do you work with?", uk: "З якими металами ви працюєте?" },
      answer: {
        en: "The main materials are carbon steel, stainless steel and aluminium. The exact grade and form depend on the product and manufacturing route.",
        uk: "Основні матеріали — вуглецева сталь, нержавіюча сталь та алюміній. Конкретна марка й форма матеріалу підбираються під виріб та технологію.",
      },
    },
    {
      question: { en: "Can you deliver custom fabricated products to the EU?", uk: "Чи доставляєте до ЄС?" },
      answer: {
        en: "Yes. VAXMetal is positioned for Ukraine-to-EU production and can prepare orders for FCA or DAP delivery, depending on the project and destination.",
        uk: "Так. VAXMetal орієнтований на виробництво в Україні для європейських клієнтів і може готувати замовлення до FCA або DAP доставки залежно від проєкту й напрямку.",
      },
    },
    {
      question: { en: "Can you sign an NDA?", uk: "Чи можна підписати NDA?" },
      answer: {
        en: "If confidential drawings or product information are involved, indicate that an NDA is required before detailed file exchange and we can arrange the next step.",
        uk: "Таку потребу можна зазначити у формі до передачі конфіденційних креслень або детальної продуктової інформації.",
      },
    },
    {
      question: { en: "What happens after I submit a project?", uk: "Що відбувається після відправки заявки?" },
      answer: {
        en: "We first review feasibility and identify missing information. The next response may be a quotation, a short set of engineering questions, a request for additional files or a clear explanation that the project is not a good fit.",
        uk: "Спочатку ми перевіряємо здійсненність і визначаємо, якої інформації бракує. Наступною відповіддю може бути ціна, короткий список інженерних питань, запит додаткових файлів або чесне повідомлення, що проєкт нам не підходить.",
      },
    },
  ] satisfies CustomFabFaqItem[],

  formCopy: {
    h2: { en: "Tell Us What You Need", uk: "Опишіть, що вам потрібно" } satisfies Localized<string>,
    lead: {
      en: "You do not need to write a formal RFQ. Describe the result, problem or application in ordinary language and add anything that helps explain it.",
      uk: "Не потрібно складати формальний RFQ. Опишіть результат, проблему або застосування звичайними словами й додайте все, що допоможе пояснити задум.",
    } satisfies Localized<string>,
    descriptionLabel: { en: "Describe your project", uk: "Опишіть ваш проєкт" } satisfies Localized<string>,
    textareaPlaceholder: {
      en: "Example: We need a telescopic metal structure mounted on a vehicle roof that supports solar panels when parked and folds down for transport.",
      uk: "Наприклад: Потрібна телескопічна металева конструкція на даху автомобіля, яка тримає сонячні панелі на стоянці та складається для руху.",
    } satisfies Localized<string>,
    uploadTitle: { en: "Add anything that helps explain the project", uk: "Додайте все, що допомагає пояснити проєкт" } satisfies Localized<string>,
    uploadHelp: {
      en: "Photos, screenshots, hand sketches, drawings, CAD files or documents",
      uk: "Фото, скриншоти, ескізи від руки, креслення, CAD-файли або документи",
    } satisfies Localized<string>,
    referenceUrlLabel: {
      en: "Link to a similar product or reference — optional",
      uk: "Посилання на схожий виріб або референс — необов'язково",
    } satisfies Localized<string>,
    approxDimensionsLabel: { en: "Approximate dimensions — optional", uk: "Приблизні розміри — необов'язково" } satisfies Localized<string>,
    quantityLabel: { en: "Quantity", uk: "Кількість" } satisfies Localized<string>,
    quantityOptions: ["1", "2-10", "10-50", "50-100", "100-500", "500+", "Not sure yet"],
    quantityOptionsUk: ["1", "2-10", "10-50", "50-100", "100-500", "500+", "Ще не визначено"],
    materialLabel: { en: "Material", uk: "Матеріал" } satisfies Localized<string>,
    materialOptions: ["Steel", "Stainless steel", "Aluminium", "Other", "Not sure — recommend one"],
    materialOptionsUk: ["Сталь", "Нержавіюча сталь", "Алюміній", "Інше", "Не знаю — порадьте"],
    timelineLabel: { en: "Timeline", uk: "Строк" } satisfies Localized<string>,
    timelineOptions: ["As soon as possible", "Within 1 month", "1-3 months", "3+ months", "Flexible / Not sure"],
    timelineOptionsUk: ["Якнайшвидше", "Протягом 1 місяця", "1-3 місяці", "3+ місяців", "Гнучко / не визначено"],
    deliveryCountryLabel: { en: "Delivery country — optional", uk: "Країна доставки — необов'язково" } satisfies Localized<string>,
    deliveryCityLabel: { en: "Delivery city — optional", uk: "Місто доставки — необов'язково" } satisfies Localized<string>,
    ndaLabel: { en: "I need an NDA before sharing detailed drawings", uk: "Потрібен NDA перед передачею детальних креслень" } satisfies Localized<string>,
    ndaLine: {
      en: "Need an NDA before sharing detailed drawings? Tell us in the form.",
      uk: "Потрібен NDA перед передачею детальних креслень? Вкажіть це у формі.",
    } satisfies Localized<string>,
    phoneLabel: { en: "Phone / WhatsApp — optional", uk: "Телефон / WhatsApp — необов'язково" } satisfies Localized<string>,
    submitLabel: { en: "Send My Project", uk: "Надіслати проєкт" } satisfies Localized<string>,
    submitNote: {
      en: "We'll review the request and normally reply within 24–48 hours with the next step.",
      uk: "Зазвичай ми переглядаємо запит і відповідаємо з наступним кроком протягом 24–48 годин.",
    } satisfies Localized<string>,
  },

  success: {
    h1: { en: "Project received.", uk: "Проєкт отримано." } satisfies Localized<string>,
    body: {
      en: "We'll review what you've sent and determine the next technical step. If something important is missing, we'll ask only for the information needed to evaluate the project.",
      uk: "Ми переглянемо матеріали й визначимо наступний технічний крок. Якщо бракує важливої інформації, запитаємо лише те, що потрібно для оцінки.",
    } satisfies Localized<string>,
    note: {
      en: "Typical initial response: 24–48 hours.",
      uk: "Типовий первинний строк відповіді: 24–48 год.",
    } satisfies Localized<string>,
  },

  hero_image: {
    src: "/images/services/custom-metal-fabrication/hero.webp",
    alt: {
      en: "Custom engineered metal assembly shown with technical drawing details",
      uk: "Нестандартний металевий вузол на тлі технічних креслень",
    } satisfies Localized<string>,
  },
} as const;
