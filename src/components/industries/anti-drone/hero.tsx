"use client";

import Image from "next/image";
import { UploadCloud } from "lucide-react";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";
import { trackEvent } from "@/lib/analytics/track-event";

export function AntiDroneHero({ locale }: { locale: Locale }) {
  const t = antiDronePage.hero;

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

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
        <div>
          <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {t.title[locale]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-light">{t.subhead[locale]}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-steel-light">{t.supporting[locale]}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#antidrone-rfq"
              onClick={() => trackEvent("anti_drone_quote_click")}
              className="rounded-md bg-pine px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-pine-dark"
            >
              {t.ctaPrimary[locale]}
            </a>
            <a
              href="#antidrone-rfq"
              onClick={() => trackEvent("anti_drone_upload_click")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <UploadCloud className="size-4" aria-hidden />
              {t.ctaSecondary[locale]}
            </a>
          </div>

          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel-light">{t.microcopy[locale]}</p>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-steel-light/80">{t.claimsNote[locale]}</p>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/industries/anti-drone-protection/hero-fixed-asset.png"
            alt={
              locale === "uk"
                ? "Металева захисна конструкція з антидроновою сіткою для промислового обладнання"
                : "Protective steel structure with anti-drone netting around industrial equipment"
            }
            fill
            priority
            sizes="(min-width: 1024px) 512px, 90vw"
            className="object-cover"
          />
          <p className="absolute inset-x-0 bottom-0 bg-navy/80 px-3 py-2 text-center text-[11px] leading-snug text-steel-light">
            {antiDronePage.conceptLabel[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}
