import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductsPagination = ({ products, val }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (val === "all") {
      setData(products);
    } else {
      setData(
        products.filter((el) => el.category.toLowerCase() === val.toLowerCase())
      );
    }
    setPage(1);
  }, [val, products]);

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <section className="px-8 md:px-12 lg:px-24 space-y-8 pt-8 pb-22">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 w-full h-fit">
        {data.slice(startIndex, endIndex).map((p, i) => (
          <div
            key={i}
            className="w-full h-fit flex flex-col gap-4 p-2 md:p-4 lg:p-6 rounded hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="w-1/2 h-[13vh] md:h-[20vh] lg:h-[30vh] object-cover mx-auto"
            />
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-lg md:text-xl lg:text-2xl font-inknut font-medium">
                {p.title.length > 8 ? p.title.slice(0, 8) + "..." : p.title}
              </h1>
              <span className="text-xs text-gray-500">{p.type}</span>
              <span className="text-gray-500 text-xs flex gap-2 justify-center">
                <span className="font-bold text-black font-inknut">
                  {p.price[0].toFixed(2)}£
                </span>{" "}
                for {p.size[0]}ml
              </span>
            </div>
            <Link to={`/product/${p._id}`}>
              <button className="w-full py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center flex items-center gap-6 w-fit mx-auto">
        <BsArrowLeft
          className={`${
            page === 1 ? "pointer-events-none text-gray-200" : "cursor-pointer"
          }`}
          onClick={handlePrev}
        />
        <span className="flex items-center pointer-events-none">
          {page} <span className="text-gray-500">/{totalPages}</span>
        </span>
        <BsArrowRight
          className={`${
            page === totalPages
              ? "pointer-events-none text-gray-200 "
              : "cursor-pointer"
          }`}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default ProductsPagination;
