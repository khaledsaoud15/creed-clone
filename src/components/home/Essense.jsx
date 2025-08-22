import React from "react";

const Essense = () => {
  return (
    <section className="px-8 md:px-10 lg:px-24 flex flex-col-reverse gap-12 lg:gap-16 py-18 h-fit items-center md:flex-row md:justify-between">
      <div className="flex flex-col gap-6 w-full h-fit text-center">
        <h2 className="font-bold text-3xl font-inknut  lg:text-4xl">
          Winter Essense
        </h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-500 md:text-base md:w-4/5 mx-auto">
            Celebrate the beautiful season with a handcrafted fragrance, infused
            with bright and refreshing notes, perfect for sunny days.
          </p>
          <p className="text-sm text-gray-500 md:text-base md:w-4/5 mx-auto">
            Celebrate the beautiful season with a handcrafted fragrance, infused
            with bright and refreshing notes, perfect for sunny days.
          </p>
        </div>
        <button className="w-fit bg-yellow-500 rounded px-12 py-2 font-medium hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 mx-auto cursor-pointer">
          BROWSE
        </button>
      </div>
      <img
        src="./assets/images/essense.png"
        alt="essense"
        loading="lazy"
        className="w-full h-auto object-cover md:w-1/2"
      />
    </section>
  );
};

export default Essense;
