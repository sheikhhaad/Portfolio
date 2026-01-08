// AnimatedBtn.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedBtn = ({ title, sectilte, link }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 1 }}
      className="inline-block"
    >
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative group overflow-hidden border cursor-pointer border-white w-40 px-0 py-3.5 font-bold font-quicksand rounded-full text-white transition duration-500"
      >
        {/* Background filler */}
        <Link to={link}>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full"></span>

          {/* Text */}
          <span className="relative z-10 transition duration-500 group-hover:text-black">
            {hover && sectilte ? sectilte : title}
          </span>
        </Link>
      </button>
    </motion.div>
  );
};

export default AnimatedBtn;
