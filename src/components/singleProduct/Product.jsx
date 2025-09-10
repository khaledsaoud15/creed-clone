import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { CgHeart, CgShoppingCart } from "react-icons/cg";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { url } from "../../utils/baseUrl";
import { useAction } from "../../hooks/useAction";

const Notes = ({ note, title }) => {
  return (
    <details className="border-b py-3 border-gray-300 group">
      <summary className="flex items-center justify-between text-lg md:text-xl font-inknut">
        {title}
        <ChevronDown className="group-open:rotate-180 transition-all duration-300" />
      </summary>
      {note?.map((n, key) => {
        return (
          <p key={key} className="text-gray-500 leading-7 text-lg mt-2 ">
            {n}
          </p>
        );
      })}
    </details>
  );
};

const Product = ({ data, toastFn }) => {
  const [priceIndex, setPriceIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { mutate } = useAction("/cart/add", "post", "cart");

  const addToCart = (id) => {
    mutate({
      products: [
        {
          product: id,
          price: data?.price[priceIndex],
          quantity: quantity,
          size: data?.size[priceIndex],
        },
      ],
    });
    toastFn();
    setQuantity(1);
  };

  return (
    <section className="flex flex-col gap-8 w-full h-fit md:flex-row md:gap-30 relative">
      <div className="flex flex-col gap-4 w-full md:w-3/6">
        <div className="w-full h-fit md:h-[80vh] p-6 rounded bg-gray-100">
          <img
            src={data?.image}
            alt={data?.title}
            loading="lazy"
            className="w-1/2 h-[30vh] object-cover mx-auto md:h-full"
          />
        </div>
        <div className="flex flex-col gap-4 w-full">
          <Notes note={data?.topNotes} title="Top notes" />
          <Notes note={data?.heartNotes} title="Heart notes" />
          <Notes note={data?.baseNotes} title="Base notes" />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full h-fit md:w-1/2 sticky top-5">
        <h1 className="text-2xl font-bold font-inknut">{data?.title}</h1>
        <span className="text-lg">{data?.type?.toUpperCase()}</span>
        <p className="text-gray-500">{data?.description}</p>

        <div className="space-x-6 py-5">
          <span className="font-inknut text-xl font-medium">
            ${data?.price[priceIndex] * quantity}
          </span>
          <span>{data?.size[priceIndex]}</span>
        </div>

        <div className="py-5 w-full flex flex-wrap items-center gap-3 border-t border-gray-500">
          {data?.size.map((s, i) => (
            <span
              key={i}
              className={`p-2 border font-semibold text-xs cursor-pointer ${
                priceIndex === i
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setPriceIndex(i)}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-10 pb-1 border-b border-gray-600 w-fit">
          <BiMinus
            className="cursor-pointer active:text-yellow-500"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          />
          <span className="text-lg">{quantity}</span>
          <BiPlus
            className="cursor-pointer active:text-yellow-500"
            onClick={() => setQuantity((q) => q + 1)}
          />
        </div>

        <div className="flex items-center gap-4 w-full mt-8">
          <button
            onClick={() => addToCart(data?._id)}
            className="w-3/5 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium"
          >
            Add to Cart
            <CgShoppingCart />
          </button>
          <button className="w-fit px-6 flex items-center justify-center py-2 cursor-pointer rounded border">
            <CgHeart className="text-2xl" />
          </button>
        </div>

        <div className="flex items-center gap-3 w-full flex-wrap mt-3">
          <div className="flex items-center gap-2">
            <RiSecurePaymentFill />
            <span className="text-sm">Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShippingFast />
            <span className="text-sm">Free shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <BsArrowReturnLeft />
            <span className="text-sm">30-day return</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
