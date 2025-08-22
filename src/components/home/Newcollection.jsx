import gsap from "gsap";

import { products } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Newcollection = () => {
  return (
    <section
      id="collection"
      className="relative  w-full h-fit px-8 md:px-12 lg:px-24 py-16 flex flex-col gap-8"
    >
      <h1
        id="text"
        className="w-fit mx-auto text-xl md:text-2xl lg:text-3xl font-inknut font-bold"
      >
        NEW COLLECTION
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="w-full h-fit !static"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="p-3 group cursor-pointer md:p-6 rounded w-full bg-gray-100 h-fit flex flex-col gap-6">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-1/2 h-[25vh] md:h-[20vh] lg:h-[30vh] lg:w-2/5 object-cover mx-auto group-hover:scale-105 transition-all duration-300"
              />
              <div className="flex flex-col md:flex-row gap-1 items-center w-full justify-between">
                <h3 className="font-bold text-lg md:text-xl lg:text-2xl font-inknut">
                  {p.title.length > 10 ? p.title.slice(0, 10) + "..." : p.title}
                </h3>
                <span className="font-semibold text-sm md:text-lg lg:text-xl font-inknut">
                  {p.size[0]}ML
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Newcollection;
