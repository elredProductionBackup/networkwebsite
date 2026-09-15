# theNetwork — Brand Identity & UI Styling Guide

> Drop this file into any project and instruct Claude to "follow this styling guide" to replicate the visual identity, component conventions, and design language of theNetwork website.

**Stack this guide assumes**: Next.js (App Router), Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js` needed), Framer Motion for animation, `lucide-react` for icons. No shadcn/ui, Radix, or other component library is used — every component is hand-built with Tailwind utility classes.

---

## 1. Brand Color

The brand's signature color is a deep brick red:

- **Brand red**: `#C01823` (used in logo, favicon, monogram)
- **Logo secondary gray**: `#67686B`

In implementation, the site uses Tailwind's stock `red-*` scale rather than the exact hex (a close but not pixel-perfect match to `red-600` `#dc2626`). **For a more accurate reproduction in a new project**, define the brand color explicitly:

```css
@theme inline {
  --color-brand: #C01823;
  --color-brand-dark: #a01420; /* hover state, ~15% darker */
}
```

Then use `bg-brand`, `text-brand`, `hover:bg-brand-dark` instead of `red-600`/`red-700` for exact brand fidelity. If exact fidelity doesn't matter, Tailwind's default `red-600`/`red-700`/`red-50`/`red-500` work fine and is what the original site actually uses.

### Full Color Role Table

| Role | Tailwind classes | Usage |
|---|---|---|
| Primary brand / CTA | `bg-red-600`, `hover:bg-red-700`, `text-red-600`, `text-red-500` | Buttons, links, active nav state, eyebrow labels, icon accents |
| Brand tint (soft bg) | `bg-red-50` (light), `bg-red-950/60` (dark sections) | Icon badge backgrounds |
| Ambient glow blobs | `bg-red-500/10` (light sections), `bg-red-600/20` (dark sections) | Decorative blurred atmosphere (see §5) |
| Headline ink | `text-black`, `text-white` (on dark sections) | H1/H2/H3 |
| Body copy | `text-neutral-500`, `text-neutral-600`, `text-neutral-400` (lighter, secondary) | Paragraphs |
| Borders/dividers | `border-neutral-200`, `border-neutral-300`, `border-neutral-100` (light), `border-neutral-800` (dark) | Cards, inputs, section dividers |
| Surfaces | `bg-white` (default), `bg-neutral-100` (subtle alt section), `bg-neutral-950` (the one inverted dark section + footer) | Section backgrounds |
| Overlay/scrim | `bg-black/40` | Mobile nav backdrop |

**Rules**:
- No gradients anywhere in the UI. Flat colors only. Depth comes from blurred glow blobs, not gradients.
- Red is a *signal* color — used sparingly for CTAs, active states, and eyebrow labels, never as a large background wash.
- One deliberately inverted near-black section (`bg-neutral-950 text-white`) breaks up the otherwise all-white flow, plus the footer. This is a fixed "dark section" pattern, not a toggleable dark mode.
- If a design needs multiple accent colors (e.g. numbered step indicators), it's fine to break from red: the original uses `bg-red-600`, `bg-blue-600`, `bg-green-600`, `bg-amber-500` for a 4-step "how it works" sequence — but this is the *only* place non-brand colors appear.

---

## 2. Typography

Single font family for everything — no separate heading/body fonts.

```jsx
// app/layout.jsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
```

```css
/* globals.css */
@theme inline {
  --font-sans: var(--font-poppins);
}
```

```jsx
<html className={`${poppins.variable} h-full antialiased`}>
  <body className="font-sans">
```

Weights used: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold).

### Type Scale (all default Tailwind sizes — no custom scale)

| Element | Classes |
|---|---|
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight` |
| Section H2 | `text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight` (or `font-extrabold`) |
| Card H3 | `text-base` (small cards) or `text-2xl sm:text-3xl font-bold` (feature cards) |
| Body copy | `text-sm` or `text-base leading-6`/`leading-7` |
| Eyebrow/label (recurring pattern) | `text-xs font-bold tracking-wider text-red-600 uppercase` — e.g. "HOW IT WORKS", "TRUST INFRASTRUCTURE" |
| Fine print | `text-[11px]` |

**Rule**: nearly every section opens with an uppercase red eyebrow label (`text-xs font-bold tracking-wider text-red-600`) above the H2. This is a strong, consistent recurring motif — replicate it.

---

## 3. Spacing & Layout

No custom spacing/container/breakpoint config — pure Tailwind defaults.

- **Container**: `mx-auto max-w-6xl` for most full-width sections. Narrower text blocks use `max-w-4xl`, `max-w-2xl`, `max-w-lg`, `max-w-md`, `max-w-sm`, `max-w-xs` as appropriate.
- **Section padding**: `px-6 py-20 sm:px-10 lg:px-16` (or `py-24` for hero). Sections often set a `min-h-[500px]` (or `min-h-[700px]` for tabbed content) to keep consistent vertical rhythm.
- **Grid gaps**: `gap-12`/`gap-16` for two-column layouts, `gap-4`/`gap-6`/`gap-10` for card grids.
- **Breakpoints**: only `sm:`, `md:`, `lg:` are used — no `xl:`/`2xl:`, no custom breakpoints.

### Border Radius Hierarchy (consistent, follow this exactly)

| Radius | Used for |
|---|---|
| `rounded-full` | Pills, badges, avatar/icon circles, toggle/tab buttons, scroll-to-top button, step-number circles |
| `rounded-2xl` | Large cards (feature cards, contact form, video cards) |
| `rounded-xl` | Secondary cards, app-store-style buttons, medium icon tiles |
| `rounded-lg` | Buttons, inputs, small icon badges |
| `rounded-md` | Small nav icon buttons |
| `rounded-[2.5rem]` / `rounded-[1.75rem]` | Device mockup bezel / screen (arbitrary values, device-frame only) |

---

## 4. Components

No shared component library — every element is hand-styled inline with a consistent recipe. Replicate these exact recipes:

### Buttons

```
Primary:    rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700
Secondary:  rounded-lg border border-neutral-300 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-100
Inverse:    rounded-xl bg-black px-5 py-3 text-white hover:bg-neutral-800
Pill toggle (active):   rounded-full bg-red-600 text-white
Pill toggle (inactive): rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200
```

Rule: buttons use `transition-colors` only — no scale/transform hover effects.

### Cards

No drop shadows by default. Recipe: `border border-neutral-200 bg-white rounded-xl p-6` (or `rounded-2xl p-8` for larger feature cards). Shadows are reserved for genuinely "elevated/floating" elements only (see §5), not regular content cards. On the one dark section, cards use `bg-white/5` (translucent white on near-black) instead of a border — no blur.

### Navbar

Fixed `h-16` bar, `bg-white`, logo left, `lucide-react` `Menu`/`X` icon toggling a slide-in mobile drawer (`translate-x-full` ↔ `translate-x-0`, `duration-300 ease-in-out`), full-screen `bg-black/40` scrim behind the drawer. Active nav link: `bg-red-50 text-red-600`.

### Hero Pattern

Two-column `grid lg:grid-cols-2`. Left: uppercase eyebrow pill → H1 (with a red-highlighted `<span>` on a key word) → paragraph → CTA buttons. Right: a device/product mockup or screenshot. Two large blurred red radial glows positioned in opposite corners, clipped by `overflow-hidden` on the section (see §5).

### Footer

The only other fully dark surface besides the one dark section: `bg-neutral-950 text-white`, link columns in `text-neutral-300 hover:text-white`, `border-t border-neutral-800` divider above the copyright bar, and a floating circular scroll-to-top button: `rounded-full bg-red-600 hover:bg-red-700` positioned `absolute bottom-6 right-6`.

### Device/Product Mockup (if showcasing a product)

A reusable frame component: thick bezel `border-[10px] border-black`, `rounded-[2.5rem]`, `shadow-2xl`, a notch (`absolute h-6 w-24 rounded-full bg-black`), small absolutely-positioned side buttons. Used repeatedly across sections to show product screenshots consistently — signals "this is a real product" rather than abstract illustration.

### Animation

A shared `FadeIn` wrapper around Framer Motion's `motion.div` is the site's signature scroll-reveal, applied to nearly every section/card:

```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
>
```

Stagger children with `delay={index * 0.1}`. Use this exact custom cubic-bezier — it reads as smooth/professional, not bouncy. For tab/carousel content, use `AnimatePresence` + `motion.div` crossfades directly (not via FadeIn), typically `duration: 0.3–0.4` with the same ease curve.

### Icons

`lucide-react` exclusively (add `react-icons` only for brand glyphs Lucide lacks, e.g. app store icons). Icons render at `strokeWidth={2}` (or `3` for small checkmarks), inside a colored rounded tile: `h-9 w-9 flex items-center justify-center rounded-lg bg-red-50`, icon itself `text-red-600`.

---

## 5. Shadows & Effects

- **No glassmorphism, no `backdrop-blur`, anywhere.**
- Shadows are used sparingly, only for genuinely elevated/floating UI: mobile nav drawer (`shadow-xl`), device mockups (`shadow-2xl`), floating cards/toasts (`shadow-lg`). A nice detail: the hero eyebrow badge uses a tinted shadow — `shadow-md shadow-red-200/50`.
- **Signature atmosphere effect** — soft blurred color blobs instead of gradients or shadows for depth:

```jsx
<div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
```

Use `bg-red-500/10` on light sections, `bg-red-600/20` on dark sections. Place at opposite corners, parent section needs `overflow-hidden`. Use this technique for hero sections and any section that needs visual depth — never gradients.

---

## 6. Dark Mode

No toggleable dark mode. There is one fixed dark section pattern (`bg-neutral-950 text-white`) used for the footer and one "inverted" content section for visual rhythm — treat this as a deliberate design choice, not a dark-mode system. Do not implement `dark:` variants or a theme toggle unless explicitly asked; it's not part of this design language.

---

## 7. Overall Design Personality

Describe this as: **clean, corporate-minimal B2B SaaS marketing site with a warm, confident red accent** — closer to modern fintech/professional-network product sites than "dark-tech" or playful/startup-y. When generating new sections or pages, aim for:

- Predominantly white/light backgrounds, black headlines, neutral-gray body copy — high contrast, airy, generous whitespace and section padding.
- One confident brand red used sparingly and consistently as the "signal" color (CTAs, eyebrow labels, active states, icon accents) — never as a large wash.
- Rhythm from a single inverted dark section + footer, not full dark mode.
- Real screenshots/mockups over abstract illustration when showcasing a product — reinforces trust and credibility.
- Soft blurred glow blobs for atmosphere/depth — no gradients, no glassmorphism, minimal shadows.
- Smooth scroll-reveal and crossfade animation via the custom ease curve `[0.21, 0.47, 0.32, 0.98]` — never bouncy/playful easing.
- Rounded corners throughout (pills, `xl`/`2xl` cards) to soften the corporate palette toward "professional but approachable."

---

## 8. Quick-Reference Cheat Sheet

```
Font:            Poppins (400/500/600/700/800), via next/font/google, --font-sans
Brand color:     #C01823 (or Tailwind red-600 #dc2626 as a close stand-in)
Container:       mx-auto max-w-6xl
Section padding: px-6 py-20 sm:px-10 lg:px-16
Card:            border border-neutral-200 bg-white rounded-xl p-6 (no shadow)
Button primary:  rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700
Eyebrow label:   text-xs font-bold tracking-wider text-red-600 uppercase
Glow blob:       absolute h-96 w-96 rounded-full bg-red-500/10 blur-3xl (overflow-hidden parent)
Reveal anim:     opacity 0→1, y 24→0, duration 0.6s, ease [0.21, 0.47, 0.32, 0.98]
Icons:           lucide-react, strokeWidth={2}, in bg-red-50 rounded-lg tile, text-red-600
Dark section:    bg-neutral-950 text-white (footer + one inverted section only)
No gradients. No glassmorphism/backdrop-blur. No shadow on default cards.
```
