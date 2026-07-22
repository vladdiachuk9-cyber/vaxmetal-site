import type { IndustryContent } from "./types";

export const industries: IndustryContent[] = [
  {
    key: "trailer-truck-parts",
    slug: { en: "trailer-truck-parts", uk: "detali-prychepiv" },
    tag: { en: "Track A", uk: "Напрямок А" },
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
    tag: { en: "Track B", uk: "Напрямок Б" },
    name: { en: "Telescopic Masts", uk: "Телескопічні щогли" },
    shortDescription: {
      en: "Welded and machined mast sections for mobile surveillance towers, telecom sites, event technology and security integrators.",
      uk: "Зварні та механооброблені секції щогл для мобільних веж відеоспостереження, телеком-майданчиків, івент-техніки та інтеграторів безпеки.",
    },
    intro: {
      en: "The global telescopic mast market runs around $1.7–1.9 billion, growing 5–7% a year, with security and defense as its largest segments. Premium brands price 2–3x above what a mid-market alternative can offer, with lead times measured in months. We produce welded and machined mast sections and mounting hardware — an established product line already in production, not a concept.",
      uk: "Світовий ринок телескопічних щогл становить близько $1,7-1,9 млрд, зростає на 5-7% на рік, з безпекою та обороною як найбільшими сегментами. Преміум-бренди встановлюють ціну у 2-3 рази вище того, що може запропонувати середній ціновий сегмент, зі строками у місяці. Ми виробляємо зварні та механооброблені секції щогл і кріплення — відпрацьований продукт, вже в серійному виробництві, а не концепція.",
    },
    useCases: {
      en: [
        "Mobile CCTV and perimeter surveillance towers",
        "Temporary telecom base station masts (COW)",
        "Event technology and lighting masts",
        "Security and defense integrator mast sections",
      ],
      uk: [
        "Мобільні вежі CCTV та периметрового спостереження",
        "Мачти тимчасових базових станцій телеком (COW)",
        "Щогли для івент-техніки та освітлення",
        "Секції щогл для інтеграторів безпеки та оборонного сектору",
      ],
    },
    customers: {
      en: "CCTV tower operators, telecom contractors, event technology providers, security & defense integrators",
      uk: "Оператори веж CCTV, телеком-підрядники, постачальники івент-техніки, інтегратори безпеки та оборонного сектору",
    },
    serviceKeys: ["cnc-turning", "cnc-milling", "welding", "assembly-qc"],
    image: {
      src: "/images/industries/telescopic-masts.jpg",
      alt: {
        en: "Fully extended telescopic mast on a mobile solar-powered trailer unit",
        uk: "Повністю висунута телескопічна щогла на мобільному причепі із сонячними панелями",
      },
    },
    proposalPdf: "/downloads/VAXMetal_KP_mast.pdf",
  },
  {
    key: "robotics-ugv-chassis",
    slug: { en: "robotics-ugv-chassis", uk: "shasi-dlya-robototehniky" },
    tag: { en: "Track C", uk: "Напрямок В" },
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
    tag: { en: "Track D", uk: "Напрямок Г" },
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
    tag: { en: "Wave 2", uk: "Хвиля 2" },
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
];
