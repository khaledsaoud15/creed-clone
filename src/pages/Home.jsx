import Blog from "../components/home/Blog";
import Collection from "../components/home/Collection";
import Essense from "../components/home/Essense";
import Hero from "../components/home/Hero";
import Newcollection from "../components/home/Newcollection";
import Newsletter from "../components/home/Newsletter";
import Popular from "../components/home/Popular";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Newcollection />
      <Collection />
      <Popular />
      <Essense />
      <Blog />
      <Newsletter />
    </div>
  );
};

export default Home;
