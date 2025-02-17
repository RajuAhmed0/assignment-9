import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHandHoldingDollar } from "react-icons/fa6";

const Banner = () => {
  const slides = [
    { img: "./img/banner-1.jpg", text: "Support Winter Donation Campaigns" },
    { img: "./img/banner-2.jpg", text: "Help Local Communities Stay Warm" },
    { img: "./img/banner-3.jpg", text: "Donate Now to Make a Difference" },
    { img: "./img/banner-4.jpg", text: "Donate Now to Make a Difference" },

  ];
  return (
    <div className="relative w-full mt-[65px] mx-1">
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: orange !important; 
          }

          .swiper-button-next:hover, .swiper-button-prev:hover {
            color: red !important; 
          }

          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 28px; 
          }

           .swiper-pagination-bullet {
            background-color: gray !important;
             opacity: 0.6;
            }

           .swiper-pagination-bullet-active {
            background-color: orange !important;
             opacity: 1;
                  }
        `}
      </style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              alt="Winter Donation"
              className="w-full h-full "
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-4xl font-bold">
              <div className=" flex items-center justify-center px-6 md:px-12 lg:px-24" >
                <div className="absolute inset-0  bg-opacity-50"></div>
                <div className="relative z-10 max-w-2xl text-white text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-full md:text-sm text-xs">
                    <span className=""><FaHandHoldingDollar className="w-9" /></span>WELCOME TO DONATE WORLD
                  </div>
                  <h1 className="mt-4  md:text-5xl text-xl font-bold leading-tight">
                    We Can Make The World <br /> <span className="text-orange-500">Better Together.</span>
                  </h1>
                  <p className="mt-4 md:text-lg text-xs md:block hidden">
                    Your donation can change lives! Every contribution, big or small, helps make a difference. Support the cause today
                  </p>
                  <button className="md:mt-6 mt-3 mb-4 md:px-6 px-3 md:py-3 py-2 bg-orange-500 hover:bg-orange-600 transition-all text-white font-semibold md:text-lg text-sm rounded-lg">
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;