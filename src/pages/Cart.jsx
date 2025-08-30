import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/cart/Items";
import Footer from "../components/Footer";
import Check from "../components/cart/Check";

const Cart = () => {
  return (
    <div>
      <Navbar />
      
      <section className="relative px-8 md:px-12 lg:px-24 py-16 flex flex-col gap-8 lg:flex-row lg:justify-between">
        <Items />
        <Check />
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
