# RULES-html.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 5 starter rules from bootstrap scan
> Previous: NONE

---

## HTML Rules (newest at top)

**HTML-5: INJECTOR SCRIPTS FIRST — PERMANENT (2026-06-25):**
Every HTML page loads injector via `<script src="https://assets.janishammer.com/js/injector-config.js">` then core, before any other script.
Config MUST load before core (core reads window.BRANDS from config).
Anti-flicker style (`<style id="jh-anti-flicker">body { opacity: 0; }</style>`) must be present in `<head>` before injector script tags.
// Justification: scan confirmed anti-flicker + sync load order is the established pattern across all brand sites

**HTML-4: BILINGUAL MIRROR — PERMANENT (2026-06-25) [i-flexthailand.com + janishammer-home only]:**
Every English HTML page must have a Thai mirror at /th/[same-filename].
Canonical, OG, and hreflang must match the page language exactly.
Never create an EN page without planning the TH mirror in the same session.
// Justification: i-flexthailand.com and janishammer-home are bilingual — EN/TH parity is non-negotiable

**HTML-3: PUBLIC FOLDER STANDARD — PERMANENT (2026-06-25):**
All HTML files must live under /public/ in every repo (target standard — not yet enforced).
Files at repo root or in non-standard folders = structural debt. Flag in CC_CHAT_LOG.
Do not move files without a dedicated restructure session authorised by owner.
// Justification: scan found ALL repos have HTML at root — universal debt, not yet resolved

**HTML-2: HEAD BLOCK PROTECTION — PERMANENT (2026-06-25):**
Preserve the entire `<head>` block during any refactor unless prompt explicitly
names head elements as targets. Never remove meta, link, or script tags silently.
// Justification: head contains SEO, OG, canonical — silent removal breaks indexing

**HTML-1: FILE SIZE LIMIT — PERMANENT (2026-06-25):**
Flag any HTML file over 800 lines before editing. Propose split plan to Chat.
Do not proceed with edits until owner confirms split approach.
Active flags: daje-queencatcher/index.html (1184L), janis-flow/index.html (980L)
// Justification: large HTML files hide SEO-critical head blocks; two files already over limit at bootstrap
