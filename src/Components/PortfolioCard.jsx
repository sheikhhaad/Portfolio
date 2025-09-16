import { motion } from "framer-motion";
import ReactLogo from "../assets/react.svg";
import { useEffect, useState } from "react";

const PortfolioCard = () => {
  const [Color, setColor] = useState();
  useEffect(() => {
    let colorgenretor = () => {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      setColor(`rgb(${r},${g},${b})`);
    };
    colorgenretor();
  }, []);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-80 h-70 shadow-lg rounded-xl flex items-center justify-center p-6`}
      style={{ backgroundColor: Color }}
    >
      <img src={ReactLogo} alt="React logo" className="w-16 h-16" />
    </motion.div>
  );
};

export default PortfolioCard;
