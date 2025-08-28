import React from "react";
import PerfumeHeader from "../components/perfumes/PerfumeHeader";
import Navbar from "../components/Navbar";
import Filters from "../components/perfumes/Filters";

const Perfumes = () => {
  return (
    <div>
      <Navbar />
      <PerfumeHeader />
      <Filters />
    </div>
  );
};

export default Perfumes;
