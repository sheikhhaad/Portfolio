import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      {/* Marquee Section */}
      <hr className="border-gray-900" />

      <motion.div
        className="relative overflow-hidden mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="marquee mb-2 mt-2">
          <div className="marquee-content flex gap-4 items-center">
            <p className="font-sans font-semibold text-xl tracking-widest text-accent">
              Software Architect ✧ AI Engineer ✧ Mobile Developer ✧ Full-Stack Engineer ✧
            </p>
            <p className="font-sans font-semibold text-xl tracking-widest text-accent">
              Software Architect ✧ AI Engineer ✧ Mobile Developer ✧ Full-Stack Engineer ✧
            </p>
          </div>
        </div>
      </motion.div>

      <hr className="border-gray-900" />
    </>
  );
};

export default Marquee;
