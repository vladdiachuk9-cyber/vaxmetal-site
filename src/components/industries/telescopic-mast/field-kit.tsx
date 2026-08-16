import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

export function MastFieldKit({ locale }: { locale: Locale }) {
  const t = mastPage.kit;

  return (
    <Section tone="fog">
      <SectionHeading title={t.title[locale]} subtitle={t.subtitle[locale]} />
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src="/images/industries/telescopic-masts/kit-transport.png"
            alt={t.title[locale]}
            fill
            sizes="(min-width: 1024px) 448px, 90vw"
            className="object-contain"
          />
        </div>
        <ul className="space-y-3">
          {t.items.map((item) => (
            <li key={item.en} className="flex gap-3 rounded-lg border border-border bg-white p-4">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-pine" aria-hidden />
              <span className="font-medium text-ink">{item[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
