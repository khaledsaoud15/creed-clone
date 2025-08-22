import Collection from "../components/home/Collection";
import Essense from "../components/home/Essense";
import Hero from "../components/home/Hero";
import Newcollection from "../components/home/Newcollection";
import Popular from "../components/home/Popular";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Newcollection />
      <Collection />
      <Popular />
      <Essense />
    </div>
  );
};

export default Home;
