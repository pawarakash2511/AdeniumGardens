"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLDivElement>(".testimonial-card");
    if (!cards?.length) return;
    gsap.fromTo(
      Array.from(cards),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="bg-garden-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-3 font-body">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-garden-dark font-light">
            Trusted by India's Best
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="testimonial-card bg-white rounded-2xl p-8 shadow-sm border-l-4 border-garden-gold relative"
            >
              <Quote
                size={32}
                className="text-garden-gold/30 absolute top-6 right-6"
                fill="currentColor"
              />
              <p className="text-garden-dark/80 text-base leading-relaxed font-body mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-display font-medium text-garden-dark">{t.author}</p>
                <p className="text-garden-gold text-sm font-body mt-1">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
