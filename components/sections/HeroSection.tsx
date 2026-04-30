"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/gallery/FB_IMG_1775728564798.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dark navy overlay */}
      <div
        className="absolute inset-0 bg-[#0A1F44]/75"
        aria-hidden="true"
      />

      {/* Optional: uncomment and replace src when real video is available
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            A Global Teenagers Platform
          </span>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Raising a Generation
            <br />
            <span className="text-[#D4AF37]">Through Scripture</span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Bible Brain®️ — a teenagers&apos; interactive Bible platform that combines media, competition, and structured learning to guide{" "}
            <span className="font-semibold text-white">young people through Scripture.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/#contact" variant="primary" size="lg">
              Partner With Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
            <Button
              href="https://www.youtube.com/@biblebrainng"
              variant="secondary"
              size="lg"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Highlights
            </Button>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/50">
            Built for impact. Designed for generations.
          </p>
          <div className="mx-auto flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-white/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
