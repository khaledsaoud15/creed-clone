import Footer from "../components/Footer";
import Blog from "../components/home/Blog";
import Collection from "../components/home/Collection";
import Essense from "../components/home/Essense";
import Hero from "../components/home/Hero";
import Newcollection from "../components/home/Newcollection";
import Newsletter from "../components/home/Newsletter";
import Popular from "../components/home/Popular";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Newcollection />
      <Collection />
      <Popular />
      <Essense />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
