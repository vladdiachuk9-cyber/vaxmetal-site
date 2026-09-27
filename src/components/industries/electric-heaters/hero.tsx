"use client";

import { UploadCloud } from "lucide-react";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";
import { trackEvent } from "@/lib/analytics/track-event";

export function HeatersHero({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.hero;

  return (
    <section className="relative overflow-hidden border-b border-border bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-pine/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24 lg:px-8">
        <p className="text-sm font-semibold font-mono uppercase tracking-wide text-pine-light">
          {t.eyebrow[locale]}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {t.title[locale]}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-light">{t.lead[locale]}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel-light">{t.supporting[locale]}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#heater-rfq"
            onClick={() => trackEvent("heater_quote_click")}
            className="rounded-md bg-pine px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-pine-dark"
          >
            {t.ctaPrimary[locale]}
          </a>
          <a
            href="#heater-rfq"
            onClick={() => trackEvent("heater_upload_click")}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <UploadCloud className="size-4" aria-hidden />
            {t.ctaSecondary[locale]}
          </a>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel-light">{t.microcopy[locale]}</p>
      </div>
    </section>
  );
}
