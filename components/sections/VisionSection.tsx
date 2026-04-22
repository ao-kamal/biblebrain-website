import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function VisionSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Our Vision
            </span>
            <div className="relative">
              <div
                className="absolute -top-6 left-0 font-display text-9xl font-black leading-none text-[#D4AF37]/10"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="relative z-10">
                <p className="font-display text-2xl font-bold leading-relaxed text-[#0A1F44] sm:text-3xl lg:text-4xl">
                  To build a generation of young people{" "}
                  <span className="text-[#D4AF37]">grounded in Scripture</span>,
                  equipped with values, and prepared for leadership.
                </p>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
