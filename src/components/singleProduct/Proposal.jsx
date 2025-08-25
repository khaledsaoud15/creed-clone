import React from "react";
import { products } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Proposal = () => {
  return (
    <section className="flex flex-col gap-8 w-full h-fit">
      <h1 className="w-fit mx-auto text-xl md:text-2xl lg:text-3xl font-inknut font-bold">
        Your next purchase
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 45,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        className="overflow-hidden w-full"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <div
              className=" w-full h-fit flex flex-col gap-4 p-2 md:p-4 lg:p-6 rounded hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
              key={i}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-1/2 h-[13vh] md:h-[20vh] lg:h-[35vh] object-cover mx-auto"
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
              <button className="w-full py-2 bg-yellow-500 rounded shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium">
                see more
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Proposal;
