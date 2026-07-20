/**
 * Central brand/contact config. Brand name and domain are working placeholders —
 * see TODO_VERIFY.md. Swap them here once finalized; every SEO/schema helper
 * and layout reads from this file, so nothing else needs to change.
 */
export const siteConfig = {
  name: "VAXMetal",
  legalName: "VAXMetal Manufacturing LLC", // TODO_VERIFY: real legal entity name
  tagline: "Engineering & Manufacturing — ЧПУ, лазер, гибка металла",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vaxmetal.com", // TODO_VERIFY: real domain
  country: "Ukraine",
  contact: {
    salesEmail: process.env.NEXT_PUBLIC_SALES_EMAIL ?? "sales@vaxmetal.com", // TODO_VERIFY
    phone: process.env.NEXT_PUBLIC_PHONE ?? "", // TODO_VERIFY
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "", // TODO_VERIFY
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "", // TODO_VERIFY
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "", // TODO_VERIFY
  },
  capacity: {
    // Verified facts from the owner — safe to state confidently on the site.
    cncTurningCenters: 5,
    cncTurningBrand: "HAAS",
    cncMillingCenters: 5,
    cncMillingBrand: "HAAS",
    processes: [
      "Laser cutting",
      "CNC press brake bending",
      "CNC turning",
      "CNC milling",
      "TIG welding",
      "Laser welding",
      "MIG/MAG welding",
      "Spot welding",
      "Gear cutting",
      "Powder coating",
      "Assembly",
      "Quality control",
      "Packaging",
    ],
  },
} as const;
