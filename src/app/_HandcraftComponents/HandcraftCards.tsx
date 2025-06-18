"use client";

import { useEffect, useRef } from "react";
import HandcraftCard from "@/components/HandcraftCard";
import { gsap } from "gsap";

interface HandcraftCardsProps {
  handcrafts: {
    id: string;
    image: string;
    title: string;
    description: string;
    youtubeUrl: string;
  }[];
}

const HandcraftCards = ({ handcrafts }: HandcraftCardsProps) => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const subtitle = subtitleRef.current;

    if (!header || !subtitle) return;

    gsap.fromTo(
      header,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    gsap.fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 py-8 md:py-12 lg:py-10">
      <div className="container mx-auto px-4 lg:max-w-7xl md:max-w-4xl sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {handcrafts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700">
              No handcrafts found
            </h3>
            <p className="mt-2 text-gray-500">
              Try searching for something else...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-16">
            {handcrafts.map((handcraft, index) => (
              <HandcraftCard
                key={handcraft.id}
                image={handcraft.image}
                title={handcraft.title}
                description={handcraft.description}
                youtubeUrl={handcraft.youtubeUrl}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HandcraftCards;
