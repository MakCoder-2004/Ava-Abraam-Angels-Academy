"use client";

import PageTitle from "@/components/PageTitle";
import React, { useState } from "react";
import ServantShowcase from "../_SrevantsComponent/ServantShowcase";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import { servants } from "@/constants/index";

const OurServants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredServants = servants.filter((servant) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const lowerName = servant.name.toLowerCase();

    if (lowerName === lowerSearchTerm) return true;
    if (lowerName.startsWith(lowerSearchTerm)) return true;
    if (lowerName.includes(lowerSearchTerm)) return true;

    return false;
  });

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

  // Calculate pagination
  const totalPages = Math.ceil(sortedServants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServants = sortedServants.slice(startIndex, endIndex);

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
        <ServantShowcase servants={currentServants} />
      </div>
      {totalPages > 1 && (
        <div className="mt-12 mb-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={sortedServants.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default OurServants;
