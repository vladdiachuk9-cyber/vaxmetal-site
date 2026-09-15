import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { industries } from "@/content";
import type { Locale } from "@/content";

const COPY = {
  en: "Need physical protection for a vehicle, equipment or fixed asset? See our anti-drone protection structures.",
  uk: "Потрібен фізичний захист техніки, обладнання чи об'єкта? Дивіться наші антидронові захисні конструкції.",
} as const;

/** Cross-link from the custom-fabrication intake page to the anti-drone-protection page, per internal_links.md. */
export function AntiDroneCtaLine() {
  const locale = useLocale() as Locale;
  const industry = industries.find((i) => i.key === "anti-drone-protection");
  if (!industry) return null;

  return (
    <p className="mt-10 text-center text-sm text-steel">
      <Link href={`/industries/${industry.slug[locale]}`} className="font-semibold text-pine hover:text-pine-dark">
        {COPY[locale]}
      </Link>
    </p>
  );
}
