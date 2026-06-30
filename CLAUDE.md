# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a greenfield cinematic marketing website for **Adenium Gardens Private Limited** — a Mumbai-based landscaping, horticulture, and arboriculture company. The signature UX mechanic is a scroll-scrubbed background video: as the user scrolls, `video.currentTime` advances in sync, and content chapters reveal themselves like a film.

Read `goal.md` for business context and `spec.md` for the full technical specification before starting any implementation work.

## Commands

```bash
npm run dev          # start Next.js dev server
npm run build        # production build
npm run lint         # ESLint
npx tsc --noEmit     # type-check without building
```

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js App Router, TypeScript |
| Styling | Tailwind CSS |
| Scroll engine | GSAP + ScrollTrigger |
| Smooth scroll | Lenis (optional wrapper under GSAP) |
| Parallax/depth | CSS 3D transforms + GSAP (Three.js only if needed for particles) |
| Icons | lucide-react |
| Images | `next/image` |
| Typography | Fraunces (headings) + Inter (body) |
| Deployment | Vercel |

## Architecture

### Key Files

- **`lib/content.ts`** — all site copy as exported constants; never inline text in components
- **`lib/assets.ts`** — all asset paths and placeholder locations in one place (easy client swap)
- **`app/page.tsx`** — single-page assembly; imports and orders all section components
- **`app/components/CinematicHero.tsx`** — the most critical component; owns the GSAP-pinned scroll-scrubbed video and all chapter reveal animations

### Page / Section Order

1. `Header` — sticky, transparent over video → solid background on scroll past hero
2. `CinematicHero` — GSAP-pinned full-bleed video, scrubbed via `video.currentTime = video.duration * scrollProgress`; 4 content chapters:
   - 0–10 %: logo + tagline fade in
   - 10–30 %: About Us card slides in
   - 30–60 %: Services names/icons appear one at a time
   - 60–80 %: Founder credibility block (Dr. Vaishali Pawaskar)
   - 80–100 %: transition out of pinned region into normal scroll
3. `Services` — 8 cards with CSS tilt-on-hover (`ServiceCard`)
4. `Portfolio` — placeholder gallery tiles
5. `VideoShowreel` — click-to-load lazy YouTube embed; ID stored as `YOUTUBE_VIDEO_ID_PLACEHOLDER`
6. `OurClients` — `client.png` displayed as auto-scrolling marquee strip (pause on hover)
7. `Testimonials` — two testimonials (Godrej Infotech, Fulcrum Worldwide)
8. `Contact` — UI-only form with client-side validation; mark with `// TODO: wire up form submission`
9. `Footer`

### Asset Locations

Source files (outside repo, copy into public/ before building):
- `D:\UPWORK\Github_project\gardenweb\garden.mp4` → `/public/video/garden.mp4`
- `D:\UPWORK\Github_project\gardenweb\logo1.png` → `/public/images/logo1.png`
- `D:\UPWORK\Github_project\gardenweb\client.png` → `/public/images/client.png`

Additional assets to produce:
- `/public/video/garden-web.mp4` — compressed H.264 web version, target < 15 MB
- `/public/video/garden-poster.jpg` — first-frame poster for instant paint
- `/public/images/placeholders/service-{1-8}.jpg`, `founder.jpg`, `project-{1-n}.jpg`

### Brand Palette

```
#1F3D2B  deep forest green (primary)
#C8A24A  warm gold (accent)
#F7F5F0  cream (non-video section backgrounds)
#16201A  near-black (body text)
```

### Mobile & Accessibility Rules

- **Mobile:** replace scroll-scrubbing with a single autoplay/looping muted hero video; use simpler fade-in animations for the rest of the page. Detect via viewport width.
- **`prefers-reduced-motion`:** show poster image + normal autoplaying muted loop; skip all scroll-scrubbing and GSAP reveal animations.
- All interactive elements must be keyboard-accessible.
- Background video is muted and decorative — no captions required for it.

## Explicit Exclusions

- `docs.pdf` must never appear in the repository, be linked, embedded, or referenced anywhere.
- No CMS, no backend, no payment, no e-commerce in this phase.
- No per-service dedicated pages — single one-page scroll site only.
