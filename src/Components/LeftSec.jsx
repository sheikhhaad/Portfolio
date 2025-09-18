import React from "react";

const LeftSec = ({ heading, title, subheading }) => {
  return (
    <div className="px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10">
      {/* Heading */}
      <p className="text-[#b5ff6d] text-base sm:text-lg md:text-xl font-medium mt-2 sm:mt-3">
        ✧ {heading}
      </p>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-3 font-bold font-sans leading-snug sm:leading-tight">
        {title}
      </h1>

      {/* Subheading */}
      <p className="text-white text-base sm:text-lg md:text-xl mt-3 max-w-2xl">
        {subheading}
      </p>
    </div>
  );
};

export default LeftSec;
