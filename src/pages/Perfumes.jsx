import React, { useState } from "react";
import PerfumeHeader from "../components/perfumes/PerfumeHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Filters from "../components/perfumes/Filters";
import ProductsPagination from "../components/perfumes/ProductsPagination";
import { useFetch } from "../hooks/useFetch";

const Perfumes = () => {
  const { data, isLoading, error } = useFetch("/products/get");
  const [value, setValue] = useState("all");
  return (
    <div>
      <Navbar />
      <PerfumeHeader />
      {isLoading ? (
        <p>loading....</p>
      ) : (
        <>
          <Filters fn={setValue} />
          <ProductsPagination products={data} val={value} />
        </>
      )}
      {error && <p>{error}</p>}
      <Footer />
    </div>
  );
};

export default Perfumes;
