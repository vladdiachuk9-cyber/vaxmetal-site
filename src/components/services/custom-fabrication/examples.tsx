import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabExamples({ locale }: { locale: Locale }) {
  const t = customFabricationPage.examples;

  return (
    <Section>
      <SectionHeading title={t.h2[locale]} subtitle={t.lead[locale]} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.images.map((image) => (
          <div key={image.id} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-2 text-sm text-steel sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item) => (
          <li key={item.en} className="flex gap-2">
            <span className="text-pine" aria-hidden>
              —
            </span>
            {item[locale]}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs text-steel">{t.disclaimer[locale]}</p>
    </Section>
  );
}
