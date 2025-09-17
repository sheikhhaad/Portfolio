// Home.jsx
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import "../style/marquee.css";
import AboutSec from "../Components/AboutSec";
import LeftSec from "../Components/LeftSec";
import PortfolioCard from "../Components/PortfolioCard";
import Marquee from "../Components/Marquee";
import AnimatedBtn from "../Components/AnimatedBtn";
import nexcent from "../assets/nexcent.png";
import adminpanel from "../assets/adminpanel.png";
import donation from "../assets/donationweb.png";
import gemini from "../assets/gemini.png";
import SocialBtn from "../Components/SocialBtn";
import ServicebgImg from "../Components/ServicebgImg.jsx";
import ServiceCard from "../Components/ServiceCard.jsx";

const Home = () => {
  const projects = [
    { name: "Nexcent", image: nexcent },
    { name: "Admin Panel", image: adminpanel },
    { name: "Donation Web", image: donation },
    { name: "Google Gemini", image: gemini },
  ];

  const socials = [
    { path: "https://github.com/your-username", Icon: FaGithub },
    { path: "https://linkedin.com/in/your-username", Icon: FaLinkedin },
    { path: "https://instagram.com/your-username", Icon: FaInstagram },
    { path: "https://facebook.com/your-username", Icon: FaFacebook },
  ];
  const projectData = [
    {
      title: "Full-Stack Development",
      description:
        "We deliver complete solutions, from design to development and AI/ML, with a proven track record of creating impactful, high-performing websites.",
    },
    {
      title: "Quick Delivery",
      description:
        "With over a decade of experience, we deliver innovative, timeless designs with a focus on customer satisfaction and speed.",
    },
    {
      title: "Unlimited Revisions",
      description:
        "With unlimited revisions and dedicated support, we ensure your vision and website is brought to life exactly as you imagine.",
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
        className="flex justify-between items-center px-8 md:px-20 py-10 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {/* Social Icons */}
        <div className="flex gap-8">
          {socials.map((itm, id) => (
            <SocialBtn
              key={id}
              path={itm.path}
              Icon={itm.Icon}
              styling="text-white hover:text-blue-400"
            />
          ))}
        </div>

        {/* Button */}
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

      <div className="grid grid-cols-2 mx-auto p-5">
        {projects.map((itm, id) => (
          <div key={id} className={id % 2 === 0 ? "mt-10" : "mt-0"}>
            <PortfolioCard name={itm.name} Img={itm.image} />
          </div>
        ))}
      </div>

      <AboutSec
        title="Experienced Full-Stack Developers"
        description="With 200+ projects delivered, we offer fast, reliable web development and
unlimited revisions to bring your vision to life."
      />
      <div className=" py-16 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side */}
        <ServicebgImg />

        {/* Right side */}
        <div className="flex flex-col gap-6">
          {projectData.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
