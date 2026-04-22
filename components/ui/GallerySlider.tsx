"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";

interface Slide {
  src: string;
  alt: string;
}

interface GallerySliderProps {
  slides: Slide[];
}

export function GallerySlider({ slides }: GallerySliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="mx-2 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 md:left-0 md:-translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 md:right-0 md:translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
