"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: "default" | "gradient";
  align?: "left" | "center" | "right";
  className?: string;
  animate?: boolean;
}

const SectionTitle = ({
  title,
  subtitle,
  variant = "default",
  align = "center",
  className = "",
  animate = true,
}: SectionTitleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(decorRef.current, {
        scaleX: 0,
        opacity: 0,
      });

      // Create scroll-triggered animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate decorative element
      if (decorRef.current) {
        tl.to(
          decorRef.current,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        tl.to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [animate]);

  // Alignment classes
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  // Variant styles
  const variants = {
    default: (
      <div className={`${alignClasses[align]} max-w-max`}>
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
        >
          {title}
        </h2>
        <div
          ref={decorRef}
          className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mt-4 origin-left"
        ></div>
      </div>
    ),

    gradient: (
      <div className={`${alignClasses[align]} max-w-max`}>
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x"
        >
          {title}
        </h2>
        <div ref={decorRef} className="flex gap-2 mt-4 justify-center">
          <div className="w-8 h-1 bg-orange-400 rounded-full origin-left"></div>
          <div className="w-4 h-1 bg-orange-500 rounded-full origin-left"></div>
          <div className="w-12 h-1 bg-orange-600 rounded-full origin-left"></div>
        </div>
      </div>
    ),
  };

  return (
    <div ref={containerRef} className={`mb-12 ${className}`}>
      {variants[variant]}
      {subtitle && (
        <p
          ref={subtitleRef}
          className={`mt-4 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed ${alignClasses[align]}`}
        >
          {subtitle}
        </p>
      )}

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default SectionTitle;
