# feat: Mobile Responsiveness & Branding Updates

## Overview

Improve the biblebrain-website so it looks polished and professional on mobile devices (320px–767px). Also complete two branding updates that were started: replace the navbar placeholder logo with the WhatsApp image, and add the Image_Editor banner to the site.

---

## Problem Statement

The site was built desktop-first with a few mobile overrides but has specific layout issues that break the visual hierarchy on small screens. Two priority issues identified in the audit:

1. `ProvenGrowth.tsx:59` — `grid-cols-2` is forced on all screen sizes, cramming stat cards into narrow columns on phones below 400px wide.
2. `HeroSection.tsx:38` — `py-32` (128px top + bottom) on the hero content wrapper causes the scroll-cue arrow to overlap text on short-viewport devices (iPhone SE, Galaxy A series).

Plus the incomplete branding work (logo image + banner) from the current session.

---

## Proposed Solution

Three-part fix:

1. **Branding** — use the WhatsApp image as the navbar logo; add the Image_Editor banner to the hero or as a dedicated section.
2. **Layout fixes** — two targeted Tailwind class changes for the confirmed layout breaks.
3. **Mobile polish pass** — systematic review of padding, font sizes, touch targets, and section spacing across all components.

---

## Technical Considerations

- All images must live in `/public/` to be served by Next.js — already copied: `logo.jpeg`, `banner.png`.
- Use `next/image` with correct `sizes` prop for all new images.
- Navbar logo: swap the `<div>` placeholder (the gold "B" square) for an `<Image>` tag. Keep the text beside it unless the image already contains the full wordmark.
- Banner: decide placement — either replace the hero background image or add it as a section below the hero. **Ask user before implementing.**
- All Tailwind changes must be mobile-first (unprefixed = mobile, `md:` = desktop).
- Touch targets for nav links and CTA buttons must be ≥ 44px tall.

---

## Files to Change

| File | Line | Change |
|------|------|--------|
| `components/layout/Navbar.tsx` | 41–48 | Replace gold "B" div with `<Image src="/logo.jpeg" />` |
| `components/sections/ProvenGrowth.tsx` | 59 | `grid-cols-2` → `grid-cols-1 sm:grid-cols-2 md:grid-cols-4` |
| `components/sections/HeroSection.tsx` | 38 | `py-32` → `py-20 sm:py-32` |
| `components/sections/HeroSection.tsx` | TBD | Add banner (location TBD — confirm with user) |
| All section components | Various | Mobile padding / spacing polish pass |

---

## Acceptance Criteria

- [ ] Navbar logo shows the WhatsApp image instead of the gold "B" placeholder
- [ ] Logo is crisp at all screen sizes (correct `width`/`height` or `fill` + `sizes`)
- [ ] Image_Editor banner is visible on the site at an agreed location
- [ ] ProvenGrowth stat grid stacks to 1 column on phones < 640px wide
- [ ] Hero section scroll-cue does not overlap content on iPhone SE (375×667px)
- [ ] No horizontal scroll on any page at 320px viewport width
- [ ] All CTA buttons have minimum 44px tap height
- [ ] Nav links in mobile overlay have minimum 44px tap height (already `py-4`, so ✓)
- [ ] Site tested at 375px (iPhone 14), 390px (iPhone 14 Pro), 320px (SE), and 414px (older Plus models)

---

## Mobile Polish Pass — Section Checklist

Work through each section and verify:

- [ ] `HeroSection.tsx` — padding, text size, CTA button sizing
- [ ] `WhatIsBibleBrain.tsx` — stacking image + text, spacing
- [ ] `WhatMakesUsUnique.tsx` — icon + text rows at narrow widths
- [ ] `OurModel.tsx` — card grid, icon compression at 320px
- [ ] `ProvenGrowth.tsx` — stat grid (priority fix)
- [ ] `Programmes.tsx` — card grid spacing
- [ ] `MediaGrid.tsx` — 2-col photo grid on small screens
- [ ] `PartnershipCTA.tsx` — text and button layout
- [ ] `ContactSection.tsx` — form field widths and spacing
- [ ] `Footer.tsx` — link columns, logo area

---

## Out of Scope

- Desktop layout changes (do not touch anything that only affects `md:` and above unless it's the logo)
- Adding new pages or sections beyond the banner
- Animation or scroll behaviour changes

---

## Implementation Order

1. Copy images to `/public/` ← **already done** (`logo.jpeg`, `banner.png`)
2. Update Navbar logo
3. Confirm banner placement with user, then add it
4. Fix `ProvenGrowth.tsx` grid
5. Fix `HeroSection.tsx` padding
6. Run mobile polish pass on remaining sections
7. Test at all four viewport widths in browser devtools

---

## References

### Internal
- `components/layout/Navbar.tsx:41` — current logo placeholder
- `components/sections/ProvenGrowth.tsx:59` — grid-cols-2 issue
- `components/sections/HeroSection.tsx:38` — py-32 issue
- `components/layout/Container.tsx` — shared container with correct responsive padding

### External
- Tailwind responsive docs: https://tailwindcss.com/docs/responsive-design
- Next.js Image `sizes` prop: https://nextjs.org/docs/app/api-reference/components/image#sizes
- Touch target best practice (WCAG 2.5.5): min 44×44px
