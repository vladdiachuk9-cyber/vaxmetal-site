"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useConsent, setStoredConsent } from "@/lib/analytics/consent";

const COPY = {
  en: {
    text: "We use analytics cookies to understand how the site is used. You can accept or decline — this doesn't affect the RFQ form or your ability to browse the site.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
  },
  uk: {
    text: "Ми використовуємо аналітичні cookie, щоб розуміти, як використовується сайт. Ви можете погодитись або відмовитись — це не впливає на форму заявки чи можливість переглядати сайт.",
    accept: "Погодитись",
    decline: "Відмовитись",
    privacy: "Політика конфіденційності",
  },
} as const;

export function ConsentBanner() {
  const locale = useLocale() as keyof typeof COPY;
  const consent = useConsent();

  if (consent !== null) return null;

  const copy = COPY[locale] ?? COPY.en;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-border bg-graphite text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-steel-light">
          {copy.text}{" "}
          <Link href="/privacy" className="underline hover:text-white">
            {copy.privacy}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setStoredConsent("denied")}
            className="rounded-md border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            {copy.decline}
          </button>
          <button
            type="button"
            onClick={() => setStoredConsent("granted")}
            className="rounded-md bg-blue px-4 py-2 text-sm font-semibold hover:bg-blue-dark"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
