import React from "react";
import { motion } from "framer-motion"; // Framer Motion

const AboutSec = ({ title, description }) => {
  return (
    <motion.div
      className="px-4 md:mt-20 text-center md:px-8 lg:px-12 font-quicksand"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
    >
      {/* Title */}
      <h1 className="shine-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
        {title}
      </h1>

      {/* Description */}
      <p className=" font-thin sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-5 md:mt-6 mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default AboutSec;
