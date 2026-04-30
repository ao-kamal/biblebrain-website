import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const modules = [
  {
    count: "4,200",
    countSuffix: "Episodes",
    title: "Weekly TV Show",
    description:
      "A structured, interactive Bible game show designed for weekly broadcast.",
    bullets: [
      "Consistent engagement",
      "High audience retention",
      "Global scalability",
    ],
  },
  {
    count: "36,525",
    countSuffix: "Days",
    title: "Daily Home Play",
    description:
      "A daily Scripture interaction system that builds discipline and mastery over time.",
    bullets: [
      "Habit-forming learning",
      "Individual participation",
      "Long-term engagement",
    ],
  },
  {
    count: "5,200",
    countSuffix: "Plays",
    title: "Weekly Home Play",
    description:
      "A simplified weekly format for homes, schools, and youth communities.",
    bullets: [
      "Group engagement",
      "Scalable participation",
      "Community-driven learning",
    ],
  },
  {
    count: "100",
    countSuffix: "Episodes",
    title: "Champion of Champions",
    description:
      "An elite competition featuring top performers across the platform.",
    bullets: [
      "Recognition and prestige",
      "Talent spotlight",
      "Structured progression",
    ],
  },
  {
    count: "Decade",
    countSuffix: "Events",
    title: "Bible Ultimate Search",
    description:
      "A long-cycle intellectual challenge focused on deep Scripture mastery.",
    bullets: [
      "Legacy-driven competition",
      "Intellectual rigor",
      "Multi-generational continuity",
    ],
  },
];

export function PlatformOverview() {
  return (
    <section className="bg-[#0A1F44] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Platform Overview</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A Scalable, Multi-Generational
            <br />
            <span className="text-[#D4AF37]">Scripture Engagement System</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Bible Brain<span className="text-[#D4AF37]">®</span> is a structured, long-term Scripture engagement
            platform designed to run for{" "}
            <span className="font-semibold text-white">100 years without content repetition</span>{" "}
            — and then begin again for the next generation.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]/80">
            Five integrated modules
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.title} delay={i * 0.1} direction="up">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-[#D4AF37]/30 hover:bg-white/[0.07]">
                {/* Number */}
                <div className="mb-5">
                  <div className="font-display text-4xl font-extrabold text-[#D4AF37] sm:text-5xl">
                    {mod.count}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/70">
                    {mod.countSuffix}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-bold text-white">
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {mod.description}
                </p>

                {/* Bullets */}
                <ul className="mt-auto space-y-2">
                  {mod.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-white/70">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
