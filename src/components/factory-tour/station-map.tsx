"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ImageOff, X, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { FactoryStation } from "@/content/factory-stations";
import { services, type Locale } from "@/content";

export function StationMap({ stations }: { stations: FactoryStation[] }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("factoryTour");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const active = stations.find((s) => s.key === activeKey) ?? null;
  const relatedService = active?.relatedServiceKey
    ? services.find((s) => s.key === active.relatedServiceKey)
    : undefined;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stations.map((station) => (
            <li key={station.key}>
              <button
                type="button"
                onClick={() => setActiveKey(station.key)}
                aria-pressed={activeKey === station.key}
                className={`flex w-full flex-col items-start gap-2 rounded-xl border p-4 text-left transition-colors ${
                  activeKey === station.key
                    ? "border-pine bg-pine-tint"
                    : "border-border bg-white hover:border-pine"
                }`}
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-ink font-heading text-xs font-semibold text-white">
                  {station.step}
                </span>
                <span className="font-heading text-sm font-semibold text-ink">
                  {station.name[locale]}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-steel">{t("hint")}</p>
      </div>

      <div className="lg:col-span-1">
        {active ? (
          <div className="rounded-xl border border-border bg-white p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-heading text-lg font-semibold text-ink">{active.name[locale]}</h2>
              <button
                type="button"
                onClick={() => setActiveKey(null)}
                aria-label={t("close")}
                className="rounded-md p-1 text-steel hover:bg-fog"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-4 flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-fog">
              <ImageOff className="size-6 text-steel-light" aria-hidden />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-steel">{active.description[locale]}</p>

            {relatedService && (
              <Link
                href={`/services/${relatedService.slug[locale]}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pine hover:text-pine-dark"
              >
                {t("viewService")}
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>
        ) : (
          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-border bg-fog p-8 text-center">
            <p className="text-sm text-steel">{t("emptyState")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
