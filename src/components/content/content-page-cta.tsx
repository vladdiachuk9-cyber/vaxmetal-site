import { useLocale, useTranslations } from "next-intl";

export function ContentPageCta() {
  const locale = useLocale();
  const t = useTranslations("finalCta");

  return (
    <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-xl border border-border bg-graphite p-8 text-white sm:flex-row sm:items-center">
      <div>
        <h2 className="font-heading text-2xl font-semibold">{t("title")}</h2>
        <p className="mt-2 text-steel-light">{t("subtitle")}</p>
      </div>
      <a
        href={`/${locale}#rfq`}
        className="shrink-0 rounded-md bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
      >
        {t("ctaPrimary")}
      </a>
    </div>
  );
}
