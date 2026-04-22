"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/#programmes" },
  { label: "Events", href: "/#events" },
  { label: "Media", href: "/#media" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change / resize
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0A1F44] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpeg"
              alt="Bible Brain® Logo"
              width={44}
              height={44}
              className="rounded-lg object-cover"
            />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold text-white">Bible Brain<span className="text-[#D4AF37]">®</span></div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-white/60">A Scripture Brain Company</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white hover:text-[#D4AF37]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="ml-2 inline-flex items-center rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#0A1F44] transition hover:bg-[#b8960c]"
            >
              Partner With Us
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col bg-[#0A1F44] pt-20">
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-xl font-medium text-white/80 transition hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-4 text-lg font-bold text-[#0A1F44]"
            >
              Partner With Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
