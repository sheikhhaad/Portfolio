import React from "react";

const LeftSec = ({ heading, title, subheading }) => {
  return (
    <div className="px-6 sm:px-8 md:px-10 py-4 font-display">
      {/* Heading */}
      {heading && (
        <p className="text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent to-white/70 mb-2 uppercase tracking-widest text-sm">
          {heading}
        </p>
      )}

      {/* Title */}
      {title && (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-3">
          {title}
        </h1>
      )}

      {/* Subheading */}
      {subheading && (
        <p className="text-base sm:text-lg font-medium text-gray-400">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default LeftSec;
