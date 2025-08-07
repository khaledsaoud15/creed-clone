import React from "react";
import Hero from "../components/home/Hero";
import Offers from "../components/home/Offers";
import Products from "../components/Products";
import Advertise from "../components/home/Advertise";
import Categories from "../components/home/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <Products />
      <Advertise
        img="https://static.thcdn.com/images/xlarge/webp/widgets/216-us/41/original-new_aa_desktop-112441.png"
        text="Absolu Aventus"
        desc="D’abord édition limitée rare et prisée, Absolu Aventus rejoint définitivement l’univers de The House of Creed.
"
      />
      <Categories />
      <Advertise
        img="https://static.thcdn.com/images/xlarge/webp/widgets/216-us/22/original-carmina_desktop-081022.png"
        text="Votre histoire de parfum d'ete"
        desc="Entrez dans des journées ensoleillées avec les parfums d'été de The House of Creed, conçus pour vous transporter dans des contrées exotiques. Pour en savoir plus, consultez le blog et découvrez votre parfum inspiré par le soleil."
      />
    </div>
  );
};

export default Home;
