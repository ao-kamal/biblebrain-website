import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsBibleBrain } from "@/components/sections/WhatIsBibleBrain";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Programmes } from "@/components/sections/Programmes";
import { ProvenGrowth } from "@/components/sections/ProvenGrowth";
import { EventsSection } from "@/components/sections/EventsSection";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";
import { MediaGrid } from "@/components/sections/MediaGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "https://www.biblebrain.ng",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsBibleBrain />
      <WhatWeDo />
      <Programmes />
      <ProvenGrowth />
      <EventsSection />
      <WhyItMatters />
      <PartnershipCTA />
      <MediaGrid />
      <ContactSection />
    </>
  );
}
