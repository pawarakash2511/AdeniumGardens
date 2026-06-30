"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { HERO_COPY, ABOUT_COPY, FOUNDER, FOUNDER_STATS } from "@/lib/content";
import { VIDEO_SRC, VIDEO_POSTER } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ch0Ref = useRef<HTMLDivElement>(null); // Hero tagline
  const ch1Ref = useRef<HTMLDivElement>(null); // About Us
  const ch2Ref = useRef<HTMLDivElement>(null); // Services intro
  const ch3Ref = useRef<HTMLDivElement>(null); // Founder

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobile || prefersReduced) {
      video.loop = true;
      video.play().catch(() => {});
      // Simple fade-in for visible chapter
      gsap.to(ch0Ref.current, { opacity: 1, y: 0, duration: 1.2, delay: 0.3 });
      return;
    }

    // Set initial states — ch0 starts visible; ch1–3 start hidden
    [ch1Ref, ch2Ref, ch3Ref].forEach((ref) => {
      if (ref.current) gsap.set(ref.current, { opacity: 0 });
    });
    // Gentle fade-in for ch0 on page load
    gsap.fromTo(ch0Ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power2.out" });

    // Video scrub + chapter reveals from single progress driver
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const p = self.progress;

        // Video scrub
        if (video.readyState >= 2 && video.duration) {
          video.currentTime = video.duration * p;
        }

        // Chapter 0: fully visible 0–15%, fade out 15–22%
        const op0 = p < 0.15 ? 1 : p < 0.22 ? 1 - (p - 0.15) / 0.07 : 0;
        const y0 = 0;
        gsap.set(ch0Ref.current, { opacity: Math.max(0, op0), y: y0 });

        // Chapter 1: fade in 20–28%, hold 28–38%, fade out 38–45%
        const op1 =
          p < 0.2 ? 0 : p < 0.28 ? (p - 0.2) / 0.08 : p < 0.38 ? 1 : p < 0.45 ? 1 - (p - 0.38) / 0.07 : 0;
        const x1 = p < 0.28 && p > 0.2 ? -40 + ((p - 0.2) / 0.08) * 40 : 0;
        gsap.set(ch1Ref.current, { opacity: Math.max(0, op1), x: x1 });

        // Chapter 2: fade in 43–50%, hold 50–65%, fade out 65–72%
        const op2 =
          p < 0.43 ? 0 : p < 0.5 ? (p - 0.43) / 0.07 : p < 0.65 ? 1 : p < 0.72 ? 1 - (p - 0.65) / 0.07 : 0;
        gsap.set(ch2Ref.current, { opacity: Math.max(0, op2) });

        // Chapter 3: fade in 70–77%, hold 77–90%, fade out 90–97%
        const op3 =
          p < 0.7 ? 0 : p < 0.77 ? (p - 0.7) / 0.07 : p < 0.9 ? 1 : p < 0.97 ? 1 - (p - 0.9) / 0.07 : 0;
        const y3 = p < 0.77 && p > 0.7 ? 30 - ((p - 0.7) / 0.07) * 30 : 0;
        gsap.set(ch3Ref.current, { opacity: Math.max(0, op3), y: y3 });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    /* Tall container — CSS sticky does the pinning */
    <div id="home" ref={containerRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-garden-green">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          poster={VIDEO_POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Chapter 0 — Hero tagline */}
        <div
          ref={ch0Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <p className="text-garden-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-body">
            {HERO_COPY.eyebrow}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl mb-8">
            {HERO_COPY.headline}
          </h1>
          <div className="flex flex-col items-center gap-2 text-white/70 text-sm animate-bounce mt-4">
            <span>{HERO_COPY.scrollCue}</span>
            <ChevronDown size={20} />
          </div>
        </div>

        {/* Chapter 1 — About Us */}
        <div
          ref={ch1Ref}
          className="absolute inset-0 flex items-center px-8 md:px-20 lg:px-32"
        >
          <div className="max-w-2xl">
            <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-4 font-body">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light leading-snug mb-6">
              Total Horticulture &amp; Landscape Excellence
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-body">
              {ABOUT_COPY.body[0]}
            </p>
          </div>
        </div>

        {/* Chapter 2 — Services intro */}
        <div
          ref={ch2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-4 font-body">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white font-light leading-tight max-w-3xl mb-8">
            Eight Specialisations,<br />One Trusted Partner
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {["Landscape Design", "Arboriculture", "Env. Liaison", "Office Scape", "Plant Scape", "Vertical Garden", "Commercial Plantation", "Air Purification"].map((s) => (
              <span
                key={s}
                className="px-4 py-2 border border-white/30 text-white/80 text-sm rounded-full font-body backdrop-blur-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Chapter 3 — Founder */}
        <div
          ref={ch3Ref}
          className="absolute inset-0 flex items-center justify-end px-8 md:px-20 lg:px-32"
        >
          <div className="max-w-lg text-right">
            <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-4 font-body">
              Our Founder
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light leading-snug mb-3">
              {FOUNDER.name}
            </h2>
            <p className="text-garden-gold text-sm mb-4 font-body">{FOUNDER.title}</p>
            <p className="text-white/70 text-sm mb-8 font-body">{FOUNDER.credentials}</p>
            <div className="grid grid-cols-2 gap-4">
              {FOUNDER_STATS.map((stat) => (
                <div key={stat.label} className="text-right">
                  <div className="font-display text-3xl text-garden-gold">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </div>
                  <div className="text-white/60 text-xs font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <div
            id="hero-progress"
            className="h-full bg-garden-gold transition-none"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}
