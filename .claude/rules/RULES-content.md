# RULES-content.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 4 starter rules from bootstrap scan
> Previous: NONE

---

## Content Rules (newest at top)

**CONT-4: IMAGES VIA CLOUDINARY ONLY — PERMANENT (2026-06-25):**
All images in all sites must be served via Cloudinary (cloud name: dfiomi0lb).
Never commit image files to any repo. Never use relative image paths.
// Justification: Cloudinary provides CDN, transformation, permanent URLs; confirmed by scan — all images are Cloudinary URLs

**CONT-3: COPY FIELD PAIRING — PERMANENT (2026-06-25) [i-flexthailand.com only]:**
Every content field has a Thai pair in Airtable: name/name_th, body/body_th, slug/slug_th.
Never generate EN-only content without noting the TH pair is still needed.
// Justification: bilingual system — missing TH pair breaks Thai page generation

**CONT-2: CANONICAL LANGUAGE MATCH — PERMANENT (2026-06-25) [i-flexthailand.com]:**
Canonical URL must match the page's language exactly.
EN: https://i-flexthailand.com/[page].html
TH: https://i-flexthailand.com/th/[page].html
TH homepage: https://i-flexthailand.com/th/ (trailing slash — not index.html)
// Justification: wrong canonical tells Google to index the wrong language version

**CONT-1: OG IMAGE LANGUAGE MATCH — PERMANENT (2026-06-25) [i-flexthailand.com]:**
EN pages use EN branded OG image only.
TH pages use TH branded OG image only.
Never swap. Never use a page screenshot or random image as OG.
Confirmed URLs:
  EN: https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Eng_SEO_OG.png
  TH: https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Thai_SEO_OG.png
// Justification: branded OG images are confirmed — any other image = wrong
