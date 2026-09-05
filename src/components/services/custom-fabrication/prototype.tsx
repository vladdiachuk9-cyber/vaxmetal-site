import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabPrototype({ locale }: { locale: Locale }) {
  const t = customFabricationPage.prototype;

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-xl border border-border">
          <Image
            src={t.image}
            alt={t.imageAlt[locale]}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 512px, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading title={t.h2[locale]} />
          <p className="mt-6 text-lg leading-relaxed text-steel">{t.body[locale]}</p>
        </div>
      </div>
    </Section>
  );
}
