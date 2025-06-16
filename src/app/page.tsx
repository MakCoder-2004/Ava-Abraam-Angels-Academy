"use client";
import HeroSection from "@/app/_HomeComponents/HeroSection";

export default function ParentComponent() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="testimonials"></section>
    </>
  );
}
