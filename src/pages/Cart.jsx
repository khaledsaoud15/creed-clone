import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/cart/Items";
import Footer from "../components/Footer";
import Check from "../components/cart/Check";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-12 lg:px-24 py-16 space-y-4">
        <h1 className="text-xl lg:text-xl font-bold font-inknut">
          Shopping Cart
        </h1>
        <section className="relative  flex flex-col gap-8 lg:flex-row lg:justify-between">
          <Items />
          <Check />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
