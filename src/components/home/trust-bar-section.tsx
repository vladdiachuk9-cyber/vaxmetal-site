import { useTranslations } from "next-intl";

export function TrustBarSection() {
  const t = useTranslations("trustBar");
  const items = t.raw("items") as { label: string; value: string }[];

  return (
    <div className="border-b border-border bg-fog">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-steel">
          {t("title")}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              {item.value && (
                <dt className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
                  {item.value}
                </dt>
              )}
              <dd className={item.value ? "mt-1 text-sm text-steel" : "font-heading text-lg font-semibold text-ink"}>
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-center text-xs text-steel">{t("certNote")}</p>
      </div>
    </div>
  );
}
