import React from "react";
import { BiTrash } from "react-icons/bi";

const Items = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-3/4">
      <div className="overflow-x-auto ">
        <table className="table-auto w-full min-w-max border-collapse">
          <thead className="bg-gray-200">
            <tr className="text-center">
              <th className="py-5 px-3  border-b border-gray-300">Image</th>
              <th className="py-5 px-3 border-b border-gray-300">Title</th>
              <th className="py-5 px-3 border-b border-gray-300">Price</th>
              <th className="py-5 px-3 border-b border-gray-300">Quantity</th>
              <th className="py-5 px-3 border-b border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((_, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 text-center transition-colors"
              >
                <td className="p-3 border-b border-gray-300">
                  <img
                    src="../assets/images/silver.png"
                    alt="Aventus"
                    loading="lazy"
                    className="w-16 h-16 object-cover rounded mx-auto"
                  />
                </td>
                <td className="p-3 border-b border-gray-300 font-bold">
                  Aventus
                </td>
                <td className="p-3 border-b border-gray-300">£300.00</td>
                <td className="p-3 border-b border-gray-300">1</td>
                <td className="p-3 border-b border-gray-300">
                  <div className="flex items-center justify-center gap-4">
                    <span>£300.00</span>
                    <button className="text-red-500 hover:text-red-700 transition">
                      <BiTrash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
        <div className="flex items-center gap-3 w-full md:w-3/5">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="rounded outline-0 border border-gray-500 py-2 px-4 w-4/5"
          />
          <button className="bg-blue-500 text-white py-2  rounded w-1/5 cursor-pointer hover:bg-blue-700 active:bg-white active:ring-2 active:ring-offset-2 active:ring-blue-500 active:text-blue-500 font-medium">
            Apply
          </button>
        </div>
        <p className="text-gray-500">30-day return guaranteed</p>
      </div>
    </div>
  );
};

export default Items;
