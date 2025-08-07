import React from "react";
import { cat } from "../../utils/data";

const Categories = () => {
  return (
    <section className="w-full h-fit p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {cat.map((c) => (
        <div
          key={c.id}
          className="flex flex-col items-center text-center gap-4 w-full"
        >
          <img
            src={c.image}
            alt={c.title}
            className="w-full h-full object-cover "
            loading="lazy"
          />
          <h3 className="text-xl  font-copperplate text-gray-500">{c.title}</h3>
          <button className="w-full py-3 bg-white border border-black font-bold font-copperplate tracking-widest cursor-pointer">
            voir {c.category}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Categories;
