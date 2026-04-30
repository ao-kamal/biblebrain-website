import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GallerySlider } from "@/components/ui/GallerySlider";

const timeline = [
  {
    year: "2023",
    highlight: "₦500,000",
    title: "TBC Executed",
    detail: "Successfully organized Teenagers' Bible Challenge with prize award",
  },
  {
    year: "2024",
    highlight: "₦575,000",
    title: "Expanded Scale",
    detail: "Programme scale and participation significantly expanded",
  },
  {
    year: "2025",
    highlight: "Global",
    title: "Conference Hosted",
    detail: "Hosted Global Teenagers' Conference, streamed on sponsor's platforms",
  },
  {
    year: "2026",
    highlight: "₦1M+",
    title: "Sponsor Confirmed",
    detail: "Confirmed sponsor commitment with prize award exceeding ₦1,000,000",
  },
];

const gallerySlides = [
  { src: "/images/gallery/biblebrain/image1.jpeg", alt: "Bible Brain® prize presentation" },
  { src: "/images/gallery/biblebrain/image14.jpeg", alt: "Bible Brain® group standing together" },
  { src: "/images/gallery/biblebrain/image22.jpeg", alt: "Teenagers reading Scripture" },
  { src: "/images/gallery/biblebrain/image19.jpeg", alt: "Bible Brain® participants in a circle" },
  { src: "/images/gallery/biblebrain/image10.jpeg", alt: "Bible Brain® winner receiving prize" },
  { src: "/images/gallery/biblebrain/image27.jpeg", alt: "Bible Brain® event group photo" },
];

export function ProvenGrowth() {
  return (
    <section className="bg-[#0A1F44] py-16 sm:py-24 lg:py-32">
      <Container>
        {/* Headline */}
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Track Record
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            A Platform with Proven Growth
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Growth is not assumed. It is demonstrated.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-16 sm:grid-cols-2 md:grid-cols-4">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.12} direction="up">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                <div className="mb-1 text-sm font-semibold text-white/50">
                  {item.year}
                </div>
                <div className="mb-2 font-display text-xl font-extrabold text-[#D4AF37] sm:text-2xl md:text-3xl">
                  {item.highlight}
                </div>
                <div className="mb-2 font-semibold text-white text-sm">
                  {item.title}
                </div>
                <p className="text-xs leading-relaxed text-white/50">
                  {item.detail}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Gallery Slider */}
        <AnimatedSection delay={0.3}>
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            See It in Action
          </p>
          <GallerySlider slides={gallerySlides} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
