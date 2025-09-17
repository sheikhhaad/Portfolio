// LeftSection.jsx
import React from "react";
import bgImage from "../assets/Service.png"; // image ka path

const ServicebgImg = () => {
  return (
    <div
      className="relative rounded-2xl p-10 text-white shadow-lg flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for darkening the image */}
      <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

      {/* Text content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">200+ Projects Launched</h2>
        <p className="text-gray-300 mb-6">
          With over 200 successful projects, we bring experience, creativity, and
          reliability to every new website.
        </p>
        <button className="px-5 py-2 bg-white text-black font-medium rounded-md shadow hover:bg-gray-200 transition">
          Get started now
        </button>
      </div>
    </div>
  );
};

export default ServicebgImg;
