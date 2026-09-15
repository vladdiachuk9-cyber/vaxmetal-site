import { useLocale, useTranslations } from "next-intl";
import { Phone, Send } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { services, industries } from "@/content";
import type { Locale } from "@/content";
import { BrandLink } from "./brand-link";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/icons/social-icons";

const SOCIAL_LINKS = [
  { key: "whatsapp", icon: WhatsAppIcon, label: "WhatsApp" },
  { key: "telegram", icon: Send, label: "Telegram" },
  { key: "instagram", icon: InstagramIcon, label: "Instagram" },
  { key: "facebook", icon: FacebookIcon, label: "Facebook" },
] as const;

export function SiteFooter() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;
  const rfqHref = `/${locale}#rfq`;

  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <BrandLink inverted className="font-heading text-lg font-semibold" />
            <p className="mt-3 max-w-xs text-sm text-steel-light">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wide text-steel-light">
              {t("servicesTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {services.filter((s) => s.featuredInFooter).map((s) => (
                <li key={s.key}>
                  <Link href={`/services/${s.slug[locale]}`} className="hover:text-white">
                    {s.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wide text-steel-light">
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
            <h3 className="text-sm font-semibold font-mono uppercase tracking-wide text-steel-light">
              {t("contactTitle")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${siteConfig.contact.salesEmail}`} className="hover:text-white">
                  {siteConfig.contact.salesEmail}
                </a>
              </li>
              {siteConfig.contact.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center gap-1.5 hover:text-white"
                  >
                    <Phone className="size-3.5 shrink-0" aria-hidden />
                    {siteConfig.contact.phone}
                  </a>
                </li>
              )}
              <li>
                <Link href="/contact" className="hover:text-white">
                  {locale === "uk" ? "Контакти" : "Contact"} →
                </Link>
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

            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ key, icon: Icon, label }) => {
                const href = siteConfig.contact[key];
                if (!href) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="-m-1 flex size-11 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-pine-light"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-steel-light">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
