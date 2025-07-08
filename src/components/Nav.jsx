import {
  CircleAlert,
  House,
  Search,
  ShoppingBasketIcon,
  Truck,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-full bg-gray-200  font-copperplate text-right space-x-8 px-8 py-2 hidden md:block">
        <span className="uppercase">Loaclisateur de magasin</span>
        <span className="uppercase">Loaclisateur de pays</span>
      </div>
      <nav className="sticky font-copperplate  bg-white z-30 top-0 flex flex-col px-4 md:px-8   h-fit justify-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div
              className="flex flex-col gap-[2px] md:hidden cursor-pointer"
              onClick={() => setActive(true)}
            >
              <span className="w-4 h-[2px] bg-black rounded"></span>
              <span className="w-4 h-[2px] bg-black rounded"></span>
              <span className="w-4 h-[2px] bg-black rounded"></span>
            </div>
            <div className=" items-center hidden md:flex bg-transparent md:border-b border-gray-200 h-fit py-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none  md:block "
              />
              <Search className="cursor-pointer text-gray-600 " />
            </div>
          </div>
          <img
            src="./assets/images/creed-logo.png"
            alt="logo"
            loading="lazy"
            className="h-20 mx-auto md:h-24 lg:h-40 lg:w-1/6 "
          />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 ">
              <h1 className=" hidden md:block font-copperplate ">MON COMPTE</h1>
              <User className="text-gray-600" />
            </div>
            <div className="flex items-center gap-2 ">
              <h1 className=" hidden md:block font-copperplate">MON PANE</h1>
              <ShoppingBasketIcon className="text-gray-600" />
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 ${
            active ? "left-0" : "-left-250"
          }  w-3/5 h-screen flex flex-col  gap-4 transition-all duration-300 bg-white z-20 md:static md:flex-row  md:w-full  md:h-fit md:pb-3`}
        >
          <div className="flex items-center justify-between md:hidden px-4 pt-8">
            <House className="cursor-pointer" />
            <X className="cursor-pointer" onClick={() => setActive(false)} />
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:justify-between w-full p-4 md:p-0">
            <span className="uppercase cursor-pointer">Nouveau</span>
            <span className="uppercase cursor-pointer">parfums</span>
            <span className="uppercase cursor-pointer">accessoires</span>
            <span className="uppercase cursor-pointer">cadeauc</span>
            <span className="uppercase cursor-pointer">corps</span>
            <span className="uppercase cursor-pointer">parfums d'ambiance</span>
            <span className="uppercase cursor-pointer">The house of creed</span>
          </div>
          <div className="flex flex-col gap-6 bg-gray-200 h-full p-4 md:hidden">
            <span className="cursor-pointer">Localisateur de Magasin</span>
            <span className="cursor-pointer">Localisateur de Payes</span>
          </div>
        </div>
      </nav>
      <div className="items-center justify-center gap-8 py-3 bg-gray-200 font-copperplate hidden md:flex">
        <div className="flex items-center gap-2 cursor-pointer">
          <Truck className="text-gray-400 w-5" />
          <span className="text-sm text-gray-500">
            Livraison & échantillons offert avec vos commandes*
          </span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <CircleAlert className="text-gray-400 w-5" />
          <span className="text-sm text-gray-500">
            Inscriver-vous & profiter de 10% de réduction sure votre premier
            commande*
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
