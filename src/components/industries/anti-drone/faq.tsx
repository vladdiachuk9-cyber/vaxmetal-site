import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqJsonLd } from "@/lib/seo/schema";
import type { Locale } from "@/content/types";
import { antiDronePage } from "@/content/anti-drone-page";

export function AntiDroneFaq({ locale }: { locale: Locale }) {
  const t = antiDronePage.faq;
  const items = t.items.map((item) => ({
    question: item.question[locale],
    answer: item.answer[locale],
  }));

  return (
    <Section tone="fog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <SectionHeading title={t.title[locale]} />
      <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-xl border border-border bg-white">
        {items.map((item) => (
          <details key={item.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink marker:content-none">
              {item.question}
              <ChevronDown className="size-5 shrink-0 text-steel transition-transform group-open:rotate-180" aria-hidden />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-steel">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
