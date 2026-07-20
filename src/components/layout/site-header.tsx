"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";
import { BrandLink } from "./brand-link";

// Real hub pages get a normal locale-aware pathname; sections that only
// exist on the homepage (process/why-us/faq) get an absolute "/{locale}#id"
// anchor so the link still works when clicked from an inner content page.
const NAV_ITEMS = [
  { type: "path", href: "/services", key: "services" as const },
  { type: "path", href: "/industries", key: "industries" as const },
  { type: "path", href: "/blog", key: "blog" as const },
  { type: "anchor", href: "#process", key: "process" as const },
  { type: "anchor", href: "#why-us", key: "about" as const },
  { type: "anchor", href: "#faq", key: "faq" as const },
] as const;

export function SiteHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLink className="font-heading text-lg font-semibold tracking-tight text-ink" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) =>
            item.type === "path" ? (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-steel transition-colors hover:text-ink"
              >
                {t(item.key)}
              </Link>
            ) : (
              <a
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm font-medium text-steel transition-colors hover:text-ink"
              >
                {t(item.key)}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher />
          <a
            href={`/${locale}#rfq`}
            className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy"
          >
            {t("requestQuote")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Primary mobile">
            {NAV_ITEMS.map((item) =>
              item.type === "path" ? (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-steel hover:bg-fog hover:text-ink"
                >
                  {t(item.key)}
                </Link>
              ) : (
                <a
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-steel hover:bg-fog hover:text-ink"
                >
                  {t(item.key)}
                </a>
              )
            )}
            <div className="mt-2 flex items-center justify-between px-3 py-2">
              <LocaleSwitcher />
              <a
                href={`/${locale}#rfq`}
                onClick={() => setOpen(false)}
                className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white"
              >
                {t("requestQuote")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
