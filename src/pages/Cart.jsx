import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/cart/Items";
import Footer from "../components/Footer";
import Check from "../components/cart/Check";
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";

const Cart = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useFetch(`/cart/get/${user?._id}`, "cart");
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-12 lg:px-24 py-16 space-y-4">
        <h1 className="text-xl lg:text-xl font-bold font-inknut">
          Shopping Cart
        </h1>
        <section className="relative  flex flex-col gap-8 lg:flex-row lg:justify-between">
          <Items data={data} isLoading={isLoading} error={error} />
          <Check userId={user?._id} cartId={data?._id} data={data} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
