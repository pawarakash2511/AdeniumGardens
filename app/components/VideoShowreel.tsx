"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { VIDEO_SHOWREEL } from "@/lib/content";
import { YOUTUBE_VIDEO_ID_PLACEHOLDER } from "@/lib/assets";

export default function VideoShowreel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-garden-cream py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-3 font-body">
            Showreel
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-garden-dark font-light">
            {VIDEO_SHOWREEL.heading}
          </h2>
          <p className="text-garden-dark/60 mt-4 font-body">{VIDEO_SHOWREEL.subtext}</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-video bg-garden-green shadow-2xl">
          {playing ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_PLACEHOLDER}?autoplay=1&playsinline=1`}
              title="Adenium Gardens Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 group"
              aria-label="Play showreel"
            >
              <div className="text-white/20 text-sm uppercase tracking-widest absolute top-6 left-6 font-body">
                [Video Thumbnail Placeholder]
              </div>
              <div className="w-20 h-20 rounded-full bg-garden-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Play size={32} className="text-garden-dark ml-1" fill="currentColor" />
              </div>
              <span className="text-white/70 text-sm font-body">Watch our showreel</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
