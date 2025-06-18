"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HandcraftCardProps {
  image: string;
  title: string;
  description: string;
  youtubeUrl: string;
  index?: number;
}

const HandcraftCard: React.FC<HandcraftCardProps> = ({
  image,
  title,
  description,
  youtubeUrl,
  index = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const imageContainer = imageRef.current;
    const content = contentRef.current;
    const button = buttonRef.current;

    if (!card || !imageContainer || !content || !button) return;

    // Simple initial states
    gsap.set(card, {
      opacity: 0,
      y: 30,
    });

    // Simple entrance animation
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Simple hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(imageContainer, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(imageContainer, {
        scale: 1,
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
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === card) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  const handleWatchVideo = () => {
    const button = buttonRef.current;
    if (!button) return;

    // Simple click animation
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
      onComplete: () => {
        window.open(youtubeUrl, "_blank", "noopener,noreferrer");
      },
    });
  };

  return (
    <div
      ref={cardRef}
      className="bg-transparent rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto"
    >
      {/* Image */}
      <div ref={imageRef} className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=300&width=400"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <button
          ref={buttonRef}
          onClick={handleWatchVideo}
          className="w-full bg-orange-400 hover:bg-orange-400/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
          Watch Tutorial
        </button>
      </div>
    </div>
  );
};

export default HandcraftCard;
