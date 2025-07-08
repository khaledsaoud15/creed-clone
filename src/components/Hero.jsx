import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col gap-8 w-full  h-fit pb-8">
      <video
        src="./assets/images/creed-header.mp4"
        autoPlay
        loop
        muted
        className="w-full aspect-auto"
        controls
      ></video>
      <div className="flex flex-col gap-5 w-full px-4 md:px-8 static text-center md:absolute md:text-white md:w-1/3 md:left-10 md:top-55">
        <h1 className="text-4xl md:text-4xl  font-copperplate">
          Les Creed Classics
        </h1>
        <p className="text-sm leading-6 md:text-md font-copperplate">
          Trouvez le grand classique de Creed à votre image : un parfum conçu
          sur mesure, à porter avec assurance.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <button className="w-full py-3 tracking-widest bg-black text-white font-copperplate md:text-black md:bg-white">
            En savoir plus
          </button>
          <button className="w-full py-3 tracking-widest bg-black text-white font-copperplate md:text-black md:bg-white">
            Voir les creeds classics
          </button>
        </div>
      </div>
      <p className="font-copperplate px-4 md:px-8 text-sm md:text-lg font-medium">
        Maison de parfums authentique, The House of Creed se consacre à la
        création de fragrances artisanales originales pour hommes et pour
        femmes, confectionnées avec les meilleurs ingrédients que le monde
        puisse offrir.
      </p>
    </section>
  );
};

export default Hero;
