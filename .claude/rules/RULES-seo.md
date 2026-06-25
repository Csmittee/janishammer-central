# RULES-seo.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation (NEW DOMAIN) — 7 starter rules from bootstrap scan
> Previous: NONE

---

## SEO Rules (newest at top)

**SEO-7: LAZY LOADING ON GENERATED IMAGES — PERMANENT (2026-06-25):**
All images in script-generated pages (blog, product) must have loading="lazy".
Exception: the first/hero image on a page — use loading="eager" for LCP.
// Justification: lazy loading reduces initial page weight — affects Core Web Vitals

**SEO-6: IMAGE ALT TEXT REQUIRED — PERMANENT (2026-06-25):**
Every `<img>` tag must have a descriptive alt attribute. Never empty alt on content images.
Decorative images only: alt=""
Generated pages (blog, product): alt text must come from Airtable field — not hardcoded.
// Justification: alt text is an SEO signal and an accessibility requirement

**SEO-5: HREFLANG FOR BILINGUAL PAGES — PERMANENT (2026-06-25) [i-flexthailand.com + janishammer-home]:**
Every bilingual page pair must have hreflang tags in both versions:
  EN page: `<link rel="alternate" hreflang="en" href="[EN URL]">`
           `<link rel="alternate" hreflang="th" href="[TH URL]">`
  TH page: same pair, both present
Bootstrap scan: hreflang missing on all bilingual pages — queued as RETROFIT item #6.
// Justification: hreflang tells Google which language version to serve to which user

**SEO-4: META DESCRIPTION LENGTH — PERMANENT (2026-06-25):**
Meta description must be 140–160 characters. Under 100 = too short. Over 160 = truncated.
Title tag must be 50–60 characters.
If generated content (blog, product) violates this: fix in the generator script.
// Justification: Google truncates descriptions over 160 chars — wastes the click opportunity

**SEO-3: SCHEMA.ORG REQUIRED BY PAGE TYPE — PERMANENT (2026-06-25):**
Page type → required schema:
  Homepage     → LocalBusiness schema (includes streetAddress, openingHours, geo, hasMap)
  Blog post    → Article schema (includes datePublished, author, publisher with logo)
  Product page → Product schema (includes name, description, image, offers)
  Contact page → LocalBusiness schema
If schema is missing from a page type above: flag as SEO debt in CC_CHAT_LOG.
Do not remove existing schema — only add or correct.
Bootstrap scan: schema.org missing across all sites and all page types — queued as RETROFIT item #4/#5.
// Justification: schema enables rich results in Google — missing schema = missed opportunity

**SEO-2: CANONICAL IS MANDATORY — PERMANENT (2026-06-25):**
Every HTML page must have exactly one `<link rel="canonical">` in the head.
Canonical must match the page's own URL exactly — no trailing slash inconsistency.
EN pages (i-flexthailand.com): https://i-flexthailand.com/[page].html
TH pages (i-flexthailand.com): https://i-flexthailand.com/th/[page].html
Brand sites (janishammer-home): https://janishammer.com/[page].html
Brand sites (daje): https://daje.janishammer.com/
Bootstrap scan: canonical missing on all brand sites except i-flexthailand.com EN pages — queued as RETROFIT item #2.
// Justification: duplicate content without canonical causes Google to ignore one version

**SEO-1: OG TAGS REQUIRED ON ALL PAGES — PERMANENT (2026-06-25):**
Every HTML page must have: og:title, og:description, og:image, og:url, og:type.
Twitter card equivalents: twitter:card, twitter:title, twitter:description, twitter:image.
If any are missing: flag in CC_CHAT_LOG as SEO debt. Do not remove present tags silently.
Bootstrap scan: og:type missing on jh-home, daje, jade, flow. Twitter cards missing on same four sites.
// Justification: missing OG tags break social sharing previews — affects every link shared
