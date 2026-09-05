import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { services } from "@/content";
import type { Locale } from "@/content";

const COPY = {
  en: "No production-ready drawing yet? Start with an idea, photo or sketch.",
  uk: "Ще немає готового виробничого креслення? Почніть з ідеї, фото або ескізу.",
} as const;

/** Cross-link from generic service/industry pages to the custom-fabrication intake page, per internal_links.yaml. */
export function CustomProjectCtaLine() {
  const locale = useLocale() as Locale;
  const service = services.find((s) => s.key === "custom-metal-fabrication");
  if (!service) return null;

  return (
    <p className="mt-10 text-center text-sm text-steel">
      <Link href={`/services/${service.slug[locale]}`} className="font-semibold text-pine hover:text-pine-dark">
        {COPY[locale]}
      </Link>
    </p>
  );
}
