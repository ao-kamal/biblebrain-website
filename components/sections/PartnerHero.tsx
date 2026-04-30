"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function PartnerHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gallery/biblebrain/image14.jpeg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A1F44]/85" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Partner With Us
          </span>
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Build a Generation
            <br />
            <span className="text-[#D4AF37]">With Us</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
            Bible Brain<span className="text-[#D4AF37]">®</span> offers a unique opportunity
            to align with a platform that combines{" "}
            <span className="font-semibold text-white">
              youth development, education, media visibility, and faith-based impact
            </span>{" "}
            — at scale, for the long term.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/sponsorship-deck.pdf" variant="primary" size="lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Partnership Deck
            </Button>
            <Button href="/#contact" variant="secondary" size="lg">
              Talk to Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
