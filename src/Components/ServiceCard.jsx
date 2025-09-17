// RightCard.jsx
import React from "react";

const RightCard = ({ title, description }) => {
  return (
    <div className="bg-[#0e1625] rounded-2xl p-6 text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default RightCard;
