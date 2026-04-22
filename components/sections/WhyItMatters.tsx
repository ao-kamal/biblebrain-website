import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const points = [
  "Biblical literacy — deep, structured engagement with Scripture",
  "Leadership development — building discipline, confidence, and character",
  "Values-driven living — truth as the foundation for a generation",
];

export function WhyItMatters() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              The Mission
            </span>
            <h2 className="mb-8 font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
              Why It Matters
            </h2>

            {/* Quote */}
            <blockquote className="relative mb-12">
              <div
                className="absolute -top-4 left-0 font-display text-8xl font-black leading-none text-[#D4AF37]/15"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="relative z-10 font-display text-xl font-semibold leading-relaxed text-[#0A1F44] sm:text-2xl">
                A generation without structure drifts.
                <br />
                <span className="text-[#D4AF37]">
                  A generation grounded in truth leads.
                </span>
              </p>
            </blockquote>

            <p className="mb-10 text-base leading-relaxed text-[#0A1F44]/60 sm:text-lg">
              Teenagers today are exposed to more information than any generation before
              them — but lack structured engagement with truth. Bible Brain® bridges that
              gap by making Scripture engaging, consistent, and applicable.
            </p>

            {/* Bullet points */}
            <ul className="space-y-4 text-left">
              {points.map((point, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction="left">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="h-3.5 w-3.5 text-[#0A1F44]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-[#0A1F44]/80">{point}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
