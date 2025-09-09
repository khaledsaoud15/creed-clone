import { CheckCircleIcon } from "lucide-react";
import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { PiInvoice } from "react-icons/pi";

const Tracker = () => {
  return (
    <section className="flex flex-col gap-8 h-fit w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl  lg:text-4xl font-medium">
          Order <span className="text-yellow-500">#5214</span>
        </h1>
        <button className="w-fit px-4 py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 flex items-center gap-4">
          Print invoice
          <FaFileInvoice />
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full h-fit py-8 shadow px-8 rounded bg-gray-100">
        <h1 className="text-2xl font-medium">Order tracking</h1>
        <div className="w-full  h-fit pt-3 border-t border-gray-200 flex flex-col  gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col w-fit gap-2">
            <div className="flex items-center gap-2">
              <p className="">Order placed</p>
              <CheckCircleIcon className="text-green-500" />
            </div>
            <span className="text-gray-500">13 sep 2025</span>
          </div>
          <div className="w-24 h-0.5 bg-gray-300"></div>
          <div className="flex flex-col w-fit gap-2">
            <div className="flex items-center gap-2">
              <p className="">Packed</p>
              <CheckCircleIcon className="text-green-500" />
            </div>
            <span className="text-gray-500">13 sep 2025</span>
          </div>
          <div className="w-24 h-0.5 bg-gray-300"></div>
          <div className="flex flex-col w-fit gap-2">
            <div className="flex items-center gap-2">
              <p className="">Order Shipped</p>
              <CheckCircleIcon className="text-green-500" />
            </div>
            <span className="text-gray-500">13 sep 2025</span>
          </div>
          <div className="w-24 h-0.5 bg-gray-300"></div>
          <div className="flex flex-col w-fit gap-2">
            <div className="flex items-center gap-2">
              <p className="">Order Delivered</p>
              <CheckCircleIcon className="text-green-500" />
            </div>
            <span className="text-gray-500">13 sep 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracker;
