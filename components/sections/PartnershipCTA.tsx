import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

const partnerTypes = [
  "Corporate Sponsors",
  "Faith Organizations",
  "Educational Institutions",
  "Media Partners",
];

export function PartnershipCTA() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #D4AF37 0%, #b8960c 100%)",
      }}
    >
      <Container>
        <AnimatedSection className="text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#0A1F44]/60">
            Partnership
          </span>
          <h2 className="mb-4 font-display text-3xl font-extrabold text-[#0A1F44] sm:text-4xl lg:text-5xl">
            Be Part of Building a Generation
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[#0A1F44]/70">
            Partner with a platform designed for long-term impact. Be part of something
            that outlives seasons.
          </p>

          <Button href="/#contact" variant="dark" size="lg" className="mb-12">
            Become a Partner
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Button>

          {/* Partner types */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partnerTypes.map((type, i) => (
              <span
                key={type}
                className="rounded-full bg-[#0A1F44]/10 px-4 py-2 text-sm font-semibold text-[#0A1F44]"
              >
                {type}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
