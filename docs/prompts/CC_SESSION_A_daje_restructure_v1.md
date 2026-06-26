# CC_SESSION_A_daje_restructure_v1.md
> Version 1.1 — 2026-06-26
> Changes: Marked COMPLETE — session executed and all files pushed
> Previous: Version 1.0 — 2026-06-26

✅ COMPLETE — 2026-06-26 — daje-queencatcher folder restructure

---

## 1. GOVERNANCE READS (mandatory before anything else)

Read in this order before writing a single file:
1. janishammer-central/CLAUDE.md
2. janishammer-central/RULES.md
3. janishammer-central/CC_SKILL.md
4. janishammer-central/.claude/rules/RULES-html.md
5. janishammer-central/.claude/rules/RULES-deploy.md
6. janishammer-central/CC_CHAT_LOG.md (last 3 entries only)
7. daje-queencatcher/CLAUDE.md
8. daje-queencatcher/PROJECT_STATE.md
9. daje-queencatcher/CC_CHAT_LOG.md (last 3 entries only)

State "Governance reads complete" before proceeding.

---

## 2. CONTEXT

This is Session A — the pilot restructure for the Janishammer brand site portfolio.
The pattern proven here will be replicated to janis-flow, jade-coffee, and janishammer-home
in later sessions. Getting this right matters more than getting it fast.

**Repo:** daje-queencatcher
**Domain:** https://daje.janishammer.com
**Owner:** Chairit Smittee — GitHub browser only, no local terminal

**The problem being fixed:**
daje-queencatcher/scripts/generate_products.py currently outputs EN product HTML pages
directly to the repo root alongside index.html. This makes the root a dumping ground —
impossible to distinguish handcrafted files from generated ones at a glance.
TH product pages dump to /th/ root alongside th/index.html — same problem.

**The fix:**
Move generator output to dedicated subfolders:
  EN products: /product/[slug].html      (was: /[slug].html at root)
  TH products: /th/product/[slug].html   (was: /th/[slug].html)

Add Cloudflare _redirects so old URLs do not 404 (SEO protection).
Update index.html internal links to point to new paths.

**What does NOT change:**
  - index.html stays at root — Cloudflare entry point, never move
  - th/index.html stays at th/ root
  - scripts/, .github/, data/ stay at root — not served by Cloudflare
  - products.json stays at root — read by index.html JS, path must not change
  - The injector load method — do not touch any injector script tags

---

## 3. SCAN BEFORE WRITING

Read these files in daje-queencatcher before writing anything:
  - scripts/generate_products.py        ← full read — understand output paths
  - index.html                          ← scan for: internal links to product pages,
                                           injector script tags, any hardcoded product URLs
  - th/index.html                       ← same scan
  - One existing product HTML at root   ← read ONE to understand: internal link patterns,
                                           back-to-listing URLs, prev/next nav URLs,
                                           canonical URL format, any self-referencing paths
  - _redirects (if exists)              ← check for existing redirect rules

Report findings in this format before writing:
  SCAN COMPLETE — daje-queencatcher
  Generator output paths found: [list exact Path() calls from generate_products.py]
  index.html internal product links: [list hrefs pointing to product pages]
  th/index.html internal product links: [same]
  Sample product page internal links: [back link, prev/next link, canonical URL]
  _redirects: [exists with N rules / does not exist]
  Injector load: [confirm exact script src URLs — do not touch these]
  Ready to write.

---

## 4. FILES TO CHANGE — COMPLETE LIST

Only these files. Nothing outside this list.

### daje-queencatcher (source changes)

| File | Change |
|------|--------|
| scripts/generate_products.py | Update output paths: root→product/, th/→th/product/ |
| index.html | Update internal links: /[slug].html → /product/[slug].html |
| th/index.html | Update internal links: /th/[slug].html → /th/product/[slug].html |
| _redirects | Create or update — add redirect rules for all old product URLs |

### janishammer-central (governance updates)

| File | Change |
|------|--------|
| CC_CHAT_LOG.md | Append session entry (newest at top) |
| KNOWLEDGE_MAP.md | Update daje-queencatcher folder structure: compliant → YES |
| RETROFIT_QUEUE.md | Update status: folder restructure for daje → DONE after QA passes |

### daje-queencatcher (governance updates)

| File | Change |
|------|--------|
| CC_CHAT_LOG.md | Append session entry (newest at top) |
| PROJECT_STATE.md | Update folder structure status to compliant after restructure |

Total files changed: 4 source + 4 governance = 8 files maximum.

---

## 5. TASK — GENERATE_PRODUCTS.PY

Read the full script first. Then produce a complete replacement file.

Output path changes required:

```python
# BEFORE (current — dumps to root):
en_path = product_dir / f"{slugify(product['name'])}.html"
# where product_dir = Path(__file__).parent.parent  (= repo root)

th_path = th_dir / f"{th_slug}.html"
# where th_dir = product_dir / 'th'  (= repo root /th/)

# AFTER (correct — dedicated subfolders):
en_path = Path('product') / f"{slugify(product['name'])}.html"
th_path = Path('th/product') / f"{slugify(product['name'])}.html"
```

Clean step must also update — currently deletes from root and th/:
```python
# BEFORE:
for file in product_dir.glob('*.html'):
    if file.name != 'index.html':
        file.unlink()

# AFTER: only clean inside product/ — never touch root HTML
product_dir = Path('product')
if product_dir.exists():
    shutil.rmtree(product_dir)
product_dir.mkdir(exist_ok=True)

th_product_dir = Path('th/product')
if th_product_dir.exists():
    shutil.rmtree(th_product_dir)
th_product_dir.mkdir(parents=True, exist_ok=True)
```

Internal links inside generated product pages must also update:
- Back-to-listing link: confirm what URL this points to — update if it uses relative path
- Prev/next product nav: update from /[slug].html → /product/[slug].html
- Canonical URL in each page: update from /[slug].html → /product/[slug].html
- TH canonical: update from /th/[slug].html → /th/product/[slug].html

Write the complete replacement generate_products.py.
Add this comment block at the top of the changed section:
```python
# RESTRUCTURE 2026-06-26: output moved from repo root to /product/ and /th/product/
# Old paths: /[slug].html and /th/[slug].html
# New paths: /product/[slug].html and /th/product/[slug].html
# Redirects added in _redirects for backward compatibility
```

---

## 6. TASK — INDEX.HTML AND TH/INDEX.HTML

Scan both files for any href, onclick, or JS that references product page URLs.

Common patterns to find and update:
```html
<!-- BEFORE -->
href="/claw-machine-pro.html"
href="/th/claw-machine-pro.html"
location.href = '/' + slug + '.html'
location.href = '/th/' + slug + '.html'

<!-- AFTER -->
href="/product/claw-machine-pro.html"
href="/th/product/claw-machine-pro.html"
location.href = '/product/' + slug + '.html'
location.href = '/th/product/' + slug + '.html'
```

Write complete replacement files for both index.html and th/index.html.

CRITICAL constraints for index.html and th/index.html:
- Preserve the entire <head> block exactly — do not add, remove, or reorder any tag
- Preserve all injector script tags exactly as found
- Preserve all CSS — do not restructure or rename any class
- Only change: href values and JS strings that reference product page paths
- If products.json is loaded by JS in index.html — do NOT change that path
  products.json stays at root, its path does not change

If no product links exist in index.html (e.g. if products are loaded dynamically from
products.json with JS building the URLs at runtime) — state this clearly and explain
why index.html does not need updating. Do not modify it unnecessarily.

---

## 7. TASK — _REDIRECTS FILE

Create or update _redirects at daje-queencatcher repo root.

Purpose: when Cloudflare serves the old URL /[slug].html, redirect permanently to
/product/[slug].html so existing bookmarks and Google-indexed URLs do not 404.

Format (Cloudflare Pages _redirects syntax):
```
/[old-slug].html    /product/[old-slug].html    301
/th/[old-slug].html /th/product/[old-slug].html  301
```

CC must derive the actual slug list from reading generate_products.py or the existing
product HTML files at root. Do not invent slugs.

Add a header comment:
```
# Restructure redirects — 2026-06-26
# Product pages moved from root to /product/ and /th/product/
# These redirects preserve SEO value and prevent 404s on old URLs
```

If _redirects already exists with other rules — preserve all existing rules,
add the new product redirects at the top with the comment block above.

---

## 8. QA CHECKLIST (produce this as a separate section in CC_CHAT_LOG)

After writing all files, CC must produce this checklist in plain text.
Owner runs this after merging the PR. Every item must pass before Session B begins.

```
═══════════════════════════════════════════════════
QA CHECKLIST — daje-queencatcher restructure
Session A — 2026-06-26
Run after merging PR. All items must pass before Session B.
═══════════════════════════════════════════════════

STEP 1 — TRIGGER THE GENERATOR
□ Go to: github.com/Csmittee/daje-queencatcher → Actions tab
□ Find workflow: products-build.yml (or generate-products.yml)
□ Click "Run workflow" → Run workflow
□ Wait for green checkmark (should take under 2 minutes)
□ If red X: read the error log, do not proceed until green

STEP 2 — CONFIRM FILE LOCATIONS IN GITHUB
□ Go to repo root — confirm NO new product HTML files appeared at root
  (index.html should be the only .html at root)
□ Open /product/ folder — confirm product HTML files are here
□ Open /th/product/ folder — confirm TH product HTML files are here
□ Open /th/ folder — confirm ONLY th/index.html is here (no product pages)

STEP 3 — LIVE SITE TESTS (wait ~2 min after green checkmark for Cloudflare to deploy)
□ Open: https://daje.janishammer.com
  → Homepage loads correctly
  → Nav bar and footer render (injector working)
  → Brand colours correct (black/Quicksand font)

□ Click any product on the homepage
  → URL becomes: https://daje.janishammer.com/product/[slug].html
  → Product page loads correctly
  → Nav bar and footer render on product page
  → Back to listing button works
  → Prev / Next navigation works between products

□ Open: https://daje.janishammer.com/th/index.html
  → TH homepage loads correctly
  → Injector renders Thai nav

□ Click any product on the TH homepage
  → URL becomes: https://daje.janishammer.com/th/product/[slug].html
  → TH product page loads correctly

STEP 4 — REDIRECT TEST (old URLs must not 404)
□ In browser, manually type one old product URL:
  https://daje.janishammer.com/[any-old-product-slug].html
  → Should redirect to: https://daje.janishammer.com/product/[slug].html
  → Page should load (not show 404 or Cloudflare error page)

□ Same for TH:
  https://daje.janishammer.com/th/[any-old-product-slug].html
  → Should redirect to: https://daje.janishammer.com/th/product/[slug].html

STEP 5 — PRODUCTS.JSON CHECK
□ Open: https://daje.janishammer.com/products.json
  → Should return JSON data (not 404)
  → This file must still be at root — confirm it did not move

STEP 6 — FINAL SIGN-OFF
□ All 5 steps above: PASS
□ Report result to Chat before Session B begins

If any step fails: do NOT start Session B. Report the failure and we diagnose first.
═══════════════════════════════════════════════════
```

---

## 9. GOVERNANCE UPDATES

### janishammer-central/KNOWLEDGE_MAP.md
Update the Folder Structure Audit table — daje-queencatcher row:
  Compliant: YES (after QA passes — note: pending QA)
  Issues: NONE (after restructure)
  Add note: product pages moved to /product/ and /th/product/ — 2026-06-26

Update the File Inventory — daje-queencatcher section:
  Change: *.html (11 product pages) — folder: root → product/
  Change: th/*.html (11 TH product pages) — folder: th/ → th/product/

Bump version: X.Y+1

### janishammer-central/RETROFIT_QUEUE.md
No change to queue items yet — folder restructure is not in the queue.
Add a Session Log entry:
  ### 2026-06-26 — Session A: daje-queencatcher restructure
  Folder restructure piloted. QA checklist produced. Pending owner QA confirmation.

Bump version: X.Y+1

### daje-queencatcher/PROJECT_STATE.md
Update Folder structure section:
  Compliant: PENDING QA (restructure committed — QA not yet confirmed)
  Issues: NONE after restructure (product/ and th/product/ now in use)

Add to Open issues: REMOVE the folder structure item once QA passes.

Add to Session log (newest first):
  ### 2026-06-26 — Session A: folder restructure
  scripts/generate_products.py output paths updated.
  index.html and th/index.html internal links updated.
  _redirects added for backward compatibility.
  QA checklist produced — owner to run after PR merge.

Bump version: X.Y+1

---

## 10. WEB_STANDARD.MD UPDATE (janishammer-central)

This session establishes the folder structure standard for all brand sites.
Update WEB_STANDARD.md — Folder Structure Standard section:

Replace [TBD] with the confirmed standard, mark as CONFIRMED:

```
## Folder Structure Standard
Status: CONFIRMED — 2026-06-26 (piloted on daje-queencatcher)

Standard applies to: janishammer-home, daje-queencatcher, jade-coffee, janis-flow
Exception: i-flexthailand.com — same pattern, separate session (has JS files in /js/)

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

Rules:
  - index.html: always root, always handcrafted, never generated
  - pages/: human-written pages only — never generator output
  - product/ and blog/: generator output only — never hand-edit files here
  - scripts/, .github/, data/: never served, never touch in HTML sessions
  - _redirects: always at root — add redirect when moving any existing page
  - products.json / gallery-data.json: always at root — read by index.html JS
```

Bump WEB_STANDARD.md version: X.Y+1

---

## 11. RULES UPDATE (janishammer-central)

Add one new rule to .claude/rules/RULES-deploy.md (newest at top):

```
DEP-5: REDIRECT ON ANY URL CHANGE — PERMANENT (2026-06-26):
Any time an HTML file moves to a different path (restructure, rename, folder change),
add a 301 redirect in _redirects at repo root BEFORE the move is live.
Format: /old-path.html    /new-path.html    301
Never move a page without a redirect — breaks bookmarks, Google index, and Airtable links.
// Justification: Session A (daje restructure) — old product URLs would 404 without _redirects
```

Bump RULES-deploy.md version: X.Y+1
Note in CC_CHAT_LOG: "New rule: DEP-5 added to RULES-deploy.md"

---

## 12. MANDATORY CLOSING

1. Write CC_CHAT_LOG entry in janishammer-central (governance log):
   ---
   ## 2026-06-26 — CC_SESSION_A_daje_restructure_v1
   **Did:** daje-queencatcher folder restructure — generator output moved to /product/
            and /th/product/. _redirects added. Internal links updated in index.html.
   **Updated:** RULES-deploy.md (DEP-5 added). WEB_STANDARD.md folder structure confirmed.
                KNOWLEDGE_MAP.md daje row updated. RETROFIT_QUEUE.md session log added.
   **New files:** _redirects (daje-queencatcher)
   **Pending Chat verify:** Owner runs QA checklist after PR merge. All 6 steps must pass.
                             Report result before Session B begins.
   **Flags:** RETROFIT CANDIDATE — same restructure pattern queued for janis-flow,
              jade-coffee, janishammer-home (Sessions B, C)
   ---

2. Write CC_CHAT_LOG entry in daje-queencatcher:
   ---
   ## 2026-06-26 — Session A: folder restructure
   **Did:** generate_products.py output paths updated. index.html + th/index.html
            internal links updated. _redirects created with 301s for old product URLs.
   **Updated:** PROJECT_STATE.md folder structure status updated.
   **New files:** _redirects
   **Pending Chat verify:** QA checklist — 6 steps — owner runs after PR merge.
   **Flags:** LARGE FILE — index.html still 1184 lines — split plan session pending (separate)
   ---

3. Archive this prompt:
   Copy to janishammer-central/docs/prompts/CC_SESSION_A_daje_restructure_v1.md
   Add at top: ✅ COMPLETE — 2026-06-26 — daje-queencatcher folder restructure

4. Bump version on every .md file changed.

5. Commit all files — TWO separate PRs:
   PR 1: daje-queencatcher — all source + governance changes for this repo
   PR 2: janishammer-central — governance updates (KNOWLEDGE_MAP, RETROFIT_QUEUE,
          WEB_STANDARD, RULES-deploy, CC_CHAT_LOG, prompt archive)

   Commit message for PR 1:
   "Restructure: product pages moved to /product/ and /th/product/ — Session A"

   Commit message for PR 2:
   "Governance update: Session A daje restructure — DEP-5 added, WEB_STANDARD confirmed"

---

## 13. DO NOT TOUCH

- janishammer-central/js/ (injector files — not in scope)
- index.html <head> block unless a product link is inside it
- Any injector script src tags
- products.json location (stays at root)
- .github/workflows/ YAML files (not needed — only Python path changes)
- Any other site repo (this session is daje-queencatcher only)
- Ops-Dashboard repo
