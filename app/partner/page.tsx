import type { Metadata } from "next";
import { PartnerHero } from "@/components/sections/PartnerHero";
import { PartnerOpportunities } from "@/components/sections/PartnerOpportunities";
import { PartnerGains } from "@/components/sections/PartnerGains";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Bible Brain® — a structured, scalable platform combining youth development, education, media visibility, and faith-based impact. Sponsorship, institutional, media, and CSR opportunities available.",
  alternates: {
    canonical: "https://www.biblebrain.ng/partner",
  },
};

export default function PartnerPage() {
  return (
    <>
      <PartnerHero />
      <PartnerOpportunities />
      <PartnerGains />
      <PartnershipCTA />
    </>
  );
}
