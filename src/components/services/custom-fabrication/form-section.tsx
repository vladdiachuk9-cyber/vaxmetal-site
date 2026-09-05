import type { Locale } from "@/content/types";
import { customFabricationPage } from "@/content/custom-fabrication-page";
import { CustomProjectForm } from "./custom-project-form";

export function CustomFabFormSection({ locale }: { locale: Locale }) {
  const t = customFabricationPage.formCopy;

  return (
    <section className="border-t border-border bg-navy py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-white">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{t.h2[locale]}</h2>
          <p className="mt-4 max-w-md text-lg text-steel-light">{t.lead[locale]}</p>
          <p className="mt-6 text-sm text-steel-light">{t.ndaLine[locale]}</p>
        </div>
        <CustomProjectForm locale={locale} />
      </div>
    </section>
  );
}
