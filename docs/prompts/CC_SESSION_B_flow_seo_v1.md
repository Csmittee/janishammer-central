# CC_SESSION_B_flow_seo_v1.md
> Version 1.0 — 2026-06-26
> Changes: Initial creation — janis-flow SEO fix (og:type, canonical, Twitter cards, schema, OG image)
> Previous: NONE

---

## 1. GOVERNANCE READS (mandatory before anything else)

Read in this order before writing a single file:
1. janishammer-central/CLAUDE.md
2. janishammer-central/RULES.md
3. janishammer-central/CC_SKILL.md
4. janishammer-central/.claude/rules/RULES-html.md
5. janishammer-central/.claude/rules/RULES-seo.md
6. janishammer-central/.claude/rules/RULES-content.md
7. janishammer-central/CC_CHAT_LOG.md (last 3 entries only)
8. janis-flow/CLAUDE.md
9. janis-flow/PROJECT_STATE.md
10. janis-flow/CC_CHAT_LOG.md (last 3 entries only)

State "Governance reads complete" before proceeding.

---

## 2. CONTEXT

This is Session B — SEO fix for janis-flow.
Session A (daje-queencatcher folder restructure) must be QA-confirmed before this runs.

**Repo:** janis-flow
**Domain:** https://flow.janishammer.com
**Owner:** Chairit Smittee — GitHub browser only, no local terminal

**What is being fixed:**
The bootstrap scan identified these SEO gaps on janis-flow:
- `og:type` missing on index.html and th/index.html
- Twitter card meta tags missing on both pages
- `<link rel="canonical">` missing on all pages
- `schema.org` markup missing entirely (LocalBusiness on homepage)
- OG image uses brand logo — should use the branded SEO_OG Cloudinary image

**Folder structure:** janis-flow already has correct folder structure:
- /product/ for EN generated pages ✅
- /th/product/ for TH generated pages ✅
- index.html at root ✅
- th/index.html at th/ ✅
No folder restructure needed this session.

**Critical constraint — file size:**
index.html is 980 lines — OVER the 800-line limit.
CC must NOT rewrite the full file.
CC makes surgical edits to the <head> block ONLY.
The rest of the file is untouched.
This is non-negotiable — a full rewrite of a 980-line file introduces invisible errors.

**What does NOT change:**
- Any content below <head> closing tag — body, sections, scripts, CSS
- Injector script tags — do not touch src attributes
- Any existing OG tags that are already correct (og:title, og:description, og:url)
- products.json location
- Generator scripts — SEO fixes to generated product pages go in generate_product_pages.py only
- .github/workflows/ YAML files

---

## 3. SCAN BEFORE WRITING

Read these files before writing anything:

**janis-flow/index.html** — read the full <head> block only. Record:
- Exact existing OG tags present (tag name + current value)
- Current OG image URL (confirm it is brand logo, not SEO_OG image)
- Whether canonical tag exists
- Whether Twitter card tags exist
- Whether schema.org script tag exists
- Exact injector script tags (src URLs — do not touch these)
- Anti-flicker style tag if present

**janis-flow/th/index.html** — same scan as above.

**janis-flow/scripts/generate_product_pages.py** — read to find:
- How canonical URL is currently built for product pages (if at all)
- Whether og:type is set in product page template
- Whether Twitter cards are in product page template
- Whether schema.org Product markup exists in product page template

Report in this format before writing:

  SCAN COMPLETE — janis-flow
  index.html head block:
    OG tags present: [list]
    OG image URL: [current value]
    Canonical: [present/missing]
    Twitter cards: [present/missing]
    Schema: [present/missing]
    Injector scripts: [exact src values — will not touch]
  th/index.html head block: [same]
  generate_product_pages.py:
    Canonical in template: [present/missing — how built]
    og:type in template: [present/missing]
    Twitter cards in template: [present/missing]
    Schema.org Product: [present/missing]
  Ready to write.

---

## 4. FILES TO CHANGE — COMPLETE LIST

| File | Repo | Change |
|------|------|--------|
| index.html | janis-flow | Surgical head edit: add og:type, Twitter cards, canonical, LocalBusiness schema, fix OG image |
| th/index.html | janis-flow | Same surgical head edit — Thai language values, TH OG image |
| scripts/generate_product_pages.py | janis-flow | Add og:type, Twitter cards, canonical, Product schema to template |
| CC_CHAT_LOG.md | janis-flow | Append session entry (newest at top) |
| PROJECT_STATE.md | janis-flow | Update SEO status to reflect fixes |
| CC_CHAT_LOG.md | janishammer-central | Append governance session entry (newest at top) |
| KNOWLEDGE_MAP.md | janishammer-central | Update SEO observations — janis-flow rows |
| RETROFIT_QUEUE.md | janishammer-central | Update flow column: items #1,2,3,4,11 → DONE (after QA) |

Total: 8 files changed. Zero new files created.

---

## 5. TASKS

### TASK 1 — index.html (surgical head edit only)

Read the existing <head> block. Make only these additions — nothing else:

**A — Fix OG image (replace brand logo with branded SEO_OG image):**
```html
<!-- BEFORE (brand logo — wrong): -->
<meta property="og:image" content="https://res.cloudinary.com/dfiomi0lb/image/upload/[logo-url]">

<!-- AFTER (branded SEO OG image — correct): -->
<meta property="og:image" content="https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Eng_SEO_OG.png">
```

**B — Add og:type (missing):**
```html
<meta property="og:type" content="website">
```
Place immediately after the last existing og: tag.

**C — Add Twitter card tags (all missing):**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[copy value from og:title]">
<meta name="twitter:description" content="[copy value from og:description]">
<meta name="twitter:image" content="https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Eng_SEO_OG.png">
```
Place as a block immediately after the og: tags block.

**D — Add canonical (missing):**
```html
<link rel="canonical" href="https://flow.janishammer.com/">
```
Place immediately after Twitter card block.

**E — Add LocalBusiness schema (missing):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Janis Flow",
  "description": "[copy value from meta description]",
  "url": "https://flow.janishammer.com",
  "logo": "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
  "image": "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
  "sameAs": []
}
</script>
```
Place immediately before </head>.
Note: sameAs array — populate with any social links found in the page body or injector config.
If none found, leave as empty array [].

Add comment before schema block:
```html
<!-- LocalBusiness schema — added Session B 2026-06-26 -->
```

**CRITICAL:** After making these additions, verify the <head> block is intact:
- All original tags still present
- No original tag removed or moved
- No injector script src changed
- Additions placed in the correct order shown above

Deliver the COMPLETE index.html file (all 980 lines) with surgical additions in head.
Do not restructure, reformat, or rewrite any other section.

---

### TASK 2 — th/index.html (same surgical edit — Thai values)

Same 5 additions as Task 1, with these differences:

**A — OG image → TH branded image:**
```html
<meta property="og:image" content="https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Thai_SEO_OG.png">
```

**B — og:type:** same — `content="website"`

**C — Twitter cards → TH OG image:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[copy from th og:title]">
<meta name="twitter:description" content="[copy from th og:description]">
<meta name="twitter:image" content="https://res.cloudinary.com/dfiomi0lb/image/upload/v1773341421/Thai_SEO_OG.png">
```

**D — Canonical → TH URL:**
```html
<link rel="canonical" href="https://flow.janishammer.com/th/">
```
Note: trailing slash on TH homepage — no index.html suffix.

**E — LocalBusiness schema → same as EN but with TH URL:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Janis Flow",
  "description": "[copy from th meta description]",
  "url": "https://flow.janishammer.com/th/",
  "logo": "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
  "image": "https://res.cloudinary.com/dfiomi0lb/image/upload/v1773772664/Janis-flow-logo.png",
  "sameAs": []
}
</script>
```

Deliver complete th/index.html with surgical additions only.

---

### TASK 3 — generate_product_pages.py (add SEO to product page template)

Read the full script. Find the HTML template string where the <head> block is built.
Make these additions to the template — do not change logic, data fetching, or output paths.

**A — Add og:type to product pages:**
```html
<meta property="og:type" content="product">
```

**B — Add Twitter cards to product template:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{name}">
<meta name="twitter:description" content="{description_snippet}">
<meta name="twitter:image" content="{main_image}">
```
Use the same variables already used for og:title, og:description, og:image in the template.
Do not invent new variables.

**C — Add canonical to product template:**
EN product canonical:
```html
<link rel="canonical" href="https://flow.janishammer.com/product/{slug}.html">
```
TH product canonical:
```html
<link rel="canonical" href="https://flow.janishammer.com/th/product/{slug}.html">
```
Use existing slug variable from the template. If the template uses a different variable
name for slug — use that exact variable name.

**D — Add Product schema to product template:**
```html
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{name}",
  "description": "{description_snippet}",
  "image": "{main_image}",
  "url": "https://flow.janishammer.com/product/{slug}.html",
  "brand": {{
    "@type": "Brand",
    "name": "Janis Flow"
  }}
}}
</script>
```
Note: in Python f-strings, double {{ and }} are literal braces.
Adapt to whatever template string method the script uses (f-string, .format(), or concatenation).
Do not break existing template string syntax.

Add comment in script above the schema block:
```python
# Product schema — added Session B 2026-06-26
```

Deliver the complete replacement generate_product_pages.py.

---

## 6. DO NOT TOUCH

- Any content below </head> in index.html or th/index.html
- Any injector script tags (src attributes must remain exactly as found)
- Any existing og: tags that are already correct (og:title, og:description, og:url)
- products.json location (stays at root)
- product/ and th/product/ folder structure (already correct — confirmed)
- .github/workflows/ YAML files
- janishammer-central/js/ (injector files — not in scope)
- Any other site repo
- Ops-Dashboard repo

---

## 7. VERIFICATION

Before raising PR, CC confirms:
- [ ] index.html: all original tags still present — count original tags, count after, difference = additions only
- [ ] index.html: og:image now points to Eng_SEO_OG.png (not brand logo)
- [ ] index.html: og:type present with content="website"
- [ ] index.html: all 4 Twitter card tags present
- [ ] index.html: canonical present with https://flow.janishammer.com/
- [ ] index.html: LocalBusiness schema present before </head>
- [ ] th/index.html: same 5 checks with TH values and Thai_SEO_OG.png
- [ ] generate_product_pages.py: og:type, Twitter cards, canonical, Product schema in template
- [ ] generate_product_pages.py: no existing variables renamed or removed
- [ ] Total files changed: 8 (3 source + 5 governance) — no more, no less

---

## 8. QA CHECKLIST

Owner runs after merging BOTH PRs. All items must pass before Session C begins.

```
═══════════════════════════════════════════════════
QA CHECKLIST — janis-flow SEO fix
Session B — 2026-06-26
Run after merging PR. All items must pass before Session C.
═══════════════════════════════════════════════════

STEP 1 — TRIGGER PRODUCT GENERATOR (to apply SEO fixes to product pages)
□ Go to: github.com/Csmittee/janis-flow → Actions tab
□ Find workflow: product_build.yml
□ Click "Run workflow" → Run workflow
□ Wait for green checkmark
□ If red X: read error log, do not proceed until green

STEP 2 — CONFIRM OG IMAGE FIXED (browser DevTools)
□ Open: https://flow.janishammer.com
□ Right-click → View Page Source
□ Search for "og:image"
□ Value must be: .../Eng_SEO_OG.png
□ Must NOT be the brand logo URL

STEP 3 — VALIDATE OG TAGS (Facebook debugger)
□ Go to: https://developers.facebook.com/tools/debug/
□ Enter: https://flow.janishammer.com
□ Click "Scrape Again"
□ Confirm: og:title, og:description, og:image (SEO_OG), og:type = website — all present
□ No warnings about missing required properties

STEP 4 — VALIDATE TWITTER CARD
□ Go to: https://cards-dev.twitter.com/validator
□ Enter: https://flow.janishammer.com
□ Confirm: summary_large_image card renders with SEO_OG image

STEP 5 — VALIDATE SCHEMA (Google Rich Results)
□ Go to: https://search.google.com/test/rich-results
□ Enter: https://flow.janishammer.com
□ Confirm: LocalBusiness schema detected, no errors

STEP 6 — CHECK CANONICAL IN SOURCE
□ In Page Source search for "canonical"
□ Must find: <link rel="canonical" href="https://flow.janishammer.com/">

STEP 7 — CHECK TH PAGE
□ Open: https://flow.janishammer.com/th/
□ View Page Source
□ og:image must be: .../Thai_SEO_OG.png (not EN image, not brand logo)
□ canonical must be: https://flow.janishammer.com/th/
□ Twitter cards present with Thai_SEO_OG.png image

STEP 8 — CHECK ONE PRODUCT PAGE
□ Open any product page: https://flow.janishammer.com/product/[any-slug].html
□ View Page Source
□ og:type must be: product
□ Twitter cards present
□ Canonical present: https://flow.janishammer.com/product/[slug].html
□ Product schema present (search for "application/ld+json")

STEP 9 — HOMEPAGE STILL WORKS
□ Nav bar renders correctly
□ Footer renders correctly
□ Brand colours correct (Janis Flow green — #D4E157)
□ No broken layout or missing sections

STEP 10 — FINAL SIGN-OFF
□ All 9 steps above: PASS
□ Report result to Chat before Session C begins

If any step fails: do NOT start Session C. Report the failure and we diagnose first.
═══════════════════════════════════════════════════
```

---

## 9. GOVERNANCE UPDATES — janishammer-central

### KNOWLEDGE_MAP.md — SEO Observations table
Update janis-flow rows:

| janis-flow | index.html | og:title, og:description, og:image (SEO_OG), og:url, og:type, twitter cards, canonical, LocalBusiness schema | hreflang (future session) |
| janis-flow | th/index.html | og:title, og:description, og:image (TH SEO_OG), og:url, og:type, twitter cards, canonical, LocalBusiness schema | hreflang (future session) |
| janis-flow | product/*.html | og:title, og:description, og:image, og:url, og:type, twitter cards, canonical, Product schema | — |

Bump version: X.Y+1

### RETROFIT_QUEUE.md
Update flow column for items fixed this session:
- Item #1 (og:type): flow → DONE (pending owner QA)
- Item #2 (canonical): flow → DONE (pending owner QA)
- Item #3 (Twitter cards): flow → DONE (pending owner QA)
- Item #4 (schema.org): flow → DONE for homepage + product pages (pending owner QA)
- Item #9 (split index.html): flow → QUEUED (flagged — split plan below, separate session)
- Item #11 (OG image fix): flow → DONE (pending owner QA)

Add to Session Log:
  ### 2026-06-26 — Session B: janis-flow SEO fix
  OG type, canonical, Twitter cards, LocalBusiness + Product schema added.
  OG image fixed from brand logo to branded SEO_OG images.
  index.html split plan noted — separate session.
  Pending owner QA confirmation before marking DONE.

Bump version: X.Y+1

---

## 10. WEB_STANDARD.MD UPDATE

No new standards confirmed this session — SEO rules already exist in RULES-seo.md.
No update needed.

---

## 11. RULES UPDATE

No new rules this session — all SEO additions follow existing RULES-seo.md rules SEO-1 through SEO-7.

Add one note to RULES-html.md (newest at top):

```
HTML-6: SURGICAL HEAD EDIT ONLY ON LARGE FILES — PERMANENT (2026-06-26):
For any HTML file over 800 lines, CC makes targeted additions to <head> block only.
Full file rewrite is NOT acceptable for large files — introduces invisible errors.
After surgical edit: verify original tag count unchanged, only additions present.
// Justification: janis-flow index.html (980L) — full rewrite risk too high.
// L096 from LESSON_LEARN.md — diff before and after every delivery.
```

Bump RULES-html.md version: X.Y+1
Note in CC_CHAT_LOG: "New rule: HTML-6 added to RULES-html.md"

---

## 12. MANDATORY CLOSING

### CC_CHAT_LOG entry — janishammer-central:
```
---
## 2026-06-26 — CC_SESSION_B_flow_seo_v1 (janis-flow SEO fix)
**Did:** index.html + th/index.html surgical head edit — og:type, Twitter cards,
         canonical, LocalBusiness schema, OG image fixed. generate_product_pages.py
         updated with og:type, Twitter cards, canonical, Product schema in template.
**Updated:** RULES-html.md (HTML-6 added). KNOWLEDGE_MAP.md SEO rows updated.
             RETROFIT_QUEUE.md flow column: items 1,2,3,4,11 → DONE pending QA.
**New files:** NONE
**Pending Chat verify:** Owner runs 10-step QA checklist. All steps must pass before Session C.
**Flags:** LARGE FILE — index.html 980L — split plan flagged, separate session needed.
           SEO CHANGED — og:image replaced on index.html and th/index.html.
---
```

### CC_CHAT_LOG entry — janis-flow:
```
---
## 2026-06-26 — Session B: SEO fix
**Did:** index.html surgical head edit (og:type, Twitter cards, canonical, LocalBusiness schema,
         OG image fixed to Eng_SEO_OG.png). th/index.html same with Thai_SEO_OG.png.
         generate_product_pages.py updated with full SEO in product page template.
**Updated:** PROJECT_STATE.md SEO status updated to reflect fixes.
**New files:** NONE
**Pending Chat verify:** 10-step QA checklist — owner runs after PR merge.
**Flags:** LARGE FILE — index.html still 980L — split plan session pending.
---
```

### Archive this prompt:
Copy to janishammer-central/docs/prompts/CC_SESSION_B_flow_seo_v1.md
Add at top: ✅ COMPLETE — 2026-06-26 — janis-flow SEO fix (og:type, canonical, Twitter cards, schema, OG image)

### Version bumps:
Bump version on every file changed (all .md and source files touched this session).

### Commit order — TWO PRs:
**PR 1: janis-flow** (source + site governance)
Files: index.html, th/index.html, scripts/generate_product_pages.py,
       CC_CHAT_LOG.md, PROJECT_STATE.md
Commit message: "SEO fix: og:type, canonical, Twitter cards, schema, OG image — Session B"

**PR 2: janishammer-central** (governance updates)
Files: CC_CHAT_LOG.md, KNOWLEDGE_MAP.md, RETROFIT_QUEUE.md, RULES-html.md,
       docs/prompts/CC_SESSION_B_flow_seo_v1.md
Commit message: "Governance update: Session B janis-flow SEO fix — HTML-6 added"

Merge PR 1 first, then PR 2.

---

## 13. SECURITY REMINDER

- No API keys in any committed file — flag CRITICAL if found during scan
- Do not read .env contents — note existence only
- Ops-Dashboard repo out of scope — do not access
- janis-flow Airtable credentials confirmed in GitHub Secrets — do not touch
