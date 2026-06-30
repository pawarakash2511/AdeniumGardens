# SPEC.md — Adenium Gardens Website (Technical Specification for Claude Code)

Read `goal.md` first for context/intent. This file is the implementation spec.

---

## 1. Tech Stack
- **Framework:** Next.js (React) — App Router, TypeScript preferred. (If Claude Code judges a lighter static stack is better for pure scroll-video performance, plain Vite + React is an acceptable alternative — but keep it component-based, not single-file HTML.)
- **Scroll engine:** GSAP + ScrollTrigger (industry standard for scroll-scrubbed video and pinned sections). Locomotive Scroll or Lenis may be used for smooth-scroll feel underneath GSAP.
- **3D/depth layer:** Three.js (or just CSS 3D transforms + GSAP if Three.js is overkill) for subtle parallax depth — floating leaf/particle layers, tilt-on-hover service cards, depth-of-field style layering. Keep this lightweight; it's an accent, not a 3D game.
- **Styling:** Tailwind CSS.
- **Video handling:** HTML5 `<video>` element, muted, `playsinline`, scrubbed via `video.currentTime` bound to scroll progress (GSAP ScrollTrigger `onUpdate`).
- **Icons:** lucide-react.
- **Animations on scroll-in (non-video elements):** GSAP timelines / IntersectionObserver-driven reveals.

## 2. Assets & Placeholders

| Asset | Source | Final filename/location | Notes |
|---|---|---|---|
| Background video | `D:\UPWORK\Github_project\gardenweb\garden.mp4` | `/public/video/garden.mp4` | Scroll-scrubbed; needs a compressed web-optimized version too (`garden-web.mp4`, H.264, target <15MB if possible) plus a `garden-poster.jpg` first-frame poster for instant paint |
| Logo | `D:\UPWORK\Github_project\gardenweb\logo1.png` | `/public/images/logo1.png` | Used in nav (light + on-scroll-dark variants if needed) and favicon |
| Content source | `D:\UPWORK\Github_project\gardenweb\docs.pdf` | **not copied into project** | Text already extracted into Section 4 below. Do not embed, link, or parse this file. |
| Client logos | `D:\UPWORK\Github_project\gardenweb\client.png` | `/public/images/client.png` | Real client-logo image supplied by client — used in the new "Our Clients" section and beside testimonials. Replaces the earlier placeholder client-logo boxes. |
| Service images (6–8) | none supplied | `/public/images/placeholders/service-*.jpg` | Use neutral landscaping/garden stock-style placeholder boxes with labels (e.g. `<div data-placeholder="Office Scape photo">`) so client can swap later |
| Founder photo | none supplied | `/public/images/placeholders/founder.jpg` | Placeholder portrait box |
| Project/portfolio photos (golf course, orchid farm) | none supplied | `/public/images/placeholders/project-*.jpg` | Placeholder |
| YouTube video | none supplied | embed placeholder | Use a placeholder embed block with a clearly marked `YOUTUBE_VIDEO_ID_PLACEHOLDER` constant so client can drop in real ID later. Style as a "play" card, not auto-embedded iframe (for performance — lazy-load iframe on click) |

> Implementation note: keep all placeholder image/video locations in a single config file (e.g. `lib/assets.ts`) so the client can replace them in one place later.

## 3. Core Interaction: Scroll-Scrubbed Cinematic Video
This is the signature mechanic — implement carefully.

1. Hero/full-page section pins the video as a fixed full-bleed background (`position: fixed` or a pinned GSAP ScrollTrigger container) for a defined scroll distance (e.g. the first 300–500vh of the page, or the *entire* page height if performance allows — recommend scoping it to the hero + first 2–3 sections for performance, then transitioning to a normal scroll page beneath).
2. Bind `video.currentTime` to scroll progress within that pinned region: `video.currentTime = video.duration * scrollProgress`.
3. As scroll progress crosses defined thresholds (chapters), trigger content reveals:
   - **0–10%:** Logo + tagline fade in ("Over 35 Years of Expert Landscaping")
   - **10–30%:** "About Us" intro card slides in over the video
   - **30–60%:** Services chapter — service names/icons appear one at a time, synced to video movement, like film subtitles/chapter cards
   - **60–80%:** Founder credibility block (Dr. Vaishali Pawaskar) appears
   - **80–100%:** Transition out of pinned video into the normal scrollable page (testimonials, full services grid, contact)
4. Scrolling up should reverse the video playback and reverse the reveals (no jarring jump-cuts).
5. **Mobile fallback:** scroll-scrubbing a video on mobile is often janky/battery-heavy. On mobile, fall back to: video plays once on load (or on tap) as a normal autoplay/looping muted background for the hero only, then the rest of the page scrolls normally with simpler fade-in animations (no scrubbing). Detect via viewport width or `prefers-reduced-motion`.
6. Respect `prefers-reduced-motion`: if set, skip scroll-scrubbing entirely and just show the poster image + a normal autoplaying muted loop, with simple fade-in content.

## 4. Site Content (final copy — use verbatim, this supersedes any earlier PDF extraction)

### 4.1 Header / Nav
- Logo: `logo1.png`
- Nav items: Home · About · Services · Portfolio · Testimonials · Contact
- CTA button: "Get a Quote" / "Enquire Now"

### 4.2 Hero (cinematic video section)
- Eyebrow: "Over 35 Years of Expert Landscaping"
- Headline: "Landscape Services for Residential & Commercial Projects"
- Subtext: short line inviting scroll, e.g. "Scroll to explore" (with a down-chevron/scroll-cue animation)

### 4.3 About Us
> Adenium Gardens Private Limited is a start-up for total Horticulture, Garden, Landscape & Arboriculture services. Designing of golf course plantation of trees and transplantation of trees, liaison with tree authorities, local self govt. agencies, Municipal Corporations, State and Central government environmental departments & pollution control boards.

> The Company is promoted by Dr. Vaishali Pawaskar — Horticulturist, M.Sc. & Doctorate in Botanical Science and Tissue Culture from Bombay University. She has designed and developed an 18-hole Golf Course in Mumbai, developed a 12-acre farm of orchid flowers, and designed and developed many landscape and horticulture projects for real estate construction companies in Mumbai, Bangalore, Kolkata, Ahmedabad, Gurgaon, and Pune.

> The company is headquartered in Mumbai, ably supported by professional people from different fields — Architecture, Civil Engineering, Botanical and Agricultural Sciences. The company has a vision to promote organic plants and engage with organizations to reduce carbon footprints, spreading the message: **Go Green, Save the Planet — for our future.**

Founder credibility callout block:
- Name: Dr. Vaishali Pawaskar
- Title: Founder & Horticulturist
- Credentials: M.Sc., Ph.D. (Botanical Science & Tissue Culture, Bombay University)
- Highlight stats (display as animated counters): "18-Hole Golf Course Designed" · "12-Acre Orchid Farm Developed" · "6+ Cities Served" · "35+ Years Combined Expertise"

### 4.4 Services (8 cards, each gets: icon, title, 2–3 line description)
1. **Landscape Designing & Gardening** — Full lifecycle landscaping from new construction to facelifts of existing landscapes, with the customer involved from start to finish.
2. **Arboriculture** — Tree census reports, GPS surveys with photographs, micro/macro ecological reports for authority submissions, botanical records, and scientific transplantation/cutting methodology.
3. **Environmental Liaison Services** — End-to-end coordination with tree authorities, municipal corporations, and state/central pollution control boards — a one-stop shop for environmental compliance.
4. **Office Scape** — Corporate workplace landscaping and fit-outs designed by architects, project managers, and fit-out specialists for productive, branded, agile workspaces.
5. **Plant Scape** — Expert plant-selection consultancy so the right plant goes in the right space — avoiding the common mistake of buying plants without know-how.
6. **Vertical Gardening** — Living wall systems with built-in irrigation, optimized for flats and space-constrained homes.
7. **Commercial Plantation** — Helping landowners near Mumbai convert underutilized agricultural land into high-return organic crop/vegetable/fruit plantations.
8. **Air Purification** — Indoor air quality solutions (mobile high-performance air cleaners) for offices, improving employee wellbeing and reducing sick days.

### 4.5 Portfolio / Project Highlights (placeholder gallery)
Title: "Projects That Speak for Themselves"
Placeholder tiles for: Golf Course (Mumbai), Orchid Farm (12 acres), Real estate landscape projects across Mumbai / Bangalore / Kolkata / Ahmedabad / Gurgaon / Pune.

### 4.6 Video Showreel (YouTube placeholder)
Title: "See Our Work in Motion"
A clickable thumbnail card (using video poster placeholder) that lazy-loads a YouTube embed on click. Use placeholder constant for video ID.

### 4.7 Our Clients
Title: "Trusted by Leading Organisations"
Subtext: short line, e.g. "We've partnered with developers, corporates, and institutions across India."
Display `client.png` as a horizontal logo strip/marquee (auto-scrolling row of client logos, pause-on-hover) beneath the heading. If `client.png` is a single combined image rather than individual logos, display it as one wide responsive strip; if Claude Code can detect/slice individual logos from it, a clean evenly-spaced grid is preferred — otherwise treat as one image.

### 4.8 Testimonials
> "What a great job carried out by The Adenium Gardens Team. From the initial planning to completion. Always on time, and left the site spotless on completion. We're definitely going to use your landscaping services again in the future!"
> — **Mr. Vivek Bhandari**, Godrej Infotech Ltd, Mumbai

> "The Adenium Gardens is a very good landscaping company. They do tree removal also. We liked them because all the employees are hard-working, honest and reliable. They always come on time, and the prices are good too!"
> — **Nikita Agarwal**, Fulcrum Worldwide, Mumbai

(Beside or beneath each testimonial, show the relevant logo cropped/referenced from `client.png` where identifiable; otherwise just show the full `client.png` strip once in Section 4.7 and keep testimonials text-only.)

### 4.9 Contact / Enquiry Section
- Heading: "Let's Bring Your Vision to Life"
- Phone: +91-9823837146
- Email: customercare@adeniumgardens.com
- Contact form fields (UI placeholder, wiring TBD — see Open Questions): Name, Email, Phone, Service Interested In (dropdown of the 8 services), Message
- Submit CTA: "Send Enquiry"

### 4.10 Footer
- Logo + short tagline
- Quick links (mirrors nav)
- Contact info repeated
- Social icons (placeholders — Instagram/Facebook/LinkedIn)
- Copyright line: "© [Year] Adenium Gardens Private Limited. All rights reserved."

## 5. Page/Section Order
1. Header (sticky, transparent over video → solid on scroll past hero)
2. Hero / cinematic scroll-video sequence (About teaser + Founder block woven in per Section 3 chapters)
3. Services grid (8 cards, 3D tilt-on-hover)
4. Portfolio highlights
5. Video showreel (YouTube placeholder)
6. Our Clients (client.png logo strip)
7. Testimonials
8. Contact / Enquiry
9. Footer

## 6. Visual/Brand Direction (placeholder defaults — confirm with client)
- Palette: deep forest green + warm gold/cream accents + off-white/cream background for non-video sections (evokes premium botanical/golf-course brand). Exact hex values TBD — extract from `logo1.png` once available, or use:
  - Primary green: `#1F3D2B`
  - Accent gold: `#C8A24A`
  - Background cream: `#F7F5F0`
  - Text dark: `#16201A`
- Typography: a refined serif for headings (e.g. "Fraunces" or "Cormorant") + clean sans for body (e.g. "Inter" or "Manrope") — cinematic/editorial feel, not generic corporate.
- Motion language: slow, deliberate easing (`power2.out`/`power3.inOut`), no bouncy/cartoonish easing — keep it premium and filmic.

## 7. Performance & Accessibility Requirements
- Poster image shown instantly; video loads progressively / lazy after first paint.
- Provide a compressed web video (`garden-web.mp4`, ideally also a `.webm`) in addition to the source file.
- All images use `next/image` (or equivalent lazy-loading) with explicit width/height to avoid layout shift.
- Respect `prefers-reduced-motion` (Section 3.6).
- All interactive elements keyboard-accessible; video has no essential audio (muted decorative background) so no captions required for the background video; the YouTube showreel should have captions if the client later supplies a captioned video.
- Color contrast checked against WCAG AA once final palette is set.
- Target Lighthouse performance ≥ 80 on desktop despite video-heavy hero.

## 8. File/Project Structure (suggested)
```
/app
  /page.tsx                  → assembles all sections
  /components
    Header.tsx
    CinematicHero.tsx        → scroll-scrubbed video + chapter reveals
    About.tsx
    FounderStats.tsx
    Services.tsx
    ServiceCard.tsx
    Portfolio.tsx
    VideoShowreel.tsx        → YouTube placeholder embed
    OurClients.tsx           → client.png logo strip section
    Testimonials.tsx
    Contact.tsx
    Footer.tsx
  /lib
    assets.ts                → central placeholder/asset config
    content.ts                → all copy from Section 4, as exported constants
/public
  /video/garden.mp4, garden-web.mp4, garden-poster.jpg
  /images/logo1.png
  /images/client.png
  /images/placeholders/*
```

## 9. Explicit Exclusions
- `docs.pdf` is **not** to be included in the repository, linked, embedded, or referenced anywhere in the live site. It was a one-time content source only.
- No payment/e-commerce.
- No CMS in this phase (content lives in `lib/content.ts` as constants for now).

---

## 10. Decisions Confirmed by Client
1. **Contact form:** UI-only placeholder for this phase — no email-sending integration. Form should still validate fields client-side and show a friendly "submitted" confirmation state, but no backend/API wiring (e.g. Formspree/EmailJS) yet. Leave a clearly marked `// TODO: wire up form submission` in `Contact.tsx`.
2. **Scroll-scrubbed video scope:** Hero + first few sections only (per Section 3, the "About / Founder / Services-intro" chapters), not the entire page — chosen for performance. After that pinned region ends, the page transitions to normal scroll behavior for Portfolio, Video Showreel, Testimonials, Contact, and Footer.
3. **Brand palette:** Use the placeholder palette as final-for-now (Section 6: deep forest green `#1F3D2B`, accent gold `#C8A24A`, cream background `#F7F5F0`, dark text `#16201A`). Can be swapped later once exact brand colors are extracted from `logo1.png`.

## 11. Remaining Open Items (not blocking — can default sensibly)
- Exact heading/body fonts: default to Fraunces (headings) + Inter (body) per Section 6 unless client says otherwise.
- YouTube video ID: stays a placeholder constant until supplied.
- Real photos for services/portfolio/founder: stay placeholders for this build.
- Domain/hosting target: default to a Vercel-deployable Next.js project structure unless told otherwise.
- Per-service dedicated pages: not in this phase — single one-page scroll site only.
