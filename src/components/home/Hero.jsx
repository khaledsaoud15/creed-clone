import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const animations = [
      { id: "#aventus", x: -150 },
      { id: "#her", x: 150 },
      { id: "#jasmin", x: 100 },
      { id: "#mint", x: -100 },
    ];

    animations.forEach(({ id, x }) => {
      gsap.fromTo(
        id,
        { x, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#hero",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    const textAnimation = [
      { id: "#headText", x: -100 },
      { id: "#headSpan", x: 100 },
    ];

    textAnimation.forEach(({ id, x }) => {
      gsap.fromTo(
        id,
        {
          x,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        }
      );
    });
  }, []);

  return (
    <section
      id="hero"
      className="px-8 md:px-10 lg:px-24 flex flex-col gap-12 lg:gap-16 py-18 h-fit items-center bg-gray-50 overflow-x-hidden"
    >
      <div className="flex flex-col gap-2 text-center">
        <h1
          id="headText"
          className="text-[43px]  font-inknut uppercase md:text-8xl lg:text-9xl"
        >
          The house of creed
        </h1>
        <span
          id="headSpan"
          className="text-base font-medium font-inknut md:text-2xl lg:text-3xl"
        >
          Since 1760, crafting fragrances of distinction
        </span>
      </div>

      <div className="relative w-fit h-full flex items-center justify-center lg:w-2/5">
        <img
          src="./assets/images/silver.png"
          alt=""
          className="w-full h-full object-cover z-30"
        />
        <img
          id="aventus"
          src="./assets/images/aventus.png"
          alt=""
          className="w-64 h-64 absolute top-24 -left-8 lg:top-36 z-10 opacity-0"
        />
        <img
          id="her"
          src="./assets/images/forher.png"
          alt=""
          className="w-64 h-64 absolute top-24 -right-8 lg:top-36 z-10 opacity-0"
        />
        <img
          id="jasmin"
          src="./assets/images/jasmine.png"
          alt=""
          className="absolute top-40 -right-18 w-full lg:-right-36 opacity-0"
        />
        <img
          id="mint"
          src="./assets/images/mint@2x.png"
          alt=""
          className="absolute top-40 -left-18 w-full opacity-0"
        />
      </div>

      <button className="w-fit px-10 py-4 bg-yellow-500 font-inknut rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 z-20">
        SHOP NOW
      </button>
    </section>
  );
};

export default Hero;
