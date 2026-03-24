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
import React, { useState } from "react";
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
import ContactSec from "../Components/ContactSec.jsx";
import SkillsMarquee from "../Components/SkillsMarquee.jsx";
import ChingariBackground from "../Components/AnimatedBackground.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import ExpertiseSec from "../Components/ExpertiseSec.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cardsRef = useRef([]);
  const [openIndex, setopenIndex] = useState(null);

  const handleToggle = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  const projects = [
    { name: "Donation Web", image: donation, id: 3 },
    { name: "Google Gemini", image: gemini, id: 4 },
  ];

  const socials = [
    { path: "https://github.com/sheikhhaad", Icon: FaGithub },
    { path: "https://www.linkedin.com/in/sheikhhaad/", Icon: FaLinkedin },
    { path: "https://instagram.com/sheikhhaad_", Icon: FaInstagram },
    {
      path: "https://www.facebook.com/sheikhhaad0",
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
    gsap.utils.toArray(".fade-in-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <>
      {/* Animated Background */}
      <ChingariBackground />

      {/* Intro Section */}
      <header className="text-white px-4 sm:px-6 lg:px-16 pt-20 md:pt-24 min-h-[40vh] flex items-center font-sans relative z-10">
        <div className="w-full">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight tracking-tight mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Architecting <br className="hidden md:block"/>
            <span className="text-gradient">
              Scalable Web Ecosystems<span className="text-accent">.</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-4 mb-8 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="hidden md:block w-12 h-[2px] bg-accent rounded"></div>
            <p className="text-gray-300 font-mono text-lg md:text-xl max-w-2xl leading-relaxed">
              Haad Sheikh — MERN Developer transforming complex ideas into high-performance digital products.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="flex justify-between mx-4 my-4 font-sans relative z-10">
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
                styling="text-white hover:text-accent text-2xl sm:text-3xl transition-colors duration-300"
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
      <section className="sm:px-6 lg:px-16 py-12 font-sans relative z-10 fade-in-section">
        <AboutSec
          title="✧ ABOUT ME ✧"
          description="I am Haad Sheikh, a self-taught MERN Stack Developer with a strong focus on building clean, responsive, and functional web and mobile applications. Since January 2023, I have been working on real-world projects using React, Node, Firebase, and Tailwind CSS. I enjoy solving problems through code, creating modern UIs, and continuously improving my skills to deliver efficient digital solutions."
        />
      </section>

      {/* Portfolio */}
      {/* Featured Project */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 relative z-10 fade-in-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl glass"
        >
          <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-accent font-mono tracking-widest text-sm mb-4">CASE STUDY</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Donation Web Platform</h2>
            <p className="text-gray-400 text-lg mb-8">
              A scalable, high-performance platform transforming how people contribute and track charitable donations worldwide.
            </p>
            <div>
              <AnimatedBtn
                title="View Case Study"
                sectilte="See Details"
                link={"/projects/detailpage/3"}
              />
            </div>
          </div>
          <div className="md:w-1/2 h-full min-h-[300px] md:min-h-[400px] overflow-hidden relative">
            <img src={donation} alt="Donation Site" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out" />
          </div>
        </motion.div>
      </section>

      {/* Expertise */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 font-sans relative z-10 fade-in-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <ExpertiseSec />
      </section>

      {/* Skills */}
      <div className="mb-4 mt-4 font-sans relative z-10 fade-in-section">
        <hr className="border-gray-700" />
        <SkillsMarquee />
        <hr className="border-gray-700" />
      </div>

      {/* Contact */}
      <section className="px-2 sm:px-6 lg:px-16 py-10 font-sans relative z-10 fade-in-section">
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
