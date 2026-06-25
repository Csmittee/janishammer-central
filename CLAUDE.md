# CLAUDE.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — governance bootstrap
> Previous: NONE

Project: Janishammer Web Portfolio — Governance & Injector Central
Owner: Chairit Smittee (Csmittee) — one-person, GitHub browser only, no local terminal

Purpose: Single source of truth for all rules, standards, injector library,
and system map across all 5 site repos. Permanent — always synced to Claude project.

Mandatory reads every CC session (in order):
  1. RULES.md
  2. .claude/rules/RULES-[domain].md (relevant file only)
  3. CC_SKILL.md
  4. CC_CHAT_LOG.md (last 3 entries only)
  Read this repo before opening any site repo.

Key files:
  RULES.md           — 8 universals + domain index (never grows)
  CC_SKILL.md        — CC operating manual and log format
  CC_CHAT_LOG.md     — governance session log (newest at top)
  KNOWLEDGE_MAP.md   — full system map (all 6 repos)
  WEB_STANDARD.md    — design decisions, MUST/SHOULD/NEVER (grows over time)
  RETROFIT_QUEUE.md  — backport improvement tracker
  .claude/rules/     — 9 domain rule files
  js/                — injector library — NEVER touch without explicit R-4 authorisation

Site repos:
  i-flexthailand.com | janishammer-home | daje-queencatcher | jade-coffee | janis-flow

Critical constraints:
  1. This repo owns all governance. Site repos carry seed CLAUDE.md only.
  2. js/ folder is live production code — injector protection rules always apply.
  3. WEB_STANDARD.md and RETROFIT_QUEUE.md grow over time — never delete entries.
  4. Never write site-specific source code in this repo.
