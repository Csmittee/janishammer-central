# RULES-workflow.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 4 starter rules from bootstrap scan
> Previous: NONE

---

## Workflow Rules (newest at top)

**WF-4: STOP ON UNREADABLE LOG — PERMANENT (2026-06-25):**
If CC_CHAT_LOG is missing, unreadable, or has a gap — stop.
Write in CC_CHAT_LOG: "LOG GAP DETECTED — [date] — stopping session."
Tell owner to sync before proceeding.
// Justification: log gap means lost context — proceeding blind risks regression

**WF-3: ONE DOMAIN PER SESSION — PERMANENT (2026-06-25):**
Each CC session addresses one domain (HTML, JS, injector, deploy, etc.).
Multi-domain sessions dilute focus and increase error rate.
If a session naturally touches two domains, note the second in CC_CHAT_LOG
as a pending item — do not attempt both in one session.
// Justification: context budget — focused sessions produce better output

**WF-2: GOVERNANCE REPO FIRST — PERMANENT (2026-06-25):**
Before reading any site repo, read janishammer-central governance.
Site CLAUDE.md is a seed only — it points here. The rules live here.
// Justification: governance-first ensures rules are loaded before any decision

**WF-1: READ BEFORE ACTING — PERMANENT (2026-06-25):**
Every CC session opens by reading (in order):
janishammer-central/CLAUDE.md → RULES.md → CC_SKILL.md →
relevant domain rule file → CC_CHAT_LOG.md (last 3 entries only).
Do not write a single file until this sequence is complete.
// Justification: CC has no memory between sessions — reading IS the memory
