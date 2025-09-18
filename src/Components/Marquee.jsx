import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      {/* Marquee Section */}
      <motion.div
        className="relative overflow-hidden mt-16 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
       <div className="marquee mt-16 mb-8">
  <div className="marquee-content">
    <h1>
      Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧ Mentor ✧
    </h1>
    <h1>
      Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧ Mentor ✧
    </h1>
  </div>
</div>

      </motion.div>

      <hr className="border-gray-700" />
    </>
  );
};

export default Marquee;
