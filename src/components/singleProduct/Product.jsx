import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { CgHeart, CgShoppingCart } from "react-icons/cg";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";

const Product = () => {
  const sizes = ["30ml", "50ml", "100ml", "150ml", "260ml"];
  return (
    <section className="flex flex-col gap-8 w-full h-fit md:flex-row md:gap-30 ">
      <div className="w-full h-fit md:h-[80vh]  p-6 rounded bg-gray-100 md:w-3/6">
        <img
          src="../assets/images/aventuscollection.png"
          alt="aventus"
          loading="lazy"
          className="w-1/2 h-auto object-cover mx-auto md:h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full h-fit md:w-1/2">
        <h1 className="text-2xl font-bold font-inknut">Aventus</h1>
        <span className="text-lg">EAU DE PARFUM</span>
        <p className="text-gray-500">
          Faites sensation du bureau jusqu’à l’afterwork, et au-delà, avec
          Aventus. Parfum Creed le plus prisé, il séduit par son ananas
          dynamique relevé d’une touche fumée raffinée.
        </p>
        <div className="space-x-6 py-5">
          <span className="font-inknut text-xl font-medium">165.00£</span>
          <span>30ml</span>
        </div>
        <div className="py-5 w-full flex flex-wrap items-center gap-3 border-t border-gray-500">
          {sizes.map((s, i) => (
            <span
              key={i}
              className="p-2 border font-inknut text-sm border-gray-600 rounded cursor-pointer shadow"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-10 pb-1 border-b border-gray-600 w-fit">
          <BiMinus className="cursor-pointer  active:text-yellow-500" />
          <span className="text-lg">1</span>
          <BiPlus className="cursor-pointer  active:text-yellow-500" />
        </div>
        <div className="flex items-center  gap-4 w-full mt-8">
          <button className="w-3/5 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium">
            Add to Cart
            <CgShoppingCart />
          </button>
          <button className="w-fit px-6 flex items-center justify-center py-2 cursor-pointer rounded border">
            <CgHeart className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center gap-3 w-full flex-wrap mt-3">
          <div className="flex items-center gap-2 ">
            <RiSecurePaymentFill />
            <span className="text-sm">Secure payment</span>
          </div>
          <div className="flex items-center gap-2 ">
            <FaShippingFast />
            <span className="text-sm">Free shipping</span>
          </div>
          <div className="flex items-center gap-2 ">
            <BsArrowReturnLeft />
            <span className="text-sm">30-day return</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
