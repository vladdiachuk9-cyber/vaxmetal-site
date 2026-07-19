import { Section } from "@/components/ui/section";
import { LeadMagnetForm } from "@/components/conversion/lead-magnet-form";

export function LeadMagnetSection() {
  return (
    <Section tone="fog" className="py-10 sm:py-12">
      <LeadMagnetForm />
    </Section>
  );
}
