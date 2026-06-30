"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import {
  Trees,
  TreePine,
  Leaf,
  Building2,
  Flower2,
  Sprout,
  Wheat,
  Wind,
  type LucideProps,
} from "lucide-react";
import type { ElementType } from "react";

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  Trees,
  TreePine,
  Leaf,
  Building2,
  Flower2,
  Sprout,
  Wheat,
  Wind,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICON_MAP[icon] ?? Leaf;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 8;
    const rotateY = (x / (rect.width / 2)) * 8;
    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl p-7 shadow-sm border border-garden-cream hover:shadow-xl transition-shadow duration-300 cursor-default flex flex-col gap-4 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-12 h-12 rounded-xl bg-garden-green/8 flex items-center justify-center">
        <Icon size={24} className="text-garden-green" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-lg font-medium text-garden-dark leading-snug">
        {title}
      </h3>
      <p className="text-garden-dark/65 text-sm leading-relaxed font-body">
        {description}
      </p>
    </div>
  );
}
