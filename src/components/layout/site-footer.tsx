import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { services, industries } from "@/content";
import type { Locale } from "@/content";
import { BrandLink } from "./brand-link";

export function SiteFooter() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;
  const rfqHref = `/${locale}#rfq`;

  return (
    <footer className="border-t border-border bg-graphite text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <BrandLink className="font-heading text-lg font-semibold" />
            <p className="mt-3 max-w-xs text-sm text-steel-light">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-light">
              {t("servicesTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {services.slice(0, 6).map((s) => (
                <li key={s.key}>
                  <Link href={`/services/${s.slug[locale]}`} className="hover:text-white">
                    {s.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-light">
              {t("industriesTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {industries.map((industry) => (
                <li key={industry.key}>
                  <Link href={`/industries/${industry.slug[locale]}`} className="hover:text-white">
                    {industry.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-steel-light">
              {t("contactTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="hover:text-white">
                  {siteConfig.contact.salesEmail}
                </a>
              </li>
              <li>
                <a href={rfqHref} className="hover:text-white">
                  {t("contactTitle")} →
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  {locale === "uk" ? "Блог" : "Blog"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-steel-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {t("rightsReserved")}
          </p>
          <p className="max-w-md">{t("verifyNote")}</p>
        </div>
      </div>
    </footer>
  );
}
