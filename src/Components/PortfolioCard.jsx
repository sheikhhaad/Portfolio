import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ name, Img, id, category, problem, outcome, spanClass }) => {
  let navigate = useNavigate();

  return (
    <motion.div
      className={`relative group rounded-2xl overflow-hidden glass cursor-pointer border border-white/10 flex flex-col h-full bg-card ${spanClass || "col-span-1"}`}
      onClick={() => navigate(`detailpage/${id}`)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Browser Mockup Header */}
      <div className="bg-card px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="ml-4 flex-1 bg-black/20 rounded-md py-1 px-3 text-xs text-center text-gray-500 font-mono overflow-hidden whitespace-nowrap text-ellipsis">
          {name.toLowerCase().replace(/\s+/g, '-')}.com
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-full h-full min-h-[250px] overflow-hidden flex-1 bg-black/40">
        <img src={Img} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-accent font-mono text-sm mb-2 tracking-widest">PROBLEM</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed font-sans">{problem || "Complex workflow hindering user conversions and retention."}</p>
          
          <h3 className="text-accent font-mono text-sm mb-2 tracking-widest">OUTCOME</h3>
          <p className="text-white font-semibold text-sm leading-relaxed font-sans">{outcome || "Increased user engagement by 40% with a streamlined UI."}</p>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="p-4 bg-card border-t border-white/5 flex justify-between items-center shrink-0">
        <h4 className="text-white font-semibold font-sans">{name}</h4>
        <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-mono">{category || "Web App"}</span>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
