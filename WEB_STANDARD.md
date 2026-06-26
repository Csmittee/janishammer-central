# WEB_STANDARD.md — janishammer-central
> Version 1.1 — 2026-06-26 — SKELETON (folder structure now CONFIRMED)
> Changes: Folder Structure Standard confirmed from Session A daje restructure pilot
> Previous: Version 1.0 — 2026-06-25

---

## Company & Owner
Owner: Chairit Smittee | GitHub: Csmittee | Operation: one-person
[Company address, contact, registration details: TBD — owner to fill]

## Tech Stack (confirmed from scan)
Hosting:     Cloudflare Pages (auto-deploy on push to main)
Images:      Cloudinary — cloud name: dfiomi0lb
Database:    Airtable — base ID: appMBjlfYyVd8I7ML (i-flexthailand.com confirmed)
Frontend:    Vanilla HTML / CSS / JS — no frameworks
Build:       Python scripts (GitHub Actions)
Secrets:     GitHub Secrets + Cloudflare environment variables
Deploy:      Cloudflare Pages auto-deploy on main push
Injector:    served from assets.janishammer.com (Cloudflare Pages — janishammer-central)
Fonts:       Google Fonts (Inter, Sora, Outfit, Quicksand, Montserrat)
Icons:       Font Awesome 6.4.0 (cdnjs.cloudflare.com)
Chat:        Tawk.to (flow and daje brands)

## Folder Structure Standard
Status: CONFIRMED — 2026-06-26 (piloted on daje-queencatcher)

Standard applies to: janishammer-home, daje-queencatcher, jade-coffee, janis-flow
Exception: i-flexthailand.com — same pattern, separate session (has JS files in /js/)

```
[repo-root]/
├── index.html              ← ALWAYS at root — Cloudflare entry point — NEVER move
├── pages/                  ← handcrafted non-homepage HTML (contact, about, etc.)
│   └── [page].html
├── product/                ← EN generated product pages (generator output only)
│   └── [slug].html
├── blog/                   ← EN generated blog posts (generator output only)
│   └── [slug].html
├── th/
│   ├── index.html          ← TH homepage (bilingual sites only) — NEVER move
│   ├── product/            ← TH generated product pages
│   │   └── [slug].html
│   └── blog/               ← TH generated blog posts
│       └── [slug].html
├── scripts/                ← Python generators — NOT served by Cloudflare
├── .github/
│   └── workflows/          ← GitHub Actions — NOT served by Cloudflare
└── data/                   ← CSV fallback data — NOT served by Cloudflare
```

Rules:
  - index.html: always root, always handcrafted, never generated
  - pages/: human-written pages only — never generator output
  - product/ and blog/: generator output only — never hand-edit files here (DEP-2)
  - scripts/, .github/, data/: never served, never touch in HTML sessions
  - _redirects: always at root — add redirect when moving any existing page (DEP-5)
  - products.json / gallery-data.json: always at root — read by index.html JS

## Injector Standard
Central injector: janishammer-central/js/
CDN delivery: assets.janishammer.com (Cloudflare Pages)
Files: injector-config.js (brand data + CSS) + injector-core.js (nav/footer/GA/language)
Load method standard: sync `<script src>` — config MUST load before core
Anti-flicker: `<style id="jh-anti-flicker">body { opacity: 0; }</style>` in every HTML head
Exception: i-flexthailand.com uses standalone local injector fork — not central
Version management: [TBD — injector-versions.js not yet created]

## Theme & Design System
[TBD — to be documented after design system audit]
Known: brand colours and fonts defined in injector-config.js per brand
Brand identities confirmed in injector-config.js:
  flow: primary #D4E157, font Sora
  jade: primary #6F4E37, font Outfit
  daje: primary #000000, font Quicksand
  iflex: primary #1A1A1A, font Montserrat
  janishammer: primary #E34C26, font Inter

## OG Image Standard (confirmed from scan)
EN branded OG: https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Eng_SEO_OG.png
TH branded OG: https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Thai_SEO_OG.png
Rule: EN pages → Eng_SEO_OG.png only. TH pages → Thai_SEO_OG.png only.
Status: Only i-flexthailand.com/index.html currently uses correct OG image. All other sites use logo or wrong image.

## MUST / SHOULD / NEVER

MUST:
  - Every page loads injector via assets.janishammer.com (or local equivalent for iflex)
  - Every page has og:title, og:description, og:image, og:url, og:type
  - Every page has meta description
  - Every page has <link rel="canonical">
  - All images via Cloudinary (cloud name: dfiomi0lb)
  - All secrets in GitHub Secrets only
  - Bilingual EN/TH on i-flexthailand.com and janishammer-home
  [TBD — owner to add]

SHOULD:
  - Schema.org markup per page type (LocalBusiness, Article, Product)
  - hreflang pairs on all bilingual pages
  - Twitter card meta tags
  - loading="lazy" on all non-hero images
  [TBD — owner to add]

NEVER:
  - No API keys in source files (any repo)
  - No JS or CSS frameworks
  - No manual edits to script-generated files (blog/*.html, product/*.html, *-data.json)
  - No hardcoded injector URLs without version management
  - No image files committed to any repo
  - No third-party scripts without owner review
  [TBD — owner to add]

## New Site Checklist
[TBD — to be built after first new site creation session using this governance system]

## Key Design Decisions (locked — never revisit without owner explicit decision)
- Vanilla HTML/JS/CSS only — no frameworks (decision: pre-2026, maintained)
- Cloudflare Pages for all hosting (decision: pre-2026, maintained)
- Airtable as content source of truth (decision: pre-2026, maintained)
- Central injector architecture — all sites share one injector (decision: pre-2026)
- Python build step — no client-side Airtable calls on public pages (decision: 2026)
[TBD — owner to add further locked decisions]

## Airtable Field Conventions (i-flexthailand.com — confirmed)
Base ID: appMBjlfYyVd8I7ML
Field naming: snake_case (image_url, display_order, bus_id)
Thai fields: suffix _th (name_th, body_th, slug_th)
Control fields: active (checkbox), web_published (checkbox), bus_id (text filter)
Sort field: display_order (integer, always present on ordered tables)
Lookup fields return arrays — always unwrap: Array.isArray(val) ? val[0] : val
AI fields: return {state, value, isStale} dict — unwrap with unwrap_ai() helper
Tables confirmed: Blogs, Products (i-flexthailand.com)
[TBD — document Airtable tables for other repos]
