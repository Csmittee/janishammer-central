✅ COMPLETE — 2026-06-25 — Governance Bootstrap Install (33 files created across 6 repos)

# CC_BOOTSTRAP_PROMPT_web_governance_v1.md
> Version 1.0 — 2026-06-25
> Changes: Initial creation — governance bootstrap for Janishammer web portfolio
> Previous: NONE

---

## 1. INTRO

Read and execute: CC_BOOTSTRAP_PROMPT_web_governance_v1.md
New session. No context from other projects.
You are installing a governance system into an existing web portfolio for the first time.
This is a documentation-only session. Zero source files will be touched.

Repos to access (all under GitHub user Csmittee):
  janishammer-central   ← governance HQ + injector library (permanent repo)
  i-flexthailand.com    ← full iFlex website (BUS01)
  janishammer-home      ← root Janishammer company home page
  daje-queencatcher     ← Daje mini-site (BUS02)
  jade-coffee           ← Jade mini-site (BUS03)
  janis-flow            ← Janis Flow mini-site (BUS04)

Ops-Dashboard repo is managed separately — do not scan or touch it.

Read in this order before writing anything:
  1. This prompt in full
  2. Every repo listed above — scan file lists first, then read selectively
State every repo scanned and file count before writing a single file.

---

## 2. CONTEXT

This is a multi-repo web portfolio with a central injector architecture.
Owner: Chairit Smittee (GitHub: Csmittee) — one-person operation, no local terminal.
All sites are under the Janishammer brand family.

System overview:
- janishammer-central: already contains injector-config.js, injector-core.js,
  injector-versions.js. This repo is being promoted to governance HQ in this session.
  It is the permanent repo — always synced to the Claude project folder.
  It carries all rules, standards, and the injector library in one place.
- i-flexthailand.com: full website, bilingual (EN/TH), Airtable-driven blog+products,
  Cloudflare Pages hosting, BUS01 in the deploy worker REPO_MAP.
- janishammer-home: root company landing page, binds all brands (Flow, Daje, Jade, iFlex),
  uses shared nav/footer from janishammer-central injector.
- daje-queencatcher, jade-coffee, janis-flow: brand mini-sites, Airtable-driven,
  currently on subdomains, designed to grow to own domains later.
- All 5 site repos use the injector served from janishammer-central.
- All governance rules live in janishammer-central only.
  Site repos carry only: seed CLAUDE.md + CC_CHAT_LOG.md + PROJECT_STATE.md.

Design principle: one rule update in janishammer-central propagates everywhere.
CC reads janishammer-central governance at start of every session before touching any site.

---

## 3. NEW FILES — COMPLETE LIST WITH EXACT LOCATIONS

Every file CC will create in this session. Nothing outside this list.

### janishammer-central (governance + injector repo)

```
janishammer-central/
├── CLAUDE.md                              ← governance repo compass (≤35 lines)
├── RULES.md                               ← 8 universals + domain index only
├── CC_SKILL.md                            ← CC operating manual
├── CC_CHAT_LOG.md                         ← governance-level log (first entry this session)
├── KNOWLEDGE_MAP.md                       ← maps entire 6-repo system
├── PROJECT_STATE.md                       ← system-level state
├── RETROFIT_QUEUE.md                      ← backport improvement tracker
├── WEB_STANDARD.md                        ← "never explain again" manual (skeleton only)
├── docs/
│   └── prompts/                           ← archived CC prompts
└── .claude/
    └── rules/
        ├── RULES-html.md
        ├── RULES-css.md
        ├── RULES-js.md
        ├── RULES-injector.md
        ├── RULES-workflow.md
        ├── RULES-content.md
        ├── RULES-deploy.md
        ├── RULES-security.md              ← NEW: security rules own domain
        └── RULES-seo.md                   ← NEW: SEO rules own domain
```

### Each site repo (3 files — one per repo)

```
[repo-root]/
├── CLAUDE.md          ← seed only — ≤15 lines — points to janishammer-central
├── CC_CHAT_LOG.md     ← site-specific session log
└── PROJECT_STATE.md   ← site-specific build status
```

Total new files: 17 (janishammer-central) + 3×5 (site seeds) = 32 files.
No file outside this list. No source files touched.

---

## 4. TASKS — IN ORDER, DO NOT SKIP

[Full task list as defined in prompt — executed 2026-06-25]

---

## 5. DO NOT TOUCH

- All source files in all repos: HTML, CSS, JS, Python, JSON, YAML workflows
- package.json, .env, wrangler.toml, _headers, netlify.toml, any deployment config
- Existing files in janishammer-central/js/ (read them — do not modify them)
- Existing README.md files in any repo (preserve exactly — do not overwrite)
- Ops-Dashboard repo — not in scope, do not access

---

## 6. VERIFICATION CHECKLIST (completed 2026-06-25)

- [x] janishammer-central has all 17 new files and 2 new directories (docs/prompts/ + .claude/rules/)
- [x] All 9 domain rule files exist in janishammer-central/.claude/rules/
- [x] Each of the 5 site repos has exactly 3 new files: CLAUDE.md, CC_CHAT_LOG.md, PROJECT_STATE.md
- [x] RULES.md body has exactly 8 rules — no domain rules in body
- [x] All seed CLAUDE.md files are ≤15 lines
- [x] janishammer-central/CLAUDE.md is ≤35 lines
- [x] CC_CHAT_LOG.md exists in janishammer-central AND in all 5 site repos (6 total)
- [x] KNOWLEDGE_MAP.md Domain Rule Map table lists all 9 domain files
- [x] KNOWLEDGE_MAP.md has a Security Observations section
- [x] KNOWLEDGE_MAP.md has an SEO Observations section
- [x] RETROFIT_QUEUE.md has 12 rows seeded from scan findings
- [x] WEB_STANDARD.md is skeleton only — no invented content — TBD clearly marked
- [x] Zero source files touched
- [x] Zero existing README.md files overwritten

---

## 7. MANDATORY CLOSING

Completed 2026-06-25. All files committed to claude/zealous-allen-wxix7r branch across all 6 repos.
