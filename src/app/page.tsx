"use client";
import HeroSection from "@/app/_HomeComponents/HeroSection";
import Testimonials from "./_HomeComponents/Testimonials";
import SectionTitle from "@/components/SectionTitle";
import Gallery from "./_HomeComponents/Gallery";
import OurMission from "./_HomeComponents/OurMission";

export default function Home() {
  return (
    <>
      <section id="home" className="border-b-4 border-orange-200/30 ">
        <HeroSection />
      </section>

      <section id="gallery" className="my-32">
        <SectionTitle
          title="Just Smile"
          align="center"
          subtitle="See the smiles we’ve created together, because every child deserves happiness."
          variant="gradient"
          key={"gallery"}
        />
        <Gallery />
      </section>

      <section id="OurMission" className="my-32">
        <SectionTitle
          title="Our Mission"
          align="center"
          subtitle="To provide hope, opportunity, and a brighter future for every child in need."
          variant="gradient"
          key={"mission"}
          className="mb-8"
        />
        <OurMission />
      </section>

      <section id="testimonials" className="mb-42 pt-40">
        <SectionTitle
          title="Feedbacks"
          align="center"
          subtitle="Hear the voices of hope and joy from the children and families we’ve touched."
          variant="gradient"
          key={"testimonials"}
          className="mb-18"
        />
        <Testimonials />
      </section>
    </>
  );
}
