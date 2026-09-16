import type { Localized } from "./types";

export interface AntiDroneProductCard {
  title: Localized<string>;
  text: Localized<string>;
  cta: Localized<string>;
}

export interface AntiDroneProcessStep {
  step: string;
  title: Localized<string>;
  text: Localized<string>;
}

export interface AntiDroneApplication {
  icon: "industrial" | "vehicles" | "temporary" | "oem";
  title: Localized<string>;
  text: Localized<string>;
}

export interface AntiDroneFaqItem {
  question: Localized<string>;
  answer: Localized<string>;
}

/**
 * Rich, page-specific copy for the anti-drone protection industry page —
 * kept out of the shared IndustryContent shape for the same reason as
 * telescopic-mast-page.ts. Copy is sourced from
 * VAXMetal_Anti_Drone_Protection_Package/02_CONTENT/{EN,UA}/page_content_*.md,
 * with UA and EN treated as separately-tuned copy (not literal translations)
 * per 06_CLAUDE/CLAUDE_IMPLEMENTATION_PROMPT.md.
 */
export const antiDronePage = {
  hero: {
    title: {
      en: "Anti-Drone Netting & Protective Steel Structures",
      uk: "Антидронові сітки та захисні металеві конструкції",
    } satisfies Localized<string>,
    subhead: {
      en: "Custom steel structures, support systems and mechanical components for anti-drone netting and physical barriers — engineered and manufactured to your requirements.",
      uk: "Металеві конструкції, опорні системи та механічні компоненти для антидронової сітки й фізичних бар'єрів — за вашими вимогами.",
    } satisfies Localized<string>,
    supporting: {
      en: "From one-off systems to repeat OEM production.",
      uk: "Від одиничного комплекту до серійного виробництва.",
    } satisfies Localized<string>,
    ctaPrimary: { en: "Request an Engineering Quote", uk: "Отримати розрахунок" } satisfies Localized<string>,
    ctaSecondary: { en: "Upload a Drawing or Photo", uk: "Надіслати фото або креслення" } satisfies Localized<string>,
    microcopy: {
      en: "Photo · Sketch · STEP · DWG · DXF · PDF",
      uk: "Фото · ескіз · STEP · DWG · DXF · PDF",
    } satisfies Localized<string>,
    claimsNote: {
      en: "An additional physical protection layer configured according to the asset and project requirements.",
      uk: "Додатковий фізичний бар'єр, конфігурація якого визначається відповідно до конкретного об'єкта та вимог проєкту.",
    } satisfies Localized<string>,
  },

  products: {
    title: { en: "What We Manufacture", uk: "Що ми виготовляємо" } satisfies Localized<string>,
    subtitle: {
      en: "Physical anti-drone protection can range from a simple netting barrier to a complete steel structure engineered around a specific vehicle, piece of equipment or industrial asset. VAXMetal manufactures and supplies configurations according to each project.",
      uk: "Антидроновий захист може бути як простим сітковим бар'єром, так і повноцінною металевою конструкцією, спроєктованою під конкретний автомобіль, обладнання або об'єкт. VAXMetal комплектує рішення відповідно до задачі замовника.",
    } satisfies Localized<string>,
    items: [
      {
        title: { en: "Protective Netting", uk: "Антидронове полотно" },
        text: {
          en: "Polymer, technical and reinforced netting options selected according to the application, dimensions and project requirements. Netting can be supplied separately or integrated into a complete structural solution.",
          uk: "Полімерні, технічні та посилені варіанти сітки залежно від конфігурації, розмірів та умов використання. Полотно може постачатися окремо або як частина комплектного рішення.",
        },
        cta: { en: "Request Pricing", uk: "Отримати пропозицію" },
      },
      {
        title: { en: "Custom Protection Kits", uk: "Комплект під ваші розміри" },
        text: {
          en: "Netting, fabricated steel components, mounting hardware and required accessories supplied as one system. Send us approximate dimensions, photos or a sketch and we can review the required configuration.",
          uk: "Сітка, металеві елементи, кріплення та необхідні комплектуючі в одному замовленні. Надішліть приблизні габарити, фото або ескіз — ми запропонуємо конфігурацію під ваш об'єкт.",
        },
        cta: { en: "Request a Kit Quote", uk: "Розрахувати комплект" },
      },
      {
        title: { en: "Vehicle Protection Frames", uk: "Каркаси для автомобілів і техніки" },
        text: {
          en: "Custom steel frames and structural components for pickups, vans, special-purpose vehicles and other mobile platforms. Each system is manufactured around the specific vehicle geometry or customer-defined dimensions.",
          uk: "Металеві захисні каркаси та окремі конструктивні елементи для пікапів, бусів, спеціальної техніки та інших платформ. Конструкція виготовляється під конкретний автомобіль або задані габарити.",
        },
        cta: { en: "Request a Vehicle Frame Quote", uk: "Розрахувати каркас" },
      },
      {
        title: { en: "Protective Structures for Fixed Assets", uk: "Стаціонарні захисні конструкції" },
        text: {
          en: "Steel frames and physical barrier structures for equipment, industrial facilities, generators, storage assets and other fixed installations. Final configuration is developed around the geometry and requirements of the protected asset.",
          uk: "Металеві каркаси та фізичні бар'єри для обладнання, промислових майданчиків, генераторів, резервуарів, складів та інших стаціонарних об'єктів. Конфігурація визначається відповідно до геометрії об'єкта та вимог замовника.",
        },
        cta: { en: "Discuss Your Project", uk: "Обговорити проєкт" },
      },
    ] satisfies AntiDroneProductCard[],
    manufactureListTitle: { en: "What we build", uk: "Що ми виготовляємо" } satisfies Localized<string>,
    manufactureList: {
      en: [
        "Netting support frames",
        "Steel posts & supports",
        "Overhead support structures",
        "Perimeter frames",
        "Mounting hardware",
        "Custom welded assemblies",
        "Structural components built to drawing",
      ],
      uk: [
        "Опорні рами для сітки",
        "Стійки та опори",
        "Надземні опорні конструкції",
        "Периметральні рами",
        "Кріплення та монтажні елементи",
        "Зварні вузли на замовлення",
        "Конструктивні елементи за кресленням",
      ],
    } satisfies Localized<string[]>,
  },

  customEngineering: {
    title: { en: "Designed Around the Asset", uk: "Конструкція під конкретний об'єкт" } satisfies Localized<string>,
    intro: {
      en: "A complete engineering drawing package is not required to start.",
      uk: "Не обов'язково мати готовий комплект креслень.",
    } satisfies Localized<string>,
    inputsLabel: {
      en: "For an initial review:",
      uk: "Для первинної оцінки достатньо надати:",
    } satisfies Localized<string>,
    inputs: {
      en: [
        "Asset type",
        "Approximate dimensions",
        "Photos, sketches or a site plan",
        "Required quantity",
        "Operating environment",
        "Target delivery schedule",
      ],
      uk: [
        "Тип об'єкта",
        "Приблизні розміри",
        "Фото, ескіз або план об'єкта",
        "Необхідну кількість",
        "Умови експлуатації",
        "Бажаний строк",
      ],
    } satisfies Localized<string[]>,
    supporting: {
      en: "",
      uk: "На основі цих даних ми визначаємо можливу конфігурацію, матеріали та виробничий підхід.",
    } satisfies Localized<string>,
    flow: {
      en: "Asset → Input Data → Engineering Review → Manufacturing → Finished Structure",
      uk: "Ваш об'єкт → вихідні дані → інженерна оцінка → виробництво → готова конструкція",
    } satisfies Localized<string>,
    closing: {
      en: "VAXMetal can manufacture individual steel components or supply a complete system including structural parts, mounting hardware and protective netting.",
      uk: "VAXMetal може виготовити як окремі металеві елементи, так і комплект конструкції з кріпленням та захисною сіткою.",
    } satisfies Localized<string>,
    scopeNote: {
      en: "VAXMetal manufactures the physical structure to your drawing, site plan or specification — we do not design a complete protection or detection system.",
      uk: "VAXMetal виготовляє фізичну конструкцію за вашим кресленням, планом об'єкта чи специфікацією — ми не проєктуємо комплексну систему захисту чи виявлення.",
    } satisfies Localized<string>,
    cta: { en: "Send Project Information", uk: "Надіслати вихідні дані" } satisfies Localized<string>,
  },

  vehicleProtection: {
    title: { en: "Vehicle & Equipment Protection Frames", uk: "Захисні каркаси для автомобілів та техніки" } satisfies Localized<string>,
    factorsLabel: {
      en: "A frame can be developed according to:",
      uk: "Каркас може виготовлятися відповідно до:",
    } satisfies Localized<string>,
    factors: {
      en: ["Vehicle model", "Body geometry", "Required protected area", "Mounting method", "Modularity requirements", "Operating conditions"],
      uk: ["Моделі автомобіля", "Геометрії кузова", "Необхідної зони покриття", "Способу кріплення", "Вимог до розбірності", "Умов експлуатації"],
    } satisfies Localized<string[]>,
    beginText: {
      en: "To begin, send the vehicle model, several photos and key dimensions.",
      uk: "Для початку достатньо надіслати модель автомобіля, декілька фото та основні габарити.",
    } satisfies Localized<string>,
    supporting: {
      en: "",
      uk: "За потреби конструкція може бути модульною та складатися з окремих секцій.",
    } satisfies Localized<string>,
    applicationsLabel: {
      en: "Applications include",
      uk: "Підходить для",
    } satisfies Localized<string>,
    applications: {
      en: ["Pickup trucks", "Vans", "Evacuation and utility vehicles", "Service vehicles", "Special-purpose platforms", "Other mobile equipment"],
      uk: ["Пікапів", "Бусів", "Евакуаційних автомобілів", "Сервісної техніки", "Спеціальних платформ", "Іншого мобільного обладнання"],
    } satisfies Localized<string[]>,
    cta: { en: "Request a Vehicle Protection Quote", uk: "Розрахувати конструкцію для техніки" } satisfies Localized<string>,
  },

  fixedAssets: {
    title: {
      en: "Physical Protection for Equipment & Fixed Assets",
      uk: "Фізичний захист обладнання та стаціонарних об'єктів",
    } satisfies Localized<string>,
    intro: {
      en: "VAXMetal can manufacture individual steel sections, supports, frames or complete spatial structures. These systems can provide an additional physical barrier around critical equipment or infrastructure.",
      uk: "Для стаціонарних об'єктів VAXMetal може виготовляти окремі металеві секції, опори, рами або повноцінні просторові конструкції. Такі рішення можуть використовуватися як додатковий фізичний бар'єр навколо важливого обладнання або інфраструктури.",
    } satisfies Localized<string>,
    applicationsLabel: {
      en: "Potential applications",
      uk: "Потенційні застосування",
    } satisfies Localized<string>,
    applications: {
      en: [
        "Generator systems",
        "Technical equipment",
        "Energy facilities",
        "Production sites",
        "Warehouses",
        "Logistics assets",
        "Tanks and storage systems",
        "Containerised equipment",
        "Individual critical components",
      ],
      uk: [
        "Генераторні установки",
        "Технологічне обладнання",
        "Енергетичні майданчики",
        "Виробничі об'єкти",
        "Склади",
        "Логістична інфраструктура",
        "Резервуари",
        "Контейнерне обладнання",
        "Окремі критичні вузли",
      ],
    } satisfies Localized<string[]>,
    cta: { en: "Request an Engineering Proposal", uk: "Отримати інженерну пропозицію" } satisfies Localized<string>,
  },

  oemIntegrators: {
    title: { en: "Manufacturing Partner for Integrators", uk: "Для інтеграторів та підрядників" } satisfies Localized<string>,
    intro: {
      en: "VAXMetal can operate as a fabrication partner for companies that design, integrate or install physical protection and counter-UAS systems.",
      uk: "VAXMetal може працювати як виробничий партнер для компаній, які самостійно проєктують або інтегрують системи фізичного захисту.",
    } satisfies Localized<string>,
    subheading: {
      en: "You engineer the system. We manufacture the steel structure.",
      uk: "Ви проєктуєте систему — ми виготовляємо металеву частину.",
    } satisfies Localized<string>,
    itemsLabel: {
      en: "We can manufacture:",
      uk: "Можемо серійно виробляти:",
    } satisfies Localized<string>,
    items: {
      en: [
        "Welded steel frames",
        "Modular sections",
        "Posts and supports",
        "Brackets",
        "Fabricated assemblies",
        "Protective cages",
        "Mounting components",
        "Custom components according to customer drawings",
      ],
      uk: [
        "Металеві рами",
        "Модульні секції",
        "Стійки та опори",
        "Кронштейни",
        "Зварні вузли",
        "Захисні каркаси",
        "Монтажні елементи",
        "Комплектуючі за кресленнями замовника",
      ],
    } satisfies Localized<string[]>,
    cta: { en: "Request an OEM Manufacturing Quote", uk: "Запросити OEM-пропозицію" } satisfies Localized<string>,
  },

  manufacturingCapabilities: {
    title: { en: "VAXMetal Manufacturing Capabilities", uk: "Виробничі можливості VAXMetal" } satisfies Localized<string>,
    items: {
      en: [
        "Laser cutting",
        "Sheet metal bending",
        "CNC machining",
        "Welding",
        "Fabrication of frames and spatial structures",
        "Drilling and preparation of mounting points",
        "Powder coating",
        "Assembly",
        "Repeat manufacturing of components and assemblies",
      ],
      uk: [
        "Лазерне різання",
        "Згинання металу",
        "Механічна обробка",
        "Зварювання",
        "Виготовлення рам та просторових конструкцій",
        "Свердління та підготовка монтажних отворів",
        "Порошкове фарбування",
        "Складання",
        "Виготовлення серійних вузлів та компонентів",
      ],
    } satisfies Localized<string[]>,
    closing: {
      en: "Projects can start from full technical drawings or from a photo, sketch or functional requirement.",
      uk: "Можемо почати роботу як з готового технічного креслення, так і з фото, ескізу або опису задачі.",
    } satisfies Localized<string>,
  },

  process: {
    title: { en: "From Concept to Finished Structure", uk: "Від ідеї до готової конструкції" } satisfies Localized<string>,
    steps: [
      {
        step: "01",
        title: { en: "Send Your Request", uk: "Надішліть запит" },
        text: {
          en: "Provide a drawing, sketch, photo or short project description.",
          uk: "Фото, ескіз, креслення або короткий опис задачі.",
        },
      },
      {
        step: "02",
        title: { en: "Engineering Review", uk: "Інженерна оцінка" },
        text: {
          en: "We review the possible structure, materials and manufacturing approach.",
          uk: "Визначаємо можливу конструкцію, матеріали та спосіб виготовлення.",
        },
      },
      {
        step: "03",
        title: { en: "Commercial Proposal", uk: "Комерційна пропозиція" },
        text: {
          en: "Configuration, price and lead time are agreed.",
          uk: "Погоджуємо конфігурацію, вартість та строки.",
        },
      },
      {
        step: "04",
        title: { en: "Manufacturing", uk: "Виробництво" },
        text: {
          en: "Required metalworking, welding, machining, finishing and assembly operations are completed.",
          uk: "Виконуємо необхідні операції з металом, зварювання, обробку, покриття та складання.",
        },
      },
      {
        step: "05",
        title: { en: "Delivery", uk: "Відвантаження" },
        text: {
          en: "Finished structures, kits or serial components are shipped to the customer or integration partner.",
          uk: "Передаємо готову конструкцію, комплект або серійні елементи замовнику чи інтегратору.",
        },
      },
    ] satisfies AntiDroneProcessStep[],
  },

  applications: {
    title: { en: "One Manufacturing Partner — Multiple Applications", uk: "Один виробник — різні типи застосування" } satisfies Localized<string>,
    items: [
      {
        icon: "industrial",
        title: { en: "Industrial & Critical Assets", uk: "Промислові та критичні об'єкти" },
        text: {
          en: "Physical protection structures for industrial facilities, critical infrastructure, energy assets and other fixed installations.",
          uk: "Захисні конструкції для промислових об'єктів, критичної інфраструктури, енергетичних активів та інших стаціонарних об'єктів.",
        },
      },
      {
        icon: "vehicles",
        title: { en: "Vehicles & Mobile Equipment", uk: "Автомобілі та мобільна техніка" },
        text: {
          en: "Custom frames and structural solutions for vehicles and mobile platforms.",
          uk: "Каркаси та конструктивні рішення для автомобілів і мобільних платформ.",
        },
      },
      {
        icon: "temporary",
        title: { en: "Temporary / Field Installations", uk: "Тимчасові та польові рішення" },
        text: {
          en: "Modular support structures for temporary and field-deployed protection setups.",
          uk: "Модульні опорні конструкції для тимчасових і польових рішень захисту.",
        },
      },
      {
        icon: "oem",
        title: { en: "OEM & System Integrators", uk: "OEM та інтегратори" },
        text: {
          en: "Steel sections, frames and fabricated assemblies for integrators and system manufacturers.",
          uk: "Металеві секції, рами та вузли для інтеграторів і виробників систем.",
        },
      },
    ] satisfies AntiDroneApplication[],
  },

  rfq: {
    title: { en: "Request an Engineering Quote", uk: "Отримати розрахунок" } satisfies Localized<string>,
    subtitle: {
      en: "Tell us about the vehicle, equipment or asset you need to protect. We'll review it and prepare a manufacturing proposal.",
      uk: "Розкажіть про автомобіль, обладнання чи об'єкт, який потрібно захистити. Ми розглянемо запит і підготуємо пропозицію щодо виготовлення.",
    } satisfies Localized<string>,
    requestTypeLabel: { en: "What do you need?", uk: "Що вам потрібно?" } satisfies Localized<string>,
    requestTypeOptions: {
      en: ["Netting only", "Steel frame", "Netting + frame system", "Fixed protective structure", "OEM / serial production", "Other"],
      uk: ["Лише сітка", "Металевий каркас", "Сітка + каркас", "Стаціонарна захисна конструкція", "OEM / серійне виробництво", "Інше"],
    } satisfies Localized<string[]>,
    assetTypeLabel: { en: "Asset type", uk: "Тип об'єкта" } satisfies Localized<string>,
    assetTypeOptions: {
      en: ["Vehicle", "Mobile equipment", "Industrial equipment", "Fixed asset", "Other"],
      uk: ["Автомобіль", "Техніка", "Обладнання", "Стаціонарний об'єкт", "Інше"],
    } satisfies Localized<string[]>,
    approxDimensionsLabel: { en: "Approximate dimensions", uk: "Орієнтовні розміри" } satisfies Localized<string>,
    quantityLabel: { en: "Quantity", uk: "Кількість" } satisfies Localized<string>,
    deliveryCountryLabel: { en: "Country", uk: "Країна" } satisfies Localized<string>,
    deliveryCityLabel: { en: "City", uk: "Місто" } satisfies Localized<string>,
    requiredDateLabel: { en: "Required delivery date", uk: "Бажаний строк" } satisfies Localized<string>,
    installationLabel: { en: "Installation required?", uk: "Чи потрібен монтаж?" } satisfies Localized<string>,
    descriptionLabel: { en: "Project description", uk: "Опис задачі" } satisfies Localized<string>,
    textareaPlaceholder: {
      en: "Describe the vehicle, equipment or asset you need to protect.",
      uk: "Опишіть автомобіль, обладнання чи об'єкт, який потрібно захистити.",
    } satisfies Localized<string>,
    uploadTitle: { en: "Attachments", uk: "Файли" } satisfies Localized<string>,
    uploadHelp: {
      en: "Photo, sketch, STEP, DWG, DXF, PDF, JPG, PNG or ZIP",
      uk: "Фото, ескіз, STEP, DWG, DXF, PDF, JPG, PNG або ZIP",
    } satisfies Localized<string>,
    nameLabel: { en: "Name", uk: "Ім'я" } satisfies Localized<string>,
    companyLabel: { en: "Company", uk: "Компанія" } satisfies Localized<string>,
    phoneLabel: { en: "Phone", uk: "Телефон" } satisfies Localized<string>,
    emailLabel: { en: "Email", uk: "Email" } satisfies Localized<string>,
    submitLabel: { en: "Send RFQ", uk: "Надіслати запит" } satisfies Localized<string>,
    safetyNote: {
      en: "Do not submit precise operational locations or other sensitive operational information through this form.",
      uk: "Для військових запитів не вказуйте у формі точне місцезнаходження або іншу оперативно чутливу інформацію.",
    } satisfies Localized<string>,
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
        question: { en: "What is physical anti-drone protection?", uk: "Що таке фізичний антидроновий захист?" },
        answer: {
          en: "Physical anti-drone protection includes netting, steel frames, supports and other structures designed to create an additional physical barrier between a UAV and a protected asset. Such systems are not a replacement for other counter-UAS technologies and must be configured for the specific application.",
          uk: "Це фізичні бар'єри — сітки, металеві каркаси, опори та інші конструкції, які створюють додаткову перешкоду між безпілотником та захищеним об'єктом. Такі системи не замінюють інші засоби протидії БпЛА та підбираються відповідно до конкретного сценарію використання.",
        },
      },
      {
        question: { en: "Does VAXMetal only supply anti-drone netting?", uk: "Чи продає VAXMetal лише антидронову сітку?" },
        answer: {
          en: "No. Netting can be supplied separately, but VAXMetal's primary role in this product category is the manufacture of steel frames, supports, mounting components and complete protective structures.",
          uk: "Можливе постачання самої сітки, однак основна спеціалізація VAXMetal у цьому напрямі — металеві каркаси, опори, кріплення та комплектні захисні конструкції.",
        },
      },
      {
        question: { en: "Can you manufacture a frame for a specific vehicle?", uk: "Чи можна виготовити каркас під конкретний автомобіль?" },
        answer: {
          en: "Yes. For an initial review, provide the vehicle model, photos and approximate dimensions.",
          uk: "Так. Для первинної оцінки надішліть модель автомобіля, фото та приблизні габарити.",
        },
      },
      {
        question: { en: "Do I need finished engineering drawings?", uk: "Чи потрібне готове креслення?" },
        answer: {
          en: "No. A project can begin from a photo, sketch, approximate dimensions or functional description.",
          uk: "Ні. Можна почати з фотографії, ескізу, приблизних розмірів або опису задачі.",
        },
      },
      {
        question: { en: "Can you manufacture structures for fixed assets?", uk: "Чи виготовляєте ви конструкції для стаціонарних об'єктів?" },
        answer: {
          en: "Yes. VAXMetal can manufacture frames, supports, sections and spatial structures for equipment, industrial sites and infrastructure assets.",
          uk: "Так. Можливе виготовлення рам, опор, секцій та просторових конструкцій для обладнання, промислових та інфраструктурних об'єктів.",
        },
      },
      {
        question: { en: "Can you manufacture production batches?", uk: "Чи можливе серійне виробництво?" },
        answer: {
          en: "Yes. We can manufacture individual structures as well as repeat batches of frames, sections, brackets and fabricated components.",
          uk: "Так. VAXMetal може виготовляти як одиничні конструкції, так і повторювані партії металевих секцій, рам, кронштейнів та інших компонентів.",
        },
      },
      {
        question: { en: "Do you work with system integrators?", uk: "Чи працюєте ви з інтеграторами?" },
        answer: {
          en: "Yes. VAXMetal can operate as a contract manufacturing partner for integrators and engineering companies, producing steel components according to customer drawings and technical documentation.",
          uk: "Так. Можемо виступати контрактним виробником металевих елементів за кресленнями або технічною документацією інтегратора.",
        },
      },
      {
        question: { en: "Can you supply outside Ukraine?", uk: "Чи можлива доставка за межі України?" },
        answer: {
          en: "International delivery can be considered depending on the product type, destination country and project requirements.",
          uk: "Можливість міжнародної поставки визначається залежно від типу виробу, країни призначення та умов конкретного замовлення.",
        },
      },
      {
        question: { en: "Can VAXMetal perform installation?", uk: "Чи виконуєте ви монтаж?" },
        answer: {
          en: "Installation availability depends on the structure, project scope and location.",
          uk: "Можливість монтажу залежить від типу конструкції та місця реалізації проєкту.",
        },
      },
      {
        question: { en: "Does the structure guarantee protection against every UAV?", uk: "Чи гарантує така конструкція захист від будь-якого дрона?" },
        answer: {
          en: "No physical barrier configuration can be presented as a universal guarantee against every UAV or attack profile. Performance depends on threat characteristics, system geometry, materials, installation and other engineering parameters. VAXMetal manufactures physical protective structures according to the requirements of each specific project.",
          uk: "Ні універсальної конфігурації, яка гарантує захист від будь-якого типу БпЛА, не існує. Ефективність фізичного бар'єра залежить від типу загрози, геометрії системи, матеріалів, способу встановлення та інших параметрів. VAXMetal виготовляє фізичні захисні конструкції відповідно до технічних вимог конкретного проєкту.",
        },
      },
    ] satisfies AntiDroneFaqItem[],
  },

  finalCta: {
    title: {
      en: "Need Physical Protection for a Vehicle, Equipment or Fixed Asset?",
      uk: "Потрібен фізичний захист для техніки або об'єкта?",
    } satisfies Localized<string>,
    subtitle: {
      en: "Send us a photo, dimensions or drawing and we will review the requirement and prepare a manufacturing proposal.",
      uk: "Надішліть фото, розміри або креслення — розглянемо задачу та підготуємо пропозицію щодо виготовлення.",
    } satisfies Localized<string>,
    cta: { en: "Request an Engineering Quote", uk: "Отримати розрахунок" } satisfies Localized<string>,
  },

  conceptLabel: {
    en: "Concept visualization. Final configuration is engineered according to the requirements of each specific project.",
    uk: "Концептуальна візуалізація. Остаточна конфігурація визначається відповідно до вимог конкретного проєкту.",
  } satisfies Localized<string>,
} as const;
