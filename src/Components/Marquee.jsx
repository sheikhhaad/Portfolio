import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <>
      {/* Marquee Section */}
      <hr className="border-gray-900" />

      <motion.div
        className="relative overflow-hidden mb-2 font-bbhsansbartle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="marquee mb-2 mt-2">
          <div className="marquee-content">
            <p className="font-bbhsansbartle font-semibold">
              Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧
              Mentor ✧
            </p>
            <p className="font-quicksand">
              Development ✧ Graphics ✧ Designing ✧ Websites ✧ Animations ✧
              Mentor ✧
            </p>
          </div>
        </div>
      </motion.div>

      <hr className="border-gray-900" />
    </>
  );
};

export default Marquee;
