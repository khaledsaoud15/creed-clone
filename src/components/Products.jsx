import React from "react";
import { products } from "../utils/data";

const Products = () => {
  return (
    <section className="h-fit w-full space-y-8 py-10 font-copperplate">
      <h2 className="text-2xl md:text-4xl px-4 md:px-8 ">Meilleures ventes</h2>
      <grid className="grid grid-cols-2 w-full gap-3 lg:grid-cols-3 lg:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center text-center p-4 gap-2 w-full lg:gap-3"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full  object-cover mb-4"
              loading="lazy"
            />
            <h3 className="text-xl lg:text-2xl ">{product.title}</h3>
            <p className="text-gray-600 text-sm lg:text-base">
              A partir de ${product.price[0].toFixed(2)}
            </p>
            <button className="w-full py-3 bg-black text-white cursor-pointer">
              Achat
            </button>
          </div>
        ))}
      </grid>
    </section>
  );
};

export default Products;
