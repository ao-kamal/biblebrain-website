import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const gains = [
  {
    title: "Brand Visibility",
    description:
      "Reach across youth and family audiences through structured programming, live events, and digital channels.",
  },
  {
    title: "Values Alignment",
    description:
      "Association with values-driven, faith-based content that families trust and recommend.",
  },
  {
    title: "Legacy Positioning",
    description:
      "Long-term impact and legacy positioning — be part of something that outlives a single season or campaign.",
  },
  {
    title: "Growing Audience",
    description:
      "Access to a growing national and global audience as the platform scales beyond Nigeria.",
  },
];

export function PartnerGains() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">What You Gain</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Partnership That Pays Forward
          </h2>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {gains.map((g, i) => (
            <AnimatedSection key={g.title} delay={i * 0.1} direction="left">
              <div className="flex items-start gap-5 rounded-2xl border border-[#0A1F44]/8 bg-[#F5F5F5] p-6 transition hover:border-[#D4AF37]/30 hover:shadow-sm md:p-7">
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
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1.5 font-display text-lg font-bold text-[#0A1F44]">
                    {g.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0A1F44]/65">
                    {g.description}
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
