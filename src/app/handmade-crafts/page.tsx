"use client";

import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import HandcraftCards from "../_HandcraftComponents/HandcraftCards";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import { handcrafts } from "@/constants/index";

const HandmadeCrafts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  // Calculate pagination
  const totalPages = Math.ceil(sortedHandcrafts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHandcrafts = sortedHandcrafts.slice(startIndex, endIndex);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
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
        handcrafts={currentHandcrafts.map((h) => ({ ...h, id: String(h.id) }))}
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
