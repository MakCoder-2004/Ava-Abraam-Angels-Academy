import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import image1 from "@/assets/gallery/img1.png";
import image2 from "@/assets/gallery/img2.png";
import image3 from "@/assets/gallery/img3.png";
import image4 from "@/assets/gallery/img4.png";
import image5 from "@/assets/gallery/img5.png";
import image6 from "@/assets/gallery/img6.png";
import image7 from "@/assets/gallery/img7.png";
import image8 from "@/assets/gallery/img8.png";

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
        className="absolute top-5 left-5 h-screen w-max"
      >
        <div className="relative w-0.5 h-full bg-black">
          <div className="absolute top-12 -left-5 w-10 h-10 bg-orange-400 border-2 border-black rounded-full"></div>
        </div>
        <div
          ref={activeSlideRef}
          className="absolute top-6 left-10 text-black"
        >
          1/10
        </div>
      </div>

      {/* Slider */}
      <div className="slider w-full h-full overflow-hidden">
        <div
          ref={sliderWrapperRef}
          className="w-max h-full flex items-center gap-[50px] "
        >
          {galleryImages.map((image, index) => (
            <div key={index} className="w-[400px] h-[400px] bg-gray-300">
              {/* ! Fix the size of the image from photoshop ! */}
              <Image
                src={image.src}
                alt={image.label}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
