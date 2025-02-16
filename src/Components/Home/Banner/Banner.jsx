import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    const slides = [
        { img: "//i.ibb.co.com/v4f0xFws/african-american-man-wearing-volunteer-t-shirt-donations-stand-showing-pointing-up-with-finger-numbe.jpg", text: "Support Winter Donation Campaigns" },
        { img: "//i.ibb.co.com/jN632Bp/volunteer-collects-things-from-donations-guy-packs-boxes-with-things-man-compares-endowment.jpg", text: "Help Local Communities Stay Warm" },
        { img: "//i.ibb.co.com/nsyrYcLP/female-volunteer-holding-clothes-donation-box-1.jpg", text: "Donate Now to Make a Difference" },
        { img: "//i.ibb.co.com/d4b34jqY/volunteer-holding-donate-box.jpg", text: "Donate Now to Make a Difference" },
     
      ];
    return (
        <div className="relative w-full mt-[65px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-[400px] md:h-[500px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.img}
                alt="Winter Donation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-4xl font-bold">
                {slide.text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Banner;