# Bible Brain® — Design System

> Snapshot of the design language already implemented in code (Tailwind 4 + Next.js 16 + framer-motion + Embla). Not aspirational — descriptive of `main` as of 2026-04-30.

## Color palette

OKLCH-derived; existing code uses hex literals. Do not introduce gradients on text, glassmorphism backdrops, or side-stripe borders.

| Role | Hex | OKLCH | Usage |
|------|-----|-------|-------|
| Navy primary | `#0A1F44` | ~oklch(20% 0.08 270) | Hero overlays, footer, dark sections (PlatformOverview, ProvenGrowth), display text on light surfaces, Mission card |
| Gold accent | `#D4AF37` | ~oklch(75% 0.13 90) | CTAs, eyebrows ("SectionLabel"), section labels uppercase tracking, single-letter trademark glyph, accent borders |
| Gold dark (hover) | `#b8960c` | ~oklch(60% 0.13 90) | Primary CTA hover, partner-tier accent gradient terminus |
| Off-white surface | `#F5F5F5` | ~oklch(96% 0 0) | Section alternation, form field backgrounds, section labels backgrounds |
| Pure white | `#ffffff` | — | Card surfaces, default page bg |
| Body navy/70 | `#0A1F44 / 70%` | — | Body copy on light |
| Body navy/60 | `#0A1F44 / 60%` | — | Secondary copy on light |

**Color strategy:** Committed — navy + gold carry ~70% of branded surface area. Off-white sections rest the eye between navy stretches. **Not Restrained** (gold is more than 10% of the visual weight in branded sections, by design).

**Bans:**
- No black (`#000`). Replace with `#0A1F44`.
- No pure-white-on-pure-white components (always introduce a tinted neutral or border).
- No gradient text (`bg-clip-text`).
- No side-stripe borders.

## Typography

| Family | Weight | Where |
|--------|--------|-------|
| **Poppins** (`--font-poppins`, `font-display`) | 600 / 700 / 800 | Headings, section labels, large display numbers |
| **Inter** (`--font-inter`, default body) | 400 / 500 / 600 | Body copy, navigation, buttons, captions |

Both loaded via `next/font/google` in `app/layout.tsx`. Display=swap.

### Scale (Tailwind classes)

- Display L: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` (hero h1)
- Display M: `text-3xl sm:text-4xl lg:text-5xl` (section h2)
- Display S: `text-xl sm:text-2xl` (sub-section h3 / blockquotes)
- Lead body: `text-lg sm:text-xl` (hero subhead, intro paragraphs)
- Body: `text-base` default 1rem
- Small: `text-sm` (sidebar, secondary)
- Micro: `text-xs uppercase tracking-[0.25em]` (eyebrow labels — the "SectionLabel" component)

### Hierarchy rules
- Body line length cap ~ 65ch; sections wrap content in `max-w-2xl` to `max-w-5xl`.
- Eyebrow → headline → lead body is the canonical section opener.
- `font-display` reserved for headlines and display numbers, never body.

## Spacing rhythm

Vertical spacing per section (mobile → desktop):

- Section padding: `py-16 sm:py-24 lg:py-32`
- Inter-block within section: `mb-10 sm:mb-12` for opener, `gap-6` to `gap-12` for grids
- Container side padding: `px-4 sm:px-6 lg:px-8` (provided by `Container`)
- Max width: `max-w-7xl` for page width, `max-w-3xl/4xl/5xl` for centered content

**Vary the rhythm.** PlatformOverview uses denser cards; Vision/Mission breathes; PartnerHero is generous. Don't make every section the same height.

## Components

### Layout
- `Container` — `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- `Navbar` — fixed top, navy on scroll, mobile hamburger, gold "Partner With Us" CTA
- `Footer` — navy bg, three columns desktop / one mobile, wordmark + quick-links + connect, social row at bottom border
- `WhatsAppButton` — fixed bottom-right floating green pulse pill

### UI primitives
- `Button` — variants: `primary` (gold filled), `secondary` (white outline), `dark` (navy filled). Sizes `sm`/`md`/`lg`. Always `inline-flex` with icon support.
- `SectionLabel` — uppercase 0.25em tracked gold eyebrow
- `AnimatedSection` — wrapper for `framer-motion` scroll-in effects (directions: up/left/right). Used pervasively.
- `GallerySlider` — Embla carousel with autoplay

### Composition patterns
- **Gold card** — `rounded-2xl bg-white shadow-sm` with `border border-[#0A1F44]/10` or accent gradient strip on top
- **Dark glass card** — `rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm` (used in PlatformOverview on navy bg — exception to glassmorphism ban; used purposefully for module cards on dark)
- **Gold-band CTA** — full-width gradient `from-[#D4AF37] to-[#b8960c]` with dark CTA inside (PartnershipCTA)
- **Quote block** — large faded `&ldquo;` decoration, display-weight body text

## Motion

- Scroll-in animations via `framer-motion` (handled by `AnimatedSection`). Default: fade + 24-32px translate up. Stagger delay: 0.1-0.15s per child.
- Hero animations: opacity + 32px y on mount, 0.7s ease-out.
- Hover micro-interactions: card translateY -1, shadow up, color shift on accent.
- Scroll-cue: bouncing dot inside outline pill, infinite loop 1.5s ease-in-out.

**Bans:** no `transform: scale(1.05)` on click (only on hover, max 1.02-1.05); no bounce eases; no parallax.

## Imagery

- Backgrounds: Collins's authentic event photos (`/images/gallery/biblebrain/imageN.jpeg`) overlaid with `bg-[#0A1F44]/75-85` for text legibility.
- Photo grid: `aspect-[4/3]` with rounded-xl, hover scale 1.05, navy/30 overlay on hover.
- Event flyers: `aspect-[3/4]` portrait orientation, fixed sizes for visual rhythm in carousel.
- Hero preload: explicit `<link rel="preload" as="image">` for LCP photo.
- Sizing: always provide `sizes` prop; serve responsive variants.

## Mobile-first principles (this section is the active brief)

- All layouts mobile-first. Default = mobile, `md:`/`lg:` for desktop.
- Touch targets ≥44×44 px (WCAG 2.5.5).
- No horizontal scroll at any width 320-1920 px.
- Hero scroll-cue must not overlap content on iPhone SE (375×667).
- Stat/card grids: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3/4`. Never force multi-column at <640px.
- Type scale must remain readable: 16px minimum for body, 14px minimum for secondary copy.
- Mobile menu: full-screen overlay, items ≥56px tall (already done in Navbar).
- WhatsApp button: 14×14 px floating, doesn't overlap critical CTAs.
- Form fields: 44px height minimum, 16px font size (avoid iOS zoom-on-focus).

## Accessibility floor

- Color contrast: navy on white = WCAG AAA; gold on navy = AA Large; gold on white needs darker variant for body text (use `#b8960c` on white).
- Hover states never carry information that's not also surfaced statically.
- Every interactive element keyboard-reachable. `focus-visible:outline` on Button, WhatsAppButton.
- ARIA labels on icon-only buttons (mobile hamburger, social row, scroll-cue if needed).
- Images always have `alt` (Collins's photos use auto-captions for now; refine when event/year mapping arrives).

## What this design IS NOT

- Not a SaaS dashboard. No data viz, no settings drawer, no command palette.
- Not a campaign microsite. The structure is permanent; no countdown timer, no "limited time" copy.
- Not a typical church/ministry site. No worship-service times, no online giving widget, no devotional reading plan.
- Not a teen-facing app. The audience is adult sponsors and partners.
