import React from "react";
import PerfumeHeader from "../components/perfumes/PerfumeHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filters from "../components/perfumes/Filters";
import ProductsPagination from "../components/perfumes/ProductsPagination";

const Perfumes = () => {
  return (
    <div>
      <Navbar />
      <PerfumeHeader />

      <Filters />
      <ProductsPagination />
      <Footer />
    </div>
  );
};

export default Perfumes;
