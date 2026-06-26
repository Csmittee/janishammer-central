# RETROFIT_QUEUE.md — janishammer-central
> Version 1.1 — 2026-06-26
> Changes: Session A log entry added
> Previous: Version 1.0 — 2026-06-25

---

## What This Is
A tracker for improvements worth applying backward to existing sites.
Added rarely. Updated when CC completes an application in a site session.

## How To Use
Owner or Chat proposes an item → CC adds it here with QUEUED status.
When a site session applies it → CC updates that site's cell to IN_PROGRESS or DONE.
Owner confirms live before CC marks DONE.

## Status Key
QUEUED      = identified, not started on this site
IN_PROGRESS = CC session opened for this item on this site
DONE        = applied and owner confirmed live
SKIP        = decided not to apply to this site (add reason in Notes)

## Queue

| # | Improvement | Why | Priority | iflex | jh-home | daje | jade | flow | Notes |
|---|-------------|-----|----------|-------|---------|------|------|------|-------|
| 1 | Add og:type to OG block | Missing — og:type="website" required for valid Open Graph | HIGH | SKIP (already present) | QUEUED | QUEUED | QUEUED | QUEUED | Simple one-tag add to `<head>` |
| 2 | Add `<link rel="canonical">` | Missing on all brand sites — prevents duplicate content | HIGH | SKIP (already present) | QUEUED | QUEUED | QUEUED | QUEUED | One per page, must match exact URL |
| 3 | Add Twitter card meta tags | Missing — required for Twitter/X sharing previews | HIGH | SKIP (already present) | QUEUED | QUEUED | QUEUED | QUEUED | 4 tags: card, title, description, image |
| 4 | Add LocalBusiness schema.org to homepages | Schema missing — missed rich result opportunity | HIGH | QUEUED | QUEUED | QUEUED | QUEUED | QUEUED | Article schema needed on blog pages too |
| 5 | Create and deploy injector-versions.js | Referenced in jh-home/blog/index.html — file missing — blog injector broken | HIGH | N/A | QUEUED | N/A | N/A | N/A | Must be created in janishammer-central/js/ first |
| 6 | Add hreflang to bilingual page pairs | EN/TH pairs not linked — Google serves wrong language version | MED | QUEUED | QUEUED | N/A | N/A | N/A | Both EN and TH page need hreflang pair |
| 7 | Add OG tags to TH pages (i-flexthailand.com) | TH pages have bare head — missing all OG and meta | MED | QUEUED | N/A | N/A | N/A | N/A | Use Thai-language OG image (Thai_SEO_OG.png) |
| 8 | Split daje-queencatcher/index.html | 1184 lines — over 800 limit — risky to edit | MED | N/A | N/A | QUEUED | N/A | N/A | Propose split plan to owner before session |
| 9 | Split janis-flow/index.html | 980 lines — over 800 limit | MED | N/A | N/A | N/A | N/A | QUEUED | |
| 10 | Add Thai homepage to jade-coffee | No th/index.html exists — TH users have no landing | MED | N/A | N/A | N/A | QUEUED | N/A | |
| 11 | Replace logo-as-OG-image | daje/jade/flow use brand logo as OG image — should use SEO_OG branded image | MED | N/A | N/A | QUEUED | QUEUED | QUEUED | Cloudinary SEO_OG images confirmed |
| 12 | Migrate i-flexthailand.com to central injector | Uses standalone fork — updates require two changes instead of one | LOW | QUEUED | N/A | N/A | N/A | N/A | Large work — requires careful bilingual testing |

## Session Log
### 2026-06-26 — Session A: daje-queencatcher restructure
Folder restructure piloted. QA checklist produced. Pending owner QA confirmation.
Same pattern queued for janis-flow, jade-coffee, janishammer-home (Sessions B, C).

### 2026-06-25 — Bootstrap: queue created. Seeded from scan findings in KNOWLEDGE_MAP.md. 12 items queued.
