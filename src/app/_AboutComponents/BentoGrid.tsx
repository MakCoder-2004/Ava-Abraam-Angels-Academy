"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import image1 from "@/assets/grid/img(ورشة الألعاب الترفيهية).jpg";
import image2 from "@/assets/grid/img(مشهد من بانوراما القيامة).jpg";
import image4 from "@/assets/grid/img(احد السامرية ورشة).jpg";
import image5 from "@/assets/grid/img(ندوة science fiction).jpg";
import image7 from "@/assets/grid/img(كورس بطل انا).jpg";
import image9 from "@/assets/grid/img(رحلة مكتبة الأسكندرية).jpg";
import image10 from "@/assets/grid/img(ورشة عن الأنبا ابرام).jpg";
import image11 from "@/assets/grid/img(قد اكمل).jpg";
import image12 from "@/assets/grid/img(حفل توزيع جوائز مسابقة الكتاب المقدس).jpg";

const GridLayout = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridItems = gridRef.current?.querySelectorAll(".grid-item");

    const cleanupFunctions: (() => void)[] = [];

    gridItems?.forEach((item) => {
      const overlay = item.querySelector(".overlay");
      const content = item.querySelector(".content");

      if (!overlay || !content) return;

      // Set initial states
      gsap.set(overlay, { opacity: 0 });
      gsap.set(content, { opacity: 0, y: 20 });

      // Hover in animation
      const handleMouseEnter = () => {
        // Kill any existing animations to prevent conflicts
        gsap.killTweensOf([overlay, content]);

        gsap.to(overlay, {
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.1,
        });
      };

      // Hover out animation
      const handleMouseLeave = () => {
        // Kill any existing animations to prevent conflicts
        gsap.killTweensOf([overlay, content]);

        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(content, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // Store cleanup function
      cleanupFunctions.push(() => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
        // Kill any remaining animations
        gsap.killTweensOf([overlay, content]);
        // Reset to initial state
        gsap.set(overlay, { opacity: 0 });
        gsap.set(content, { opacity: 0, y: 20 });
      });
    });

    // Cleanup function
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  const gridData = [
    {
      id: 1,
      image: image1,
      title: "Entertainment Games Workshop",
      description:
        "Interactive gaming activities and recreational workshops for community engagement",
    },
    {
      id: 2,
      image: image2,
      title: "Resurrection Panorama",
      description:
        "A breathtaking visual journey through the story of resurrection",
    },
    {
      id: 4,
      image: image4,
      title: "Samaritan Sunday Workshop",
      description:
        "Educational workshop exploring biblical stories and teachings",
    },
    {
      id: 5,
      image: image5,
      title: "Science Fiction Workshop",
      description:
        "Exploring the intersection of faith, science, and imagination",
    },
    {
      id: 7,
      image: image7,
      title: "I Am a Hero Course",
      description: "Personal development and leadership training program",
    },
    {
      id: 9,
      image: image9,
      title: "Alexandria Library Trip",
      description:
        "Educational journey to one of the world's greatest libraries",
    },
    {
      id: 10,
      image: image10,
      title: "Anba Abram Workshop",
      description: "Learning about the life and teachings of Saint Anba Abram",
    },
    {
      id: 11,
      image: image11,
      title: "It is Finished",
      description: "Reflection on completion and spiritual fulfillment",
    },
    {
      id: 12,
      image: image12,
      title: "Bible Competition Awards",
      description: "Celebrating excellence in biblical knowledge and study",
    },
  ];

  const getGridClasses = (id: number) => {
    const classes = {
      1: "col-span-2 row-span-3",
      2: "col-span-2 row-span-5 col-start-3",
      4: "col-span-2 row-span-3 col-start-5",
      5: "col-span-2 row-span-4 col-start-5 row-start-4",
      7: "col-span-4 row-span-2 col-start-1 row-start-6",
      9: "col-span-2 row-span-2 col-start-1 row-start-4",
      10: "col-span-2 row-span-3 col-start-7 row-start-3",
      11: "col-span-2 row-span-2 col-start-7 row-start-1",
      12: "col-span-2 row-span-2 col-start-7 row-start-6",
    };
    return classes[id as keyof typeof classes] || "";
  };

  return (
    <div
      ref={gridRef}
      className="grid h-screen grid-cols-8 grid-rows-7 gap-3 my-24 mx-28"
    >
      {gridData.map((item) => (
        <div
          key={item.id}
          className={`grid-item relative ${getGridClasses(
            item.id
          )} bg-gray-200 rounded-4xl overflow-hidden cursor-pointer group`}
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="overlay absolute inset-0 bg-black rounded-4xl pointer-events-none" />

          {/* Content overlay */}
          <div className="content absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center pointer-events-none">
            <h3 className="text-xl font-bold mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-sm opacity-90 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
