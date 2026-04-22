import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const photos = [
  { src: "/images/gallery/469104909_122127989636462757_7274441282330824869_n.jpg", alt: "Bible Brain® event" },
  { src: "/images/gallery/469167486_122127989216462757_4247132783227679676_n.jpg", alt: "Bible Brain® youth gathering" },
  { src: "/images/gallery/469334923_122127989582462757_321122324108153417_n.jpg", alt: "Teenagers at Bible Brain®" },
  { src: "/images/gallery/527088519_122161971764462757_447699078472779625_n.jpg", alt: "Global Teenagers' Conference" },
  { src: "/images/gallery/527683916_122161970420462757_8600866377533700599_n.jpg", alt: "Bible Brain® conference highlights" },
  { src: "/images/gallery/528081189_122161970504462757_3290319724885911841_n.jpg", alt: "Scripture competition" },
  { src: "/images/gallery/FB_IMG_1775727570739.jpg", alt: "Bible Brain® participants" },
  { src: "/images/gallery/FB_IMG_1775727650563.jpg", alt: "Youth engaged in Scripture study" },
  { src: "/images/gallery/FB_IMG_1775727810122.jpg", alt: "Bible Brain® award ceremony" },
  { src: "/images/gallery/FB_IMG_1775728049416.jpg", alt: "Teenagers at the competition" },
  { src: "/images/gallery/FB_IMG_1775728210613.jpg", alt: "Bible Brain® programme" },
  { src: "/images/gallery/FB_IMG_1775728442099.jpg", alt: "Bible Brain® event highlights" },
];

export function MediaGrid() {
  return (
    <section id="media" className="bg-[#F5F5F5] py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-16 text-center">
          <SectionLabel className="mb-4 block">Media</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            See It Happen
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            Real events. Real teenagers. Real transformation.
          </p>
        </AnimatedSection>

        {/* Featured video */}
        <AnimatedSection className="mb-10">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <video
              src="/videos/Are%20You%20A%20Soldier.mp4"
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-[#0A1F44] object-cover"
            />
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={Math.min(i * 0.08, 0.5)} direction="up">
              <div className="group relative overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A1F44]/0 transition-all duration-300 group-hover:bg-[#0A1F44]/30" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <Button href="/sponsorship-deck.pdf" variant="primary" size="lg">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Sponsorship Deck
          </Button>
        </div>
      </Container>
    </section>
  );
}
