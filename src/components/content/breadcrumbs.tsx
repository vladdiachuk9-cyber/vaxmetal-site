import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { breadcrumbJsonLd } from "@/lib/seo/schema";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-fog">
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd(items.map((i) => ({ name: i.name, url: i.href })))
          ),
        }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm text-steel sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3.5 text-steel-light" aria-hidden />}
            {index === items.length - 1 ? (
              <span className="font-medium text-ink" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-ink">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
