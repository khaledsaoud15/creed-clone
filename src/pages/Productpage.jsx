import Product from "../components/singleProduct/Product";
import Navbar from "../components/Navbar";
import Proposal from "../components/singleProduct/Proposal";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { url } from "../utils/baseUrl";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Productpage = () => {
  const { id } = useParams();
  const fetchSingleProduct = async () => {
    const { data } = await url.get("/products/get/" + id);
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchSingleProduct,
  });

  const toastFn = () => {
    toast("✅ Product Added", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <div>
      <Navbar />
      <section className="w-full h-fit py-18 px-8 md:px-12 lg:px-24 flex flex-col gap-25">
        <ToastContainer />
        <Product data={data} toastFn={toastFn} />
        <Proposal product={data} />
      </section>
      <Footer />
    </div>
  );
};

export default Productpage;
