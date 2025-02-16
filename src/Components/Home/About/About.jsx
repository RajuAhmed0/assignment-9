import React from 'react';
import { FaHandHoldingHeart, FaDollarSign, FaArrowRight, FaDonate } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <section className="xl:px-0 px-2 py-12 md:py-16 lg:py-20 bg-white">
        <div className=" mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Image Section */}
          <div className="relative w-full lg:w-1/2">
            <img
              src="/img/about-img.jpg" // Replace with your image
              alt="Volunteers"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-orange-400 text-white p-4 rounded-lg flex items-center gap-3">
              <GiAchievement className="text-orange-500 text-3xl" />
              <div>
                <p className="text-sm">15 YEARS OF</p>
                <p className="text-lg font-semibold">RUNNING CAUSES</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className="w-full lg:w-1/2">
            <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm uppercase ">
              <FaDonate /> About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              A Trusted Non-Profit <br className="hidden md:block" />
              Charity Organization
            </h2>
            <p className="text-gray-600 mt-4">
              Support our mission to bring hope and change lives. We are a trusted non-profit dedicated to helping those in need.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 border rounded-lg shadow-md bg-white hover:bg-orange-50 transition">
                <FaHandHoldingHeart className="text-orange-500 text-2xl" />
                <span className="font-semibold text-gray-800">
                  Be A Hero, Donate Now
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 border rounded-lg shadow-md bg-white hover:bg-orange-50 transition">
                <FaDollarSign className="text-orange-500 text-2xl" />
                <span className="font-semibold text-gray-800">
                  Financial Help For Poor
                </span>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-orange-500 text-3xl font-bold">140+</p>
                <p className="text-gray-700">Volunteers</p>
              </div>
              <div className="text-center">
                <p className="text-orange-500 text-3xl font-bold">30K</p>
                <p className="text-gray-700">Total Human</p>
              </div>
              <div className="text-center">
                <p className="text-orange-500 text-3xl font-bold">82</p>
                <p className="text-gray-700">Lives Saved</p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-6 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              SEE MORE <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;