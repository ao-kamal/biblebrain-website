import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const programmes = [
  {
    badge: "TBC",
    title: "Teenagers' Bible Challenge",
    description:
      "Structured competition focused on Scripture mastery. Teenagers go head-to-head in a rigorous, inspiring format that rewards deep biblical knowledge.",
    focus: "Scripture Mastery",
    status: "Running",
  },
  {
    badge: "GTC",
    title: "Global Teenagers' Conference",
    description:
      "Large-scale youth gathering for spiritual growth and engagement. A high-impact event that brings together teenagers across regions.",
    focus: "Spiritual Growth",
    status: "Running",
  },
  {
    badge: "GTBC",
    title: "Global Teenagers' Bible Challenge",
    description:
      "A scalable international platform designed to engage teenagers across nations. The next frontier — built for global reach.",
    focus: "International Scale",
    status: "Next Phase",
  },
];

export function Programmes() {
  return (
    <section id="programmes" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Our Programmes</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            From Local Execution to Global Expansion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#0A1F44]/60">
            Three programmes. One mission. Building a generation through Scripture.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programmes.map((prog, i) => (
            <AnimatedSection key={prog.badge} delay={i * 0.15} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-lg bg-[#0A1F44] px-3 py-1.5 font-display text-sm font-bold text-[#D4AF37]">
                    {prog.badge}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      prog.status === "Next Phase"
                        ? "bg-[#D4AF37]/15 text-[#b8960c]"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {prog.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-bold text-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-base leading-relaxed text-[#0A1F44]/60">
                  {prog.description}
                </p>

                {/* Focus area */}
                <div className="mt-6 flex items-center gap-2 border-t border-[#0A1F44]/10 pt-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-[#D4AF37]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0115.186 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-[#0A1F44]/50">
                    Focus: {prog.focus}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
