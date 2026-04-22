import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  {
    title: "Structured Bible Coverage System",
    description:
      "A deliberate curriculum approach ensuring teenagers engage systematically with Scripture — not randomly, but with depth and structure.",
  },
  {
    title: "Competitive Learning Model",
    description:
      "Competition creates urgency, mastery, and memorable engagement. We harness that energy for Scripture in a way no typical programme does.",
  },
  {
    title: "Multi-Platform Engagement",
    description:
      "From live events to digital streams to broadcast TV, Bible Brain® meets teenagers on every platform they use.",
  },
  {
    title: "Long-Term Scalability",
    description:
      "Designed as a platform, not a one-off event. The infrastructure, partnerships, and brand are built to scale regionally and globally.",
  },
];

export function WhatMakesUsUnique() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Differentiation</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            What Makes Us Unique
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            Not a church programme. Not a school event. A platform.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1} direction="left">
              <div className="flex items-start gap-6 rounded-2xl border border-[#0A1F44]/8 bg-[#F5F5F5] p-6 transition hover:border-[#D4AF37]/30 hover:shadow-sm md:p-8">
                {/* Arrow */}
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className="h-5 w-5 text-[#0A1F44]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[#0A1F44]">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#0A1F44]/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
