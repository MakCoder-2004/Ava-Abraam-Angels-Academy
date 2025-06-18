"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Servant {
  id: number;
  name: string;
  image: string;
}

interface ServantShowcaseProps {
  servants: Servant[];
}

function ServantShowcase({ servants }: ServantShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate header and subtitle
    const header = headerRef.current;
    const subtitle = subtitleRef.current;

    if (header && subtitle) {
      gsap.fromTo(
        header,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        subtitle,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitle,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate cards
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Clear previous refs
      cardsRef.current = cardsRef.current.slice(0, servants.length);

      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

      validCards.forEach((card, index) => {
        // Set initial state
        gsap.set(card, {
          opacity: 0,
          y: 30,
        });

        // Entrance animation with scroll trigger
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          delay: index * 0.01,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Hover animations
        const image = card.querySelector(".servant-image");
        const overlay = card.querySelector(".name-overlay");
        const nameText = card.querySelector(".servant-name");

        if (!image || !overlay || !nameText) return;

        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.fromTo(
            nameText,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(nameText, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, [servants]);

  return (
    <div className="min-h-screen pt-10 pb-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {servants.length === 0 ? (
          <div className="text-center py-16">
            <h3 ref={headerRef} className="text-xl font-medium text-gray-700">
              No servants found
            </h3>
            <p ref={subtitleRef} className="mt-2 text-gray-500">
              Try searching for something else...
            </p>
          </div>
        ) : (
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
                      className="servant-image object-cover transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="name-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 flex items-end justify-center pb-8">
                      <h3 className="servant-name text-white text-2xl font-semibold text-center px-4">
                        {servant.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-300/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl transform scale-105" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServantShowcase;
