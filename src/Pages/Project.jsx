import React from "react";
import { motion } from "framer-motion";
import LeftSec from "../Components/LeftSec";
import PortfolioCard from "../Components/PortfolioCard";
import nexcent from "../assets/nexcent.png";
import adminpanel from "../assets/adminpanel.png";
import donation from "../assets/donationweb.png";
import gemini from "../assets/gemini.png";
import chatAppImage from "../assets/ChatApp.png";
import blogAppImage from "../assets/BlogApp.png";
import diceGameImage from "../assets/dicgame.png";
import portfolioImage from "../assets/portfolio.png";
import disneyImage from "../assets/disney.png";
import Soni from "../assets/Soni.png";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

const Project = () => {
  const projects = [
    {
      name: "Nexcent",
      image: nexcent,
      id: 1,
      link: "https://store-admin-panel.vercel.app/",
    },
    {
      name: "Admin Panel",
      image: adminpanel,
      id: 2,
      link: "https://store-admin-panel.vercel.app/",
    },
    {
      name: "Donation Web",
      image: donation,
      id: 3,
      link: "https://lifthumanity.vercel.app/",
    },
    {
      name: "Google Gemini",
      image: gemini,
      id: 4,
      link: "https://chat-bot-gemini-sepia.vercel.app/",
    },
    {
      name: "Chat App",
      image: chatAppImage,
      id: 5,
      link: "https://chat-app-rose-theta.vercel.app/",
    },
    {
      name: "Blog App",
      image: blogAppImage,
      id: 6,
      link: "https://blogg-app-tech.vercel.app/",
    },
    {
      name: "Dice Game",
      image: diceGameImage,
      id: 7,
      link: "https://dice-game-tan-ten.vercel.app/",
    },
    {
      name: "Portfolio",
      image: portfolioImage,
      id: 8,
      link: "https://haad-portfolio-haad-sheikhs-projects.vercel.app/",
    },
    {
      name: "AL-Tayer Holidays",
      image: disneyImage,
      id: 9,
      link: "https://disney-land-ten.vercel.app/",
    },
    {
      name: "Soni UI",
      image: Soni,
      id: 10,
      link: "https://soni-auto-ui-react.vercel.app/",
    },
  ];

  return (
    <>
      <ChingariBackground />
      
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LeftSec
          heading="✧ My Work"
          title="Creating next level digital products, brands & experiences."
        />
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-around mb-20 mt-10 p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {projects.map((project, i) => (
          <motion.div 
            key={project.id} 
            className={i % 2 === 0 ? "mt-20" : "mt-10"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <PortfolioCard
              Img={project.image}
              name={project.name}
              id={project.id}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Project;