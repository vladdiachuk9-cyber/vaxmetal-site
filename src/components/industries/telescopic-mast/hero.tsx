import Image from "next/image";
import { Download, FileText } from "lucide-react";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastHero({ locale }: { locale: Locale }) {
  const t = mastPage.hero;

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
          <p className="text-sm font-semibold font-mono uppercase tracking-wide text-pine-light">
            {t.eyebrow[locale]}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {t.title[locale]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-light">
            {t.subhead[locale]}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-pine-light/40 bg-pine/15 px-4 py-2 text-sm font-semibold text-pine-light">
            {t.proofBadge[locale]}
          </div>

          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel-light">
            {t.paramsLine[locale]}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#mast-rfq"
              className="rounded-md bg-pine px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-pine-dark"
            >
              {t.ctaPrimary[locale]}
            </a>
            <a
              href="/downloads/VAXMetal_KP_mast.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Download className="size-4" aria-hidden />
              {t.ctaSecondary[locale]}
            </a>
          </div>

          <a
            href="/downloads/VAXMetal_Mast_Presentation.pdf"
            download
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-steel-light underline-offset-4 hover:text-white hover:underline"
          >
            <FileText className="size-4" aria-hidden />
            {t.ctaTertiary[locale]}
          </a>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <Image
            src="/images/industries/telescopic-masts/hero-mast.png"
            alt={t.title[locale]}
            fill
            priority
            sizes="(min-width: 1024px) 448px, 90vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
