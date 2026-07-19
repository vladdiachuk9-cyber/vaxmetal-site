"use client";

import { useLocale, useTranslations } from "next-intl";

export function StickyRfqBar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const rfqHref = `/${locale}#rfq`;

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
