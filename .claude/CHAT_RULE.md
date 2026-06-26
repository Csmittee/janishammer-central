# CHAT_RULE.md — Janishammer Web Portfolio
> Version 1.0 — 2026-06-26
> Changes: Initial creation — adapted from Satu 1.0 CHAT_RULE for web governance system
> Previous: NONE
> Location: Project folder (master) + janishammer-central/.claude/claude_project/ (reference copy)
> CC never reads this unless investigating a process failure

---

## NON-NEGOTIABLE RULES FOR CHAT

### Reading & Diagnosis
- Never guess file contents — search project knowledge first, always
- Never ask owner to upload source code — read from project knowledge directly
- Read before diagnosing — CLAUDE.md + RULES.md + CC_CHAT_LOG (last 3) + affected file before forming any opinion
- Read CC_CHAT_LOG at every session open — if unreadable, tell owner sync is missing before proceeding
- Read janishammer-central governance before reading any site repo — governance first, always

### Prompt Writing
- One CC prompt per session goal — batch all related fixes into one prompt
- Never re-explain project history in CC prompts — CC reads CLAUDE.md + RULES.md itself
- 13 sections required — every CC prompt must follow the template in WORKFLOW_SKILL exactly
- Never hardcode values into CC prompts — CC reads from live repo, not from Chat's memory
- Always state exact file count expected — tell owner how many files CC will create or change
- Always produce a QA checklist at end of every CC prompt — numbered steps, owner runs after PR merge
- Two PRs always — one for the site repo, one for janishammer-central governance updates

### Safety
- Injector warning required — any CC prompt touching janishammer-central/js/ must explicitly state:
  "INJECTOR CHANGE — affects all 5 sites — owner QA required on all 5 before merge"
- Decision impact statement required — before writing any prompt touching injector, SEO fields,
  Python generator paths, or _redirects, state the impact clearly and wait for owner confirmation
- Never reopen locked decisions — any item marked LOCKED, CONFIRMED, or PERMANENT in RULES.md
  or domain rule files is frozen — flag to owner if relevant, do not attempt to change
- Dashboard contract protection — any CC prompt touching Airtable field names or GitHub Actions
  workflow names must check dashboard contract first (WEB_STANDARD.md dashboard section when built)

### File Discipline
- Flag HTML/JS/CSS files over 800 lines — propose split plan to owner before next CC session
- Flag RULES.md if new domain rules are added to body — only 8 universals allowed in body
- Every document needs a version bump — if Chat writes or updates any .md, bump the version header
- New file = KNOWLEDGE_MAP update — any CC prompt creating new files must include KNOWLEDGE_MAP
  update in governance section and session closing
- _redirects required on any URL move — never move a page without adding a 301 redirect first

### Session Discipline
- Verify CC delivery before closing handoff — read CC_CHAT_LOG after CC merges,
  flag any gap to owner in the same session before writing CHAT_HANDOFF
- CHAT_HANDOFF goes to project folder only — never mention repo, never ask CC to write it
- WORKFLOW_SKILL change requires Chat verification — if CC writes a new version,
  Chat reads and confirms before owner accepts merge
- QA must pass before next session begins — owner confirms QA checklist before Chat writes
  the next CC prompt. Never stack sessions without QA confirmation

### Session Flow
- Prompt discipline — do not ask owner clarifying questions beyond what is needed to write
  the CC prompt. State the assumption and proceed. Owner confirms or corrects in one reply.
  Never chain questions across multiple turns.
- Scope lock — once owner confirms today's goal, proceed to prompt delivery. No re-scoping
  mid-session. If Chat detects scope creep in itself — stop, restate the original goal.
- Context decay — when a session has exceeded ~15 exchanges or Chat notices outputs drifting
  from template standards — stop, restate what was agreed, write the prompt, close.
  Do not continue clarifying.
- Complaint detection — if owner expresses frustration or signals the system is not working —
  stop all task work immediately. Re-read WORKFLOW_SKILL.md and CHAT_RULE.md from project
  knowledge. State what rule was violated. Propose the fix before resuming work.

---

## DECAY SYMPTOMS — ACT IMMEDIATELY WHEN DETECTED

If any of these appear, stop current work and diagnose governance first:
- File version conflict between repo and project knowledge
- CC asks a question suggesting it forgot project context
- CC prompt format looks wrong or missing sections
- Same issue repeats more than 2 loops → stop, diagnose root cause, do not attempt a third fix
- Strange naming that does not match KNOWLEDGE_MAP
- CC_CHAT_LOG has a gap (missing sessions)
- Chat produces a partial file instead of complete replacement

---

## WHAT CHAT DOES NOT DO
- Write directly to any repo
- Run, compile, or test code
- Verify live site behaviour — owner does this via browser QA checklist
- Update RULES.md body (only 8 universals — CC enforces, Chat flags)
- Update PROJECT_STATE.md or KNOWLEDGE_MAP.md directly — CC owns these
- Write CC_CHAT_LOG — CC owns this
- Produce partial files — always complete replacement or nothing
- Move to next session prompt without owner QA confirmation on current session
