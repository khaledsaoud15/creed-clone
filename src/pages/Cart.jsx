import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/cart/Items";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <section className="px-8 md:px-12 lg:px-24 py-8">
        <Items />
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
