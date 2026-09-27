import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/content/types";
import { electricHeatersPage } from "@/content/electric-heaters-page";

/**
 * Visible "answer-first" facts block per the AI-agentic-SEO patch (see
 * 10_AI_AGENTIC_SEO_GLOBAL.md / 11_ANTI_DRONE_AI_AGENTIC_PATCH.md): ordinary
 * crawlable HTML, not hidden AI-only content — placed right after the hero
 * so people and retrieval systems both get a fast, factual summary of what
 * the page is about before reading the full sections below.
 */
export function HeatersKeyFacts({ locale }: { locale: Locale }) {
  const t = electricHeatersPage.keyFacts;

  return (
    <section aria-labelledby="heaters-key-facts" className="border-b border-border bg-fog py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="heaters-key-facts" className="font-heading text-base font-semibold text-ink">
          {t.title[locale]}
        </h2>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {t.items[locale].map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-steel">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-pine" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
