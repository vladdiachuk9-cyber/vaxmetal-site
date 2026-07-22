# TODO_VERIFY — Owner Sign-Off Inventory

Everything below is a **placeholder or unverified fact**, not fabricated content.
No certifications, reviews, client logos, or headcounts were invented — where a
real fact wasn't available, the field is empty or clearly marked, never guessed.
Search the codebase for `TODO_VERIFY` to find each exact spot.

## 1. Brand identity

Rebranded to **VAXMetal** per `../brandbook.html` (Brand Book v1.1): navy /
paper / steel palette with a pine-green accent, Space Grotesk + Inter + Space
Mono type system, and the "X" axis-intersection mark. Colors and fonts are
wired end-to-end (`src/app/globals.css` brand tokens, `[locale]/layout.tsx`
font loaders, `src/components/layout/logo-mark.tsx` + `brand-link.tsx`).

- **Company name**: `VAXMetal` — `src/lib/site-config.ts`
- **Legal entity name**: `VAXMetal Manufacturing LLC` (placeholder pending real registration) — same file
- **Domain**: `vaxmetal.com` — **registered on GoDaddy, confirmed real.** Still
  using the code default (`https://www.vaxmetal.com`) via `NEXT_PUBLIC_SITE_URL`
  in `site-config.ts`; set that env var explicitly on the hosting provider
  (Vercel) once the domain is attached, so it's not silently relying on the
  fallback. See "Deployment" below for the Vercel + GoDaddy DNS steps.

Changing the brand name means editing exactly one file (`site-config.ts`) —
`messages/en.json` / `messages/uk.json` don't hardcode the brand name, they
read it from `siteConfig` at render time.

## 1b. Price calculator calibration

`src/lib/estimator.ts` now uses a process-based cost model (laser: per metre
+ pierce points; CNC: per machine-hour; welding: per cm of seam or per spot;
powder coating: per m²; bending: per bend), supplied by the owner with
public-market ballpark rates for Ukraine (UAH, VAT-inclusive, tagged
`CALIBRATE_ME` throughout the file). These are **closer to real** than an
earlier placeholder version, but still not the company's actual cost
structure. Before relying on the output for real quoting, replace the values
in `RATES_UAH` and `EUR_UAH` with:
- Actual per-kg purchase price for steel / stainless / aluminum / brass stock
- Actual machine-hour rates for laser, turning, milling, welding
- Actual target margin (`marginPct`) and rush surcharge (`rushSurchargePct`)
- Current EUR/UAH rate (`EUR_UAH`) — or wire up a live FX rate instead of a static constant

Only change values in `RATES_UAH` / `EUR_UAH` — the calculation logic itself
shouldn't need to change to fix a price.

## 2. Contact details

| Field | Env var | Current value |
|---|---|---|
| Sales email | `NEXT_PUBLIC_SALES_EMAIL` | `sales@vaxmetal.com` — **confirmed real by owner** |
| Phone | `NEXT_PUBLIC_PHONE` | *(empty)* |
| WhatsApp link | `NEXT_PUBLIC_WHATSAPP_URL` | *(empty)* |
| Telegram link | `NEXT_PUBLIC_TELEGRAM_URL` | *(empty)* |
| LinkedIn | `NEXT_PUBLIC_LINKEDIN_URL` | *(empty)* |
| RFQ notification "from" address | `RFQ_FROM_EMAIL` | `rfq@notifications.vaxmetal.com` |

Set these in `.env.local` (or hosting provider's env settings) — no code changes needed.

## 3. Certification status

ISO 9001 / ISO 3834 are stated as **"in progress"** everywhere they're
mentioned (trust bar, FAQ, capability statement PDF) — never claimed as
already held. Update once certificates are issued:
- `messages/en.json` / `messages/uk.json` — `trustBar.certNote`, `faq.items[1].answer`
- `src/lib/pdf/capability-statement.ts` — same note, baked into the generated PDF

## 4. Integrations not yet connected (all safely no-op until configured)

| Integration | Env var(s) | Current behavior without it |
|---|---|---|
| Google Search Console | `GOOGLE_SITE_VERIFICATION` | verification meta tag omitted |
| Google Analytics 4 | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | script never loads |
| Microsoft Clarity | `NEXT_PUBLIC_CLARITY_ID` | script never loads |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | script never loads |
| LinkedIn Insight | `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` | script never loads |
| Calendly | `NEXT_PUBLIC_CALENDLY_URL` | "Book a Call" shows an honest fallback (email link) instead of a broken embed |
| CRM (HubSpot/Pipedrive/Bitrix) | `CRM_PROVIDER` + provider-specific keys (see `src/lib/crm/adapter.ts`) | lead is still emailed; CRM push is skipped |
| RFQ file storage (S3) | `RFQ_S3_BUCKET`, `RFQ_S3_REGION`, `RFQ_S3_ACCESS_KEY_ID`, `RFQ_S3_SECRET_ACCESS_KEY` | falls back to local disk (`uploads/rfq/`, gitignored) — fine for a single server, **not** durable for a real multi-instance deployment |
| RFQ email delivery (Resend) | `RESEND_API_KEY` | falls back to a server console log — RFQ data isn't lost, but no one gets emailed until this is set |

All of the above are also gated correctly for GDPR: analytics scripts only
load after the visitor accepts the cookie banner **and** the env var is set —
never one without the other.

## 5. Security follow-up

- **Virus scanning**: wired up in `src/lib/rfq/antivirus.ts` and called from
  `src/app/api/rfq/route.ts` right before the file is persisted. Off by
  default (safe no-op) until `AV_PROVIDER` is set — same pattern as the CRM
  adapter. Two providers supported, pick one:
  - `AV_PROVIDER=clamav` + `CLAMAV_HOST` (+ optional `CLAMAV_PORT`, default
    `3310`) — talks directly to a clamd daemon over TCP (INSTREAM protocol).
    Needs clamd reachable from wherever the app runs — fine for a VPS/Docker
    deployment, **not usable on serverless hosting** (no persistent daemon).
  - `AV_PROVIDER=cloudmersive` + `CLOUDMERSIVE_API_KEY` — calls the
    Cloudmersive Virus Scan API over HTTPS. Works anywhere, including
    serverless, but sends file contents to a third party — confirm that's
    acceptable for the kind of drawings customers will upload.
  - Either way, this **fails closed**: if `AV_PROVIDER` is set but the
    scanner is unreachable/misconfigured, or a scan finds something, the
    upload is rejected (400) rather than silently stored unscanned.
  - Pick a provider and set the env var(s) above before accepting uploads
    from the public internet in production.

## 6. Content still pending

- **Shop-floor photography**: all 9 homepage gallery tiles now use real,
  properly-licensed stock photos (Pexels License — free commercial use, no
  attribution required), sourced per `equipment.md`:
  `web/public/images/equipment/` — CNC turning, CNC milling, laser cutting,
  press brake, TIG welding, MIG/MAG welding, powder coating, assembly/QC
  (digital micrometer inspection), export packaging. Every
  `/factory-tour` station panel still uses labeled placeholders (no photo
  sourced yet). Per Pexels/Unsplash licensing, these stock shots must not
  be captioned as "our factory" — replace with real shop photography
  before final launch regardless.
  - **Caught and fixed one mismatch**: `equipment.md`'s CNC Turning entry
    linked to a photo whose own URL slug read "cnc-milling-machine" — a
    milling shot mislabeled as turning. Substituted a genuine lathe/turning
    photo instead rather than publish an inaccurate machine photo.
  - **Skipped one candidate for a visible brand logo**: the first laser-
    cutting candidate (Pexels #29988985) showed a readable "Bodor" logo on
    the machine; used #29988988 instead (same shot, no logo), matching
    `equipment.md`'s own instruction to avoid visible brand marks.
  - Pexels' search/page routes (not their image CDN) blocked direct
    scraping mid-session; the remaining photos were found via a different
    fetch path rather than by bypassing that block.
- **Industry track photos**: all 5 `/industries` tracks now have an
  illustrative stock photo too (`web/public/images/industries/`), shown on
  the homepage tracks section, the `/industries` hub, and each
  `/industries/[industry]` detail page: trailer hitch/tool-box hardware,
  a deployed telescopic mast, a tracked UGV chassis, an emergency vehicle's
  open equipment compartment, and a metal-frame/wood industrial cart. Same
  Pexels-License terms apply — swap for real product photos once available.
- **Case studies**: intentionally not built. The brief warns against
  fabricating trust content, and a "case study" implies a specific real
  project (client, dimensions, photos) — safer to ship this once real
  project data exists than to publish a templated placeholder that reads
  as fabricated.
- **Blog backlog**: `src/content/blog/title-backlog.ts` holds 38 planned
  article titles (mapped to cluster + target keyword + intent) that are
  **not** routed as pages — only the 8 fully-written flagship articles are
  live. Move an entry out of the backlog and into
  `src/content/blog/articles/{en,uk}/*.mdx` once it's actually written.
- **Capability Statement PDF is English-only by design**: pdf-lib's
  standard fonts can't render Cyrillic without embedding a custom TTF via
  fontkit, which isn't wired up. Rather than ship garbled Ukrainian text,
  the same EN PDF is offered on both locales, labeled "PDF, EN" in the UI.
- **Native EU location pages**: only Germany and Poland are built (the two
  with strong sourced numbers from the competitor analysis). Netherlands,
  Sweden, Denmark are named in copy as Wave-1 markets but don't have
  dedicated `/locations/[country]` pages yet — add them once equivalent
  country-specific facts are sourced, following the same pattern as
  `src/content/locations-eu.ts`.

## 7. Legal

- `/privacy` is a **draft**, explicitly `noindex`'d, and marked "pending
  legal review" in its own body copy. It describes current data handling
  honestly (RFQ form data, file uploads, consent-gated analytics) but is
  not final legal copy — have it reviewed before removing the noindex/draft framing.

## 8. Known architecture trade-offs (not bugs, but worth knowing)

- **Top-level route segments aren't localized**: `/services`, `/materials`,
  `/industries`, `/locations`, `/blog` are the same word in both `en` and
  `uk` URLs — only the leaf slug (the specific service/material/article) is
  translated into native Ukrainian (e.g. `/uk/services/lazerne-rizannya`).
  Fully localizing the parent segments too (e.g. `/uk/poslugy/...`) is
  possible via next-intl's `pathnames` config but wasn't done, to keep
  scope bounded this round.
- **Rate limiting is in-memory**: `src/lib/rate-limit.ts` resets on server
  restart and doesn't share state across multiple server instances. Fine
  for a single-server deployment; swap for Upstash Redis (or similar)
  before scaling horizontally.

## 9. Deployment — connecting vaxmetal.com (GoDaddy) to Vercel

Domain is bought on GoDaddy; hosting choice is Vercel. Steps:

1. **Import the project into Vercel** — `vercel.com/new`, point at this
   repo (`web/` as the project root if the repo root is `метал/`), framework
   preset auto-detects Next.js. First deploy will work on the
   `*.vercel.app` URL before any DNS changes.
2. **Set environment variables** in the Vercel project settings (Production,
   and Preview if wanted) — at minimum:
   - `NEXT_PUBLIC_SITE_URL=https://www.vaxmetal.com`
   - Everything else listed in section 2 (contact) and section 4
     (integrations) that's ready to go live.
3. **Add the domain in Vercel** — Project → Settings → Domains → add
   `vaxmetal.com` and `www.vaxmetal.com`. Vercel will show the exact DNS
   records it needs (this can be an `A`/`ALIAS` record for the apex domain
   or a `CNAME`, depending on what Vercel assigns at the time — follow what
   its dashboard displays rather than a hardcoded IP, since Vercel's anycast
   addresses can change).
4. **Add those records in GoDaddy** — GoDaddy account → My Products → DNS →
   Manage Zones for `vaxmetal.com`. Typically:
   - Apex (`@`): an `A` record pointing at Vercel's IP shown in step 3, or
     GoDaddy's "Forward to www" if Vercel prefers the `CNAME` to live on
     `www` and apex to forward.
   - `www`: a `CNAME` pointing at `cname.vercel-dns.com` (exact value shown
     by Vercel).
   - **Remove/replace GoDaddy's default parked-domain `A`/`CNAME` records**
     first — a leftover parking record is the most common reason a domain
     "doesn't connect."
5. **Wait for propagation** (usually minutes, can take up to ~24h) — Vercel's
   Domains tab shows a ✅ once it sees the record and issues the TLS
   certificate automatically. No manual certificate work needed.
6. **Decide the canonical host** — pick `https://www.vaxmetal.com` or
   `https://vaxmetal.com` as canonical and redirect the other (Vercel's
   domain settings have a toggle for this). Keep it consistent with
   `NEXT_PUBLIC_SITE_URL` above, since that value drives canonical URLs,
   `sitemap.xml`, `robots.ts`, and Open Graph tags site-wide.
