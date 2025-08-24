import React from "react";
import Product from "../components/singleProduct/Product";
import Navbar from "../components/Navbar";

const Productpage = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-fit  py-18 px-8 md:px-12 lg:px-24  ">
        <Product />
      </section>
    </div>
  );
};

export default Productpage;
