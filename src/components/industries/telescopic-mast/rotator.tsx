import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { mastPage } from "@/content/telescopic-mast-page";

/**
 * Uses exact reference photography from the brief (12/assets/rotator_exact_
 * references/) rather than an invented generic rotator render — the brief
 * is explicit that this product's rotator geometry must not be guessed.
 */
export function MastRotator({ locale }: { locale: Locale }) {
  const t = mastPage.rotator;

  return (
    <Section tone="fog">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading title={t.title[locale]} />
          <p className="mt-4 text-lg leading-relaxed text-steel">{t.text[locale]}</p>
          <p className="mt-2 text-sm text-steel">{t.supporting[locale]}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/images/industries/telescopic-masts/rotator-gen3-head.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-3"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/images/industries/telescopic-masts/rotator-battleborn.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-3"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/images/industries/telescopic-masts/rotator-mount.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-3"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/images/industries/telescopic-masts/rotator-gen3-controller.png"
              alt={t.title[locale]}
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-contain p-3"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
