import { motion } from "framer-motion";
import ReactLogo from "../assets/react.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ name, Img, id }) => {
  const [Color, setColor] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    let colorgenretor = () => {
      let r = Math.floor(Math.random() * 40);
      let g = Math.floor(Math.random() * 40);
      let b = Math.floor(Math.random() * 40);
      setColor(`rgb(${r},${g},${b})`);
    };
    colorgenretor();
  }, []);

  return (
    <>
      <motion.div
        whileHover={{ rotateX: 30 }}
        whileTap={{ scale: 0.95 }}
        className=" shadow-lg rounded-[30px] flex flex-col items-center justify-center p-6"
        onClick={() => navigate(`detail/${id}`)}
      >
        {/* img ke liye colored bg */}
        <div
          className="p-6 w-150 h-100 flex rounded-[30px] items-center justify-center"
          style={{ backgroundColor: Color }}
        >
          <img src={Img} alt="React logo" className="w-100 h-80 cover" />
        </div>

        {/* text transparent rahe */}
        <div className=" mt-4 self-start ml-15">
          <h1 className="text-white font-mono font-bold text-xl">{name}</h1>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioCard;
