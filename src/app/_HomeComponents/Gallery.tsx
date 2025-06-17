import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import image1 from "@/assets/gallery/image1.jpg";
import image2 from "@/assets/gallery/image2.jpg";
import image3 from "@/assets/gallery/image3.jpg";
import image4 from "@/assets/gallery/image4.jpg";
import image5 from "@/assets/gallery/image5.jpg";
import image6 from "@/assets/gallery/image6.jpg";
import image7 from "@/assets/gallery/image7.jpg";
import image8 from "@/assets/gallery/image8.jpg";
import image9 from "@/assets/gallery/image9.jpg";
import image10 from "@/assets/gallery/image10.jpg";
import Image, { StaticImageData } from "next/image";

type GalleryType = {
  src: StaticImageData;
  label: string;
};

const galleryImages: GalleryType[] = [
  {
    src: image1,
    label: "01",
  },
  {
    src: image2,
    label: "02",
  },
  {
    src: image3,
    label: "03",
  },
  {
    src: image4,
    label: "04",
  },
  {
    src: image5,
    label: "05",
  },
  {
    src: image6,
    label: "06",
  },
  {
    src: image7,
    label: "07",
  },
  {
    src: image8,
    label: "08",
  },
  {
    src: image9,
    label: "09",
  },
  {
    src: image10,
    label: "10",
  },
];

const Gallery = () => {
  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const ease = 0.075;
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const markerWrapperRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef<HTMLDivElement>(null);
  const maxScrollRef = useRef(0);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const markerWrapper = markerWrapperRef.current;
    const activeSlide = activeSlideRef.current;

    if (!sliderWrapper || !markerWrapper || !activeSlide) return;

    const updateMaxScroll = () => {
      maxScrollRef.current = sliderWrapper.offsetWidth - window.innerWidth;
    };

    updateMaxScroll();

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateActiveSliderNumber = (
      markerMove: number,
      markerMaxMove: number
    ) => {
      const partWidth = markerMaxMove / 10;
      let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
      currentPart = Math.min(10, Math.max(1, currentPart));
      if (activeSlide) {
        activeSlide.textContent = `${currentPart}/10`;
      }
    };

    const update = () => {
      currentRef.current = lerp(currentRef.current, targetRef.current, ease);

      gsap.set(sliderWrapper, {
        x: -currentRef.current,
      });

      const moveRatio = currentRef.current / maxScrollRef.current;
      const markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
      const markerMove = 70 + moveRatio * markerMaxMove;

      gsap.set(markerWrapper, {
        x: markerMove,
      });

      updateActiveSliderNumber(markerMove, markerMaxMove);
      requestAnimationFrame(update);
    };

    const handleWheel = (e: WheelEvent) => {
      targetRef.current += e.deltaY;
      targetRef.current = Math.max(0, targetRef.current);
      targetRef.current = Math.min(maxScrollRef.current, targetRef.current);
    };

    const handleResize = () => {
      updateMaxScroll();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel);

    const animationId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Marker */}
      <div
        ref={markerWrapperRef}
        className="absolute top-0 left-0 h-screen w-max"
      >
        <div className="relative w-0.5 h-full bg-black">
          <div className="absolute top-12 -left-5 w-10 h-10 bg-white border-2 border-black rounded-full"></div>
        </div>
        <div
          ref={activeSlideRef}
          className="absolute top-14 left-10 text-black"
        >
          1/10
        </div>
      </div>

      {/* Slider */}
      <div className="slider w-full h-full overflow-hidden">
        <div
          ref={sliderWrapperRef}
          className="w-max h-full flex items-center gap-[100px] px-[150px]"
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="w-[80px] h-[80px] bg-gray-300">
              <Image
                src={image.src}
                alt={image.label}
                width={20}
                height={20}
                className="object-"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
