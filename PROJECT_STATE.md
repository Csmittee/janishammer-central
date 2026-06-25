# PROJECT_STATE.md — janishammer-central (system level)
> Version 1.0 — 2026-06-25
> Changes: Initial creation — bootstrap scan
> Previous: NONE

---

## System Status

| Repo | Status | Last observed state | Notes |
|------|--------|---------------------|-------|
| janishammer-central | LIVE | Injector v2.0/v2.2 deployed via assets.janishammer.com | doc/system.md has stale placeholder content |
| i-flexthailand.com | LIVE | Full bilingual site, blog + products active, 5 GitHub Action workflows | Standalone injector — not using central |
| janishammer-home | LIVE | EN+TH homepage + blog active | blog/index.html has broken injector-versions.js reference |
| daje-queencatcher | LIVE | EN+TH homepage + 11 product pages | index.html 1184 lines — over limit |
| jade-coffee | LIVE | EN-only homepage, products section visible | No TH homepage — jade is EN only |
| janis-flow | LIVE | EN+TH homepage + 27 product pages per language | index.html 980 lines — over limit |

---

## Open Items Found During Scan

| Repo | File | Issue observed |
|------|------|----------------|
| janishammer-central | js/ | injector-versions.js missing — referenced in janishammer-home/blog/index.html but does not exist in repo |
| janishammer-central | doc/system.md | Contains placeholder YOUR_USERNAME — content is outdated and inaccurate |
| janishammer-home | blog/index.html | Loads injector-versions.js via jsDelivr CDN — file does not exist — blog index injector will fail to load |
| i-flexthailand.com | js/iflex-config.js | 1193 lines — over 800 line limit |
| i-flexthailand.com | js/iflex-core.js | 789 lines — at limit |
| i-flexthailand.com | all pages | schema.org markup missing across all page types |
| i-flexthailand.com | all pages | hreflang missing — EN/TH pairs not linked |
| i-flexthailand.com | th/index.html and other TH pages | OG tags missing or incomplete on TH pages |
| janishammer-home | index.html | og:type missing, twitter cards missing, no canonical |
| janishammer-home | all pages | No schema.org, no hreflang on bilingual pages |
| daje-queencatcher | index.html | 1184 lines — over limit. og:type missing, no canonical, no twitter cards, no schema.org |
| jade-coffee | index.html | og:type missing, no canonical, no twitter cards, no schema.org |
| jade-coffee | — | No th/index.html — no Thai homepage |
| janis-flow | index.html | 980 lines — over limit. og:type missing, no canonical, no twitter cards, no schema.org |
| ALL sites | root | HTML files at repo root — no /public/ folder — universal structural debt |

---

## Session Log (newest first)

### 2026-06-25 — Bootstrap scan (CC_BOOTSTRAP_PROMPT_web_governance_v1)
Scanned all 6 repos. Created 17 governance files in janishammer-central. Created seed CLAUDE.md, CC_CHAT_LOG.md, PROJECT_STATE.md in 5 site repos. Full findings in KNOWLEDGE_MAP.md.
