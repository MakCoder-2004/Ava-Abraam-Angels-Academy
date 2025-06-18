"use client";

import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import HandcraftCards from "../_HandcraftComponents/HandcraftCards";
import SearchBar from "@/components/SearchBar";
import { handcrafts } from "@/constants/index";

const HandmadeCrafts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHandcrafts = handcrafts.filter((handcraft) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const lowerTitle = handcraft.title.toLowerCase();
    const lowerDescription = handcraft.description.toLowerCase();

    if (lowerTitle === lowerSearchTerm) {
      return true;
    }

    if (lowerTitle.startsWith(lowerSearchTerm)) {
      return true;
    }

    if (lowerTitle.includes(lowerSearchTerm)) {
      return true;
    }

    if (lowerDescription.includes(lowerSearchTerm)) {
      return true;
    }

    return false;
  });

  const sortedHandcrafts = [...filteredHandcrafts].sort((a, b) => {
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const search = searchTerm.toLowerCase();

    if (aTitle === search) return -1;
    if (bTitle === search) return 1;

    if (aTitle.startsWith(search)) return -1;
    if (bTitle.startsWith(search)) return 1;

    return 0;
  });

  return (
    <div>
      <PageTitle
        title_WordOne="Handmade"
        title_WordTwo="Crafts"
        subtitle="Explore our unique collection of handcrafted items, each lovingly created with attention to detail and artistic passion."
      />
      <div className="my-12">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultsCount={filteredHandcrafts.length}
        />
      </div>
      <HandcraftCards
        handcrafts={sortedHandcrafts.map((h) => ({ ...h, id: String(h.id) }))}
      />
    </div>
  );
};

export default HandmadeCrafts;
