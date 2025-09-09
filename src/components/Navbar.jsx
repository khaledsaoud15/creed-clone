import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-between relative px-8 md:px-12 lg:px-24 h-24 w-full md:static z-50">
      <h1 className="font-inknut text-xl font-bold">CREED</h1>

      <div
        className={`absolute top-full left-0 flex flex-col pl-8 gap-4 bg-white overflow-hidden transition-all duration-300 ${
          active ? "h-fit py-4" : "h-0"
        } w-full md:static md:flex-row md:gap-10 md:items-center md:w-fit md:h-auto md:py-0`}
      >
        <Link to="/" className="font-medium underline">
          Home
        </Link>
        <a href="">New</a>
        <Link to="/perfumes">Perfumes</Link>
        <a href="">Accessories</a>
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <Link
            to="/cart"
            className="flex items-center gap-2 w-fit cursor-pointer"
          >
            <span>Bag</span>
            <ShoppingCart className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            to="/login"
            className="w-fit px-4 py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500"
          >
            Log in
          </Link>
        )}
        {active ? (
          <X
            onClick={() => setActive(false)}
            className="cursor-pointer md:hidden"
          />
        ) : (
          <Menu
            onClick={() => setActive(true)}
            className="cursor-pointer md:hidden"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
