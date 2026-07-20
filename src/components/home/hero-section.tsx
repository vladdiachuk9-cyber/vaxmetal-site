import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border bg-ink text-white">
      {/* Lightweight pineprint-grid backdrop — no image/video weight, keeps LCP fast */}
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

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold font-mono uppercase tracking-wide text-pine-light">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {t("headline")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-light sm:text-xl">
            {t("subhead")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#rfq"
              className="rounded-md bg-pine px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-pine-dark"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#rfq"
              className="rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          <p className="mt-4 text-sm text-steel-light">{t("microcopy")}</p>
        </div>
      </div>
    </section>
  );
}
