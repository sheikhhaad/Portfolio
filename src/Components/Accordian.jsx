import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const Accordion = ({ title, description, icon, isOpen, onToggle }) => {
  return (
    <div
      className={`border my-3 sm:my-4 md:my-0 mx-2 rounded-2xl border-gray-800 cursor-pointer font-quicksand`}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center  sm:px-5 md:px-6  sm:py-4 text-white"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && <span className="text-lg sm:text-xl">{icon}</span>}
          <h2 className="text-base sm:text-lg md:text-xl font-medium">
            {title}
          </h2>
        </div>
        <span className="text-xl sm:text-2xl text-[#2DE72c]">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </div>

      {/* Content */}
      <motion.div
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden px-4 sm:px-5 md:px-6"
      >
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed py-2 sm:py-3">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Accordion;
