# RULES-security.md — janishammer-central
> Version 1.0 — 2026-06-25
> Changes: Initial creation (NEW DOMAIN) — 5 starter rules from bootstrap scan
> Previous: NONE

---

## Security Rules (newest at top)

**SEC-5: NO THIRD-PARTY SCRIPTS WITHOUT REVIEW — PERMANENT (2026-06-25):**
Do not add new third-party script tags (CDN, analytics, widgets) without owner confirmation.
Each new third-party script is a supply chain risk and a performance cost.
Exception: scripts already present in repos at time of this scan.
Current approved third-party scripts (from scan):
  - Google Fonts (fonts.googleapis.com, fonts.gstatic.com)
  - Font Awesome 6.4.0 (cdnjs.cloudflare.com)
  - Google Analytics (googletagmanager.com)
  - Tawk.to (embed.tawk.to — flow and daje brands only)
// Justification: unreviewed third-party scripts can exfiltrate data or break pages

**SEC-4: CLOUDINARY UNSIGNED ONLY FOR PUBLIC — PERMANENT (2026-06-25):**
Public-facing pages may only use Cloudinary unsigned upload presets if uploads are needed.
Cloudinary API secret must never appear in client-side JS or HTML.
Image delivery URLs (res.cloudinary.com) are safe — they are public delivery URLs.
// Justification: Cloudinary API secret gives full account access — must stay server-side

**SEC-3: AIRTABLE TOKEN SCOPE — PERMANENT (2026-06-25):**
Airtable Personal Access Token must have minimum required scopes only.
Token must only appear in GitHub Secrets (AIRTABLE_TOKEN).
If token appears in any client-side file: flag CRITICAL, treat as compromised.
Owner must rotate the token immediately if exposed.
// Justification: Airtable token gives write access to all tables — exposure is high risk

**SEC-2: ENV FILES — READ EXISTENCE ONLY — PERMANENT (2026-06-25):**
If a .env file exists in any repo, note its existence in the scan.
Never read its contents. Never log any value from it.
// Justification: .env contents must never appear in CC context or logs

**SEC-1: NO API KEYS IN SOURCE — PERMANENT (2026-06-25):**
API keys, tokens, and secrets must never appear in any file committed to any repo.
This includes: JS files, HTML files, Python scripts, YAML workflows, .md files,
comments, console.log statements, or hardcoded strings.
If found during any session: flag CRITICAL in CC_CHAT_LOG immediately.
Do not log the key value — log only: [repo] — [file] — [CRITICAL: key exposed]
Bootstrap scan result: No keys found. All credentials correctly in GitHub Secrets.
// Justification: all repos are public — any committed key is immediately compromised
