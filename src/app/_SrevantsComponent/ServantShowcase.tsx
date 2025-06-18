"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import { servants } from "@/constants/index";

function ServantShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      gsap.fromTo(
        validCards,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      validCards.forEach((card) => {
        const image = card.querySelector(".employee-image");
        const overlay = card.querySelector(".name-overlay");
        const nameText = card.querySelector(".employee-name");

        if (!image || !overlay || !nameText) return;

        const hoverTl = gsap.timeline({ paused: true });
        hoverTl
          .to(image, { scale: 1.1, duration: 0.4, ease: "power2.out" })
          .to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0.1)
          .fromTo(
            nameText,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
            0.2
          );

        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servants.map((servant, index) => (
            <div
              key={servant.id}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                <div className="aspect-square relative">
                  <Image
                    src={servant.image}
                    alt={servant.name}
                    fill
                    className="employee-image object-cover transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="name-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 flex items-end justify-center pb-8">
                    <h3 className="employee-name text-white text-2xl font-semibold text-center px-4">
                      {servant.name}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-300/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl transform scale-105" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServantShowcase;
