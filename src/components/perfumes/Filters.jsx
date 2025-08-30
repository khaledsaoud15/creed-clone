import { Filter } from "lucide-react";
import React from "react";

const Filters = () => {
  return (
    <section className="px-8 md:px-12 lg:px-24 py-8 flex items-center justify-between">
      <div className="space-x-4 lg:space-x-8">
        <select className="border-b  py-2 outline-none ">
          <option defaultValue="time" disabled>
            Sort by
          </option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
          <option value="discount">Discounts</option>
        </select>
        <select className="border-b  py-2 outline-none">
          <option defaultValue="category" disabled>
            Category
          </option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
      <button className="border py-2 px-4 outline-none rounded flex items-center justify-center gap-2 cursor-pointer active:bg-gray-200">
        Filter <Filter className="w-4 h-4" />
      </button>
    </section>
  );
};

export default Filters;
