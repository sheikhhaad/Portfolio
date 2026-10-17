import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const items = [
    "MERN Stack Developer",
    "Front-End Engineering",
    "React.js & Next.js",
    "Node.js & MongoDB",
    "Interactive 3D UI",
    "API Architecture",
    "Digitano Developer",
    "Clean Architecture",
  ];

  return (
    <div className="py-4 border-y border-white/10 relative overflow-hidden bg-black/40 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="font-mono text-sm sm:text-base font-semibold tracking-widest uppercase text-gray-300">
              {text}
            </span>
            <span className="text-accent text-sm shadow-[0_0_8px_#00FF00]">✧</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
