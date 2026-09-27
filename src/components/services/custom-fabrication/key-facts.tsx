import { CheckCircle2 } from "lucide-react";
import type { Locale } from "@/content/types";

/**
 * Visible "answer-first" facts block added per
 * 04_METALWORKING_AI_SEO_PATCH.md — ordinary crawlable HTML placed right
 * after the hero/intro, before the deeper sections below. Copy is verbatim
 * from the patch's EN/UA blocks.
 */
const COPY = {
  en: {
    title: "Key Facts",
    items: [
      "Input: idea, photo, sketch, sample, STEP/STP/DWG/DXF/PDF or production drawings",
      "Materials: carbon steel, stainless steel, aluminium",
      "Processes: laser cutting, CNC machining, sheet-metal bending, welding, powder coating, assembly and QC",
      "Production model: selected prototypes / first articles through repeat serial production",
      "Initial review: normally within 24–48 hours",
      "EU delivery: FCA / DAP depending on project and destination",
    ],
  },
  uk: {
    title: "Ключові факти",
    items: [
      "Вхідні дані: ідея, фото, ескіз, зразок, STEP/STP/DWG/DXF/PDF або виробничі креслення",
      "Матеріали: вуглецева сталь, нержавіюча сталь, алюміній",
      "Процеси: лазерне різання, CNC-обробка, гнуття листового металу, зварювання, порошкове фарбування, складання та контроль якості",
      "Формат виробництва: окремі прототипи / first article з переходом у повторюване серійне виробництво",
      "Первинний розгляд: зазвичай протягом 24–48 годин",
      "Поставка до ЄС: FCA / DAP залежно від проєкту та напрямку",
    ],
  },
} as const;

export function CustomFabKeyFacts({ locale }: { locale: Locale }) {
  const t = COPY[locale];

  return (
    <section aria-labelledby="custom-fab-key-facts" className="border-b border-border bg-fog py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="custom-fab-key-facts" className="font-heading text-base font-semibold text-ink">
          {t.title}
        </h2>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
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
