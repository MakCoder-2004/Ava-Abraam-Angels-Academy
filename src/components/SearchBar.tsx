"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultsCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  resultsCount,
}) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const searchContainer = searchRef.current;
    const input = inputRef.current;

    if (!searchContainer || !input) return;

    // Initial animation
    gsap.fromTo(
      searchContainer,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.4 }
    );

    // Focus animation
    const handleFocus = () => {
      gsap.to(searchContainer, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleBlur = () => {
      gsap.to(searchContainer, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div ref={searchRef} className="w-full max-w-md mx-auto px-6 mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search handcrafts..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-4xl bg-transparent focus:outline-none focus:border-orange-500 transition-colors duration-200 text-gray-800 placeholder-gray-500"
        />
      </div>
      {searchTerm && (
        <p className="text-sm text-gray-600 mt-2 text-center">
          {resultsCount} result{resultsCount !== 1 ? "s" : ""} found
        </p>
      )}
    </div>
  );
};

export default SearchBar;
