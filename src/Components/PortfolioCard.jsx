// src/Components/PortfolioCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Terminal } from "lucide-react";

const PortfolioCard = ({ name, Img, id, category, problem, outcome, spanClass }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`relative group rounded-2xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-accent/40 flex flex-col h-full transition-all duration-500 shadow-xl ${
        spanClass || "col-span-1"
      }`}
      onClick={() => navigate(`/projects/detailpage/${id}`)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chrome Terminal Header */}
      <div className="bg-[#0d0d0d] px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-accent/80"></div>
        </div>
        <div className="flex-1 mx-3 bg-black/40 rounded-md py-1 px-3 text-[11px] text-center text-gray-400 font-mono overflow-hidden whitespace-nowrap text-ellipsis border border-white/5">
          {name.toLowerCase().replace(/\s+/g, "-")}.app
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      {/* Image Container */}
      <div className="relative w-full h-full min-h-[240px] overflow-hidden flex-1 bg-black/60">
        <img
          src={Img}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <h5 className="text-accent font-mono text-xs tracking-widest uppercase">
              CHALLENGE
            </h5>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed font-sans">
            {problem || "Designing and deploying a high-availability, responsive interface."}
          </p>

          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <h5 className="text-white font-mono text-xs tracking-widest uppercase">
              OUTCOME
            </h5>
          </div>
          <p className="text-white font-semibold text-xs sm:text-sm leading-relaxed font-sans">
            {outcome || "Engineered scalable solution with responsive component architecture."}
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-[#0d0d0d] border-t border-white/10 flex justify-between items-center shrink-0">
        <h4 className="text-white font-bold text-sm sm:text-base font-display truncate mr-2">
          {name}
        </h4>
        <span className="text-[10px] bg-accent/10 border border-accent/30 text-accent px-2.5 py-1 rounded-full font-mono shrink-0">
          {category || "Web App"}
        </span>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
