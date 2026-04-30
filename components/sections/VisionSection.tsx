import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function VisionSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Vision */}
            <AnimatedSection direction="left">
              <div className="relative h-full rounded-2xl border border-[#0A1F44]/10 bg-[#F5F5F5] p-8 sm:p-10">
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Our Vision
                </span>
                <div
                  className="absolute right-6 top-6 font-display text-7xl font-black leading-none text-[#D4AF37]/10"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote className="relative z-10">
                  <p className="font-display text-xl font-bold leading-snug text-[#0A1F44] sm:text-2xl">
                    To build a globally recognized{" "}
                    <span className="text-[#D4AF37]">Scripture engagement system</span>{" "}
                    that shapes minds, builds values, and sustains impact across generations.
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>

            {/* Mission */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative h-full rounded-2xl border border-[#D4AF37]/30 bg-[#0A1F44] p-8 sm:p-10">
                <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Our Mission
                </span>
                <div
                  className="absolute right-6 top-6 font-display text-7xl font-black leading-none text-white/10"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <blockquote className="relative z-10">
                  <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                    To raise a generation of teenagers who{" "}
                    <span className="text-[#D4AF37]">know God&rsquo;s Word</span>, live it
                    daily, and lead with it.
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
