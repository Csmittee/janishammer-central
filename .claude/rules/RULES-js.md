# RULES-js.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 4 starter rules from bootstrap scan
> Previous: NONE

---

## JavaScript Rules (newest at top)

**JS-4: CHANGED FUNCTION COMMENT — PERMANENT (2026-06-25):**
Add one-line comment at top of every function modified in a session:
// Changed: [reason] [date]
// Justification: CC sessions have no memory — comments are the audit trail

**JS-3: NO FRAMEWORK JS — PERMANENT (2026-06-25):**
Do not introduce React, Vue, Alpine, or any JS framework into any site repo.
Vanilla JS only. Owner decision — locked.
// Justification: no dependency risk; scan confirmed zero framework usage in any repo

**JS-2: NO CLIENT-SIDE AIRTABLE CALLS — PERMANENT (2026-06-25):**
Airtable API calls must never appear in browser-executed JS or HTML files.
All Airtable fetching happens in Python scripts (GitHub Actions — build step only).
Exception: owner-authenticated dashboard only — never on public pages.
// Justification: scan confirmed all Airtable calls are Python-only — no client-side exposure found; this pattern must be maintained

**JS-1: NO INJECTOR REDECLARATION — PERMANENT (2026-06-25):**
If a function is provided by injector-core.js or injector-config.js,
do not declare it again in any site JS file. Silent shadowing is hard to debug.
Read RULES-injector.md and check injector source before declaring any function.
Known injector-provided globals: window.BRANDS, window.CURRENT_BRAND,
buildNavbar(), buildFooter(), getCurrentLang(), setupLanguageSwitcher(),
loadAssets(), initMobileMenu(), setFavicon(), revealBody()
// Justification: duplicate declarations shadow injector versions silently
