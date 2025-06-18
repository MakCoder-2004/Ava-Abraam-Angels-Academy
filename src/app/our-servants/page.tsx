import PageTitle from "@/components/PageTitle";
import React from "react";
import ServantShowcase from "../_SrevantsComponent/ServantShowcase";

const OurServants = () => {
  return (
    <div>
      <PageTitle
        title_WordOne="Our"
        title_WordTwo="Servants"
        subtitle="Meet our talanted team of compassionate servants, committed to serving with humility, care, and unwavering devotion."
      />
      <div className="max-w-8xl mx-auto px-6">
        <ServantShowcase />
      </div>
    </div>
  );
};

export default OurServants;
