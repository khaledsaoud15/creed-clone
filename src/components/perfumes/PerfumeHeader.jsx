import React from "react";

const PerfumeHeader = () => {
  return (
    <section className="px-8 md:px-12 lg:px-24 flex flex-col lg:flex-row lg:items-center gap-8 h-fit bg-gray-50 py-8">
      <div className="flex flex-col w-full h-fit gap-4 lg:w-1/2">
        <span className="text-red-600 font-semibold">HOT DEAL</span>
        <h1 className="text-2xl font-inknut font-bold lg:text-4xl">
          Silver Mountain Water
        </h1>
        <p className="text-gray-500 lg:text-sm">
          Creed Silver Mountain Water is a fresh, invigorating fragrance
          inspired by the crisp air and snowy peaks of the Swiss Alps. It opens
          with bright bergamot and mandarin, flowing into a heart of green tea
          and blackcurrant. The base blends musk and sandalwood for a clean yet
          subtly warm trail. Perfect for those who want an elegant balance of
          freshness and sophistication.
        </p>
        <button className="w-full font-medium lg:w-fit lg:px-8 py-4 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500">
          Buy now
        </button>
      </div>
      <img
        src="../assets/images/silvercreed.png"
        alt="silver mountain water"
        className="w-auto h-fit object-cover drop-shadow-xl"
        loading="lazy"
      />
    </section>
  );
};

export default PerfumeHeader;
