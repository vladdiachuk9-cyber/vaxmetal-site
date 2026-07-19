import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ImageOff, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Link } from "@/i18n/navigation";
import { services, type Locale } from "@/content";

type GalleryItem = { label: string; alt: string };

// Both maps are index-matched to the "gallery.items" list in
// messages/{en,uk}.json.
const REAL_PHOTOS: Record<number, string> = {
  0: "/images/equipment/cnc-turning-haas-st20.jpg",
  1: "/images/equipment/cnc-milling-haas-vf.jpg",
  2: "/images/equipment/laser-cutting-sheet-metal.jpg",
  3: "/images/equipment/press-brake-bending.jpg",
  4: "/images/equipment/tig-welding.jpg",
  5: "/images/equipment/mig-mag-welding.jpg",
  6: "/images/equipment/powder-coating.jpg",
  7: "/images/equipment/assembly-quality-control.jpg",
  8: "/images/equipment/packaging-shipping.jpg",
};

// Every tile — photo or placeholder — links to the service page with real
// specs (tolerances, thickness ranges), so "what does this actually do"
// is always one click away. Export packaging has no dedicated service
// page, so it points at assembly-qc, which covers packaging too.
const SERVICE_KEYS: Record<number, string> = {
  0: "cnc-turning",
  1: "cnc-milling",
  2: "laser-cutting",
  3: "sheet-metal-bending",
  4: "welding",
  5: "welding",
  6: "powder-coating",
  7: "assembly-qc",
  8: "assembly-qc",
};

export function GallerySection() {
  const t = useTranslations("gallery");
  const locale = useLocale() as Locale;
  const items = t.raw("items") as GalleryItem[];

  return (
    <Section>
      <SectionHeading eyebrow="Gallery" title={t("title")} subtitle={t("subtitle")} />
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item, i) => {
          const photo = REAL_PHOTOS[i];
          const service = services.find((s) => s.key === SERVICE_KEYS[i]);
          const href = service ? `/services/${service.slug[locale]}` : undefined;

          const tile = (
            <figure
              className={`relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border text-center transition-colors ${
                href ? "border-border hover:border-blue" : "border-border"
              } ${photo ? "" : "bg-fog"}`}
            >
              {photo ? (
                <>
                  <Image
                    src={photo}
                    alt={item.alt || item.label}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2 pt-6 text-left text-xs font-medium text-white">
                    {item.label}
                  </figcaption>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2 p-4">
                  <ImageOff className="size-6 text-steel-light" aria-hidden />
                  <figcaption className="text-xs font-medium text-steel">{item.label}</figcaption>
                </div>
              )}
            </figure>
          );

          return href ? (
            <Link key={item.label} href={href} className="group" aria-label={item.label}>
              {tile}
            </Link>
          ) : (
            <div key={item.label}>{tile}</div>
          );
        })}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/factory-tour"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark"
        >
          {t("tourCta")}
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </Section>
  );
}
