import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { industries } from "@/content";
import type { Locale } from "@/content";

const COPY = {
  en: "Need OEM manufacturing of electric heating panels or heated towel rails? See our Electric Heaters page.",
  uk: "Потрібне OEM-виробництво електричних обігрівачів чи рушникосушок? Дивіться нашу сторінку Електричні обігрівачі.",
} as const;

/** Cross-link from the custom-fabrication intake page to the electric-heaters page, per 05_SEO_AND_METADATA.md. */
export function ElectricHeatersCtaLine() {
  const locale = useLocale() as Locale;
  const industry = industries.find((i) => i.key === "electric-heaters");
  if (!industry) return null;

  return (
    <p className="mt-4 text-center text-sm text-steel">
      <Link href={`/industries/${industry.slug[locale]}`} className="font-semibold text-pine hover:text-pine-dark">
        {COPY[locale]}
      </Link>
    </p>
  );
}
