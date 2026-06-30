"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/content";
import { LOGO_SRC } from "@/lib/assets";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-garden-green/96 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 group">
            <Image
              src={LOGO_SRC}
              alt="Adenium Gardens"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span
              className={`font-display font-semibold text-sm leading-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white drop-shadow-lg"
              }`}
            >
              Adenium Gardens<br />
              <span className="text-garden-gold font-normal text-xs">Private Limited</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-garden-gold ${
                  scrolled ? "text-white/90" : "text-white drop-shadow"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-2 px-5 py-2 bg-garden-gold text-garden-dark text-sm font-semibold rounded-full hover:bg-amber-400 transition-colors duration-200"
            >
              Enquire Now
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-garden-green/98 transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <button
          className="absolute top-5 right-6 text-white"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollTo(item.href)}
            className="text-white text-2xl font-display font-light hover:text-garden-gold transition-colors"
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("#contact")}
          className="mt-4 px-8 py-3 bg-garden-gold text-garden-dark text-base font-semibold rounded-full hover:bg-amber-400 transition-colors"
        >
          Enquire Now
        </button>
      </div>
    </header>
  );
}
