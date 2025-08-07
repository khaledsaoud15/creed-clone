import React, { useEffect, useState } from "react";

const Advertise = ({ img, text, desc }) => {
  const [isWide, setIsWide] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-[100dvh] lg:relative flex flex-col gap-4 lg:h-[70dvh]lg:items-center lg:justify-center">
      <img
        src={img}
        alt={text}
        className="w-full h-full object-cover lg:absolute top-0 left-0"
        loading="lazy"
      />
      <div className="flex flex-col gap-4 w-full h-fit px-8 font-copperplate text-center lg:z-10 lg:w-1/2">
        <h3
          className={`text-xl lg:text-6xl ${
            isWide ? "text-white" : "text-black"
          }`}
        >
          {text}
        </h3>
        <p
          className={`text-sm lg:text-md ${
            isWide ? "text-white" : "text-gray-500"
          }`}
        >
          {desc}
        </p>
        <button
          className={`w-full py-3 font-bold tracking-widest cursor-pointer transition-all duration-300 ${
            isWide ? "bg-white text-black" : "bg-black text-white"
          } lg:w-fit lg:px-8 lg:mx-auto`}
        >
          Découvrir
        </button>
      </div>
    </section>
  );
};

export default Advertise;
