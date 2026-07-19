import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function LinkCardGrid({
  title,
  items,
}: {
  title?: string;
  items: { name: string; description?: string; href: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mt-4">
      {title && (
        <h2 className="font-heading text-xl font-semibold text-ink">{title}</h2>
      )}
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${title ? "mt-6" : ""}`}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-white p-5 transition-colors hover:border-blue"
          >
            <div>
              <p className="font-heading text-base font-semibold text-ink">{item.name}</p>
              {item.description && (
                <p className="mt-1 text-sm text-steel">{item.description}</p>
              )}
            </div>
            <ArrowUpRight className="mt-1 size-4 shrink-0 text-steel-light transition-colors group-hover:text-blue" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}
