// src/Components/AnimatedBtn.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedBtn = ({ title, sectilte, link = "/" }) => {
  const [hover, setHover] = useState(false);
  const isExternal = link.startsWith("http") || link.startsWith("mailto") || link.startsWith("tel");

  const content = (
    <span className="relative z-10 font-mono text-xs uppercase tracking-widest font-bold transition duration-300 group-hover:text-black flex items-center justify-center">
      {hover && sectilte ? sectilte : title}
    </span>
  );

  const buttonInner = (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group overflow-hidden border border-accent px-6 py-3.5 rounded-full text-white transition-all duration-300 cursor-pointer inline-flex items-center justify-center hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] min-w-[150px]"
    >
      <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full -z-0"></span>
      {content}
    </div>
  );

  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
      {isExternal ? (
        <a href={link} target="_blank" rel="noreferrer" className="no-underline">
          {buttonInner}
        </a>
      ) : (
        <Link to={link} className="no-underline">
          {buttonInner}
        </Link>
      )}
    </motion.div>
  );
};

export default AnimatedBtn;
