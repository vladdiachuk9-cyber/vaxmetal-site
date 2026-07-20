import { useTranslations } from "next-intl";
import { Download, FileText } from "lucide-react";

export function KpDownloadCard() {
  const t = useTranslations("kpDownload");

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <FileText className="mt-0.5 size-8 shrink-0 text-pine" aria-hidden />
        <div>
          <h3 className="font-heading text-base font-semibold text-ink">{t("title")}</h3>
          <p className="mt-1 text-sm text-steel">{t("subtitle")}</p>
        </div>
      </div>
      <a
        href="/downloads/VAXMetal_KP_serial.pdf"
        download
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy"
      >
        <Download className="size-4" aria-hidden />
        {t("cta")}
      </a>
    </div>
  );
}
