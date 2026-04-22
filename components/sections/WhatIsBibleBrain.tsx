import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhatIsBibleBrain() {
  return (
    <section id="about-intro" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text — 60% */}
          <AnimatedSection direction="left" className="lg:w-[58%]">
            <SectionLabel className="mb-4 block">About the Platform</SectionLabel>
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl">
              What is Bible Brain<span className="text-[#D4AF37]">®</span>?
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#0A1F44]/70">
              Bible Brain® is a structured platform that transforms how teenagers engage
              with Scripture. Through competition, media, and disciplined learning, it
              turns Bible study into a consistent, engaging, and life-shaping experience.
            </p>
            <p className="text-base leading-relaxed text-[#0A1F44]/60">
              It is built not as a programme, but as a scalable platform with long-term
              impact — designed to engage young people across schools, churches, and
              digital platforms.
            </p>

            {/* Key stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { value: "4+", label: "Years Running" },
                { value: "1000+", label: "Teenagers Reached" },
                { value: "Global", label: "Conference 2025" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-[#D4AF37]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#0A1F44]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Image — 40% */}
          <AnimatedSection direction="right" delay={0.2} className="w-full lg:w-[42%]">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/gallery/FB_IMG_1775727726949.jpg"
                alt="Bible Brain® youth event — teenagers engaged in Scripture study"
                width={600}
                height={480}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Decorative gold accent */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-2xl bg-[#D4AF37]/20" aria-hidden="true" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
