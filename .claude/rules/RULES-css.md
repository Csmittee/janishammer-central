# RULES-css.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation — 3 starter rules from bootstrap scan
> Previous: NONE

---

## CSS Rules (newest at top)

**CSS-3: NO FRAMEWORK CSS — PERMANENT (2026-06-25):**
Do not introduce Bootstrap, Tailwind, or any CSS framework into any site repo.
Vanilla CSS only. If a utility is needed, write it as a named class.
// Justification: owner decision — no framework dependencies, vanilla stack only; confirmed by scan — no framework found in any repo

**CSS-2: CSS VARIABLE PRIORITY — PERMANENT (2026-06-25):**
If CSS custom properties (vars) exist in a file, all new colour/spacing values
must use existing vars — never hardcode new hex or px values.
Confirmed vars (set by injector-config.js per brand): --primary, --secondary, --accent.
// Justification: injector-config.js sets brand vars — hardcoded values override them silently

**CSS-1: CLASS NAME PRESERVATION — PERMANENT (2026-06-25):**
Preserve all existing CSS class names unless prompt explicitly authorises renaming.
Renaming classes silently breaks JS selectors and injector-applied styles.
Known injector class names that must never be renamed:
  navbar-fixed-wrapper, navbar, nav-container, nav-left, nav-center, nav-right,
  nav-menu, nav-link, nav-item, dropdown, dropdown-content, dropdown-item,
  language-selector, lang-option, hamburger, mobile-menu, mobile-menu-link,
  mobile-dropdown, footer, footer-container, footer-content, footer-brand,
  footer-links, footer-contact, footer-line, footer-bottom, jh-anti-flicker
// Justification: injector applies styles by class name — silent rename breaks injection across all sites
