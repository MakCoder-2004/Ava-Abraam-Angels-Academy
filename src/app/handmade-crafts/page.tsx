"use client";

import PageTitle from "@/components/PageTitle";
import React, { useState, useMemo } from "react";
import HandcraftCards from "../_HandcraftComponents/HandcraftCards";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import { handcrafts } from "@/constants/index";

const HandmadeCrafts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Memoize filtered and sorted handcrafts for better performance
  const {
    filteredHandcrafts,
    sortedHandcrafts,
    totalPages,
    currentHandcrafts,
  } = useMemo(() => {
    const filtered = handcrafts.filter((handcraft) => {
      if (!searchTerm) return true;

      const lowerSearchTerm = searchTerm.toLowerCase();
      const lowerTitleEn = handcraft.title.en.toLowerCase();
      const lowerTitleAr = handcraft.title.ar.toLowerCase();
      const lowerDescEn = handcraft.description.en.toLowerCase();
      const lowerDescAr = handcraft.description.ar.toLowerCase();

      return (
        lowerTitleEn.includes(lowerSearchTerm) ||
        lowerTitleAr.includes(lowerSearchTerm) ||
        lowerDescEn.includes(lowerSearchTerm) ||
        lowerDescAr.includes(lowerSearchTerm)
      );
    });

    const sorted = [...filtered].sort((a, b) => {
      const aTitleEn = a.title.en.toLowerCase();
      const bTitleEn = b.title.en.toLowerCase();
      const search = searchTerm.toLowerCase();

      // Exact match comes first
      if (aTitleEn === search) return -1;
      if (bTitleEn === search) return 1;

      // Starts with search term comes next
      if (aTitleEn.startsWith(search)) return -1;
      if (bTitleEn.startsWith(search)) return 1;

      return 0;
    });

    const total = Math.ceil(sorted.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const current = sorted.slice(startIndex, startIndex + itemsPerPage);

    return {
      filteredHandcrafts: filtered,
      sortedHandcrafts: sorted,
      totalPages: total,
      currentHandcrafts: current,
    };
  }, [handcrafts, searchTerm, currentPage, itemsPerPage]);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        handcrafts={currentHandcrafts.map((h) => ({
          ...h,
          id: String(h.id),
          title: h.title.en,
          description: h.description.en,
        }))}
      />
      {totalPages > 1 && (
        <div className="mt-12 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={sortedHandcrafts.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default HandmadeCrafts;
