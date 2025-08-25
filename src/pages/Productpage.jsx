import React from "react";
import Product from "../components/singleProduct/Product";
import Navbar from "../components/Navbar";
import Notes from "../components/singleProduct/Notes";
import Reviews from "../components/singleProduct/Reviews";
import Proposal from "../components/singleProduct/Proposal";
import Footer from "../components/Footer";

const Productpage = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-fit  py-18 px-8 md:px-12 lg:px-24 space-y-25">
        <div className="space-y-0">
          <Product />
          <Notes />
        </div>
        <Reviews />
        <Proposal />
      </section>
      <Footer />
    </div>
  );
};

export default Productpage;
