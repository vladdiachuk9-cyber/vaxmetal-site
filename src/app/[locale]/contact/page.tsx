import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Mail, Phone, Send } from "lucide-react";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";
import { localeAlternates } from "@/lib/seo/schema";
import type { Locale } from "@/content";

type Props = { params: Promise<{ locale: Locale }> };

const COPY = {
  en: {
    metaTitle: "Contact VAXMetal | Metal Manufacturing & Engineering",
    metaDescription:
      "Contact VAXMetal for custom metal manufacturing, CNC machining, welding, fabrication and production enquiries.",
    eyebrow: "Contact",
    title: "Contact VAXMetal",
    description: "Have a drawing, project or manufacturing request? Send it to us and we'll review the best way to manufacture it.",
    sendProjectTitle: "Send a Project",
    sendProjectBody: "Email or call us with your drawing, sketch or requirement — or go straight to the request form.",
    sendProjectCta: "Send a Request",
    quickContactTitle: "Quick Contact",
    quickContactBody: "For a quick question, message us directly on WhatsApp or Telegram.",
    quickContactCta: "Message us",
    responseTime: "We normally reply to manufacturing requests within 24–48 hours.",
    followTitle: "Follow VAXMetal",
  },
  uk: {
    metaTitle: "Контакти VAXMetal | Металообробка та виробництво",
    metaDescription: "Зв'яжіться з VAXMetal щодо виготовлення металевих виробів, CNC-обробки, зварювання та контрактного виробництва.",
    eyebrow: "Контакти",
    title: "Зв'язатися з VAXMetal",
    description: "Є креслення, проєкт або виробниче завдання? Надішліть його нам — ми розглянемо оптимальний спосіб виготовлення.",
    sendProjectTitle: "Надіслати проєкт",
    sendProjectBody: "Напишіть на email, зателефонуйте або одразу перейдіть до форми заявки з кресленням чи ескізом.",
    sendProjectCta: "Надіслати запит",
    quickContactTitle: "Швидкий зв'язок",
    quickContactBody: "Для короткого запитання — напишіть нам одразу у WhatsApp або Telegram.",
    quickContactCta: "Написати",
    responseTime: "Зазвичай відповідаємо на виробничі запити протягом 24–48 годин.",
    followTitle: "VAXMetal у соцмережах",
  },
} as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = COPY[locale];
  return {
    // Absolute title: bypasses the root layout's `%s | VAXMetal` template so
    // this page's own brand-suffixed title (per the contacts package spec)
    // isn't doubled up into "... | VAXMetal | VAXMetal".
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: localeAlternates({ en: "/en/contact", uk: "/uk/contact" }),
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = COPY[locale];
  const { phone, salesEmail, whatsapp, telegram, instagram, facebook } = siteConfig.contact;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: t.title, href: "/contact" },
        ]}
      />
      <ContentHero eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-7">
            <h2 className="font-heading text-xl font-semibold text-ink">{t.sendProjectTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">{t.sendProjectBody}</p>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${salesEmail}`}
                  className="inline-flex items-center gap-2 font-medium text-ink hover:text-pine"
                >
                  <Mail className="size-4 shrink-0 text-pine" aria-hidden />
                  {salesEmail}
                </a>
              </li>
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 font-medium text-ink hover:text-pine"
                  >
                    <Phone className="size-4 shrink-0 text-pine" aria-hidden />
                    {phone}
                  </a>
                </li>
              )}
            </ul>

            <a
              href={`/${locale}#rfq`}
              className="mt-6 inline-flex rounded-md bg-pine px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-dark"
            >
              {t.sendProjectCta}
            </a>
          </div>

          <div className="rounded-xl border border-border bg-white p-7">
            <h2 className="font-heading text-xl font-semibold text-ink">{t.quickContactTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">{t.quickContactBody}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {whatsapp && (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  <WhatsAppIcon className="size-4 shrink-0" aria-hidden />
                  WhatsApp — {t.quickContactCta}
                </a>
              )}
              {telegram && (
                <a
                  href={telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-pine hover:text-pine"
                >
                  <Send className="size-4 shrink-0" aria-hidden />
                  Telegram — {t.quickContactCta}
                </a>
              )}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-steel">{t.responseTime}</p>

        {(instagram || facebook) && (
          <div className="mt-14 text-center">
            <h2 className="text-sm font-semibold font-mono uppercase tracking-wide text-steel">{t.followTitle}</h2>
            <div className="mt-4 flex justify-center gap-3">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-11 items-center justify-center rounded-md text-steel transition-colors hover:bg-fog hover:text-pine"
                >
                  <InstagramIcon className="size-5" aria-hidden />
                </a>
              )}
              {facebook && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-11 items-center justify-center rounded-md text-steel transition-colors hover:bg-fog hover:text-pine"
                >
                  <FacebookIcon className="size-5" aria-hidden />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
