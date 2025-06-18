"use client";

import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import ServantShowcase from "../_SrevantsComponent/ServantShowcase";
import SearchBar from "@/components/SearchBar";
import { servants } from "@/constants/index";

const OurServants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServants = servants.filter((servant) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const lowerName = servant.name.toLowerCase();

    if (lowerName === lowerSearchTerm) return true;

    if (lowerName.startsWith(lowerSearchTerm)) return true;

    if (lowerName.includes(lowerSearchTerm)) return true;

    return false;
  });

  // Sort results with exact matches first
  const sortedServants = [...filteredServants].sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    const search = searchTerm.toLowerCase();

    if (aName === search) return -1;
    if (bName === search) return 1;

    if (aName.startsWith(search)) return -1;
    if (bName.startsWith(search)) return 1;

    return 0;
  });

  return (
    <div>
      <PageTitle
        title_WordOne="Our"
        title_WordTwo="Servants"
        subtitle="Meet our talented team of compassionate servants, committed to serving with humility, care, and unwavering devotion."
      />
      <div className="mt-12">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultsCount={filteredServants.length}
        />
      </div>
      <div className="max-w-8xl mx-auto px-6">
        <ServantShowcase servants={sortedServants} />
      </div>
    </div>
  );
};

export default OurServants;
