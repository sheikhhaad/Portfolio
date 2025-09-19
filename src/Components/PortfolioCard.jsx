import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/PortCard.css";

const PortfolioCard = ({ name, Img, id }) => {
  const [Color, setColor] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const colorgenretor = () => {
      let r = Math.floor(Math.random() * 40);
      let g = Math.floor(Math.random() * 40);
      let b = Math.floor(Math.random() * 40);
      setColor(`rgb(${r},${g},${b})`);
    };
    colorgenretor();
  }, []);

  return (
   <div className="font-quicksand">
     <motion.div
      whileHover={{ rotateX: 30 }}
      whileTap={{ scale: 0.95 }}
      className="portfolioCard"
      onClick={() => navigate(`detailpage/${id}`)}
      style={{ backgroundColor: Color }}
    >
      {/* Image wrapper with colored background */}
      <div className="portfolio-card-img" >
        <img src={Img} alt="logo" className="portfolio-card-img-inner" />
      </div>
    </motion.div>

      <div className="portfolio-card-text mt-3">
        <p className="text-white font-bold text-3xl">{name}</p>
      </div>
   </div>
  );
};

export default PortfolioCard;
