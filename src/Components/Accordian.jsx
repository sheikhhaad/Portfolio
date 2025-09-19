import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // modern icons

const Accordion = ({ title, description, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border my-3 sm:my-4 md:my-5 mx-2 rounded-2xl border-gray-800 cursor-pointer transition-all duration-300 ${
        isOpen ? "bg-gray-900/20" : ""
      } font-quicksand`} // font added here
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-white">
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && <span className="text-lg sm:text-xl">{icon}</span>}
          <h2 className="text-base sm:text-lg md:text-xl font-medium">
            {title}
          </h2>
        </div>
        <span className="text-xl sm:text-2xl text-blue-400">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 px-4 sm:px-5 md:px-6 ${
          isOpen ? "max-h-60 opacity-100 py-2 sm:py-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
