# Adenium Gardens

Cinematic marketing website for **Adenium Gardens Private Limited** — a Mumbai-based landscaping, horticulture, and arboriculture company.

**Live site:** https://adenium-gardens.vercel.app

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 App Router, TypeScript |
| Styling | Tailwind CSS v4 |
| Scroll engine | GSAP + ScrollTrigger |
| Smooth scroll | Lenis |
| Icons | lucide-react |
| Deployment | Vercel |

## Development

```bash
npm install
npm run dev        # start dev server at localhost:3000
npm run build      # production build
npm run lint       # ESLint
npx tsc --noEmit   # type-check
```

## Architecture

Single-page scroll site. The signature mechanic is a scroll-scrubbed background video in `CinematicHero.tsx`: as the user scrolls through a 500vh pinned section, `video.currentTime` advances in sync and four content chapters (tagline → about → services → founder) reveal themselves. On mobile, the hero collapses to a single viewport with a looping autoplay video.

All site copy lives in `lib/content.ts`. All asset paths live in `lib/assets.ts`.

### Section order

1. Header — sticky, transparent over hero → solid on scroll
2. CinematicHero — GSAP scroll-scrubbed video with chapter reveals
3. Services — 8 service cards with tilt-on-hover
4. Portfolio — project gallery tiles
5. VideoShowreel — lazy YouTube embed
6. OurClients — auto-scrolling client logo marquee
7. Testimonials — Godrej Infotech & Fulcrum Worldwide
8. Contact — client-side validated form
9. Footer

## Assets

Place these files before building:

| Source | Destination |
|---|---|
| `garden.mp4` | `public/video/garden.mp4` |
| `logo1.png` | `public/images/logo1.png` |
| `client.png` | `public/images/client.png` |

## Brand Palette

| Token | Hex |
|---|---|
| Deep forest green | `#1F3D2B` |
| Warm gold | `#C8A24A` |
| Cream | `#F7F5F0` |
| Near-black | `#16201A` |
