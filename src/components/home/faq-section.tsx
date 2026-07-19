import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { faqJsonLd } from "@/lib/seo/schema";

export function FaqSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <Section id="faq" tone="fog">
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <SectionHeading eyebrow="FAQ" title={t("title")} />
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
