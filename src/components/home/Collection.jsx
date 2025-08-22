import React from "react";

const Collection = () => {
  return (
    <section className="w-full h-fit px-8 md:px-12 lg:px-24 py-16 flex flex-col  gap-10 md:flex-row">
      <div className="relative w-full h-[40vh] rounded shadow flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-red-800 text-center gap-3 cursor-pointer overflow-hidden md:w-3/5">
        <h2 className="text-white font-inknut text-3xl z-10 md:text-4xl md:w-1/2">
          SUMMER COLLECTION
        </h2>
        <button className="w-fit bg-white rounded px-8 py-2 z-10 md:px-16 font-medium">
          BROWSE
        </button>
        <img
          src="./assets/images/viking.png"
          alt="viking"
          loading="lazy"
          className="w-fit absolute -right-8 h-full object-cover "
        />
      </div>
      <div className="relative w-full h-[40vh] rounded shadow flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-blue-900 text-center gap-3 cursor-pointer overflow-hidden md:w-2/5">
        <h2 className="text-white font-inknut text-3xl z-10 md:text-4xl md:w-1/2">
          FEATURED FRAGRANCE
        </h2>
        <button className="w-fit bg-white rounded px-8 py-2 z-10 md:px-16 font-medium">
          BROWSE
        </button>
        <img
          src="./assets/images/tweed.png"
          alt="green irish tweed"
          loading="lazy"
          className="w-fit absolute -right-8 h-full object-cover "
        />
      </div>
    </section>
  );
};

export default Collection;
