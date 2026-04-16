# BRAND.md — Annotated Edition

This is the visual design system module. It only loads when the session involves producing visual output — dashboards, slides, reports, web UIs. For everything else, it doesn't exist.

The important annotations are at the top. The palette specifics are shown for completeness but the design *decisions* are what matter.

> **Module trigger:** Load when the task produces anything visual. Skip for text, SQL, code review, research.

---

# BRAND.md — Dobbles.AI Visual Design System

Apply to visual output: dashboards, internal reports, Dobbles.AI-branded materials, web apps, the hub platform, intelligence briefings UI.

**Client-deliverable carve-out.** For client-facing materials, match the client's brand or use light mode where appropriate. Dark mode is the Dobbles.AI default, not a universal mandate. When in doubt, ask.

> **Why this is here:** The original brand file said "apply to ALL visual output — no exceptions." That would have fought me every time I built a Gamma deck for a client whose brand didn't match. The carve-out turns a rigid rule into a defensible default. Lesson: absolute rules in a doctrine are usually hiding a bug. If you find yourself writing "always" or "never," stop and ask what the exception is — because there's almost always one, and it's better to name it than to discover it in production.

## Colors

### Primary palette

| Role | Name | Hex |
|------|------|-----|
| Accent / CTA | Coral Red | `#DB5461` |
| Background Dark | Near Black | `#1D1D1D` |
| Brand Blue | Steel Blue | `#225A8E` |
| Deep Navy | Navy | `#060A57` |

### Secondary palette

| Role | Name | Hex |
|------|------|-----|
| Success / Positive | Teal Green | `#00B98E` |
| Highlight | Sky Blue | `#85E4FD` |
| Interactive | Bright Blue | `#3273DB` |
| Background Light | Off White | `#F7FBFE` |

### Usage rules
- Dark mode default for Dobbles.AI materials. Primary backgrounds `#1D1D1D` or `#060A57`.
- Coral red for primary CTAs, alerts, key metrics that demand attention.
- Teal for positive trends, success states, growth indicators.
- Off white for body text on dark backgrounds. Never pure `#FFFFFF`.
- Never use generic Bootstrap or Material blue.

> **Why this is here:** The specifics don't matter for you. The *pattern* does: every color has a semantic role, not just an aesthetic one. "Coral for attention, teal for growth" is a rule the model can actually apply. A palette without semantic assignments is a palette the model will misuse.

## Typography

| Use | Font | Weight |
|-----|------|--------|
| Headings / Labels | Montserrat | Bold (700) |
| Body / Data | Montserrat | Regular (400) |

Headings tracked slightly wide (`letter-spacing: 0.05em`). Data values right-aligned. No serifs.

## Charts & Data Viz

- Dark background (`#1D1D1D` or `#060A57`)
- Grid lines: `rgba(255,255,255,0.08)`
- Primary series: teal or sky blue
- Secondary series: coral or bright blue
- **No 3D charts. No pie charts** unless the audience demands it. Prefer bar, line, scatter.

> **Why this is here:** The "no 3D, no pie" rule is doing real work. Without it, the model sometimes defaults to visualization choices that are legible in isolation but look amateur in an executive context. Explicit bans are easier to enforce than abstract taste instructions.

## Components

**Buttons.** Primary: coral bg, off-white text. Secondary: transparent, coral border. Hover 10% lighter, 200ms transition.

**KPI Cards.** Dark bg. Metric 32–48px bold. Label 12px all-caps in sky blue. Trend green for positive, coral for negative.

## CSS Quick-Start

```css
:root {
  --color-bg:     #1D1D1D;
  --color-red:    #DB5461;
  --color-teal:   #00B98E;
  --color-text:   #F7FBFE;
  --font-main:    'Montserrat', 'Segoe UI', sans-serif;
}
```

> **Why this is here:** A CSS variable block at the bottom is a gift to the model. Instead of making it hunt through prose to find the right hex value, it can reference a var name. Tiny detail, real effect on generated code quality.

---

**Takeaway:** Your brand module should do three things. Assign semantic roles to colors so the model knows *when* to use which. Name explicit bans (no 3D, no pure white) because they're easier to enforce than taste. Include a machine-readable quick-start so the model can reference rather than recall.
