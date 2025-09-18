// RightCard.jsx
import React from "react";

const RightCard = ({ title, description }) => {
  return (
    <div className="bg-[#0e1625] rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-lg transition-transform hover:scale-105">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default RightCard;
