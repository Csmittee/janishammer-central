# RULES.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 8 universal rules + domain index
> Previous: NONE

---

## Universal Rules (body never grows beyond 8)

**R-1: DOCUMENT VERSIONING**
Every .md file: Version X.Y — YYYY-MM-DD / Changes / Previous.
X.Y+1 = detail change. X+1.0 = new section or structure change.
Whoever last edited applies the bump. No commit without bump if content changed.

**R-2: CC_CHAT_LOG PROTOCOL**
CC appends one entry at TOP of CC_CHAT_LOG after every session. Max 10 lines.
Governance log (janishammer-central): when governance files change or multi-repo session.
Site log: when that site's source files change.
Write to BOTH when session touches governance AND a site.
Format in CC_SKILL.md. Newest at top. Never delete.

**R-3: COMPLETE FILES ONLY**
CC writes complete replacement files. Never diffs, patches, or partial edits.

**R-4: INJECTOR PROTECTION**
No file in janishammer-central/js/ modified without explicit prompt authorisation.
Any injector session: read RULES-injector.md first.
Announce at session start: "INJECTOR CHANGE — affects: [all 5 sites]"

**R-5: SEO AND SECURITY FIELDS PROTECTED**
meta description, og:title, og:description, og:image, og:url, canonical, schema.org
never removed or altered unless prompt explicitly names them as targets.
API keys, tokens, secrets never in source files — flag CRITICAL if found.
Read RULES-seo.md and RULES-security.md before any HTML session.

**R-6: FILE SIZE LIMIT**
HTML/JS/CSS files over 800 lines: CC flags in CC_CHAT_LOG immediately.
Chat proposes split plan. Owner confirms. CC executes in dedicated session.

**R-7: NEW RULE ROUTING**
New rules go directly to correct .claude/rules/RULES-[domain].md.
Never add domain rules to RULES.md body.
New domain = new file + update index table in RULES.md.

**R-8: GOVERNANCE FIRST**
Before touching any site repo, CC reads janishammer-central:
CLAUDE.md → RULES.md → CC_SKILL.md → relevant domain file → CC_CHAT_LOG (last 3).
Stop and flag if CC_CHAT_LOG is unreadable or missing.

---

## Domain Rule Index

| Task domain                     | Read this file                            |
|---------------------------------|-------------------------------------------|
| HTML structure, layout, folders | .claude/rules/RULES-html.md               |
| CSS, styling, variables         | .claude/rules/RULES-css.md                |
| JavaScript, modules, events     | .claude/rules/RULES-js.md                 |
| Central injector (js/ folder)   | .claude/rules/RULES-injector.md           |
| Session, workflow, prompts      | .claude/rules/RULES-workflow.md           |
| Content, copy, OG tags          | .claude/rules/RULES-content.md            |
| Hosting, deploy, CI/CD          | .claude/rules/RULES-deploy.md             |
| Security, keys, exposure        | .claude/rules/RULES-security.md           |
| SEO, schema, canonical, OG      | .claude/rules/RULES-seo.md               |
