import React from "react";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

const Check = ({ userId, cartId, data }) => {
  const { mutate } = useAction("/payment/checkout", "post", "payment");

  const checkout = () => {
    mutate({
      userId,
      cartId,
    });
  };

  return (
    <section className="flex flex-col   rounded h-fit bg-gray-100 w-full lg:w-1/4 lg:sticky lg:top-5">
      <div className="flex items-center justify-between border-b p-4 border-gray-300">
        <h2 className="text-base font-semibold">Total :</h2>
        <span className="text-gray-500">£300.00</span>
      </div>
      <div className="flex items-center justify-between border-b p-4 border-gray-300">
        <h2 className="text-base font-semibold">Coupon :</h2>
        <span className="text-gray-500">12%</span>
      </div>
      <div className="flex items-center justify-between border-b p-4 border-gray-300">
        <h2 className="text-base font-semibold">Tax :</h2>
        <span className="text-gray-500">5%</span>
      </div>
      <div className="flex items-center justify-between border-b p-4 border-gray-300">
        <h2 className="text-base font-semibold">Sub Total :</h2>
        <span className="text-gray-500">£285.00</span>
      </div>
      <div className="flex items-center gap-4 p-4 ">
        <button
          onClick={checkout}
          disabled={!data || !data.products || data.products.length < 1}
          className="w-1/2 py-2 rounded font-medium 
    disabled:bg-gray-400 disabled:cursor-not-allowed
    bg-yellow-500 hover:bg-yellow-300 
    active:bg-white active:ring-2 active:ring-offset-2 
    active:text-yellow-500 active:ring-yellow-500"
        >
          checkout
        </button>

        <Link
          to="/perfumes"
          className="text-gray-500 w-1/2 text-xs cursor-pointer underline"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Check;
