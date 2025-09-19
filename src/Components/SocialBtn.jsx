import React from "react";
import { motion } from "framer-motion";

const SocialBtn = ({ path, Icon, styling = "" }) => {
  return (
    <motion.a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors hidden sm:flex font-quicksand ${styling}`} 
      // hidden on mobile, visible on sm+
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
    </motion.a>
  );
};

export default SocialBtn;
