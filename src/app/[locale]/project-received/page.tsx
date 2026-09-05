import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { noindexRobots } from "@/lib/seo/schema";
import type { Locale } from "@/content";
import { customFabricationPage } from "@/content/custom-fabrication-page";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = customFabricationPage.success;
  return {
    title: t.h1[locale],
    robots: noindexRobots(),
    alternates: { canonical: `/${locale}/project-received` },
  };
}

export default async function ProjectReceivedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = customFabricationPage.success;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: siteConfig.name, href: "/" },
          { name: t.h1[locale], href: "/project-received" },
        ]}
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <CheckCircle2 className="size-14 text-pine" aria-hidden />
        <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.h1[locale]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-steel">{t.body[locale]}</p>
        <p className="mt-6 font-mono text-sm uppercase tracking-wide text-steel">{t.note[locale]}</p>
      </div>
    </>
  );
}
