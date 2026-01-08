import React from "react";

const LeftSec = ({ heading, title, subheading }) => {
  return (
    <div className="px-6 sm:px-8 md:px-10 py-4 font-quicksand">
      {/* Heading */}
      {heading && (
        <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#7bf958] to-green-400 mb-2">
          {heading}
        </p>
      )}

      {/* Title */}
      {title && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7bf958] to-cyan-400 mb-3">
          {title}
        </h1>
      )}

      {/* Subheading */}
      {subheading && (
        <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-green-100">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default LeftSec;
