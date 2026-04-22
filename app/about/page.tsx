import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { VisionSection } from "@/components/sections/VisionSection";
import { OurModel } from "@/components/sections/OurModel";
import { WhatMakesUsUnique } from "@/components/sections/WhatMakesUsUnique";
import { ProvenGrowth } from "@/components/sections/ProvenGrowth";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Bible Brain® mission — a long-term youth development platform combining faith, education, and media to guide teenagers through Scripture.",
  alternates: {
    canonical: "https://www.biblebrain.ng/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionSection />
      <OurModel />
      <WhatMakesUsUnique />
      <ProvenGrowth />
      <PartnershipCTA />
    </>
  );
}
