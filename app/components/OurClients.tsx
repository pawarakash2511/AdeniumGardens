"use client";

import Image from "next/image";
import { OUR_CLIENTS } from "@/lib/content";
import { CLIENT_IMG_SRC } from "@/lib/assets";

export default function OurClients() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-garden-gold text-xs uppercase tracking-[0.25em] mb-3 font-body">
            Our Clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-garden-dark font-light">
            {OUR_CLIENTS.heading}
          </h2>
          <p className="text-garden-dark/60 mt-4 max-w-xl mx-auto font-body">
            {OUR_CLIENTS.subtext}
          </p>
        </div>

        {/* Marquee strip */}
        <div className="marquee-wrapper relative overflow-hidden mt-8">
          <div className="marquee-track flex w-max">
            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0">
              <Image
                src={CLIENT_IMG_SRC}
                alt="Our clients — Huntsman, Godrej, Raheja Universal, Riverdale Resort, Bluegrass, Puravankara and more"
                width={900}
                height={450}
                className="object-contain h-40 sm:h-56 md:h-72 w-auto"
              />
            </div>
            <div className="flex-shrink-0" aria-hidden="true">
              <Image
                src={CLIENT_IMG_SRC}
                alt=""
                width={900}
                height={450}
                className="object-contain h-40 sm:h-56 md:h-72 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
