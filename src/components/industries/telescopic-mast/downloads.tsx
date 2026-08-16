import { Section, SectionHeading } from "@/components/ui/section";
import { KpDownloadCard } from "@/components/conversion/kp-download-card";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastDownloads({ locale }: { locale: Locale }) {
  const t = mastPage.downloads;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} />
      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
        <KpDownloadCard
          href="/downloads/VAXMetal_KP_mast.pdf"
          title={t.datasheetTitle[locale]}
          subtitle={t.datasheetSubtitle[locale]}
          cta={locale === "uk" ? "Завантажити datasheet" : "Download datasheet"}
        />
        <KpDownloadCard
          href="/downloads/VAXMetal_Mast_Presentation.pdf"
          title={t.presentationTitle[locale]}
          subtitle={t.presentationSubtitle[locale]}
          cta={locale === "uk" ? "Переглянути презентацію" : "Download overview"}
        />
      </div>
    </Section>
  );
}
