import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedBtn = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="inline-block"
    >
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative group overflow-hidden border border-white w-48 px-6 py-2 font-bold font-mono rounded-full text-white transition duration-500"
      >
        {/* Background filler */}
        <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full"></span>

        {/* Text */}
        <span className="relative z-10 transition duration-500 group-hover:text-black">
          {hover ? "About me" : "Know me Better"}
        </span>
      </button>
    </motion.div>
  );
};

export default AnimatedBtn;
