"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageTitleProps {
  title_WordOne: string;
  title_WordTwo: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title_WordOne,
  title_WordTwo,
  subtitle,
}: PageTitleProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
      });

      // Create simple timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate line
      tl.to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Animate subtitle
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-20 pb-15 bg-orange-100/60">
      {/* Simple decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-15 right-20 w-32 h-32 bg-orange-200/30 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-300/20 rounded-full"></div>

        <div className="decorative-element floating absolute top-30 left-1/4 w-8 h-8 bg-orange-400 transform rotate-45 opacity-20 hidden sm:block" />
        <div className="decorative-element floating absolute top-70 right-1/4 w-6 h-6 bg-orange-500 transform rotate-12 opacity-25 hidden sm:block" />
      </div>

      <div className="relative max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        >
          {title_WordOne}{" "}
          <span className="text-orange-500">{title_WordTwo}</span>
        </h1>

        {/* Animated line */}
        <div
          ref={lineRef}
          className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 origin-left"
        ></div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
