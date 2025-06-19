"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Heart, Star, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ignitionPoints = [
  {
    icon: Heart,
    title: "Spark of Love",
    description: "Every journey begins with unconditional love and acceptance",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Star,
    title: "Kindle Curiosity",
    description: "We fan the flames of wonder and discovery in every child",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Zap,
    title: "Ignite Passion",
    description:
      "Discovering what makes each child's eyes light up with excitement",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Fuel Dreams",
    description: "Providing the energy and support to reach for the stars",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Sparkles,
    title: "Blaze Trails",
    description: "Empowering children to create their own path to success",
    color: "from-amber-400 to-orange-500",
  },
];

const OurMission = () => {
  const [activeFlame, setActiveFlame] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const energyOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".ignition-card", {
        opacity: 0,
        y: 30,
      });

      gsap.set(energyOrbRef.current, {
        scale: 0,
        opacity: 0,
      });

      gsap.set(".energy-particle", {
        opacity: 0,
        scale: 0,
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Energy orb appears with dramatic effect
      tl.to(energyOrbRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.75,
        ease: "elastic.out(1, 0.5)",
      });

      // Cards appear
      tl.to(
        ".ignition-card",
        {
          opacity: 1,
          y: 0,
          duration: 0.025,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Continuous orb animations
      gsap.to(".orb-core", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".orb-ring", {
        rotation: -360,
        duration: 15,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".orb-outer", {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Auto-cycle through flames with orb color change
    const interval = setInterval(() => {
      setActiveFlame((prev) => (prev + 1) % ignitionPoints.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={sectionRef} className="relative pb-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center my-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <Zap className="w-6 h-6" />
            <span className="font-semibold">Igniting Potential</span>
            <Zap className="w-6 h-6" />
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 relative z-10">
          {ignitionPoints.map((point, index) => {
            const IconComponent = point.icon;
            const isActive = activeFlame === index;

            return (
              <div
                key={index}
                className={`ignition-card relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 cursor-pointer border-2 ${
                  isActive
                    ? "border-orange-400 shadow-2xl shadow-orange-200/50 scale-105"
                    : "border-orange-200 hover:border-orange-300 hover:shadow-xl"
                }`}
                onMouseEnter={() => setActiveFlame(index)}
              >
                {/* Step indicator */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 bg-gradient-to-br ${
                      point.color
                    } ${isActive ? "scale-110" : ""}`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {point.description}
                </p>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 right-2 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    point.color
                  } opacity-5 rounded-2xl transition-opacity duration-300 ${
                    isActive ? "opacity-10" : "opacity-0"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Section */}
        <div className="relative">
          {/* Main CTA Card */}
          <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 rounded-3xl p-8 md:p-12 shadow-2xl text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-20 w-12 h-12 bg-white rounded-full animate-pulse delay-500"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold">Join Our Family</span>
                <Sparkles className="w-5 h-5" />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Ready to Ignite Your Child&rsquo;s{" "}
                <span className="text-yellow-300">Potential?</span>
              </h3>

              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Take the first step towards unlocking your child&rsquo;s
                extraordinary future. Every great journey begins with a single
                spark.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Start Messaging Us
                </Link>
                <Link
                  href="https://www.facebook.com/AvaAbramAngelsAcademy"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Visit Our Facebook
                </Link>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-x-20 translate-y-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
