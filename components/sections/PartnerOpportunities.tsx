import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const tiers = [
  {
    title: "Sponsorship",
    levels: ["Lead", "Season", "Episode"],
    description:
      "Underwrite a season, an episode, or the full platform. Maximum brand alignment with high-visibility programming and media.",
    accent: "from-[#D4AF37] to-[#b8960c]",
  },
  {
    title: "Institutional Partnerships",
    levels: ["Schools", "Churches"],
    description:
      "Embed Bible Brain® programmes in schools and churches. Grow your community while we deliver structured Scripture engagement.",
    accent: "from-[#0A1F44] to-[#1a3461]",
  },
  {
    title: "Media & Broadcast Partnerships",
    levels: ["TV", "Streaming", "Distribution"],
    description:
      "Carry Bible Brain® content on your network or platform. Tap into ready-made, structured programming designed for weekly broadcast.",
    accent: "from-[#0A1F44] to-[#1a3461]",
  },
  {
    title: "Corporate Social Responsibility",
    levels: ["CSR", "Foundations", "Grants"],
    description:
      "Anchor your CSR story to a values-driven youth platform with measurable, multi-year impact. Built for long-term reporting cycles.",
    accent: "from-[#D4AF37] to-[#b8960c]",
  },
];

export function PartnerOpportunities() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-12 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Partnership Opportunities</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Four Ways to Partner
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#0A1F44]/60">
            Choose the structure that fits your goals. Each tier is built for measurable
            impact and long-term alignment.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.title} delay={i * 0.1} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Top accent strip */}
                <div className={`h-2 bg-gradient-to-r ${tier.accent}`} />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="mb-2 font-display text-xl font-bold text-[#0A1F44] sm:text-2xl">
                    {tier.title}
                  </h3>

                  {/* Level badges */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {tier.levels.map((level) => (
                      <span
                        key={level}
                        className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#b8960c]"
                      >
                        {level}
                      </span>
                    ))}
                  </div>

                  <p className="text-base leading-relaxed text-[#0A1F44]/65">
                    {tier.description}
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
