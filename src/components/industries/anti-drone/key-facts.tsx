import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/content/types";

/**
 * Visible "answer-first" facts block added per
 * 11_ANTI_DRONE_AI_AGENTIC_PATCH.md — ordinary crawlable HTML placed right
 * after the hero, before "What We Manufacture", so people and retrieval
 * systems both get a fast, factual summary before the full sections below.
 * Copy is verbatim from the patch brief's EN/UA blocks.
 */
const COPY = {
  en: {
    title: "Anti-Drone Protection — Key Facts",
    items: [
      "What VAXMetal manufactures: steel frames, posts, supports, mounting components and complete physical barrier structures; protective netting can be supplied as part of the system.",
      "Applications: vehicles, mobile equipment, industrial equipment and fixed assets.",
      "What you can send: photos, approximate dimensions, a sketch, site plan or production drawing.",
      "Project formats: one-off structures, kits, serial components and OEM batches for integrators.",
      "Scope: physical/mechanical protection structures. VAXMetal does not present these structures as a universal guarantee against every UAV or attack profile.",
    ],
  },
  uk: {
    title: "Антидроновий фізичний захист — ключові факти",
    items: [
      "Що виробляє VAXMetal: сталеві рами, стійки, опори, кріплення та комплектні конструкції фізичного захисту; захисна сітка може постачатися як частина системи.",
      "Застосування: транспорт, мобільна техніка, промислове обладнання та стаціонарні об'єкти.",
      "Що можна надіслати: фото, орієнтовні габарити, ескіз, план об'єкта або виробниче креслення.",
      "Формати проєктів: одиничні конструкції, комплекти, серійні компоненти та OEM-партії для інтеграторів.",
      "Межі рішення: механічний / фізичний захист. Конструкція не повинна подаватися як універсальна гарантія від будь-якого БПЛА чи сценарію атаки.",
    ],
  },
} as const;

export function AntiDroneKeyFacts({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <section aria-labelledby="anti-drone-key-facts" className="border-b border-border bg-fog py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="anti-drone-key-facts" className="font-heading text-base font-semibold text-ink">
          {t.title}
        </h2>
        <ul className="mt-4 grid gap-2.5">
          {t.items.map((item) => (
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
