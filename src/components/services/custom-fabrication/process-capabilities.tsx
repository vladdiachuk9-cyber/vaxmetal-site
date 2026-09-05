import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";

export function CustomFabProcessCapabilities({ locale }: { locale: Locale }) {
  const t = customFabricationPage.processCapabilities;

  return (
    <Section tone="fog">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title={t.h2[locale]} />
          <p className="mt-6 text-lg leading-relaxed text-steel">{t.body[locale]}</p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {t.links.map((link) => (
              <li key={link.label.en}>
                <Link
                  href={link.url[locale]}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-pine hover:text-pine-dark"
                >
                  {link.label[locale]}
                  <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {t.secondaryCapabilities.map((cap) => (
              <span
                key={cap.en}
                className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-steel"
              >
                {cap[locale]}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl border border-border bg-white">
          <Image
            src={t.image}
            alt={t.imageAlt[locale]}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 448px, 90vw"
            className="object-contain p-6"
          />
        </div>
      </div>
    </Section>
  );
}
