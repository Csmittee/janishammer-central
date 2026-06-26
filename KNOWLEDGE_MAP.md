# KNOWLEDGE_MAP.md — janishammer-central
> Version 1.1 — 2026-06-26
> Changes: daje-queencatcher folder structure updated — product pages moved to /product/ and /th/product/
> Previous: Version 1.0 — 2026-06-25

---

## System Overview

This is a multi-brand lifestyle web portfolio operated by a single owner (Chairit Smittee / Csmittee) across six GitHub repositories. Five public-facing site repos (i-flexthailand.com, janishammer-home, daje-queencatcher, jade-coffee, janis-flow) share a central injector served from a sixth repo (janishammer-central) via Cloudflare Pages at assets.janishammer.com. The injector provides brand-aware navigation, footer, typography, and language switching across all sites with a single JavaScript load. Content is managed in Airtable and published to static HTML via Python scripts triggered by GitHub Actions. All sites are hosted on Cloudflare Pages with auto-deploy on push to main. i-flexthailand.com is the most mature site — bilingual (EN/TH), with five separate build workflows and a full product/blog pipeline. The four sub-brand sites (janishammer-home, daje, jade, flow) share the injector but each has its own domain, brand identity, and content pipeline.

---

## Repo Map

| Repo | Purpose | Key files | Injector dependency | Domain/subdomain |
|------|---------|-----------|---------------------|------------------|
| janishammer-central | Governance HQ + injector source | injector-config.js, injector-core.js | SOURCE | assets.janishammer.com |
| i-flexthailand.com | Full bilingual Pilates equipment site (BUS01) | index.html, js/iflex-config.js, js/iflex-core.js, scripts/generate_*.py | STANDALONE — own fork | i-flexthailand.com |
| janishammer-home | Root company landing page + blog | index.html, blog/index.html, scripts/generate_blog.py | YES — assets.janishammer.com (direct) | janishammer.com |
| daje-queencatcher | Daje Games claw machine mini-site (BUS02) | index.html, scripts/generate_products.py | YES — assets.janishammer.com (direct) | daje.janishammer.com |
| jade-coffee | Jade Coffee product mini-site (BUS03) | index.html, scripts/generate-products.py | YES — assets.janishammer.com (direct) | jade.janishammer.com |
| janis-flow | Janis Flow skateboard mini-site (BUS04) | index.html, scripts/generate_product_pages.py | YES — assets.janishammer.com (direct) | flow.janishammer.com |

---

## Injector Map

### injector-config.js (janishammer-central/js/ — v2.0 — 734 lines)
Provides:
- `window.BRANDS` object: brand config for flow, jade, daje, iflex, janishammer
  - Each brand: name, primary/secondary/accent colours, font, background image URL, logo URLs (light/dark), favicon URL, tagline, contactEmail, domain, social links, LINE OA (qr URL, id, tawk chat URL)
- `window.CURRENT_BRAND`: auto-detected from hostname at runtime
- CSS injection: all navbar, footer, dropdown, language selector, mobile menu, cart button, social QR styles injected as a `<style>` block with id `janishammer-styles-v2.2`
- CSS custom properties: `--primary`, `--secondary`, `--accent` set per brand

### injector-core.js (janishammer-central/js/ — v2.2 — 411 lines)
Provides:
- `loadAssets()`: injects Google Fonts (Inter, Sora, Outfit, Quicksand, Montserrat) + Font Awesome 6.4
- `loadTawkTo()`: conditionally loads Tawk.to live chat script (flow and daje brands only)
- `initGoogleAnalytics()`: loads GA with placeholder ID `G-XXXXXXXXXX` — NOT a real tracking ID
- `buildNavbar()`: generates full navbar HTML (desktop + mobile) in the correct language at render time. Language detected from URL path (`/th/` prefix). All nav links pre-rendered in correct language at injection — no redirect loops.
- `buildFooter()`: generates full footer HTML with brand social links, LINE OA widget
- `initMobileMenu()`: hamburger open/close
- `setFavicon()`: injects brand favicon dynamically
- `setupLanguageSwitcher()`: EN/TH toggle — modifies URL path, saves to localStorage
- Anti-flicker: pages use `<style id="jh-anti-flicker">body { opacity: 0; }</style>` in HTML; revealBody() removes it after injector finishes

### Which repos load which file

| Repo | injector-config.js | injector-core.js | Load method |
|------|--------------------|------------------|-------------|
| janishammer-home (main pages) | assets.janishammer.com | assets.janishammer.com | sync `<script src>` |
| janishammer-home/blog/index.html | via jsDelivr CDN + injector-versions.js | via jsDelivr CDN + injector-versions.js | versioned async — BROKEN (injector-versions.js does not exist in repo) |
| daje-queencatcher | assets.janishammer.com | assets.janishammer.com | sync `<script src>` |
| jade-coffee | assets.janishammer.com | assets.janishammer.com | sync `<script src>` |
| janis-flow | assets.janishammer.com | assets.janishammer.com | sync `<script src>` |
| i-flexthailand.com | LOCAL /js/iflex-config.js | LOCAL /js/iflex-core.js | sync `<script src>` — standalone fork |

### Version management
`injector-versions.js` is referenced by `janishammer-home/blog/index.html` via jsDelivr but **does not exist** in the janishammer-central repo as of bootstrap scan (2026-06-25). This is a broken reference. All other pages load the injector directly from assets.janishammer.com without version pinning.

---

## File Inventory

### janishammer-central
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| js/injector-config.js | Brand config, CSS, BRANDS object | none | 734L — approaching limit | js/ |
| js/injector-core.js | Navbar, footer, GA, Tawk.to, language switcher | injector-config.js (window.BRANDS) | 411L — OK | js/ |
| doc/system.md | Old AI instructions — has placeholder YOUR_USERNAME | none | 13L | doc/ |
| README.md | Repo description | none | — | root |
| _headers | Cloudflare Pages security headers | none | — | root |

### i-flexthailand.com
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| js/iflex-config.js | Standalone brand config + CSS (iflex only) | none | 1193L ⚠️ OVER 800 | js/ |
| js/iflex-core.js | Standalone nav/footer/GA/lang for iflex | iflex-config.js | 789L — near limit | js/ |
| index.html | EN homepage | iflex-config.js, iflex-core.js | 590L | root |
| th/index.html | TH homepage mirror | iflex-config.js, iflex-core.js | — | th/ |
| about-us.html | EN about page | same | 116L | root |
| blog-listing.html | EN blog index (generated) | generate_blog.py | 159L | root |
| contact-us.html | EN contact page | same | 381L | root |
| case-study.html | EN case study page | same | — | root |
| product-listing.html | EN product index (generated) | generate_products.py | — | root |
| blog/*.html (5) | EN blog posts (generated) | generate_blog.py | — | blog/ |
| product/*.html (9) | EN product pages (generated) | generate_products.py | — | product/ |
| th/about-us.html, th/blog-listing.html, th/case-study.html, th/contact-us.html | TH mirrors of core pages | same | — | th/ |
| th/blog/*.html (5) | TH blog posts (generated) | generate_blog.py | — | th/blog/ |
| th/product/*.html (9) | TH product pages (generated) | generate_products.py | — | th/product/ |
| scripts/generate_blog.py | Airtable → blog HTML generator | AIRTABLE_TOKEN, AIRTABLE_BASE_ID env | — | scripts/ |
| scripts/generate_products.py | Airtable → product HTML generator | same | — | scripts/ |
| scripts/generate_gallery.py | Airtable → gallery JSON | same | — | scripts/ |
| scripts/generate_news.py | Airtable → news JSON | same | — | scripts/ |
| scripts/generate_testimonials.py | Airtable → testimonials JSON | same | — | scripts/ |
| .github/workflows/*.yml (5) | GitHub Actions triggers for each generator | GitHub Secrets | — | .github/workflows/ |
| data/blog.csv | CSV fallback for blog | — | — | data/ |
| data/products.csv | CSV fallback for products | — | — | data/ |
| gallery-data.json, news-data.json, testimonials-data.json, products.json | Generated JSON data files | generators | — | root |
| robots.txt | Crawl rules | — | — | root |
| doc/IFLEX_MASTER_BUILD_DOC.md | Build documentation | — | — | doc/ |
| doc/IFLEX_MASTER_BUILD_DOC_updates.md | Build doc changelog | — | — | doc/ |
| README.md | Repo description | — | — | root |
| _headers, _redirects | Cloudflare Pages config | — | — | root |

### janishammer-home
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| index.html | EN homepage — binds all brands | assets.janishammer.com injector | 480L | root |
| th/index.html | TH homepage mirror | same | — | th/ |
| blog.html | EN blog landing | injector | 196L | root |
| blog/index.html | EN blog listing (generated) | generate_blog.py + injector-versions.js (BROKEN) | — | blog/ |
| blog/post-1..6.html | EN blog posts (generated) | generate_blog.py | — | blog/ |
| th/blog.html | TH blog landing | injector | — | th/ |
| th/blog/post-1..6.html | TH blog posts (generated) | generate_blog.py | — | th/blog/ |
| contact.html | EN contact page | injector | — | root |
| th/contact.html | TH contact page | injector | — | th/ |
| iflex.html | iFlex brand page (from janishammer.com) | injector | — | root |
| th/iflex.html | TH iFlex brand page | injector | — | th/ |
| scripts/generate_blog.py | Blog generator | AIRTABLE_TOKEN env | — | scripts/ |
| blog/posts.csv | CSV fallback | — | — | blog/ |
| .github/workflows/blog_build.yml | GitHub Actions blog trigger | GitHub Secrets | — | .github/workflows/ |
| README.md | Repo description | — | — | root |

### daje-queencatcher
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| index.html | EN homepage — claw machine showcase | assets.janishammer.com injector | 1184L ⚠️ OVER 800 | root |
| th/index.html | TH homepage mirror | same | — | th/ |
| product/*.html (12 product pages) | EN product detail pages (generated) | generate_products.py | — | product/ |
| th/product/*.html (12 TH product pages) | TH product detail pages (generated) | generate_products.py | — | th/product/ |
| _redirects | 301 redirects — old root product URLs → /product/ and /th/product/ | — | — | root |
| scripts/generate_products.py | Airtable → product HTML | AIRTABLE_TOKEN env | — | scripts/ |
| products.csv, products.json | Product data | — | — | root |
| .github/workflows/products-build.yml | GitHub Actions trigger | GitHub Secrets | — | .github/workflows/ |
| README.md | Repo description | — | — | root |

### jade-coffee
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| index.html | EN homepage — coffee capsules (coming soon) | assets.janishammer.com injector | 463L | root |
| scripts/generate-products.py | Product generator (not yet active) | AIRTABLE_TOKEN env | — | scripts/ |
| products.csv, products.json | Product data | — | — | root |
| .github/workflows/generate-products.yml | GitHub Actions trigger | GitHub Secrets | — | .github/workflows/ |
| README.md | Repo description | — | — | root |

### janis-flow
| File | Purpose | Depends on | Size flag | Folder |
|------|---------|------------|-----------|--------|
| index.html | EN homepage — skateboard/surfskate | assets.janishammer.com injector | 980L ⚠️ OVER 800 | root |
| th/index.html | TH homepage mirror | same | — | th/ |
| product/*.html (27) | EN product detail pages (generated) | generate_product_pages.py | — | product/ |
| th/product/*.html (27) | TH product detail pages (generated) | same | — | th/product/ |
| scripts/generate_product_pages.py | Airtable → product HTML | AIRTABLE_TOKEN env | — | scripts/ |
| products.csv, products.json | Product data | — | — | root |
| .github/workflows/product_build.yml | GitHub Actions trigger | GitHub Secrets | — | .github/workflows/ |
| README.md | Repo description | — | — | root |

---

## Hotspots

| File | Repo | Reason |
|------|------|--------|
| js/iflex-config.js | i-flexthailand.com | 1193 lines — OVER 800 — risky to edit |
| js/iflex-core.js | i-flexthailand.com | 789 lines — near 800 limit |
| index.html | daje-queencatcher | 1184 lines — OVER 800 — risky to edit |
| index.html | janis-flow | 980 lines — OVER 800 — risky to edit |
| js/injector-config.js | janishammer-central | 734 lines — approaching limit — injector source |
| js/injector-core.js | janishammer-central | 411 lines — injector source |
| blog/index.html | janishammer-home | References injector-versions.js which does not exist — broken |
| i-flexthailand.com/js/*.js | i-flexthailand.com | Standalone injector fork — changes do not affect other sites |

Airtable API calls: ALL in Python scripts only (server-side build step). No client-side Airtable calls found in any HTML or JS file. CLEAN.

HTML files not in /public/: ALL repos — all HTML files are at repo root or in named subdirectories (blog/, product/, th/). No /public/ folder exists in any repo.

---

## Folder Structure Audit

| Repo | Current structure | Expected standard | Compliant | Issues |
|------|------------------|-------------------|-----------|--------|
| janishammer-central | js/, doc/, docs/prompts/, .claude/rules/ | governance-only — no public HTML | YES | doc/system.md has placeholder YOUR_USERNAME — outdated |
| i-flexthailand.com | root HTML, th/, blog/, product/, th/blog/, th/product/, js/, scripts/, data/, .github/ | /public/ standard | NO | All HTML at root — structural debt |
| janishammer-home | root HTML, th/, blog/, th/blog/, scripts/, .github/ | WEB_STANDARD.md confirmed | NO | index.html at root (correct); blog posts and product pages need restructure (Session B/C) |
| daje-queencatcher | root HTML, product/, th/, th/product/, scripts/, .github/ | WEB_STANDARD.md confirmed | PENDING QA | index.html at root (correct); product pages → /product/ and /th/product/ — restructured 2026-06-26 |
| jade-coffee | root HTML only, scripts/, .github/ | WEB_STANDARD.md confirmed | NO | All HTML at root; no TH index.html |
| janis-flow | root HTML, product/, th/, th/product/, scripts/, .github/ | WEB_STANDARD.md confirmed | YES | Already compliant — product/ and th/product/ in use |

---

## Security Observations

No security issues found during scan.

All Airtable credentials correctly stored in GitHub Secrets (AIRTABLE_TOKEN, AIRTABLE_BASE_ID).
All Python scripts use os.environ.get() — no credentials in source.
All workflow YAML files use `${{ secrets.AIRTABLE_TOKEN }}` pattern.
No API keys, tokens, or secrets found in any HTML, JS, or .md file.
GA ID in injector-core.js is placeholder (G-XXXXXXXXXX) — not a real credential.
GA ID in i-flexthailand.com/index.html (G-X4ZXYX21PF) is a public measurement ID — by design, not a secret.

---

## SEO Observations

| Repo | Page | Present | Missing |
|------|------|---------|--------|
| i-flexthailand.com | index.html | og:title, og:description, og:image, og:url, og:type, twitter:card, twitter:title, twitter:description, twitter:image, canonical, meta description | schema.org, hreflang |
| i-flexthailand.com | th/index.html | canonical | og:type, og:title, og:description, og:image, og:url, twitter cards, schema.org, hreflang |
| i-flexthailand.com | about-us.html | — | canonical, og tags, schema.org |
| i-flexthailand.com | contact-us.html | — | canonical, og tags, schema.org |
| i-flexthailand.com | blog/*.html | — | canonical, og tags, schema.org (Article) |
| i-flexthailand.com | product/*.html | — | canonical, og tags, schema.org (Product) |
| janishammer-home | index.html | og:title, og:description, og:image, og:url, meta description | og:type, twitter cards, canonical, schema.org (LocalBusiness), hreflang |
| daje-queencatcher | index.html | og:title, og:description, og:image, og:url, meta description | og:type, twitter cards, canonical, schema.org (LocalBusiness) |
| jade-coffee | index.html | og:title, og:description, og:image, og:url, meta description | og:type, twitter cards, canonical, schema.org |
| janis-flow | index.html | og:title, og:description, og:image, og:url, meta description | og:type, twitter cards, canonical, schema.org |

Note: OG image used on daje, jade, flow homepages is the brand logo — not a branded OG image (no Cloudinary SEO_OG image). Only i-flexthailand.com uses the correct Eng_SEO_OG.png.

---

## Domain Rule Map

| Domain | Rule file | When CC reads it |
|--------|-----------|------------------|
| HTML structure, layout, folders | .claude/rules/RULES-html.md | Every HTML session |
| CSS, styling, variables | .claude/rules/RULES-css.md | Every CSS session |
| JavaScript, modules, events | .claude/rules/RULES-js.md | Every JS session |
| Central injector (js/ folder) | .claude/rules/RULES-injector.md | Before any injector change |
| Session, workflow, prompts | .claude/rules/RULES-workflow.md | Session start for workflow questions |
| Content, copy, OG tags | .claude/rules/RULES-content.md | Always with HTML sessions |
| Hosting, deploy, CI/CD | .claude/rules/RULES-deploy.md | Any deploy/workflow session |
| Security, keys, exposure | .claude/rules/RULES-security.md | Alongside any domain when auth involved |
| SEO, schema, canonical, OG | .claude/rules/RULES-seo.md | Always with HTML sessions |

---

## Document Map

| Document | Location | Who reads it | Frequency |
|----------|---------|--------------|----------|
| CLAUDE.md | janishammer-central root | CC (mandatory) | Every session start |
| RULES.md | janishammer-central root | CC (mandatory) | Every session start |
| CC_SKILL.md | janishammer-central root | CC (mandatory) | Every session start |
| CC_CHAT_LOG.md (governance) | janishammer-central root | CC + owner | Every session start (last 3) |
| CC_CHAT_LOG.md (site) | each site repo root | CC + owner | Site sessions (last 3) |
| KNOWLEDGE_MAP.md | janishammer-central root | CC (when onboarding or cross-repo work) | On demand |
| WEB_STANDARD.md | janishammer-central root | CC (when design decisions needed) | On demand |
| RETROFIT_QUEUE.md | janishammer-central root | CC + owner | When applying improvements |
| PROJECT_STATE.md (system) | janishammer-central root | Owner | Weekly review |
| PROJECT_STATE.md (site) | each site repo root | CC + owner | Site sessions |
| .claude/rules/RULES-*.md | janishammer-central/.claude/rules/ | CC | Per domain — relevant file only |

---

## Retrofit Queue Seed

| What | Why | Which sites need it | Priority |
|------|-----|---------------------|----------|
| Add og:type to OG block | Missing on all brand sites — og:type="website" is required for valid OG | janishammer-home, daje-queencatcher, jade-coffee, janis-flow | HIGH |
| Add canonical tag | Missing on all brand sites — canonical prevents duplicate content issues | janishammer-home, daje-queencatcher, jade-coffee, janis-flow | HIGH |
| Add Twitter card meta tags | Missing on all brand sites — required for correct Twitter/X sharing previews | janishammer-home, daje-queencatcher, jade-coffee, janis-flow | HIGH |
| Add LocalBusiness schema.org | Homepage schema missing across all sites | janishammer-home, daje-queencatcher, jade-coffee, janis-flow | HIGH |
| Add schema.org to i-flexthailand.com | LocalBusiness on homepage, Article on blog, Product on product pages | i-flexthailand.com | HIGH |
| Add hreflang to bilingual pages | EN/TH pairs need hreflang for correct Google language targeting | janishammer-home, i-flexthailand.com | MED |
| Create and deploy injector-versions.js | Referenced in janishammer-home/blog/index.html but file does not exist — broken page | janishammer-central | HIGH |
| Split daje-queencatcher/index.html | 1184 lines — over 800 limit — risky to edit, CSS/JS/HTML mixed | daje-queencatcher | MED |
| Split janis-flow/index.html | 980 lines — over 800 limit | janis-flow | MED |
| Migrate i-flexthailand.com to central injector | Currently uses standalone fork — updates require two separate changes instead of one | i-flexthailand.com | LOW |
| Add TH homepage to jade-coffee | No th/index.html exists — TH users have no Thai version | jade-coffee | MED |
| Replace logo-as-OG-image on brand sites | daje, jade, flow use brand logo as OG image — should use branded SEO_OG image | daje-queencatcher, jade-coffee, janis-flow | MED |
