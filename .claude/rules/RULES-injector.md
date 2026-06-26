# RULES-injector.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 4 starter rules from bootstrap scan
> Previous: NONE

---

## Injector Rules (newest at top)

**INJ-4: EXPLICIT AUTHORISATION REQUIRED — PERMANENT (2026-06-25):**
No injector file (injector-config.js, injector-core.js) may be modified without
the prompt explicitly naming it as a target.
If a session prompt does not name the injector file — do not touch it.
// Justification: injector is highest-risk file in the system — guard strictly

**INJ-3: VERSION LOCK — PERMANENT (2026-06-25):**
When injector-versions.js is created, it will control which version of config and
core each site loads. After any injector change, update injector-versions.js version numbers.
Until injector-versions.js exists: note the missing version management in CC_CHAT_LOG.
// Justification: current state — most sites load injector directly without version pinning

**INJ-2: FULL REGRESSION REQUIRED — PERMANENT (2026-06-25):**
After any injector change, owner must QA all 5 sites visually before merge.
CC notes "Regression QA required — all 5 sites" in CC_CHAT_LOG.
Do not merge injector PR until owner confirms QA complete.
Sites affected by central injector: janishammer-home, daje-queencatcher, jade-coffee, janis-flow
Note: i-flexthailand.com uses standalone local injector — NOT affected by central injector changes.
// Justification: one broken injector change breaks all 4 brand sites simultaneously

**INJ-1: ANNOUNCE BEFORE TOUCHING — PERMANENT (2026-06-25):**
Any session modifying janishammer-central/js/ must state at start:
"INJECTOR CHANGE — affects: janishammer-home, daje-queencatcher, jade-coffee, janis-flow"
Write this in CC_CHAT_LOG Flags field.
Note: i-flexthailand.com has its own standalone injector (js/iflex-config.js, js/iflex-core.js)
and is NOT affected by changes to janishammer-central/js/.
// Justification: injector change with no announcement = untracked blast radius

---

## Injector File Reference (confirmed from bootstrap scan)

injector-config.js (v2.0 — 734 lines):
  - Sets window.BRANDS (all brand configs — flow/jade/daje/iflex/janishammer)
  - Sets window.CURRENT_BRAND (auto-detected from hostname)
  - Injects `<style id="janishammer-styles-v2.2">` with all shared CSS

injector-core.js (v2.2 — 411 lines):
  - Reads window.BRANDS — MUST load after config
  - Builds and injects navbar (correct language at render time)
  - Builds and injects footer
  - Handles language switching (URL path-based, localStorage for persistence)
  - Loads Google Fonts, Font Awesome 6.4
  - Loads Tawk.to (flow and daje brands only)
  - Initialises GA (placeholder ID G-XXXXXXXXXX — not real)
  - Manages anti-flicker: revealBody() removes jh-anti-flicker style

Load pattern (confirmed from scan):
  `<style id="jh-anti-flicker">body { opacity: 0; }</style>`   ← in HTML head
  `<script src="https://assets.janishammer.com/js/injector-config.js"></script>`
  `<script src="https://assets.janishammer.com/js/injector-core.js"></script>`
