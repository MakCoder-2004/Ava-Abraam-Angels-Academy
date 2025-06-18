"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".animate-element")
        .forEach((element, i) => {
          gsap.from(element, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
              markers: false,
            },
          });
        });

      gsap.utils.toArray<HTMLElement>(".highlight").forEach((element, i) => {
        gsap.from(element, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.5 + i * 0.1,
          ease: "elastic.out(2, 0.9)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
            markers: false,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative px-6 sm:px-8 lg:px-8 overflow-hidden text-lg"
    >
      <div ref={containerRef} className="max-w-5xl mx-auto">
        <div className=" mx-auto text-gray-700">
          <p className="mb-8 leading-relaxed animate-element">
            At{" "}
            <span className="highlight font-bold text-orange-500 bg-orange-50 px-1 py-0.5 rounded">
              Abram&rsquo;s Angels Academy
            </span>
            , we believe the early years of childhood are the most precious.
            Founded in{" "}
            <span className="highlight font-bold text-blue-500 bg-blue-50 px-1 py-0.5 rounded">
              2010
            </span>
            , our academy has been a second home to hundreds of children,
            nurturing their curiosity and helping them take their first
            confident steps into the world of learning.
          </p>

          <p className="mb-8 leading-relaxed animate-element">
            Our{" "}
            <span className="highlight font-bold text-purple-500 bg-purple-50 px-1 py-0.5 rounded">
              play-based curriculum
            </span>{" "}
            is carefully designed by early childhood experts to balance
            structured learning with creative exploration. We maintain a
            <span className="highlight font-bold text-green-500 bg-green-50 px-1 py-0.5 rounded">
              1:6 teacher-to-child ratio
            </span>
            , ensuring each child receives personalized attention while
            developing social skills in our warm, inclusive environment.
          </p>

          <p className="mb-8 leading-relaxed animate-element">
            What sets us apart is our{" "}
            <span className="highlight font-bold text-pink-500 bg-pink-50 px-1 py-0.5 rounded">
              holistic approach
            </span>{" "}
            that nurtures not just academic readiness but also emotional
            intelligence, physical coordination, and creative expression. Our
            <span className="highlight font-bold text-yellow-500 bg-yellow-50 px-1 py-0.5 rounded">
              certified educators
            </span>{" "}
            create magical learning experiences that children carry with them
            long after they graduate from our program.
          </p>

          <p className="leading-relaxed animate-element">
            We invite you to visit our{" "}
            <span className="highlight font-bold text-indigo-500 bg-indigo-50 px-1 py-0.5 rounded">
              sun-filled classrooms
            </span>{" "}
            and{" "}
            <span className="highlight font-bold text-teal-500 bg-teal-50 px-1 py-0.5 rounded">
              vibrant playground
            </span>{" "}
            to see firsthand how we turn everyday moments into extraordinary
            learning opportunities for your little angel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
