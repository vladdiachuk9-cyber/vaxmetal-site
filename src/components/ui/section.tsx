import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  tone = "light",
  children,
}: {
  id?: string;
  className?: string;
  tone?: "light" | "fog" | "navy";
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy text-white"
      : tone === "fog"
        ? "bg-fog"
        : "bg-background";

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", toneClass, className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "fog" | "navy";
}) {
  const isDark = tone === "navy";
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold font-mono uppercase tracking-wide",
            isDark ? "text-pine-light" : "text-pine"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl",
          isDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", isDark ? "text-steel-light" : "text-steel")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
