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
import SkillsMarquee from "../Components/SkillsMarquee.jsx";
import ChingariBackground from "../Components/AnimatedBackground.jsx";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const cardsRef = useRef([])

  const projects = [
    { name: "Donation Web", image: donation, id: 3 },
    { name: "Google Gemini", image: gemini, id: 4 },
  ];

  const socials = [
    { path: "https://github.com/sheikhhaad", Icon: FaGithub },
    { path: "https://www.linkedin.com/in/sheikhhaad/", Icon: FaLinkedin },
    { path: "https://instagram.com/sheikhhaad_", Icon: FaInstagram },
    {
      path: "https://www.facebook.com/profile.php?id=61555704857977",
      Icon: FaFacebook,
    },
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

  useLayoutEffect(() => {
    // Simple fade in for cards
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      }
    });

    // Simple section animations
    gsap.utils.toArray('.fade-in-section').forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      });
    });
  }, []);

  return (
    <>
      {/* Animated Background */}
      <ChingariBackground />
      
      {/* Intro Section */}
      <header className="text-white px-4 sm:px-6 lg:px-16 pt-20 md:pt-24 min-h-[40vh] flex items-center font-quicksand relative z-10">
        <div className="w-full">
          <motion.p
            className="text-[#2DE72c] mb-2 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            👋 Hey! It's me <span className="font-bold ">Haad Sheikh</span>,
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-snug"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting{" "}
            <motion.span 
              className="text-[#2DE72c]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              purpose driven <br className="hidden sm:block" />
              experiences that
            </motion.span>{" "}
            <br /> & engage.
          </motion.h1>

          {/* Line + paragraph */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex-shrink-0">
              <div className="mx-auto md:mx-0 sm:w-14 md:w-70 h-1 sm:h-1.5 md:h-2 bg-[#2DE72c] rounded" />
            </div>

            <p className="text-gray-300 font-extralight sm:text-lg md:max-w-2xl leading-relaxed">
              I'm on a path of learning and building, creating digital
              experiences that balance design, usability, and performance.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="flex justify-between mx-4 my-4 font-quicksand relative z-10">
        <motion.nav
          className="hidden sm:flex flex-wrap justify-start gap-4 px-4 sm:px-6 lg:px-16 py-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {socials.map((itm, id) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <SocialBtn
                path={itm.path}
                Icon={itm.Icon}
                styling="text-white hover:text-[#2DE72c] text-2xl sm:text-3xl transition-colors duration-300"
              />
            </motion.div>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedBtn
            title="Know Me Better"
            sectilte="About me"
            link={"/about"}
          />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 fade-in-section">
        <Marquee />
      </div>

      {/* About */}
      <section className="sm:px-6 lg:px-16 py-12 font-quicksand relative z-10 fade-in-section">
        <AboutSec
          title="✧ ABOUT ME ✧"
          description="I am Haad Sheikh, a self-taught MERN Stack Developer with a strong focus on building clean, responsive, and functional web and mobile applications. Since January 2023, I have been working on real-world projects using React, Node, Firebase, and Tailwind CSS. I enjoy solving problems through code, creating modern UIs, and continuously improving my skills to deliver efficient digital solutions."
        />
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 font-quicksand relative z-10 fade-in-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <LeftSec
            heading="✧ My Work"
            title="Selected Projects"
            subheading="Here's a curated selection showcasing my expertise and the achieved results."
          />
        </motion.div>
        
        <div className="flex flex-wrap justify-around gap-0 md:gap-10 mt-6">
          {projects.map((itm, i) => (
            <motion.div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className={i % 2 === 0 ? "mt-20" : "mt-10"}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <PortfolioCard name={itm.name} Img={itm.image} id={itm.id} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 font-quicksand relative z-10 fade-in-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <LeftSec heading="✧ Speciality" title="Areas of Expertise" />
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-6">
          <div className="flex-1 space-y-4">
            {accordionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Accordian
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={laptop}
              alt="Laptop"
              className="rounded-2xl w-full max-w-md object-cover border border-gray-700 shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <div className="mb-4 mt-4 font-quicksand relative z-10 fade-in-section">
        <hr className="border-gray-700" />
        <SkillsMarquee />
        <hr className="border-gray-700" />
      </div>

      {/* Contact */}
      <section className="px-2 sm:px-6 lg:px-16 py-10 font-quicksand relative z-10 fade-in-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactSec />
        </motion.div>
      </section>
    </>
  );
};

export default Home;