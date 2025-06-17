"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const decorativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          buttonsRef.current,
          statsRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.set(".decorative-element", {
        opacity: 0,
        scale: 0,
        rotation: -180,
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate main content
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Animate decorative elements
      tl.to(
        ".decorative-element",
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Floating animation for decorative elements
      gsap.to(".floating", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden "
    >
      {/* Background decorative elements */}
      <div ref={decorativeRef} className="absolute inset-0 pointer-events-none">
        <div className="decorative-element floating absolute top-20 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-20"></div>
        <div className="decorative-element floating absolute top-40 right-20 w-12 h-12 bg-orange-300 rounded-full opacity-30"></div>
        <div className="decorative-element floating absolute bottom-40 left-20 w-20 h-20 bg-orange-100 rounded-full opacity-25"></div>
        <div className="decorative-element floating absolute bottom-20 right-10 w-14 h-14 bg-orange-200 rounded-full opacity-20"></div>

        {/* Geometric shapes */}
        <div className="decorative-element floating absolute top-90 left-1/6 w-8 h-8 bg-orange-400 transform rotate-45 opacity-20 hidden sm:block"></div>
        <div className="decorative-element floating absolute top-30 right-1/4 w-6 h-6 bg-orange-500 transform rotate-12 opacity-25 hidden sm:block"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16">
        <div className="text-center">
          {/* Main heading */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Welcome to <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Ava Abraam
            </span>
            <br />
            <span className="text-orange-500">Angels Academy</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Serving young minds with love, creativity, and excellence. Where
            every child discovers their unique talents and grows into confident,
            compassionate individuals.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/about"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              See Our Feedbacks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
