import React from "react";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="w-full h-fit  flex flex-col gap-6">
      <h3 className="text-xl font-medmium underline">Reviews</h3>
      <div className="flex flex-col gap-6 h-30 overflow-y-auto pr-2 w-full">
        <div className="flex flex-col gap-3 w-full h-fit">
          <div className="flex items-center gap-2">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.mEma0ZcipymPAHIYoIuFiAHaJa%3Fpid%3DApi&f=1&ipt=b40990346fa86c1e45b47041c5b4f996f8be4d6afb0adbe84e40e6c10ee5479e&ipo=images"
              alt="user"
              className="w-8 h-8 object-cover rounded-full"
            />
            <h4 className="text-gray-800">Jon smith</h4>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            illum rerum tenetur saepe, eum dolorum aliquid dolorem repellat,
            quasi doloremque minima assumenda qui corporis consequatur.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-fit">
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded"
          placeholder="Leave a review..."
        ></textarea>
        <button className="w-full md:w-fit  px-12 flex items-center justify-center py-2 cursor-pointer bg-yellow-500 rounded shadow-lg hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Reviews;
