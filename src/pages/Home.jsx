import React from "react";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Products from "../components/Products";
import Advertise from "../components/Advertise";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <Products />
      <Advertise
        img="https://static.thcdn.com/images/xlarge/webp/widgets/216-us/41/original-new_aa_desktop-112441.png"
        text="Absolu Aventus"
        desc="D'absolument irrésistible, Aventus Absolu est une interprétation audacieuse et moderne de l’icône Aventus. Un parfum qui incarne la puissance et la sophistication."
      />
    </div>
  );
};

export default Home;
