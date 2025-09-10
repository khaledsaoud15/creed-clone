import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="w-3/4 rounded h-fit p-4 shadow bg-gray-100 md:w-1/3 absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-4">
      <h1 className="text-xl font-semibold font-inknut">CONGRATULATIONS</h1>
      <span className="text-gray-500">
        Your payment was{" "}
        <span className="text-green-500 font-semibold">Successfull</span>
      </span>
      <div className="space-x-4">
        <Link to="/order">
          <button className="w-fit px-4 py-2 bg-blue-500 rounded cursor-pointer">
            Track your order
          </button>
        </Link>
        <Link to="/">
          <button className="w-fit px-4 py-2 bg-transparent border-2 rounded cursor-pointer">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Success;
