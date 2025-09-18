// Home.jsx
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaCode,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";
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
import Accordian from "../Components/Accordian.jsx";
import laptop from "../assets/laptop.png";
import ContactSec from "../Components/ContactSec.jsx";
import Footer from "../Components/Footer.jsx";

const Home = () => {
  const projects = [
    { name: "Nexcent", image: nexcent, id: 1 },
    { name: "Admin Panel", image: adminpanel, id: 2 },
    { name: "Donation Web", image: donation, id: 3 },
    { name: "Google Gemini", image: gemini, id: 4 },
  ];

  const socials = [
    { path: "https://github.com/your-username", Icon: FaGithub },
    { path: "https://linkedin.com/in/your-username", Icon: FaLinkedin },
    { path: "https://instagram.com/your-username", Icon: FaInstagram },
    { path: "https://facebook.com/your-username", Icon: FaFacebook },
  ];

  const accordionItems = [
    {
      title: "Development",
      description:
        "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
      icon: <FaCode className="text-blue-400 text-xl sm:text-2xl" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
      icon: <FaPaintBrush className="text-pink-400 text-xl sm:text-2xl" />,
    },
    {
      title: "Branding",
      description:
        "Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.",
      icon: <FaBullhorn className="text-yellow-400 text-xl sm:text-2xl" />,
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <div className="flex flex-col justify-center bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 pt-20 md:pt-24 min-h-[60vh]">
        <motion.p
          className="text-green-400 mb-4 text-lg sm:text-xl md:text-2xl font-mono"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👋 Hey! It's me <span className="font-semibold">Haad Sheikh</span>,
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 md:mb-6 leading-snug sm:leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Crafting{" "}
          <span className="text-[#58f960]">
            purpose driven <br className="hidden sm:block" />
            experiences that
          </span>{" "}
          <br /> & engage.
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-[1px] w-full  bg-red-500"></div>
          <p className="text-gray-400 font-sans text-base sm:text-lg md:max-w-xl leading-relaxed">
            I’m on a path of learning and building, creating digital experiences
            that balance design, usability, and performance.
          </p>
        </motion.div>
      </div>

      {/* Social Links + Button */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-8 text-white gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        {/* Social Icons */}
        <div className="flex gap-5 sm:gap-6">
          {socials.map((itm, id) => (
            <SocialBtn
              key={id}
              path={itm.path}
              Icon={itm.Icon}
              styling="text-white hover:text-blue-400 text-2xl sm:text-3xl"
            />
          ))}
        </div>

        {/* Button */}
        <AnimatedBtn title="Know Me Better" sectilte="About me" />
      </motion.div>

      {/* Marquee Section */}
      <Marquee />

      {/* About Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12 bg-black text-center">
        <AboutSec
          title="✧ ABOUT ME ✧"
          description="I am Haad Sheikh, a self-taught MERN Stack Developer with a strong focus on building clean, responsive, and functional web and mobile applications. Since January 2023, I have been working on real-world projects using React, Node, Firebase, and Tailwind CSS. I enjoy solving problems through code, creating modern UIs, and continuously improving my skills to deliver efficient digital solutions."
        />
      </section>

      {/* Portfolio Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12 bg-black">
        <LeftSec
          heading="My Work"
          title="Selected Projects"
          subheading="Here's a curated selection showcasing my expertise and the achieved results."
        />
<div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          {projects.map((itm, id) => (
            <div className={id % 2 ===0 ? 'mt-10': 'mt-0'}>
              <PortfolioCard key={id} name={itm.name} Img={itm.image} id={itm.id} />

            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12 bg-black">
        <LeftSec heading="Speciality" title="Areas of Expertise" />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex-1 space-y-4">
            {accordionItems.map((item, i) => (
              <Accordian
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={laptop}
              alt="Laptop"
              className="rounded-2xl w-full  object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <ContactSec />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
