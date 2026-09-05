"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { services } from "@/content";
import type { Locale } from "@/content";

const SEND_PROJECT_LABEL = { en: "Send Your Project", uk: "Надіслати проєкт" } as const;

export function StickyRfqBar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const rfqHref = `/${locale}#rfq`;

  const customFabService = services.find((s) => s.key === "custom-metal-fabrication");
  const isCustomFabPage = pathname === `/services/${customFabService?.slug[locale]}`;

  if (isCustomFabPage) {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden">
        <div className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <a
            href="#custom-project-form"
            className="block rounded-md bg-pine px-4 py-3 text-center text-sm font-semibold text-white"
          >
            {SEND_PROJECT_LABEL[locale]}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden">
      <div className="flex items-center gap-2 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a
          href={rfqHref}
          className="flex-1 rounded-md bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
        >
          {t("requestQuote")}
        </a>
        <a
          href={rfqHref}
          className="flex-1 rounded-md border border-border px-4 py-3 text-center text-sm font-semibold text-ink"
        >
          {t("uploadDrawing")}
        </a>
      </div>
    </div>
  );
}
