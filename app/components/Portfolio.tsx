"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";
import { PORTFOLIO_TILES } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const BG_COLORS = [
  "bg-garden-green",
  "bg-stone-600",
  "bg-emerald-800",
  "bg-teal-700",
  "bg-garden-green/80",
  "bg-stone-700",
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tiles = sectionRef.current?.querySelectorAll<HTMLDivElement>(".portfolio-tile");
    if (!tiles?.length) return;

    gsap.fromTo(
      Array.from(tiles),
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-3 font-body">
            Our Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-garden-dark font-light">
            Projects That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_TILES.map((tile, i) => (
            <div
              key={tile.label}
              className={`portfolio-tile relative overflow-hidden rounded-2xl aspect-[4/3] ${BG_COLORS[i % BG_COLORS.length]} group`}
              data-placeholder={tile.placeholder}
            >
              {/* Placeholder overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white/20 text-center">
                <span className="text-xs uppercase tracking-widest">[Photo Placeholder]</span>
                <span className="text-sm mt-1">{tile.placeholder}</span>
              </div>
              {/* Info card */}
              {/* Always visible on mobile; slides up on desktop hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent md:translate-y-1 md:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-display text-lg font-light">{tile.label}</h3>
                <div className="flex items-center gap-1 text-garden-gold text-xs font-body mt-1">
                  <MapPin size={12} />
                  <span>{tile.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
