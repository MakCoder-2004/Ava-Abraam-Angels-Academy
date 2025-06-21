import PageTitle from "@/components/PageTitle";
import React from "react";
import BentoGrid from "../_AboutComponents/BentoGrid";
import VelocityScroll from "../_AboutComponents/ScrollText";
import { GoNorthStar } from "react-icons/go";
import InfoSection from "../_AboutComponents/InfoSection";

const About = () => {
  return (
    
    <div>
      <PageTitle
        title_WordOne="About"
        title_WordTwo="Us"
        subtitle="Discover our nurturing approach to early childhood education and how we help young minds grow and flourish at Abram's Angels Academy."
      />

      <section id="WhoAreWe" className="mt-32">
        <InfoSection />
      </section>

      <section id="ScrollText" className="my-90">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden text-orange-500 gap-5">
          <GoNorthStar className="text-2xl" />
          <VelocityScroll className="uppercase">
            Ava Abraam Angels Academy
          </VelocityScroll>
          <GoNorthStar className="text-2xl" />
        </div>
      </section>

      <section id="grid" className="mb-40">
        <BentoGrid />
        <div className=" flex justify-center">
          <p className="text-center max-w-2xl font-medium text-gray-600">
            &rdquo;Special moments are small but meaningful fragments of time
            like shared laughter, peaceful sunrises, or unexpected kindness that
            leave a lasting warmth in our hearts. They remind us to cherish the
            present and find joy in life’s simple pleasures.&rdquo;
          </p>
        </div>
      </section>
    </div>


  );
};

export default About;
