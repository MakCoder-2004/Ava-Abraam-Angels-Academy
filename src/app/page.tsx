"use client";
import HeroSection from "@/app/_HomeComponents/HeroSection";
import Testimonials from "./_HomeComponents/Testimonials";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <div className="">
        <section id="home" className="border-b-4 border-orange-200/50">
          <HeroSection />
        </section>
        <section id="testimonials" className=" my-48">
          <SectionTitle
            title="Testimonials"
            align="center"
            subtitle="What Our Clients Say"
            variant="gradient"
            key={"testimonials"}
          />
          <Testimonials />
        </section>
      </div>
    </>
  );
}
