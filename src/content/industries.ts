import type { IndustryContent } from "./types";

export const industries: IndustryContent[] = [
  {
    key: "trailer-truck-parts",
    slug: { en: "trailer-truck-parts", uk: "detali-prychepiv" },
    tag: { en: "Trailer Hardware", uk: "Причепи та кузови" },
    name: { en: "Trailer & Truck Body Parts", uk: "Деталі та аксесуари для причепів" },
    shortDescription: {
      en: "Drawbars, chassis brackets, tool boxes, mudguards and ramps for EU trailer and truck-body manufacturers.",
      uk: "Дишла, кронштейни рами, інструментальні ящики, крила та аппарелі для виробників причепів і кузовів ЄС.",
    },
    intro: {
      en: "The EU trailer and truck-body market runs roughly €43.7 billion a year, with Germany and Poland as its largest producers. Hundreds of small and mid-size trailer builders across DE/PL/NL buy in drawbars, chassis brackets, tool boxes, mudguards and ramps rather than fabricating them in-house — a series of 500–5,000 units that's too small for large-volume producers and too custom for mass import.",
      uk: "Ринок причепів та кузовів вантажівок ЄС становить приблизно €43,7 млрд на рік, з Німеччиною та Польщею як найбільшими виробниками. Сотні малих і середніх виробників причепів у DE/PL/NL закуповують дишла, кронштейни рами, інструментальні ящики, крила та аппарелі, а не виготовляють їх власними силами — серія 500-5000 одиниць, замала для великих виробників і занадто кастомна для масового імпорту.",
    },
    useCases: {
      en: [
        "Drawbars and towing hardware",
        "Chassis brackets and cross-members",
        "Steel and aluminum tool boxes",
        "Mudguards and fender assemblies",
        "Loading ramps and aluminum decking",
      ],
      uk: [
        "Дишла та тягово-зчіпні пристрої",
        "Кронштейни рами та поперечини",
        "Сталеві та алюмінієві інструментальні ящики",
        "Крила та обвіси",
        "Вантажні аппарелі та алюмінієвий настил",
      ],
    },
    customers: {
      en: "Trailer OEMs, truck body builders, distributors in Germany, Poland and the Netherlands",
      uk: "Виробники причепів, кузовобудівники, дистриб'ютори в Німеччині, Польщі та Нідерландах",
    },
    serviceKeys: ["laser-cutting", "sheet-metal-bending", "welding", "powder-coating", "assembly-qc"],
    image: {
      src: "/images/industries/trailer-truck-parts.jpg",
      alt: {
        en: "Trailer tow hitch and diamond-plate tool box mounting — trailer body hardware",
        uk: "Тягово-зчіпний пристрій причепа та кріплення ящика з рифленого листа — фурнітура кузова причепа",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_trailer.pdf",
  },
  {
    key: "telescopic-masts",
    slug: { en: "telescopic-masts", uk: "teleskopichni-shchogly" },
    tag: { en: "Field Comms", uk: "Польовий зв'язок" },
    name: { en: "Portable Field Antenna Masts", uk: "Переносні польові телескопічні щогли" },
    shortDescription: {
      en: "Rapid-deployment 6–18 m mast platforms for UAV ground systems, RF/data links, repeaters, deployable communications and monitoring equipment.",
      uk: "Швидкорозгортані щоглові платформи 6–18 м для наземних систем UAV/UGV, RF/data-link обладнання, ретрансляторів, тимчасового зв'язку та моніторингу.",
    },
    intro: {
      en: "A portable, man-portable telescopic mast platform: aluminium mast, field tripod, guy lines, ground anchors, tool-less section clamps and a customizable top adapter — 6 to 18 m, deployed by one person in about 5 minutes. Already in production, with 1,000+ units manufactured and battlefield-deployed in Ukraine.",
      uk: "Переносна польова платформа телескопічної щогли: алюмінієва щогла, польова тринога, розтяжки, ґрунтові анкери, безінструментальні затискачі секцій та адаптована верхівка — 6-18 м, розгортається однією людиною за ~5 хвилин. Вже в серійному виробництві, 1 000+ одиниць виготовлено та розгорнуто в реальних бойових умовах в Україні.",
    },
    useCases: {
      en: [
        "UAV ground-station antennas and data-link systems",
        "Repeaters and directional RF systems",
        "Deployable communications for emergency response and field teams",
        "Monitoring, sensor and temporary telecom payloads",
      ],
      uk: [
        "Антени наземних станцій UAV та data-link системи",
        "Ретранслятори та напрямлені RF-системи",
        "Тимчасовий зв'язок для аварійних служб та польових команд",
        "Моніторинг, сенсори та тимчасове телеком-обладнання",
      ],
    },
    customers: {
      en: "UAV/GCS manufacturers, RF/datalink integrators, public-safety communications, monitoring/telecom integrators",
      uk: "Виробники UAV/GCS, RF/datalink інтегратори, служби тимчасового зв'язку, інтегратори моніторингу та телекому",
    },
    serviceKeys: ["cnc-turning", "cnc-milling", "welding", "assembly-qc"],
    image: {
      src: "/images/industries/telescopic-masts/hero-mast-white.png",
      alt: {
        en: "Portable telescopic field antenna mast on a tripod ground support",
        uk: "Переносна телескопічна польова антенна щогла на триногій опорі",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_mast.pdf",
  },
  {
    key: "robotics-ugv-chassis",
    slug: { en: "robotics-ugv-chassis", uk: "shasi-dlya-robototehniky" },
    tag: { en: "Robotics Chassis", uk: "Робототехніка" },
    name: { en: "Robotics & UGV Chassis", uk: "Шасі та корпуса для робототехніки" },
    shortDescription: {
      en: "Welded frames, enclosures and sub-assemblies for robotics OEMs and ground-vehicle integrators.",
      uk: "Зварні рами, корпуса та вузли для робототехнічних OEM та інтеграторів наземних платформ.",
    },
    intro: {
      en: "Europe's UGV market runs around $3.2 billion, growing roughly 10% a year, alongside significant annual investment in warehouse and industrial mobile robotics (AMR). Robotics startups and integrators need fast iteration on small welded series — 20 to 200 units — that most shops don't want to weld and most platforms can't fabricate. We already build ground-vehicle platform chassis; the same capability applies directly to robotics and AMR frames.",
      uk: "Європейський ринок UGV становить близько $3,2 млрд, зростає приблизно на 10% на рік, поряд зі значними щорічними інвестиціями у складську та промислову мобільну робототехніку (AMR). Робототехнічним стартапам та інтеграторам потрібні швидкі ітерації малих зварних серій — 20-200 одиниць — які більшість цехів не хочуть варити, а більшість платформ не можуть виготовити. Ми вже виробляємо шасі наземних платформ; та сама компетенція напряму застосовна до рам робототехніки та AMR.",
    },
    useCases: {
      en: [
        "Welded chassis for ground-vehicle platforms",
        "Warehouse and industrial AMR frames",
        "Sensor and payload enclosures",
        "Small-series iteration (20–200 units) for robotics startups",
      ],
      uk: [
        "Зварні шасі наземних платформ",
        "Рами для складської та промислової AMR-робототехніки",
        "Корпуса для сенсорів та корисного навантаження",
        "Ітерації малих серій (20-200 одиниць) для робототехнічних стартапів",
      ],
    },
    customers: {
      en: "Robotics startups, industrial AMR builders, ground-vehicle integrators",
      uk: "Робототехнічні стартапи, виробники промислових AMR, інтегратори наземних платформ",
    },
    serviceKeys: ["laser-cutting", "cnc-milling", "welding", "assembly-qc"],
    image: {
      src: "/images/industries/robotics-ugv-chassis.jpg",
      alt: {
        en: "Tracked ground-vehicle chassis with visible metal frame and rollers on rough terrain",
        uk: "Гусеничне шасі наземної платформи з металевою рамою та роликами на пересіченій місцевості",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_robotics.pdf",
  },
  {
    key: "fire-emergency-equipment",
    slug: { en: "fire-emergency-equipment", uk: "pozhezhne-obladnannya" },
    tag: { en: "Fire & Emergency", uk: "Пожежне обладнання" },
    name: { en: "Fire & Emergency Equipment", uk: "Пожежне та аварійне обладнання" },
    shortDescription: {
      en: "Exterior storage cabinets, hose and sand boxes, and vehicle outfitting for fire-equipment distributors.",
      uk: "Зовнішні ящики зберігання, ящики для рукавів і піску, обвіси спецавтомобілів для дистриб'юторів пожежного обладнання.",
    },
    intro: {
      en: "We stay out of the certified internal-storage segment (EN 14470 safety cabinets), which is the territory of specialists like asecos and Hiltra. Our lane is exterior equipment that doesn't require that certification: storage cabinets, hose and sand boxes, stands, and vehicle outfitting for fire-equipment distributors and emergency-vehicle body builders in the EU and, through distributors, the Middle East.",
      uk: "Ми не заходимо в сегмент сертифікованого внутрішнього зберігання (шафи безпеки EN 14470) — це територія спеціалістів на кшталт asecos та Hiltra. Наша ніша — зовнішнє обладнання, що не потребує цієї сертифікації: ящики зберігання, ящики для рукавів і піску, стенди, обвіси спецавтомобілів для дистриб'юторів пожежного обладнання та кузовобудівників аварійних машин в ЄС і, через дистриб'юторів, на Близькому Сході.",
    },
    useCases: {
      en: [
        "Exterior storage cabinets (sand, hose, PPE)",
        "Fire hose reel housings",
        "Fire truck and emergency vehicle outfitting",
        "Equipment stands and mounting posts",
      ],
      uk: [
        "Зовнішні шафи зберігання (пісок, рукави, ЗІЗ)",
        "Корпуса для котушок пожежних рукавів",
        "Обвіси пожежних та аварійних автомобілів",
        "Стенди та монтажні стійки для обладнання",
      ],
    },
    customers: {
      en: "Fire equipment distributors, emergency vehicle body builders",
      uk: "Дистриб'ютори пожежного обладнання, кузовобудівники аварійних машин",
    },
    serviceKeys: ["laser-cutting", "sheet-metal-bending", "welding", "powder-coating", "assembly-qc"],
    image: {
      src: "/images/industries/fire-emergency-equipment.jpg",
      alt: {
        en: "Open exterior equipment compartment on an emergency vehicle showing hose reels and storage",
        uk: "Відкритий зовнішній відсік обладнання аварійного автомобіля з котушками рукавів та зберіганням",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_fire.pdf",
  },
  {
    key: "metal-wood-furniture",
    slug: { en: "metal-wood-furniture", uk: "mebli-metal-derevo" },
    tag: { en: "Furniture", uk: "Меблі" },
    name: { en: "Metal + Wood Furniture", uk: "Меблі метал+дерево" },
    shortDescription: {
      en: "White-label contract furniture combining our metal frames with partner woodworking.",
      uk: "White-label контрактні меблі — поєднання наших металевих каркасів із деревообробкою партнерів.",
    },
    intro: {
      en: "The EU contract furniture market runs around $53.8 billion, with production increasingly moving closer to the end market. We supply welded metal frames, paired with partner woodworking, as a white-label line for loft-style, outdoor and HoReCa furniture brands looking for an alternative to sourcing from further afield. This is a second-wave line, opened once contract manufacturing and the four core tracks are established.",
      uk: "Ринок контрактних меблів ЄС становить близько $53,8 млрд, з тенденцією до перенесення виробництва ближче до кінцевого ринку. Ми постачаємо зварні металеві каркаси у поєднанні з деревообробкою партнерів як white-label лінію для брендів меблів у стилі лофт, вуличних меблів та оснащення HoReCa, які шукають альтернативу віддаленим постачальникам. Це напрямок другої хвилі, що відкривається після закріплення контрактного виробництва та чотирьох основних напрямків.",
    },
    useCases: {
      en: [
        "Loft-style metal-frame furniture",
        "Outdoor and street furniture",
        "HoReCa fit-out pieces",
        "White-label production for furniture brands",
      ],
      uk: [
        "Меблі в стилі лофт з металевим каркасом",
        "Вулична мебель",
        "Оснащення HoReCa",
        "White-label виробництво для меблевих брендів",
      ],
    },
    customers: {
      en: "Contract furniture brands, HoReCa fit-out companies",
      uk: "Бренди контрактних меблів, компанії з оснащення HoReCa",
    },
    serviceKeys: ["laser-cutting", "sheet-metal-bending", "welding", "powder-coating", "assembly-qc"],
    image: {
      src: "/images/industries/metal-wood-furniture.jpg",
      alt: {
        en: "Industrial cart with a black metal frame and wood shelving on castor wheels",
        uk: "Індустріальний візок з чорним металевим каркасом та дерев'яними полицями на коліщатках",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_furniture.pdf",
  },
  {
    key: "anti-drone-protection",
    slug: { en: "anti-drone-protection", uk: "anti-drone-protection" },
    tag: { en: "Physical Protection", uk: "Фізичний захист" },
    name: { en: "Anti-Drone Protection", uk: "Антидроновий захист" },
    shortDescription: {
      en: "Custom anti-drone netting systems, protective steel frames and physical barrier structures for vehicles, equipment, critical assets and OEM integrators.",
      uk: "Антидронові сітки, металеві каркаси, опори та фізичні захисні конструкції під конкретну техніку або об'єкт.",
    },
    intro: {
      en: "VAXMetal manufactures physical anti-drone protection as a metal and engineering layer, not just commodity netting: custom steel frames, mounting hardware, vehicle protection kits, protective structures for fixed assets and OEM steel assemblies for integrators — netting is available as part of a complete system.",
      uk: "VAXMetal виготовляє фізичний антидроновий захист як металоконструкції та інженерне рішення, а не лише сітку: металеві каркаси, кріплення, комплекти захисту техніки, стаціонарні захисні конструкції та OEM-вироби для інтеграторів — сітка постачається як частина комплектного рішення.",
    },
    useCases: {
      en: [
        "Vehicle protection frames for pickups, vans and special-purpose platforms",
        "Protective structures for generators, technical equipment and fixed assets",
        "Custom protection kits — netting, steel components and mounting hardware",
        "OEM steel assemblies for counter-UAS and physical-security integrators",
      ],
      uk: [
        "Захисні каркаси для пікапів, бусів та спеціальної техніки",
        "Захисні конструкції для генераторів, обладнання та стаціонарних об'єктів",
        "Комплекти захисту — сітка, металеві елементи та кріплення",
        "OEM-вироби для інтеграторів фізичного захисту та протидії БпЛА",
      ],
    },
    customers: {
      en: "Counter-UAS integrators, physical-security integrators, EPC and critical-infrastructure contractors, energy and industrial companies, defence and security OEMs",
      uk: "Промислові та енергетичні підприємства, комунальні служби, підрядники із захисних конструкцій, інтегратори, а також військові підрозділи та волонтерські організації",
    },
    serviceKeys: [
      "custom-metal-fabrication",
      "contract-manufacturing-oem",
      "laser-cutting",
      "sheet-metal-bending",
      "welding",
      "powder-coating",
      "assembly-qc",
    ],
    image: {
      src: "/images/industries/anti-drone-protection/hero-fixed-asset.png",
      alt: {
        en: "Protective steel structure with anti-drone netting around industrial equipment",
        uk: "Металева захисна конструкція з антидроновою сіткою для промислового обладнання",
      },
    },
  },
];
