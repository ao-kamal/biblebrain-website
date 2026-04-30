"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const events = [
  {
    src: "/images/flyers/flyer-5.jpeg",
    year: "2023",
    title: "Teenagers' Bible Challenge",
    tag: "That I May Know Him",
    prize: "₦500,000",
    status: "past",
  },
  {
    src: "/images/flyers/flyer-4.jpeg",
    year: "2024",
    title: "Teenagers' Bible Challenge",
    tag: "Study to Know God",
    prize: "₦575,000",
    status: "past",
  },
  {
    src: "/images/flyers/flyer-3.jpeg",
    year: "2025",
    title: "Global Teenagers' Conference",
    tag: "Sponsor-supported · Streamed",
    prize: null,
    status: "past",
  },
  {
    src: "/images/flyers/flyer-1.jpeg",
    year: "2026",
    title: "Teenagers' Bible Challenge S3",
    tag: "Unlock the Power of Psalms",
    prize: "₦1,000,000+",
    status: "upcoming",
  },
  {
    src: "/images/flyers/flyer-2.jpeg",
    year: "2026",
    title: "Global Teenagers' Bible Challenge",
    tag: "International Edition",
    prize: "Win $3,000",
    status: "upcoming",
  },
];

export function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="events" className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-12">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Events
          </span>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Our Journey, Year by Year
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            From a local quiz to a global platform — every flyer marks a step forward.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {events.map((event) => (
                <div
                  key={`${event.year}-${event.title}`}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                    {/* Fixed-ratio flyer image — all same size */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={event.src}
                        alt={`${event.year} ${event.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute left-3 top-3">
                        {event.status === "upcoming" ? (
                          <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-[#0A1F44] shadow">
                            Upcoming
                          </span>
                        ) : (
                          <span className="rounded-full bg-[#0A1F44]/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            {event.year}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                          {event.year}
                        </p>
                        {event.prize && (
                          <span className="text-xs font-bold text-[#0A1F44]">
                            {event.prize}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-1 font-display text-sm font-bold leading-snug text-[#0A1F44]">
                        {event.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#0A1F44]/50">&ldquo;{event.tag}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] sm:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute -right-5 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] sm:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
