// LeftSection.jsx
import React from "react";
import bgImage from "../assets/Service.png"; // image ka path

const ServicebgImg = () => {
  return (
    <div
      className="relative rounded-2xl p-6 sm:p-8 md:p-10 text-white shadow-lg flex flex-col justify-center bg-cover bg-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          200+ Projects Launched
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
          With over 200 successful projects, we bring experience, creativity,
          and reliability to every new website.
        </p>
        <button className="px-4 sm:px-5 py-2 bg-white text-black text-sm sm:text-base font-medium rounded-md shadow hover:bg-gray-200 transition">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default ServicebgImg;
