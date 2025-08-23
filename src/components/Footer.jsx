import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 md:px-16 lg:px-24 h-full flex flex-col gap-10  py-8">
      <div className="w-full flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-4 md:w-1/2  h-fit">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium font-inknut">
            CREED
          </h1>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-2xl" />
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
          </div>
        </div>
        <div className="flex items-center w-full gap-4 md:w-1/2  h-fit">
          <input
            type="text"
            className="w-4/5 rounded border border-gray-500  py-2 px-4 md:w-3/5 md:ml-auto"
            placeholder="Ex: your-email@example.com"
          />
          <button className="w-1/5 bg-yellow-500 py-2 rounded shadow">
            SEND
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between  w-full gap-8 ">
        <div className="flex flex-col gap-3 w-fit h-fit ">
          <h2 className="text-lg font-medium font-inknut ">Helo & Support</h2>
          <p className="text-sm text-gray-600">Contact us</p>
          <p className="text-sm text-gray-600">Help & Informations</p>
          <p className="text-sm text-gray-600">Return Policy</p>
          <p className="text-sm text-gray-600">Delivery condition</p>
          <p className="text-sm text-gray-600">Online advantages</p>
        </div>
        <div className="flex flex-col gap-3 w-fit h-fit ">
          <h2 className="text-lg font-medium font-inknut ">Enterprise</h2>
          <p className="text-sm text-gray-600">Our history</p>
          <p className="text-sm text-gray-600">Durability Promise</p>
          <p className="text-sm text-gray-600">One Tree Planted</p>
        </div>
        <div className="flex flex-col gap-3 w-fit h-fit ">
          <h2 className="text-lg font-medium font-inknut ">International</h2>
          <p className="text-sm text-gray-600">Australia</p>
          <p className="text-sm text-gray-600">United States</p>
          <p className="text-sm text-gray-600">Germany</p>
          <p className="text-sm text-gray-600">Spain</p>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-500 flex flex-col gap-4 w-full md:flex-row md:justify-between">
        <span className="text-gray-500 font-inknut underline">
          Privacy policy & Terms of use
        </span>
        <div className="flex items-center gap-3">
          <img
            src="./assets/images/visa.png"
            alt="visa"
            loading="lazy"
            className="w-10 h-auto object-cover"
          />
          <img
            src="./assets/images/visa.png"
            alt="visa"
            loading="lazy"
            className="w-10 h-auto object-cover"
          />
          <img
            src="./assets/images/visa.png"
            alt="visa"
            loading="lazy"
            className="w-10 h-auto object-cover"
          />
          <img
            src="./assets/images/visa.png"
            alt="visa"
            loading="lazy"
            className="w-10 h-auto object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
