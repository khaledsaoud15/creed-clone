import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Productpage from "./pages/Productpage";
import ScrollToTop from "./utils/ScrollToTop";
import useLenis from "./hooks/useLenis";
import Perfumes from "./pages/Perfumes";
import Cart from "./pages/Cart";
import TrackOrder from "./pages/TrackOrder";
import OTP from "./pages/OTP";
import Success from "./pages/Success";

const App = () => {
  useLenis();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Productpage />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<TrackOrder />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
