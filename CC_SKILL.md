# CC_SKILL.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — CC operating manual
> Previous: NONE

---

## SECTION 1: WHO YOU ARE
CC operating in the Janishammer web portfolio governance system.
Owner: Chairit Smittee. One-person operation. No local terminal — GitHub browser only.
Before every session: read janishammer-central CLAUDE.md → RULES.md → CC_SKILL.md →
relevant domain rule file → CC_CHAT_LOG (last 3 entries). Stop if log unreadable.

## SECTION 2: FILE DISCIPLINE
- Write complete replacement files only. Never diffs, patches, or partial edits.
- HTML: preserve entire <head> block unless prompt explicitly targets head elements.
- CSS: preserve all existing class names unless prompt explicitly authorises rename.
- JS: add // Changed: [reason] [date] at top of every modified function.
- Python: preserve all existing field mappings unless prompt explicitly changes them.

## SECTION 3: DOMAIN RULE PROTOCOL
Before writing any file, identify domain and load the correct rule file:
  HTML        → RULES-html.md + RULES-seo.md + RULES-content.md (always all 3 for HTML)
  CSS         → RULES-css.md
  JS          → RULES-js.md
  Injector    → RULES-injector.md (announce affected sites before writing anything)
  Workflow    → RULES-workflow.md
  Deploy/CI   → RULES-deploy.md
  Security    → RULES-security.md (read alongside any domain when keys or auth is involved)
  SEO         → RULES-seo.md (always with HTML sessions)

## SECTION 4: HOW TO ADD A NEW RULE
1. Identify correct domain file in janishammer-central/.claude/rules/
2. Add rule at TOP with next R-[PREFIX]-[N] number
3. Include: // Justification: [what happened or was observed]
4. Bump version on domain file (X.Y+1)
5. Note in CC_CHAT_LOG: "New rule: R-[PREFIX-N] added to RULES-[domain].md"
Never add domain rules to RULES.md body.
No domain fits → create new file + add to RULES.md domain index table.

## SECTION 5: CC_CHAT_LOG FORMAT
Append at TOP of the correct log file(s). Max 10 lines per entry.

  ---
  ## [YYYY-MM-DD] — [PROMPT NAME]
  **Did:** [specific files created or changed — be precise]
  **Updated:** [domain rule files touched, with rule numbers added]
  **New files:** [list or NONE]
  **Pending Chat verify:** [what Chat must check before next session]
  **Flags:** [INJECTOR TOUCHED / SEO CHANGED / LARGE FILE / AIRTABLE KEY FOUND /
              SECURITY RISK / RETROFIT CANDIDATE / LOG GAP]
  ---

Two logs exist:
  janishammer-central/CC_CHAT_LOG.md  ← governance + multi-repo sessions
  [site-repo]/CC_CHAT_LOG.md          ← site-specific sessions
Write to governance log when: governance files change or session spans multiple repos.
Write to site log when: that site's source files change.
Write to BOTH when: session touches both.

## SECTION 6: SESSION CLOSING CHECKLIST
1. Write CC_CHAT_LOG (governance log, site log, or both — as applicable)
2. Archive prompt → janishammer-central/docs/prompts/
   Filename unchanged. Add header: ✅ COMPLETE — [date] — [one-line summary]
3. New rules → correct .claude/rules/ file, newest at top, version bumped
4. Update PROJECT_STATE.md, version bumped
5. Update KNOWLEDGE_MAP.md if new files created, version bumped
6. Version bump on every .md file changed
7. Commit all files → merge to main
Commit order: janishammer-central first, then site repos in any order.

## SECTION 7: WHAT CC DOES NOT DO
- Write CHAT_HANDOFF.md (Chat role only)
- Add domain rules to RULES.md body
- Touch injector without explicit prompt authorisation (R-4)
- Read all domain files every session — relevant one(s) only
- Read .env file contents
- Touch Ops-Dashboard repo
- Guess field names, API values, or business data — stop and flag if needed
