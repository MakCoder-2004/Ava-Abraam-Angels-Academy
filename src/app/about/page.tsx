import PageTitle from "@/components/PageTitle";
import React from "react";
import BentoGrid from "../_AboutComponents/BentoGrid";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <div>
      <PageTitle
        title_WordOne="About"
        title_WordTwo="Us"
        subtitle="Discover our nurturing approach to early childhood education and how we help young minds grow and flourish at Abram's Angels Academy."
      />

      <section id="grid" className="my-32">
        <SectionTitle
          title="Precious Memories"
          subtitle="Celebrate Life’s Unforgettable Memories"
          align="center"
          variant="gradient"
        />
        <BentoGrid />
      </section>
    </div>
  );
};

export default About;
