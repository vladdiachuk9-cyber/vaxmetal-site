import type { Localized, Spec } from "./types";

export interface MastValueItem {
  icon: "field" | "rf" | "deployable" | "oem";
  text: Localized<string>;
}

export interface MastApplication {
  icon: "uav" | "safety" | "monitoring";
  image: string;
  title: Localized<string>;
  description: Localized<string>;
}

export interface MastFaqItem {
  question: Localized<string>;
  answer: Localized<string>;
}

/**
 * Rich, page-specific copy for the telescopic-mast product page — kept out
 * of both the shared IndustryContent shape (would leak unused fields onto
 * the other 4 industries) and the next-intl message files (those hold
 * chrome-level UI strings, not per-entity long-form content). Copy is
 * verbatim from 12/02_PAGE_COPY_EN.md and 12/03_PAGE_COPY_UA.md.
 */
export const mastPage = {
  hero: {
    eyebrow: { en: "Portable Field Antenna Masts", uk: "Переносні польові телескопічні щогли" } satisfies Localized<string>,
    title: {
      en: "Portable Field Antenna Masts",
      uk: "Переносні польові телескопічні щогли",
    } satisfies Localized<string>,
    subhead: {
      en: "Rapid-deployment mast platforms for UAV ground systems, RF/data links, repeaters, deployable communications and lightweight field equipment.",
      uk: "Швидкорозгортані щоглові платформи для наземних систем UAV/UGV, RF/data-link обладнання, ретрансляторів, тимчасового зв'язку та легкого польового обладнання.",
    } satisfies Localized<string>,
    proofBadge: {
      en: "1,000+ units manufactured and battlefield-deployed in Ukraine",
      uk: "1 000+ одиниць виготовлено та розгорнуто в реальних бойових умовах в Україні",
    } satisfies Localized<string>,
    paramsLine: {
      en: "6–18 m · ~5 min deployment · 1-person setup · payload up to 8 kg*",
      uk: "6–18 м · ~5 хв розгортання · 1 людина · навантаження до 8 кг*",
    } satisfies Localized<string>,
    ctaPrimary: { en: "Request an RFQ", uk: "Отримати розрахунок" } satisfies Localized<string>,
    ctaSecondary: { en: "Download 1-page datasheet", uk: "Завантажити 1-page datasheet" } satisfies Localized<string>,
    ctaTertiary: { en: "View 3-slide product overview", uk: "Переглянути 3-slide огляд продукту" } satisfies Localized<string>,
  },

  value: {
    title: {
      en: "Where it adds value",
      uk: "Де щогла дає цінність",
    } satisfies Localized<string>,
    items: [
      {
        icon: "field",
        text: {
          en: "Elevate antennas and repeaters without fixed infrastructure",
          uk: "Підіймайте антени та ретранслятори без стаціонарної інфраструктури",
        },
      },
      {
        icon: "rf",
        text: {
          en: "Improve line-of-sight for RF / data-link systems",
          uk: "Покращуйте пряму видимість для RF / data-link систем",
        },
      },
      {
        icon: "deployable",
        text: {
          en: "Deploy a temporary communication node in minutes",
          uk: "Розгортайте тимчасовий вузол зв'язку за лічені хвилини",
        },
      },
      {
        icon: "oem",
        text: {
          en: "Adapt one mast platform to different payloads and systems",
          uk: "Адаптуйте одну щоглову платформу під різне обладнання",
        },
      },
    ] satisfies MastValueItem[],
  },

  applications: {
    title: { en: "Applications", uk: "Застосування" } satisfies Localized<string>,
    subtitle: {
      en: "Drone/UAV remains the strongest use case, alongside clear commercial applications beyond it.",
      uk: "UAV/UGV лишається найсильнішим кейсом, поряд із чіткими комерційними застосуваннями поза ним.",
    } satisfies Localized<string>,
    items: [
      {
        icon: "uav",
        image: "/images/industries/telescopic-masts/app-uav.png",
        title: { en: "UAV & Data Link Communications", uk: "UAV / UGV та Data Link" } satisfies Localized<string>,
        description: {
          en: "Portable elevation for ground-station antennas, directional RF systems, repeaters and datalink equipment.",
          uk: "Підйом антен наземних станцій, напрямлених RF-систем, ретрансляторів та data-link обладнання.",
        } satisfies Localized<string>,
      },
      {
        icon: "safety",
        image: "/images/industries/telescopic-masts/app-public-safety.png",
        title: { en: "Deployable Communications & Public Safety", uk: "Тимчасовий зв'язок та Public Safety" } satisfies Localized<string>,
        description: {
          en: "Rapid temporary communications for emergency response, field teams, remote sites and private networks.",
          uk: "Швидке розгортання тимчасового зв'язку для аварійних служб, польових команд, віддалених об'єктів і приватних мереж.",
        } satisfies Localized<string>,
      },
      {
        icon: "monitoring",
        image: "/images/industries/telescopic-masts/app-monitoring.png",
        title: { en: "Monitoring, Sensors & Temporary Telecom", uk: "Моніторинг, сенсори та тимчасовий телеком" } satisfies Localized<string>,
        description: {
          en: "Portable support for lightweight monitoring payloads, sensors, cameras and temporary network equipment.",
          uk: "Переносна опора для легких систем моніторингу, сенсорів, камер і тимчасового мережевого обладнання.",
        } satisfies Localized<string>,
      },
    ] satisfies MastApplication[],
  },

  kit: {
    title: { en: "Standard Field Platform", uk: "Стандартний польовий комплект" } satisfies Localized<string>,
    subtitle: {
      en: "A transport-ready field kit for rapid deployment. This is what you actually receive.",
      uk: "Транспортно готовий комплект для швидкого розгортання. Ось що ви фактично отримуєте.",
    } satisfies Localized<string>,
    items: [
      { en: "Telescopic mast", uk: "Телескопічна щогла" },
      { en: "Transport bag", uk: "Транспортна сумка" },
      { en: "Guy lines", uk: "Розтяжки" },
      { en: "Ground anchors / spiked support", uk: "Ґрунтові анкери / загострені опори" },
      { en: "Customizable top adapter", uk: "Адаптована верхівка" },
    ] satisfies Localized<string>[],
  },

  configuration: {
    title: { en: "Built Around Your System", uk: "Конфігурація під вашу систему" } satisfies Localized<string>,
    subtitle: {
      en: "VAXMetal can adapt mast height, top interface, accessory set and finish around your antenna or payload for repeatable serial supply.",
      uk: "Конфігуруємо щоглу під вашу антену, обладнання та сценарій розгортання для повторюваних серійних поставок.",
    } satisfies Localized<string>,
    options: [
      { en: "Heights: 6 / 8 / 10 / 12 / 15 / 18 m", uk: "Висоти: 6 / 8 / 10 / 12 / 15 / 18 м" },
      { en: "Custom top interface", uk: "Індивідуальний верхній інтерфейс" },
      { en: "Natural aluminium standard", uk: "Натуральний алюміній — стандарт" },
      { en: "Optional powder coating / custom finish", uk: "Опційне порошкове фарбування / інший колір" },
      { en: "Mission-specific accessory set", uk: "Комплект аксесуарів під задачу" },
      { en: "Optional remote antenna positioning", uk: "Опційне дистанційне позиціонування антени" },
    ] satisfies Localized<string>[],
  },

  rotator: {
    title: { en: "Optional Remote Antenna Positioning", uk: "Опційна система дистанційного позиціонування" } satisfies Localized<string>,
    text: {
      en: "Remote positioning of directional antennas, cameras, sensors and other mast-top payloads without lowering the mast.",
      uk: "Дистанційний поворот напрямлених антен, камер, сенсорів та іншого обладнання на верхівці без опускання щогли.",
    } satisfies Localized<string>,
    supporting: {
      en: "Suitable for UAV, repeater, RF-link and monitoring setups.",
      uk: "Для UAV, ретрансляторів, RF-link і систем моніторингу.",
    } satisfies Localized<string>,
  },

  proof: {
    title: { en: "Field-Proven / Why VAXMetal", uk: "Чому VAXMetal" } satisfies Localized<string>,
    badge: {
      en: "1,000+ units manufactured and battlefield-deployed in Ukraine",
      uk: "1 000+ одиниць виготовлено та розгорнуто в реальних бойових умовах в Україні",
    } satisfies Localized<string>,
    items: [
      { en: "Field-proven with real antenna and repeater systems", uk: "Польова платформа, перевірена з реальними антенами та ретрансляторами" },
      { en: "OEM-adaptable to customer payloads and interfaces", uk: "OEM-адаптація під обладнання та інтерфейси клієнта" },
      { en: "Serial production capability", uk: "Серійне виробництво" },
      { en: "Export-ready supply: FCA / DAP", uk: "Готова до експорту поставка: FCA / DAP" },
      { en: "Typical production lead time: 2–4 weeks", uk: "Типовий строк виробництва: 2–4 тижні" },
      { en: "Made in Ukraine", uk: "Виготовлено в Україні" },
    ] satisfies Localized<string>[],
  },

  specs: [
    { label: { en: "Height range", uk: "Висота" }, value: { en: "6–18 m", uk: "6–18 м" } },
    { label: { en: "Deployment", uk: "Розгортання" }, value: { en: "~5 min", uk: "~5 хв" } },
    { label: { en: "Setup", uk: "Монтаж" }, value: { en: "1 person", uk: "1 людина" } },
    { label: { en: "Payload", uk: "Навантаження" }, value: { en: "up to 8 kg*", uk: "до 8 кг*" } },
    { label: { en: "Material", uk: "Матеріал" }, value: { en: "High-strength aluminium", uk: "Високоміцний алюміній" } },
    {
      label: { en: "Finish", uk: "Покриття" },
      value: {
        en: "Natural aluminium standard; optional powder coating/custom finish",
        uk: "Натуральний алюміній стандартно; порошкове фарбування опційно",
      },
    },
    { label: { en: "Top interface", uk: "Верхній інтерфейс" }, value: { en: "Customizable", uk: "Кастомізується" } },
    {
      label: { en: "Field support", uk: "Польова опора" },
      value: { en: "Tripod / guy lines / ground anchors", uk: "Тринога / розтяжки / ґрунтові анкери" },
    },
  ] satisfies Spec[],
  specsNote: {
    en: "*Depending on mast configuration and operating conditions.",
    uk: "*Залежить від конфігурації щогли та умов експлуатації.",
  } satisfies Localized<string>,

  downloads: {
    title: { en: "Downloads", uk: "Матеріали для завантаження" } satisfies Localized<string>,
    datasheetTitle: {
      en: "Portable Field Antenna Masts — 1-page datasheet (PDF)",
      uk: "Переносні польові щогли — 1-сторінковий datasheet (PDF)",
    } satisfies Localized<string>,
    datasheetSubtitle: {
      en: "Core specs, configuration options and how to request a quote — one page.",
      uk: "Основні параметри, варіанти конфігурації та як замовити розрахунок — на одній сторінці.",
    } satisfies Localized<string>,
    presentationTitle: {
      en: "Portable Field Antenna Masts — product overview (PDF)",
      uk: "Переносні польові щогли — огляд продукту (PDF)",
    } satisfies Localized<string>,
    presentationSubtitle: {
      en: "A 3-slide visual walkthrough of the platform and its applications.",
      uk: "3-слайдовий візуальний огляд платформи та її застосувань.",
    } satisfies Localized<string>,
  },

  rfq: {
    title: { en: "Build the mast around your system", uk: "Побудуємо конфігурацію щогли навколо вашої системи" } satisfies Localized<string>,
    subtitle: {
      en: "Tell us your payload, required height and quantity. We will propose a mast configuration and prepare an RFQ.",
      uk: "Надішліть параметри обладнання, потрібну висоту та кількість. Ми запропонуємо конфігурацію і підготуємо розрахунок.",
    } satisfies Localized<string>,
    cta: { en: "Request Mast Configuration & RFQ", uk: "Отримати конфігурацію та RFQ" } satisfies Localized<string>,
  },

  faq: {
    title: { en: "FAQ", uk: "Часті запитання" } satisfies Localized<string>,
    items: [
      {
        question: { en: "Which mast heights are available?", uk: "Які висоти щогл доступні?" },
        answer: {
          en: "6, 8, 10, 12, 15 and 18 m, in a standard height family. We select the right height for your application as part of the RFQ.",
          uk: "6, 8, 10, 12, 15 та 18 м — стандартний ряд висот. Підбираємо потрібну висоту під ваше застосування в рамках запиту.",
        },
      },
      {
        question: { en: "What payload can the mast support?", uk: "Яке навантаження витримує щогла?" },
        answer: {
          en: "Up to 8 kg, depending on mast configuration and operating conditions. Tell us your equipment weight and we'll confirm the right configuration.",
          uk: "До 8 кг, залежно від конфігурації щогли та умов експлуатації. Повідомте вагу обладнання — підтвердимо потрібну конфігурацію.",
        },
      },
      {
        question: { en: "How long does deployment take?", uk: "Скільки часу займає розгортання?" },
        answer: {
          en: "Around 5 minutes for one person, using the tool-less section clamps, tripod support and guy lines included in the standard kit.",
          uk: "Близько 5 хвилин, для однієї людини, за допомогою безінструментальних затискачів секцій, триноги та розтяжок зі стандартного комплекту.",
        },
      },
      {
        question: { en: "Can you adapt the top interface for our antenna?", uk: "Чи можете ви адаптувати верхній інтерфейс під нашу антену?" },
        answer: {
          en: "Yes — the top adapter is customizable to your antenna or payload mount as part of an OEM configuration.",
          uk: "Так — верхній адаптер кастомізується під кріплення вашої антени чи обладнання в рамках OEM-конфігурації.",
        },
      },
      {
        question: { en: "Is powder coating required?", uk: "Чи обов'язкове порошкове фарбування?" },
        answer: {
          en: "No. Natural aluminium is the standard finish. Powder coating or a custom finish is available as an option.",
          uk: "Ні. Натуральний алюміній — стандартне покриття. Порошкове фарбування чи інший колір — опційно.",
        },
      },
      {
        question: { en: "Can the mast be supplied with a remote rotator?", uk: "Чи можна поставити щоглу з дистанційним поворотним механізмом?" },
        answer: {
          en: "Yes, as an optional feature for remote positioning of directional antennas, cameras or sensors without lowering the mast.",
          uk: "Так, як опційна функція для дистанційного повороту напрямлених антен, камер чи сенсорів без опускання щогли.",
        },
      },
      {
        question: { en: "What is included in the field kit?", uk: "Що входить до польового комплекту?" },
        answer: {
          en: "Telescopic mast, transport bag, guy lines, ground anchors / spiked support and a customizable top adapter.",
          uk: "Телескопічна щогла, транспортна сумка, розтяжки, ґрунтові анкери / загострені опори та адаптована верхівка.",
        },
      },
      {
        question: { en: "What are typical production lead times?", uk: "Які типові строки виробництва?" },
        answer: {
          en: "Typically 2–4 weeks, depending on quantity and configuration.",
          uk: "Зазвичай 2–4 тижні, залежно від кількості та конфігурації.",
        },
      },
      {
        question: { en: "Which delivery terms are available?", uk: "Які умови поставки доступні?" },
        answer: {
          en: "FCA and DAP are available as export delivery terms.",
          uk: "FCA та DAP доступні як умови експортної поставки.",
        },
      },
      {
        question: { en: "Can you supply serial OEM configurations?", uk: "Чи можете ви постачати серійні OEM-конфігурації?" },
        answer: {
          en: "Yes — the platform is built for repeatable serial supply with a fixed configuration once agreed with an OEM customer.",
          uk: "Так — платформа розроблена для повторюваних серійних поставок за фіксованою конфігурацією, узгодженою з OEM-клієнтом.",
        },
      },
    ] satisfies MastFaqItem[],
  },

  finalCta: {
    title: { en: "Build the mast around your system.", uk: "Побудуємо конфігурацію щогли навколо вашої системи." } satisfies Localized<string>,
    subtitle: {
      en: "Send us your antenna or payload specifications, required height and quantity.",
      uk: "Надішліть параметри обладнання, потрібну висоту та кількість.",
    } satisfies Localized<string>,
    cta: { en: "Request an RFQ", uk: "Отримати розрахунок" } satisfies Localized<string>,
  },
} as const;
