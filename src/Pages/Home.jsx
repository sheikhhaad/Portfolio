import React, { useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { motion } from "framer-motion";
import "../style/marquee.css";
import AboutSec from "../Components/AboutSec";
import LeftSec from "../Components/LeftSec";
import PortfolioCard from "../Components/PortfolioCard";
import Marquee from "../Components/Marquee";
import AnimatedBtn from "../Components/AnimatedBtn";
import nexcent from '../assets/nexcent.png'
import adminpanel from '../assets/adminpanel.png'
import donation from '../assets/donationweb.png'
import gemini from '../assets/gemini.png'



const Home = () => {
  const projects = [
  {
    name: "Nexcent",
    image: nexcent,
  },
  {
    name: "Admin Panel",
    image: adminpanel ,
  },
  {
    name: "Donation Web",
    image: donation,
  },
  {
    name: "Google Gemini",
    image: gemini,
  },
];

  return (
    <>
      {/* Intro Section */}
      <div className="mt-40 flex flex-col justify-center bg-black text-white px-8">
        <motion.p
          className="text-green-400 mb-4 text-2xl font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          👋 Hey! It's me <span className="font-semibold">Haad Sheikh</span>,
        </motion.p>

        <motion.h1
          className="text-4xl md:text-[5.5rem] font-bold font-serif mb-6 leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting{" "}
          <span className="text-[#58f960] md:text-[5.5rem] text-5xl">
            purpose driven <br />
            experiences that
          </span>{" "}
          <br /> & engage.
        </motion.h1>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="h-[1px] w-full bg-red-500"></div>
          <p className="text-gray-400 font-sans text-lg max-w-2xl">
            I’m on a path of learning and building, creating digital experiences
            that balance design, usability, and performance.
          </p>
        </motion.div>
      </div>

      {/* Social Links + Button */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-6 px-8 md:px-20 py-10 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex gap-6 text-gray-400">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <AiOutlineInstagram size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <AiOutlineLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <AiOutlineGithub size={28} />
          </motion.a>
          <motion.a
            href="mailto:haadsheikh@example.com"
            className="hover:text-red-400 transition"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <AiOutlineMail size={28} />
          </motion.a>
        </div>

        <div>
          <AnimatedBtn />
        </div>
      </motion.div>

      {/* Marquee Section */}
      <Marquee />
      {/* About Section */}
      <section className="px-8 md:px-20 bg-black text-center">
        <AboutSec
          title={"✧ ABOUT ME ✧"}
          description="I am Haad Sheikh, a self-taught MERN Stack Developer with a strong focus on building clean, responsive, and functional web and mobile applications. Since January 2023, I have been working on real-world projects using React, Node, Firebase, and Tailwind CSS. I enjoy solving problems through code, creating modern UIs, and continuously improving my skills to deliver efficient digital solutions."
        />
      </section>

      <div>
        <LeftSec
          heading="My Work"
          title="Selected Projects"
          subheading="Here's a curated selection showcasing my expertise and the achieved results."
        />
      </div>

      <div className="grid grid-cols-2 mx-auto">
        <PortfolioCard name={'dffddf'} />
      </div>
    </>
  );
};

export default Home;
