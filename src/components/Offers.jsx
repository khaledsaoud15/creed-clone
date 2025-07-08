import React from "react";
import { offers } from "../utils/data";

const Offers = () => {
  return (
    <section className="h-fit w-full  space-y-8  font-copperplate">
      <h4 className=" text-2xl md:text-4xl px-4 md:px-8 ">Tant à offrir</h4>
      <div className="grid grid-cols-1 gap-8 w-full md:grid-cols-2 lg:grid-cols-3 md:px-8 px-4">
        {offers.map((el, i) => (
          <div
            className="w-full h-full flex flex-col gap-4 text-center"
            key={i}
          >
            <img
              src={el.image}
              alt={el.title}
              loading="lazy"
              className="object-cover h-auto w-full md:h-[65dvh]"
            />
            <h2 className="text-xl ">{el.title}</h2>
            <p className="text-gray-600 ">{el.text}</p>
            <button className="w-full border py-3 mt-auto cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
              Voir les parfums
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 w-full h-fit md:px-8 md:flex-row-reverse md:items-center">
        <img
          src="https://static.thcdn.com/images/medium/webp/widgets/216-us/16/original-av_summer-080516.png"
          alt="ete"
          className="w-full object-cover"
          loading="lazy"
        />
        <div className="space-y-4 px-4 md:px-0 md:text-center">
          <h2 className="text-xl md:text-3xl">L’essence de l’été</h2>
          <p className="text-gray-600 md:w-4/5 md:mx-auto">
            Célébrez la belle saison avec un parfum artisanal, infusé de notes
            lumineuses et rafraîchissantes, parfait pour les journées
            ensoleillées.
          </p>
          <button className="w-full py-3 bg-black text-white font-bold tracking-widest md:w-fit md:px-4 cursor-pointer">
            Découvrir
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
