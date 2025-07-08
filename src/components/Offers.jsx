import React from "react";
import { offers } from "../utils/data";

const Offers = () => {
  return (
    <section className="h-fit w-full px-4 md:px-8 space-y-8 font-copperplate">
      <h4 className=" text-2xl md:text-4xl">Tant à offrir</h4>
      <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 lg:grid-cols-3">
        {offers.map((el, i) => (
          <div className="w-full h-full flex flex-col gap-4 text-center" key={i}>
            <img
              src={el.image}
              alt={el.title}
              loading="lazy"
              className="object-cover h-auto w-full md:h-[65dvh]"
            />
            <h2 className="text-xl ">{el.title}</h2>
            <p className="text-gray-600 ">{el.text}</p>
            <button className="w-full border py-3 mt-auto">Voir les parfums</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
