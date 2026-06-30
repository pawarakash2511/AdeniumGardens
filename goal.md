# GOAL.md — Adenium Gardens Private Limited Website

## 1. Project Summary
Build a cinematic, scroll-driven, video-led marketing website for **Adenium Gardens Private Limited**, a Mumbai-based landscaping, horticulture, and arboriculture company. The site should feel like a short film that the visitor "directs" by scrolling — the background video plays in sync with scroll position, and content/options reveal themselves as the video progresses, rather than appearing as static stacked sections.

This file (`goal.md`) defines the *why* and *what*. `spec.md` defines the *how* (technical implementation) for use with Claude Code.

---

## 2. Business Context
Adenium Gardens Pvt. Ltd. provides:
- Landscape design & gardening (residential + commercial)
- Arboriculture (tree census, GPS survey, transplantation, ecological reports)
- Environmental liaison services (govt./pollution board coordination)
- Office Scape (corporate workplace landscaping/fit-outs)
- Plant Scape (plant selection consultancy)
- Vertical Gardening (living walls)
- Commercial Plantation (agri-land monetization, organic produce)
- Air Purification (indoor air quality solutions for offices)

Promoted by **Dr. Vaishali Pawaskar** — Horticulturist, M.Sc. & Ph.D. in Botanical Science & Tissue Culture (Bombay University). Notable work: an 18-hole golf course in Mumbai, a 12-acre orchid farm, and landscape projects for real estate developers across Mumbai, Bangalore, Kolkata, Ahmedabad, Gurgaon, and Pune.

Headquartered in Mumbai, the company positions itself around a "Go Green, Save the Planet" mission and organic/sustainable practices.

> Note: An earlier source PDF (`docs.pdf`) was used only to extract the business content above. The PDF itself is **not** to be ingested, parsed, displayed, or linked anywhere on the website — it was a content source only, nothing more.

---

## 3. Target Audience
- Real estate developers & construction companies (B2B, large landscape contracts)
- Corporate facility/office managers (Office Scape, Air Purification)
- Housing societies & individual homeowners (residential landscaping, vertical gardens)
- Landowners near Mumbai interested in commercial plantation/organic farming

## 4. Primary Goals of the Website
1. Communicate credibility and scale ("35+ years of expertise," founder's credentials, marquee projects).
2. Showcase the full service range in a visually immersive, memorable way (not a boring corporate brochure).
3. Build trust via testimonials from named clients (Godrej Infotech, Fulcrum Worldwide).
4. Drive enquiries via a clear contact path (phone/email, and a contact form placeholder).
5. Feel premium, cinematic, and "alive" — justifying the company's high-end project portfolio (golf courses, corporate landscaping).

## 5. Experience Goals (the "feel")
- Landing on the site = the **garden.mp4** video plays full-bleed in the background like a movie opening.
- As the user scrolls, the video timeline scrubs forward (scroll-linked playback, not autoplay-and-forget) — scroll down = video moves forward, scroll up = video reverses.
- Content (headings, service cards, stats, testimonials) fades/slides in **synced to specific points in the video timeline**, like chapters in a film.
- Subtle 3D depth: parallax layers, tilt-on-hover cards, soft camera-like motion on scroll — not full 3D modeling, but enough to feel dimensional and premium.
- Should feel realistic and cinematic, not like a generic "video background hero section."

## 6. Assets Provided by Client
| Asset | Local Path | Usage |
|---|---|---|
| Background video | `garden.mp4` | Full-site scroll-scrubbed cinematic background |
| Company logo | `logo1.png` | Header/nav + favicon |
| Content source | `docs.pdf` | Used only for text extraction — not used in final site |
| Client logos | `client.png` | Logo strip/collage for new "Our Clients" section + alongside testimonials |

All other imagery (service photography, team photos, project photos) will be **placeholders** until the client supplies final assets. One **YouTube video placeholder** (likely a company showreel/testimonial video) is required as a distinct embedded element, separate from the scroll-scrubbed background video.

## 7. Out of Scope (for this phase)
- No PDF viewer/embed/download of `docs.pdf` anywhere on the site.
- No CMS/backend integration yet (contact form can be UI-only or use a simple mail-to/3rd-party form service — to be decided, see open questions in spec.md).
- No e-commerce / payment functionality.
- No multi-language support unless requested later.

## 8. Success Criteria
- Smooth scroll-video sync with no jank on mid-range laptops and modern phones.
- Fully responsive (desktop cinematic experience gracefully degrades to a lighter mobile experience — see spec.md for mobile fallback strategy).
- Fast enough first paint despite heavy video asset (lazy/poster-frame strategy defined in spec.md).
- All company content from the source material represented accurately.
- Clear calls-to-action (Call / Email / Enquire) visible at multiple scroll points.

## 9. Deliverable Format
A project buildable end-to-end by **Claude Code** from `spec.md`, using the assets at the local paths above.
