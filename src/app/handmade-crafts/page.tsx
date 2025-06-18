import PageTitle from "@/components/PageTitle";
import React from "react";
import HandcraftCards from "../_HandcraftComponents/HandcraftCards";
import SearchBar from "@/components/SearchBar";

const HandmadeCrafts = () => {
  return (
    <div>
      <PageTitle
        title_WordOne="Handmade"
        title_WordTwo="Crafts"
        subtitle="Explore our unique collection of handcrafted items, each lovingly created with attention to detail and artistic passion."
      />
      <div className="my-12">
        <SearchBar />
      </div>
      <HandcraftCards />
    </div>
  );
};

export default HandmadeCrafts;
