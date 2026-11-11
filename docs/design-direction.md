# Design direction (one page)

Status: **Draft for approval (Phase 1)**

## Idea

**"The quiet room."** Most agency sites shout: gradients, counters, logo walls, stock teams high-fiving. Campaignly's site should feel like a private bank or a watchmaker's showroom. It is dark, still and precise, and the typography does the work. Confidence comes from restraint and specifics, not decoration. The visitor should feel they've reached the senior team, not a sales funnel.

## Palette and verified contrast (WCAG 2.2)

Contrast ratios below were calculated against #030303.

| Token | Hex | Role | On black | Rule |
|---|---|---|---|---|
| `ink` | #030303 | Page background (≈85% of surface area) | n/a | Default |
| `paper` | #FFFFFF | Primary text, occasional inverted section | **20.6:1** | Body and headings |
| `mute` | #A3A3A3 | Secondary text, captions, metadata | **8.2:1** | Passes AA at any size |
| `line` | #1F1F1F / #2A2A2A | Hairline rules, borders | n/a | Non-text, decorative |
| `gold` | #C9A84C | Accent: primary CTA fill, key numerals, focus ring, thin rules | **9.0:1** | Passes AA at any size on black. **Fails on white (2.3:1), so never use gold text on white sections.** On white, gold appears only as a non-text rule or behind black text. |
| `red` | #E8151B | Rare emphasis: one word or one mark per page at most | **4.47:1** | **Fails AA for normal text** (needs 4.5:1). Allowed only for large text (≥24px, or ≥18.7px bold, which needs 3:1) and for non-text marks. Where small red text is unavoidable (e.g. form error messages), use `red-text` #F2343A (**5.2:1**). |
| Black on gold button | #030303 on #C9A84C | Primary CTA | **9.0:1** | Passes |
| White on red | #FFFFFF on #E8151B | Not used for text by default | 4.6:1 | Passes narrowly; avoid |

**Focus ring:** 2px gold outline with a 2px offset (well over 3:1 against black), visible on every interactive element.

## Typography (2 families, self-hosted via `next/font`, `display: swap`)

- **Display: Fraunces** (variable serif with optical sizing). For H1, H2, and large numerals. Set tight (−1% to −2% tracking) at large sizes, light-to-regular weight. Gives the editorial, watch-catalogue tone without the cliché of Playfair.
- **Text and UI: Inter** (variable). For body, navigation, forms, tables. 17 to 18px body on mobile, line height 1.6, measure 60 to 72 characters.
- **Fallback-metric matching** (`adjustFontFallback`) so the font swap causes no layout shift (CLS target < 0.05).
- **Scale:** fluid `clamp()` from 360px to 1920px. H1 is 40px on mobile and 88px at 1920. A deliberate size contrast between H1 and body is the main design device.
- **Alternative if you prefer all-sans** (closer to Porsche): Inter Tight for display with Inter for text. Tell me at approval.

## Layout and components

- **12-column grid**, max content width 1280px (text blocks narrower), 16px side gutter at 360px rising to 64px at 1440px+. Generous vertical rhythm, with section padding of 96 to 160px on desktop.
- **Hairlines instead of cards.** Lists of services, industries and FAQs are separated by 1px rules, not boxes or shadows. No rounded "card soup".
- **Numbered method.** Diagnose › Position › Acquire › Convert › Retain › Scale is shown as a 01 to 06 ordered list with large Fraunces numerals and gold hairlines. It doubles as the brand's visual signature.
- **Tables are designed elements** (comparisons, "what's included / not included"), because they also serve AEO.
- **Proof blocks** (stats, case-study figures) render only from config. Each figure shows its time period in `mute` underneath. No counters spinning up from zero.
- **CTA pattern at every page end:** a full-width black band. The gold solid button reads "Apply to Partner", and a text link with an arrow reads "Free ad account review" (or WhatsApp, when configured).
- **Imagery:** none by default. Where visuals help, use real artefacts drawn in code: anonymised dashboard-style charts rendered as inline SVG from config data, simple diagrams of funnels and flows, and type-led OG images. No stock photos, no 3D blobs, no device mockups. If you later supply real photography (team, office), it goes in as pre-sized AVIF and WebP.
- **Logo:** I need your logo file (SVG preferred). Until then, the header uses a typographic wordmark ("Campaignly" in Fraunces), not a placeholder graphic.

## Motion

- Restraint: 200 to 400ms opacity and translate fades on section entry, a subtle underline grow on links, and a menu open and close. No parallax, no scroll-jacking, no autoplay video.
- Built with CSS and a ~1 KB IntersectionObserver helper. **No animation library.**
- `prefers-reduced-motion: reduce` disables all transforms; content is fully visible without JavaScript (motion is an enhancement only, so no hidden-until-JS content).

## Accessibility (WCAG 2.2 AA)

- A skip link as the first focusable element; landmarks (`header`, `nav`, `main`, `footer`); one H1 per page.
- Keyboard-operable menus (Escape to close, focus return). Target size ≥ 24×24px (2.5.8), 44px for primary buttons.
- Forms: visible labels, `aria-describedby` errors, an error summary on submit, no placeholder-as-label. The honeypot field is hidden from assistive technology as well as visually.
- Respect the system light or dark preference? **No.** The brand is dark-first by design. Contrast is checked for the single dark theme.

## Responsive checks

Each template will be reviewed at **360, 768, 1280 and 1920** widths in Phase 2. I'll share screenshots at each width for your review.

## Performance budget (supports the §12 targets)

- Home first-load JS < 120 KB gzip, aiming for ~90 KB. Interactive parts (menu, forms, consent banner) are small client components; everything else is server-rendered at build time.
- Two font files per family (subset Latin), with preload only for the display font used above the fold.
- No hero image. The LCP element is the H1 text, which makes a sub-2.0s LCP realistic.
