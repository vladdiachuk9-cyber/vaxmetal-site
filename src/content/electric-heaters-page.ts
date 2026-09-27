import type { Localized } from "./types";

export interface HeaterProductCard {
  name: string;
  title: Localized<string>;
  text: Localized<string>;
}

export interface HeaterAudience {
  title: Localized<string>;
  text: Localized<string>;
}

export interface HeaterFaqItem {
  question: Localized<string>;
  answer: Localized<string>;
}

/**
 * Rich, page-specific copy for the electric-heaters industry page — kept out
 * of the shared IndustryContent shape for the same reason as
 * anti-drone-page.ts / telescopic-mast-page.ts. Copy is sourced from
 * VAXMetal_Electric_Heaters_and_AntiDrone_AI_SEO_FINAL's
 * 03_PAGE_CONTENT_UA.md / 04_PAGE_CONTENT_EN.md, product-family naming from
 * 09_NEUTRAL_NAMING_OPTIONS.md. No reference imagery from the package is
 * used on the live page — the supplied "sanitized" crops still contained
 * baked-in third-party marketing text and at least one competitor model
 * code, so the page ships as a clean text/icon-driven design instead, per
 * the package's own fallback instruction ("if no clean photo exists...").
 */
export const electricHeatersPage = {
  hero: {
    eyebrow: { en: "ELECTRIC HEATING / OEM", uk: "ЕЛЕКТРИЧНЕ ОПАЛЕННЯ / OEM" } satisfies Localized<string>,
    title: {
      en: "Electric Infrared Heaters & Heating Panels",
      uk: "Електричні інфрачервоні обігрівачі та нагрівальні панелі",
    } satisfies Localized<string>,
    lead: {
      en: "OEM and contract manufacturing of ceramic, metal, glass and industrial electric heaters — from housings and mounting hardware to finishing, controls, final assembly and packaging.",
      uk: "OEM- та контрактне виробництво керамічних, металевих, скляних і промислових електричних обігрівачів — від конструкції корпусу та кріплень до фінішного складання, керування й пакування.",
    } satisfies Localized<string>,
    supporting: {
      en: "From a prototype or existing sample to a repeatable product series under your brand.",
      uk: "Від прототипу або існуючого зразка до повторюваної серії під вашим брендом.",
    } satisfies Localized<string>,
    ctaPrimary: { en: "Request a Manufacturing Quote", uk: "Отримати розрахунок" } satisfies Localized<string>,
    ctaSecondary: { en: "Send a Model or Drawing", uk: "Надіслати модель або креслення" } satisfies Localized<string>,
    microcopy: {
      en: "Photo · sample · STEP · DWG · DXF · PDF",
      uk: "Фото · зразок · STEP · DWG · DXF · PDF",
    } satisfies Localized<string>,
  },

  keyFacts: {
    title: { en: "Key Manufacturing Facts", uk: "Ключові виробничі факти" } satisfies Localized<string>,
    items: {
      en: [
        "Product families: VAXTherm panel heaters, VAXDry heated towel rails, VAXRay industrial/outdoor heaters.",
        "Project input: photo, sample, drawing or specification.",
        "Manufacturing scope: fabricated parts, brackets, finishing, assembly and packaging.",
        "Supply format: OEM, private label, pilot batches and repeat production.",
        "Buyer types: heater brands, distributors, HVAC companies and integrators.",
      ],
      uk: [
        "Лінійки: VAXTherm, VAXDry та VAXRay.",
        "Вхідні дані: фото, зразок, креслення або специфікація.",
        "Виробничий обсяг: корпусні деталі, кріплення, фініш, складання та пакування.",
        "Формат: OEM, private label, тестові та повторні партії.",
        "Для кого: бренди опалювальної техніки, дистриб'ютори, HVAC-компанії та інтегратори.",
      ],
    } satisfies Localized<string[]>,
  },

  products: {
    title: { en: "What We Can Manufacture", uk: "Що ми можемо виробляти" } satisfies Localized<string>,
    subtitle: {
      en: "VAXMetal can operate as a manufacturing partner for heating brands, distributors, HVAC companies, contractors and integrators that need a finished electric heater or manufactured assemblies for their own product line.",
      uk: "VAXMetal може працювати як виробничий партнер для брендів, дистриб'юторів, HVAC-компаній, забудовників та інтеграторів, яким потрібен готовий електричний обігрівач або окремі вузли для власної продуктової лінійки.",
    } satisfies Localized<string>,
    items: [
      {
        name: "VAXTherm Ceramic",
        title: { en: "VAXTherm Ceramic", uk: "VAXTherm Ceramic" },
        text: {
          en: "Ceramic infrared heating panels. Wall-mounted and mobile electric panels with ceramic front surfaces. Dimensions, power, finish, mounting and control options can be adapted to the target product series.",
          uk: "Керамічні інфрачервоні нагрівальні панелі. Настінні та мобільні електричні панелі з керамічною лицьовою поверхнею. Конструкцію, габарити, потужність, колір, кріплення та варіант керування можна адаптувати під конкретну серію.",
        },
      },
      {
        name: "VAXTherm Metal",
        title: { en: "VAXTherm Metal", uk: "VAXTherm Metal" },
        text: {
          en: "Metal infrared heating panels. Slim panel heaters in fabricated metal housings for residential, office and commercial applications. Different mounting formats, finishes and thermostat configurations can be considered.",
          uk: "Металеві інфрачервоні панелі. Тонкі панельні обігрівачі в металевому корпусі для житлових, офісних та комерційних приміщень. Можливі різні формати монтажу, фінішне покриття та терморегуляція.",
        },
      },
      {
        name: "VAXTherm Glass",
        title: { en: "VAXTherm Glass", uk: "VAXTherm Glass" },
        text: {
          en: "Glass and decorative heating panels. Electric heating panels with glass or decorative front surfaces for products where appearance and interior integration are part of the specification.",
          uk: "Скляні та декоративні нагрівальні панелі. Електричні нагрівальні панелі зі скляною або декоративною лицьовою частиною для проєктів, де важливий зовнішній вигляд виробу та інтеграція в інтер'єр.",
        },
      },
      {
        name: "VAXTherm Hybrid",
        title: { en: "VAXTherm Hybrid", uk: "VAXTherm Hybrid" },
        text: {
          en: "Hybrid infrared + convection heaters. Heater constructions that combine infrared heating with a convection component for product lines that require faster air heating while retaining a panel format.",
          uk: "Гібридні ІЧ + конвекційні обігрівачі. Конструкції, що поєднують інфрачервоний нагрів із конвекційною складовою. Підходять для серій, де замовник хоче швидший прогрів повітря разом із панельним форм-фактором.",
        },
      },
      {
        name: "VAXDry Ceramic / Glass",
        title: { en: "VAXDry Ceramic / Glass", uk: "VAXDry Ceramic / Glass" },
        text: {
          en: "Electric heated towel rails with ceramic or glass panels. Wall-mounted bathroom products combining a heating panel with metal towel bars. Geometry, rail count, materials and control configuration can be adapted for the program.",
          uk: "Електричні рушникосушки з керамічною або скляною панеллю. Настінні вироби для ванних кімнат, що поєднують нагрівальну панель із металевими рейками для рушників. Можлива адаптація геометрії, кількості рейок, матеріалів і керування.",
        },
      },
      {
        name: "VAXRay Industrial / Outdoor",
        title: { en: "VAXRay Industrial / Outdoor", uk: "VAXRay Industrial / Outdoor" },
        text: {
          en: "Industrial and outdoor infrared heaters. Higher-power suspended or wall-mounted solutions for workshops, warehouses, production areas, terraces, pavilions and other applications requiring local directional heating.",
          uk: "Промислові та зовнішні інфрачервоні обігрівачі. Потужніші підвісні або настінні рішення для майстерень, складів, виробничих приміщень, терас, павільйонів та інших зон, де потрібен локальний спрямований нагрів.",
        },
      },
    ] satisfies HeaterProductCard[],
    cta: { en: "Discuss Your Product", uk: "Обговорити вашу модель" } satisfies Localized<string>,
  },

  oemPrivateLabel: {
    title: { en: "OEM & Private-Label Manufacturing", uk: "OEM та private-label виробництво" } satisfies Localized<string>,
    intro: {
      en: "You do not have to develop the product from zero. A project can start from an existing heater, physical sample, drawing, photo or target specification.",
      uk: "Не обов'язково розробляти продукт з нуля. Ми можемо почати з вашої існуючої моделі, зразка, креслення, фізичного зразка, фото або цільової специфікації.",
    } satisfies Localized<string>,
    itemsLabel: {
      en: "Depending on the product, the manufacturing program can define:",
      uk: "Залежно від проєкту можна погодити:",
    } satisfies Localized<string>,
    items: {
      en: [
        "Dimensions and power range",
        "Housing and front-panel materials",
        "Colour, powder coating and decorative finish",
        "Wall, floor or ceiling mounting",
        "Mechanical, digital or Wi-Fi control using an agreed component set",
        "Feet, wheels, brackets and accessories",
        "Marking, packaging and private label",
        "Pilot batches and repeat production",
      ],
      uk: [
        "Розміри та потужність",
        "Матеріал корпусу й лицьової панелі",
        "Колір, порошкове фарбування та декоративний фініш",
        "Настінне, підлогове або стельове кріплення",
        "Механічний, цифровий або Wi-Fi контроль на погодженій компонентній базі",
        "Ніжки, колеса, кронштейни та інші аксесуари",
        "Маркування, упаковку та private label",
        "Тестову партію та подальше серійне виробництво",
      ],
    } satisfies Localized<string[]>,
    closing: {
      en: "You define the product and market. We engineer the manufacturing route around it.",
      uk: "Ви задаєте продукт і ринок — ми опрацьовуємо виробничу частину.",
    } satisfies Localized<string>,
    cta: { en: "Request an OEM Proposal", uk: "Запросити OEM-пропозицію" } satisfies Localized<string>,
  },

  manufacturingCapabilities: {
    title: { en: "One Product, Multiple Manufacturing Processes", uk: "Один продукт — кілька виробничих процесів" } satisfies Localized<string>,
    intro: {
      en: "An electric heater is more than a sheet-metal enclosure. A repeatable finished product may require forming, welding, mounting components, finishing, a heating assembly, electrical components, final assembly, QC and packaging.",
      uk: "Електричний обігрівач — це не лише лист металу. Серійний виріб може вимагати корпусу, гнуття, зварювання, кріплень, фінішного покриття, нагрівального вузла, електричних компонентів, складання, контролю та пакування.",
    } satisfies Localized<string>,
    items: {
      en: [
        "Laser cutting",
        "Sheet-metal forming and CNC bending",
        "Machining of selected components where required",
        "TIG, MIG/MAG, laser and spot welding",
        "Powder coating",
        "Brackets, feet and enclosure components",
        "Final assembly",
        "Quality control",
        "Serial and export packaging",
      ],
      uk: [
        "Лазерне різання",
        "Листовий метал та CNC-гнуття",
        "Механічна обробка окремих деталей",
        "TIG, MIG/MAG, лазерне та точкове зварювання",
        "Порошкове фарбування",
        "Виготовлення кронштейнів, ніжок і корпусних деталей",
        "Фінальне складання",
        "Контроль якості",
        "Пакування для серійних та експортних поставок",
      ],
    } satisfies Localized<string[]>,
    closing: {
      en: "A project can start from production-ready technical documentation or from a physical sample, photo or functional specification.",
      uk: "Проєкт може починатися як з готової технічної документації, так і з фізичного зразка або фото.",
    } satisfies Localized<string>,
  },

  whoThisIsFor: {
    title: { en: "Who This Is For", uk: "Для кого це рішення" } satisfies Localized<string>,
    items: [
      {
        title: { en: "Heating Equipment Brands", uk: "Бренди опалювальної техніки" },
        text: {
          en: "Manufacturing of existing or new models under your brand.",
          uk: "Виробництво існуючих або нових моделей під вашим брендом.",
        },
      },
      {
        title: { en: "Distributors & Retail Chains", uk: "Дистриб'ютори та торгові мережі" },
        text: {
          en: "Private-label series without building a dedicated production line.",
          uk: "Private-label серії для власного асортименту без створення окремого виробництва.",
        },
      },
      {
        title: { en: "HVAC & Installation Companies", uk: "HVAC та монтажні компанії" },
        text: {
          en: "Panel or industrial heaters configured for commercial projects.",
          uk: "Панельні або промислові обігрівачі під конкретні комерційні проєкти.",
        },
      },
      {
        title: { en: "Developers & Fit-Out Contractors", uk: "Забудовники та fit-out підрядники" },
        text: {
          en: "Repeat products for apartments, offices, hotels, bathrooms and commercial spaces.",
          uk: "Серійні рішення для квартир, офісів, готелів, санвузлів та комерційних приміщень.",
        },
      },
      {
        title: { en: "Industrial Customers", uk: "Промислові замовники" },
        text: {
          en: "Local or zoned heating for workshops, warehouses, production zones and technical spaces.",
          uk: "Локальний або зональний нагрів для майстерень, складів, виробничих зон і технічних приміщень.",
        },
      },
    ] satisfies HeaterAudience[],
  },

  productionExperience: {
    title: { en: "Heating Product Manufacturing Experience", uk: "Досвід виробництва нагрівальних панелей" } satisfies Localized<string>,
    text: {
      en: "The team has practical manufacturing experience with panel and infrared electric heaters across residential, commercial and industrial configurations.",
      uk: "Команда має практичний досвід виробництва панельних та інфрачервоних електричних обігрівачів у побутових, комерційних і промислових конфігураціях.",
    } satisfies Localized<string>,
    supporting: {
      en: "A new project does not have to follow a legacy model range: the product can be adapted around your dimensions, design, components, target market and sales format.",
      uk: "У межах нового проєкту ми не прив'язуємо замовника до старої модельної лінійки: конструкцію можна адаптувати під ваші розміри, дизайн, компоненти, цільовий ринок та формат продажу.",
    } satisfies Localized<string>,
  },

  rfqPrep: {
    title: { en: "What to Send for a Quote", uk: "Що надіслати для розрахунку" } satisfies Localized<string>,
    intro: {
      en: "A complete engineering package is not required for the initial review. Send what you already have:",
      uk: "Для первинної оцінки не потрібен ідеальний комплект документації. Надішліть те, що вже є:",
    } satisfies Localized<string>,
    items: {
      en: [
        "Heater type",
        "Photo, sample or drawing",
        "Approximate dimensions",
        "Required power or power range",
        "Front-panel material",
        "Preferred control type",
        "Batch quantity and, if known, annual volume",
        "Target country / market",
        "Certification requirements",
        "Packaging and private-label requirements",
        "Target launch or delivery date",
      ],
      uk: [
        "Тип обігрівача",
        "Фото, зразок або креслення",
        "Орієнтовні габарити",
        "Необхідну потужність або діапазон потужностей",
        "Матеріал лицьової панелі",
        "Бажаний тип керування",
        "Кількість у партії та, якщо відомо, річний обсяг",
        "Країну / ринок продажу",
        "Вимоги до сертифікації",
        "Вимоги до упаковки та private label",
        "Бажаний строк запуску",
      ],
    } satisfies Localized<string[]>,
    closing: {
      en: "We will review the information and identify what still needs to be defined before technical and commercial quotation.",
      uk: "На основі цих даних ми визначимо, що потрібно уточнити для технічного та комерційного розрахунку.",
    } satisfies Localized<string>,
    cta: { en: "Send Project Information", uk: "Надіслати вихідні дані" } satisfies Localized<string>,
  },

  rfq: {
    title: { en: "Request a Manufacturing Proposal", uk: "Отримайте виробничу пропозицію" } satisfies Localized<string>,
    subtitle: {
      en: "Describe the product or upload a drawing, photo or specification. We will review the construction, expected series volume and required manufacturing processes and return with the next step.",
      uk: "Опишіть модель або завантажте креслення, фото чи специфікацію. Ми розглянемо конструкцію, серійність і необхідні виробничі процеси та повернемося з наступним кроком.",
    } satisfies Localized<string>,
    productTypeLabel: { en: "Product type", uk: "Тип продукту" } satisfies Localized<string>,
    productTypeOptions: {
      en: [
        "VAXTherm Ceramic",
        "VAXTherm Metal",
        "VAXTherm Glass",
        "VAXTherm Hybrid",
        "VAXDry Ceramic / Glass",
        "VAXRay Industrial / Outdoor",
        "Other / custom",
      ],
      uk: [
        "VAXTherm Ceramic",
        "VAXTherm Metal",
        "VAXTherm Glass",
        "VAXTherm Hybrid",
        "VAXDry Ceramic / Glass",
        "VAXRay Industrial / Outdoor",
        "Інше / індивідуальне",
      ],
    } satisfies Localized<string[]>,
    descriptionLabel: { en: "Project description", uk: "Опис проєкту" } satisfies Localized<string>,
    textareaPlaceholder: {
      en: "Describe the target heater, reference product or manufacturing scope.",
      uk: "Опишіть цільовий обігрівач, зразок для орієнтиру або обсяг виробництва.",
    } satisfies Localized<string>,
    targetPowerLabel: { en: "Target power / range", uk: "Потужність / діапазон" } satisfies Localized<string>,
    approxDimensionsLabel: { en: "Approximate dimensions", uk: "Орієнтовні габарити" } satisfies Localized<string>,
    quantityLabel: { en: "Quantity", uk: "Кількість" } satisfies Localized<string>,
    annualQuantityLabel: { en: "Annual quantity (optional)", uk: "Річний обсяг (опційно)" } satisfies Localized<string>,
    targetMarketLabel: { en: "Target country / market", uk: "Країна / ринок" } satisfies Localized<string>,
    frontMaterialLabel: { en: "Front-panel material", uk: "Матеріал лицьової панелі" } satisfies Localized<string>,
    frontMaterialOptions: {
      en: ["Metal", "Ceramic", "Glass", "Other"],
      uk: ["Метал", "Кераміка", "Скло", "Інше"],
    } satisfies Localized<string[]>,
    controlTypeLabel: { en: "Thermostat / control", uk: "Термостат / керування" } satisfies Localized<string>,
    controlTypeOptions: {
      en: ["None", "Mechanical", "Digital", "Wi-Fi", "Customer-specified"],
      uk: ["Без керування", "Механічне", "Цифрове", "Wi-Fi", "За специфікацією замовника"],
    } satisfies Localized<string[]>,
    mountingTypeLabel: { en: "Mounting", uk: "Кріплення" } satisfies Localized<string>,
    mountingTypeOptions: {
      en: ["Wall", "Floor", "Ceiling", "Custom"],
      uk: ["Настінне", "Підлогове", "Стельове", "Індивідуальне"],
    } satisfies Localized<string[]>,
    privateLabelLabel: { en: "Branding / private label required?", uk: "Потрібен private label / брендування?" } satisfies Localized<string>,
    requiredCertificationLabel: { en: "Required certification / market standard", uk: "Вимоги до сертифікації / стандарту ринку" } satisfies Localized<string>,
    deliveryDateLabel: { en: "Target delivery date", uk: "Бажаний строк постачання" } satisfies Localized<string>,
    uploadTitle: { en: "Attachments", uk: "Файли" } satisfies Localized<string>,
    uploadHelp: {
      en: "STEP, STP, DXF, DWG, PDF, JPG, PNG or ZIP",
      uk: "STEP, STP, DXF, DWG, PDF, JPG, PNG або ZIP",
    } satisfies Localized<string>,
    nameLabel: { en: "Name", uk: "Ім'я" } satisfies Localized<string>,
    companyLabel: { en: "Company", uk: "Компанія" } satisfies Localized<string>,
    phoneLabel: { en: "Phone", uk: "Телефон" } satisfies Localized<string>,
    emailLabel: { en: "Email", uk: "Email" } satisfies Localized<string>,
    submitLabel: { en: "Send RFQ", uk: "Надіслати запит" } satisfies Localized<string>,
    successTitle: { en: "Request received", uk: "Заявку отримано" } satisfies Localized<string>,
    successBody: {
      en: "A manufacturing engineer will review your request and get back to you with a proposal.",
      uk: "Інженер розгляне вашу заявку та надішле пропозицію.",
    } satisfies Localized<string>,
  },

  faq: {
    title: { en: "FAQ", uk: "Часті запитання" } satisfies Localized<string>,
    items: [
      {
        question: { en: "Do you sell individual retail heaters?", uk: "Ви продаєте готові обігрівачі поштучно?" },
        answer: {
          en: "VAXMetal is primarily a B2B and contract-manufacturing supplier. The focus is on batches, OEM/private-label programs and products manufactured to customer requirements rather than a traditional retail web shop.",
          uk: "Основний формат VAXMetal — B2B та контрактне виробництво. Ми орієнтуємося на партії, OEM/private-label проєкти та виробництво під вимоги замовника, а не на класичний роздрібний інтернет-магазин.",
        },
      },
      {
        question: { en: "Do I need a finished drawing?", uk: "Чи потрібне готове креслення?" },
        answer: {
          en: "No. A photo, physical sample, sketch or short specification can be enough for the initial review. We will identify which dimensions and technical parameters are still required for quotation.",
          uk: "Ні. Для первинного розгляду достатньо фото, зразка, посилання на аналог, ескізу або короткої специфікації. Далі ми визначимо, яких розмірів і технічних параметрів бракує для розрахунку.",
        },
      },
      {
        question: { en: "Can you manufacture an alternative to an existing heater model?", uk: "Чи можете ви виготовити аналог існуючої моделі?" },
        answer: {
          en: "We can review localization or alternative manufacturing from a sample or technical documentation, provided the customer has the legal right to use the design and branding involved.",
          uk: "Можемо оцінити локалізацію або альтернативне виробництво за зразком чи технічною документацією, якщо замовник має законні права на конструкцію та брендинг.",
        },
      },
      {
        question: { en: "Is private-label manufacturing available?", uk: "Чи можливий private label?" },
        answer: {
          en: "Yes. Marking, colour, packaging and branding can be discussed as part of an OEM manufacturing program.",
          uk: "Так, формат маркування, кольору, упаковки та брендування можна погодити в межах OEM-проєкту.",
        },
      },
      {
        question: { en: "What materials can be used?", uk: "Які матеріали можуть використовуватися?" },
        answer: {
          en: "Depending on the product, the construction may include sheet steel, stainless steel, aluminium for selected components, ceramic or glass front panels and other agreed materials.",
          uk: "Залежно від моделі це можуть бути листова сталь, нержавіюча сталь, алюміній для окремих деталей, керамічні або скляні лицьові панелі та інші погоджені матеріали.",
        },
      },
      {
        question: { en: "Can you integrate a thermostat or Wi-Fi control?", uk: "Чи можна інтегрувати термостат або Wi-Fi керування?" },
        answer: {
          en: "These configurations can be considered using an agreed component set. The control architecture, electrical components and certification requirements are defined for each project.",
          uk: "Такі варіанти можна розглядати на погодженій компонентній базі. Конкретна схема керування, електричні компоненти та сертифікаційні вимоги узгоджуються для кожного проєкту окремо.",
        },
      },
      {
        question: { en: "Can you manufacture industrial infrared heaters?", uk: "Чи можете ви виробляти промислові інфрачервоні обігрівачі?" },
        answer: {
          en: "Yes. Suspended, wall-mounted and other industrial configurations can be reviewed around the required power, geometry, mounting method and operating environment.",
          uk: "Так. Можемо розглядати підвісні, настінні та інші промислові конфігурації під задану потужність, геометрію, спосіб монтажу та умови експлуатації.",
        },
      },
      {
        question: { en: "Can you supply outside Ukraine?", uk: "Чи постачаєте за межі України?" },
        answer: {
          en: "VAXMetal works with export projects. Delivery feasibility and terms depend on the product, destination, certification requirements and order volume.",
          uk: "VAXMetal працює з експортними проєктами. Можливість і умови постачання залежать від продукту, країни призначення, сертифікаційних вимог та обсягу партії.",
        },
      },
    ] satisfies HeaterFaqItem[],
  },

  finalCta: {
    title: {
      en: "Need Your Own Electric Heater Line — or an Alternative Manufacturer for an Existing Model?",
      uk: "Потрібна власна лінійка електричних обігрівачів або виробництво існуючої моделі?",
    } satisfies Localized<string>,
    subtitle: {
      en: "Send a photo, drawing, sample or short specification. We will review the manufacturing route and define the next step toward quotation.",
      uk: "Надішліть фото, креслення, зразок або коротку специфікацію — ми розглянемо виробничий маршрут і підготуємо наступний крок для прорахунку.",
    } satisfies Localized<string>,
    cta: { en: "Request a Manufacturing Quote", uk: "Отримати розрахунок" } satisfies Localized<string>,
  },
} as const;
