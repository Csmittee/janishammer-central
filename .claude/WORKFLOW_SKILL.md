# WORKFLOW_SKILL.md — Janishammer Web Portfolio
> Version 1.0 — 2026-06-26
> Changes: Initial creation — adapted from Satu 2.3 WORKFLOW_SKILL for web governance system
> Previous: NONE
> Location: Project folder (master) + janishammer-central/.claude/claude_project/ (reference copy)

---

## DOCUMENT VERSIONING RULE (applies to ALL .md files in this project)

Every document must carry a version header. Format:
```
> Version X.Y — YYYY-MM-DD
> Changes: [one line summary of what changed]
> Previous: vX.Y — YYYY-MM-DD
```

Version increment rules:
- X.Y → X.Y+1 (e.g. 1.1 → 1.2): same sections, detail change only
- X.0 → X+1.0 (e.g. 1.0 → 2.0): new section added or structure changed

Who applies this: whoever last edited the file — Chat, CC, or Owner.
No document committed without a version bump if content changed.

---

## THE THREE ROLES

### 👤 OWNER
- Describes goals and reports QA results (screenshots or pass/fail per checklist)
- Merges PRs after Chat confirms delivery is correct
- Physically checks live site via browser — Chat and CC cannot do this
- Never edits source files manually (script-owned files overwritten on next run)
- Never acts as messenger between Chat and CC — each reads directly from repo
- Observes workflow health — if something feels wrong, checks this document first

### 🧠 CHAT (this session)
- Reads repo via project knowledge sync — never asks owner to upload source code
- Reads CC_CHAT_LOG (last 3 entries) at every session open before forming any opinion
- Reads janishammer-central governance before any site repo
- Diagnoses before acting — never guesses, never hardcodes values from memory
- Writes CC prompts as complete downloadable .md files (13 sections — see template below)
- States impact clearly to owner before writing any prompt touching injector, SEO, generators, or _redirects
- Does NOT write to any repo directly
- Generates CHAT_HANDOFF at session end — project folder only, never repo
- Confirms CC delivery by reading CC_CHAT_LOG before writing CHAT_HANDOFF

### 🤖 CC (Claude Code)
- Reads janishammer-central: CLAUDE.md → RULES.md → CC_SKILL.md → relevant domain rule → CC_CHAT_LOG (last 3) before every session
- Reads site repo CLAUDE.md and PROJECT_STATE.md before touching any site
- Writes complete replacement files — never patches or diffs
- Is NOT bound by Chat's suggested implementation — verifies from live repo files
- Writes CC_CHAT_LOG at end of every session (janishammer-central + site repo as applicable)
- Commits + merges to main before session closes (TWO PRs: site repo first, then janishammer-central)
- Never writes CHAT_HANDOFF — that is Chat's responsibility only
- Never touches Ops-Dashboard repo

---

## SYMMETRIC 3-DOCUMENT SYSTEM

Every party has: HANDOFF + SKILL + RULE

| Doc type | Chat | CC |
|----------|------|-----|
| HANDOFF | CHAT_HANDOFF.md — project folder only, single use | CC_CHAT_LOG.md — repo, CC writes, Chat reads last 3 |
| SKILL | WORKFLOW_SKILL.md — this file, project folder master | CC_SKILL.md — janishammer-central root |
| RULE | CHAT_RULE.md — project folder + /.claude/claude_project/ copy | RULES.md + .claude/rules/ — janishammer-central |

**File location discipline:**
- Project folder = Chat's world (CHAT_HANDOFF, WORKFLOW_SKILL, CHAT_RULE)
- janishammer-central = CC's governance world (CC_CHAT_LOG, CC_SKILL, RULES.md, CLAUDE.md, all domain rules)
- Site repos = CC's execution world (source files, site-level CC_CHAT_LOG, PROJECT_STATE)
- /.claude/claude_project/ = reference copies of Chat docs (owner downloads from project folder, uploads to repo)
- CC never forced to read /.claude/claude_project/ — for investigation only

---

## THE DEVELOPMENT LOOP

```
Owner describes goal
        ↓
Chat reads janishammer-central (project knowledge) → reads CC_CHAT_LOG last 3 → diagnoses
        ↓
Chat writes CC prompt as .md file → owner uploads to janishammer-central/docs/prompts/
        ↓
Owner runs CC: "Read and execute: docs/prompts/[filename].md
                Repos: [list all repos needed]"
        ↓
CC reads governance → scans repos → fixes → updates docs → writes CC_CHAT_LOG → raises PRs
        ↓
Owner merges PRs (janishammer-central first, then site repo)
        ↓
Owner runs QA checklist from CC prompt Section 8 → reports pass/fail to Chat
        ↓
Chat reads CC_CHAT_LOG → verifies delivery matches prompt → confirms or flags
        ↓
Chat writes CHAT_HANDOFF → saves to project folder
        ↓
Owner syncs project knowledge → next session starts with CHAT_HANDOFF paste
```

**Constraint:** Chat and CC cannot open browsers, check live sites, or run terminal commands.
Owner is the only one who can confirm live site behaviour.

---

## INTERVENTION LEVELS — USE THE LIGHTEST ONE

| Level | Who | When | Example |
|-------|-----|------|---------|
| Full CC prompt (Build) | CC reads all governance + repo | Multi-file, structural change | Folder restructure, new generator |
| Fix prompt | CC reads 1-2 files | Single bug, clear symptom | Fix one output path |
| Rapid-fire phrase | Chat tells owner what to type to CC | One-line change confirmed | Change one constant |
| Owner direct edit | Owner edits GitHub UI | One character, confirmed safe | Fix a typo in a .md file |

Never use a heavier intervention than needed. Saves tokens and time.

---

## CHAT SESSION OPENING — MANDATORY SEQUENCE

Owner pastes CHAT_HANDOFF → Chat executes the 4 steps embedded in handoff header:
1. Read WORKFLOW_SKILL.md + CHAT_RULE.md from project knowledge — state "Rules loaded"
2. Read CC_CHAT_LOG last 3 entries — state summary + pending items. STOP if unreadable.
3. Read PROJECT_STATE.md (janishammer-central) — state current system status one line
4. Read open items in CHAT_HANDOFF — state "Memory installed"
Only then ask owner: "Today's goal?" — do not assume it, even if already stated in handoff.

---

## CC PROMPT TEMPLATE (13 sections — all required for build prompts)

**DELIVERY RULE:** Full CC build prompts must be delivered as a downloadable .md file.
Rapid-fire phrases and single-fix adjustments may use text blocks.

```markdown
## 1. GOVERNANCE READS (mandatory before anything else)
Read in this order before writing a single file:
1. janishammer-central/CLAUDE.md
2. janishammer-central/RULES.md
3. janishammer-central/CC_SKILL.md
4. janishammer-central/.claude/rules/RULES-[relevant domain].md
5. janishammer-central/CC_CHAT_LOG.md (last 3 entries only)
6. [site-repo]/CLAUDE.md
7. [site-repo]/PROJECT_STATE.md
8. [site-repo]/CC_CHAT_LOG.md (last 3 entries only)
State "Governance reads complete" before proceeding.

## 2. CONTEXT
[Why this prompt exists. What problem it solves. What does NOT change.]
[Session position if part of a series: Session X of Y]

## 3. SCAN BEFORE WRITING
[Which files CC must read before writing anything]
[Exact scan output format — what CC must report before writing]

## 4. FILES TO CHANGE — COMPLETE LIST
[Table: file | repo | change description]
[Total file count stated explicitly]
[Nothing outside this list]

## 5. TASK(S)
[Numbered. Root cause stated. Exact file named. Exact fix described.]
[CC verifies from live repo — not bound by Chat's suggested implementation]
[Code patterns where helpful — CC adapts from live file]

## 6. DO NOT TOUCH
[Explicit exclusion list — always includes:]
- janishammer-central/js/ (unless this session explicitly targets injector)
- index.html <head> block (unless prompt explicitly targets it)
- Any injector script src tags
- products.json / gallery-data.json location (always root)
- Ops-Dashboard repo

## 7. VERIFICATION
[What CC confirms before raising PR]
[File count check — N files changed, N files created]

## 8. QA CHECKLIST
[Numbered steps owner runs after PR merge]
[Format: STEP N — ACTION → EXPECTED RESULT]
[Last item always: Report result to Chat before next session begins]

## 9. GOVERNANCE UPDATES — janishammer-central
[KNOWLEDGE_MAP.md — what to update]
[RETROFIT_QUEUE.md — what to update]
[WEB_STANDARD.md — what to confirm or update]
[Which domain rule files to update or add rules to]

## 10. WEB_STANDARD.MD UPDATE
[If this session confirms or establishes a standard — write it here]
[If no standard confirmed this session — state NONE]

## 11. RULES UPDATE
[New domain rules to add — with full rule format]
[Which .claude/rules/ file, rule prefix and number, justification]
[Or: NONE if no new rules this session]

## 12. MANDATORY CLOSING
[CC_CHAT_LOG entries — format per CC_SKILL.md]
[Archive this prompt to janishammer-central/docs/prompts/ — stamp ✅ COMPLETE]
[Version bump on every file changed]
[Commit order: site repo PR first, janishammer-central PR second]
[Exact commit messages]

## 13. SECURITY REMINDER
[Payment mode if applicable — always PAYMENT_MODE=fake for Satu sessions]
[For web sessions: "No API keys in any committed file — flag CRITICAL if found"]
[Ops-Dashboard out of scope]
```

---

## CHAT PRE-DELIVERY SELF-CHECK

Before delivering any CC prompt, Chat must silently verify:
- [ ] Is this a build prompt? → must be .md file delivered as download, never a text block
- [ ] Does Section 1 include all 8 governance reads in correct order?
- [ ] Does Section 4 state an explicit total file count?
- [ ] Does Section 8 have a QA checklist with numbered steps?
- [ ] Does Section 12 specify TWO PRs — site repo first, janishammer-central second?
- [ ] Does Section 6 include the standard DO NOT TOUCH items?
- [ ] Are all values derived from project knowledge — nothing hardcoded from Chat's memory?
If any check fails → fix before delivering. Never ask owner to remind Chat of these.

---

## TRIGGER → ACTION → VALIDATOR CONTRACT

| Trigger | Detected by | Action | Validator |
|---------|------------|--------|-----------|
| New file created in any repo | CC | Add to KNOWLEDGE_MAP + CLAUDE.md key files | Chat reads CC_CHAT_LOG next session |
| HTML/JS/CSS file exceeds 800 lines | CC or Chat | Flag to owner, propose split plan | Owner decides, Chat writes split prompt |
| Fix fails twice on same symptom | Chat or CC | Stop — diagnose root cause — do not attempt third fix | Chat reviews before next prompt |
| WORKFLOW_SKILL.md changed | Owner or Chat decides, CC writes | Chat verifies content before merge | Chat confirms to owner |
| CC ignores Chat suggestion, uses repo version | CC | Flag in CC_CHAT_LOG with what was ignored and why | Chat reads log, updates CHAT_RULE if pattern repeats |
| Injector file touched | CC | Announce in CC_CHAT_LOG: "INJECTOR CHANGE — affects all 5 sites" | Chat reads PR, confirms to owner |
| New domain rule added | CC | Add to correct .claude/rules/ file, newest at top, bump version | Chat reads CC_CHAT_LOG — confirms update present |
| CC_CHAT_LOG unreadable (sync missing) | Chat | Tell owner immediately — do not proceed | Owner syncs, Chat re-reads |
| Any document changed without version bump | CC or Chat | Reject — add version header before committing | Whoever reviews next flags it |
| URL moved without _redirects | CC or Chat | Stop — add _redirects entry before moving file | Chat confirms _redirects in PR |
| QA checklist fails | Owner reports | Do not start next session — diagnose failure first | Chat writes fix prompt, not next session prompt |
| Old lesson from LESSON_LEARN.md applies | Chat | Surface the lesson number and rule to owner | Owner confirms whether to apply |

---

## FILE STRUCTURE — REPOS

```
janishammer-central/ (permanent — always synced to Claude project)
├── CLAUDE.md              ← CC reads every session (≤35 lines)
├── RULES.md               ← 8 universals + domain index (body never grows)
├── CC_SKILL.md            ← CC operating manual
├── CC_CHAT_LOG.md         ← CC writes, Chat reads last 3 entries
├── PROJECT_STATE.md       ← system-level status
├── KNOWLEDGE_MAP.md       ← full system map (all 6 repos)
├── WEB_STANDARD.md        ← "never explain again" manual (grows over time)
├── RETROFIT_QUEUE.md      ← backport improvement tracker
├── js/                    ← injector library (NEVER touch without R-4 authorisation)
│   ├── injector-config.js
│   ├── injector-core.js
│   └── injector-versions.js
├── docs/prompts/          ← archived CC prompts (✅ COMPLETE stamped)
└── .claude/
    ├── rules/             ← 9 domain rule files (CC reads by domain)
    │   ├── RULES-html.md
    │   ├── RULES-css.md
    │   ├── RULES-js.md
    │   ├── RULES-injector.md
    │   ├── RULES-workflow.md
    │   ├── RULES-content.md
    │   ├── RULES-deploy.md
    │   ├── RULES-security.md
    │   └── RULES-seo.md
    └── claude_project/    ← reference copies of WORKFLOW_SKILL + CHAT_RULE (rarely needed by CC)

[each-site-repo]/
├── CLAUDE.md              ← seed — points to janishammer-central (≤15 lines)
├── CC_CHAT_LOG.md         ← site-level session log
├── PROJECT_STATE.md       ← site build status
├── index.html             ← ALWAYS at root — Cloudflare entry point
├── pages/                 ← handcrafted non-homepage HTML
├── product/               ← EN generated product pages
├── th/
│   ├── index.html         ← TH homepage (bilingual sites)
│   ├── product/           ← TH generated product pages
│   └── blog/              ← TH generated blog posts
├── blog/                  ← EN generated blog posts
├── scripts/               ← Python generators (not served)
├── .github/workflows/     ← GitHub Actions (not served)
└── data/                  ← CSV fallback (not served)

Project folder (Chat only — never in repo):
├── CHAT_HANDOFF.md        ← single use, overwrite each session
├── WORKFLOW_SKILL.md      ← this file (master)
└── CHAT_RULE.md           ← Chat non-negotiables
```

---

## SESSION CLOSING CHECKLIST

### CC closes every session with:
1. Write CC_CHAT_LOG entry (newest at top) — janishammer-central + site repo as applicable
2. Archive prompt → janishammer-central/docs/prompts/ stamped ✅ COMPLETE — [date] — [summary]
3. Add new domain rules to correct .claude/rules/ file (newest at top) + version bump
4. Update PROJECT_STATE.md (newest session at top) + version bump
5. Update KNOWLEDGE_MAP.md if new files created + version bump
6. Bump version header on every file changed
7. Commit all in correct order → two PRs → merge to main
   PR 1: site repo (source + site governance files)
   PR 2: janishammer-central (governance updates)

### Chat closes every session with:
1. Read CC_CHAT_LOG — verify delivery matches what was asked
2. Flag any gap to owner before session ends
3. Write CHAT_HANDOFF.md → present as downloadable file → owner saves to project folder
4. Owner syncs project knowledge before next session

---

## KNOWN LESSONS FROM PREVIOUS PROJECTS (key ones — full list in LESSON_LEARN.md)

These travel from older projects. Surface when relevant.

| # | Rule | Apply when |
|---|------|-----------|
| L042 | Airtable lookup fields return arrays — always unwrap: Array.isArray(val) ? val[0] : val | Any Airtable fetch in Python or JS |
| L049 | Fetch all related records once, build lookup map — never per-card | Any generator adding related data |
| L050 | Always use finally{} on buttons that change state | Any JS button in HTML |
| L069 | One chat = one goal = one prompt | Any session that starts expanding scope |
| L093 | FOUC block may ONLY contain visibility: visible — never add background or color | Any index.html or th/index.html edit |
| L094 | iflex-core.js and iflex-config.js never define the same CSS class | Any iFlex injector session |
| L096 | Never rewrite a full HTML file when only adding a section — diff before and after | Any HTML session |
| L097 | Always use download files for HTML over 100 lines — no copy-paste | Any HTML delivery |
| L102 | Cloudflare _headers wildcard /*.js silently overrides specific path rules | Any _headers change |
| L103 | Injector fix needs both GitHub deploy AND browser hard reload to take effect | Any injector debug |
| L108 | Apply fixes to both EN and TH files in the same session — never assume they are in sync | Any bilingual page fix |
