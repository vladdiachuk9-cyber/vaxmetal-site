import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { ContentHero } from "@/components/content/content-hero";
import { siteConfig } from "@/lib/site-config";
import type { Locale } from "@/content";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "uk" ? "Політика конфіденційності" : "Privacy Policy",
    robots: { index: false, follow: true },
    alternates: { canonical: `/${locale}/privacy` },
  };
}

const COPY = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    description:
      "DRAFT — pending legal review. This page describes, in plain terms, what data this site collects and why, until formal legal copy replaces it.",
    sections: [
      {
        heading: "What we collect",
        body: "Contact and RFQ form submissions (name, email, company, and any file you upload) are sent to our team to prepare a quote. We don't sell this data or share it beyond preparing your quote and, where relevant, our CRM.",
      },
      {
        heading: "Analytics cookies",
        body: "Analytics (Google Analytics, Microsoft Clarity, and similar tools) only load after you explicitly accept the cookie banner. Declining does not affect your ability to use the site or submit an RFQ.",
      },
      {
        heading: "File uploads",
        body: "Drawings and files uploaded through the RFQ form are stored to prepare your quote and are not used for any other purpose.",
      },
      {
        heading: "Contact",
        body: `Questions about this policy can be sent to ${siteConfig.contact.salesEmail}.`,
      },
    ],
  },
  uk: {
    eyebrow: "Юридичне",
    title: "Політика конфіденційності",
    description:
      "ЧЕРНЕТКА — очікує юридичної перевірки. Ця сторінка описує простими словами, які дані збирає сайт і навіщо, до заміни офіційним юридичним текстом.",
    sections: [
      {
        heading: "Що ми збираємо",
        body: "Дані форми заявки на КП (ім'я, email, компанія та будь-який завантажений файл) надсилаються нашій команді для підготовки котирування. Ми не продаємо ці дані і не передаємо їх за межі підготовки котирування та, де це доречно, нашої CRM.",
      },
      {
        heading: "Аналітичні cookie",
        body: "Аналітика (Google Analytics, Microsoft Clarity та подібні інструменти) завантажується лише після вашої явної згоди у банері cookie. Відмова не впливає на можливість користуватись сайтом чи надіслати заявку на КП.",
      },
      {
        heading: "Завантаження файлів",
        body: "Креслення та файли, завантажені через форму заявки, зберігаються для підготовки котирування і не використовуються з іншою метою.",
      },
      {
        heading: "Контакти",
        body: `Питання щодо цієї політики можна надсилати на ${siteConfig.contact.salesEmail}.`,
      },
    ],
  },
} as const;

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = COPY[locale];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: copy.title, href: "/privacy" },
        ]}
      />
      <ContentHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {copy.sections.map((section) => (
          <div key={section.heading} className="mt-8 first:mt-0">
            <h2 className="font-heading text-lg font-semibold text-ink">{section.heading}</h2>
            <p className="mt-2 text-steel">{section.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
