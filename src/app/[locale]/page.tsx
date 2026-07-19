import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/hero-section";
import { TrustBarSection } from "@/components/home/trust-bar-section";
import { ServicesSection } from "@/components/home/services-section";
import { TracksSection } from "@/components/home/tracks-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhyUsSection } from "@/components/home/why-us-section";
import { LeadMagnetSection } from "@/components/home/lead-magnet-section";
import { GallerySection } from "@/components/home/gallery-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { QualitySection } from "@/components/home/quality-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <ServicesSection />
      <TracksSection />
      <ProcessSection />
      <WhyUsSection />
      <LeadMagnetSection />
      <GallerySection />
      <CapabilitiesSection />
      <QualitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
