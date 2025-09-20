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
import SkillsMarquee from "../Components/SkillsMarquee.jsx";

const Home = () => {
  const projects = [
    { name: "Nexcent", image: nexcent, id: 1 },
    { name: "Admin Panel", image: adminpanel, id: 2 },
    { name: "Donation Web", image: donation, id: 3 },
    { name: "Google Gemini", image: gemini, id: 4 },
  ];

  const socials = [
    { path: "https://github.com/sheikhhaad", Icon: FaGithub },
    { path: "https://linkedin.com/in/sheikhhaad", Icon: FaLinkedin },
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

  return (
    <>
      {/* Intro Section */}
      <header className="bg-black text-white px-4 sm:px-6 lg:px-16 pt-20 md:pt-24 min-h-[40vh] flex items-center font-quicksand">
        <div className="w-full">
          <motion.p
            className="text-[#2DE72c] mb-2 text-lg sm:text-xl md:text-2xl"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            👋 Hey! It's me <span className="font-bold ">Haad Sheikh</span>,
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-snug"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Crafting{" "}
            <span className="text-[#2DE72c]">
              purpose driven <br className="hidden sm:block" />
              experiences that
            </span>{" "}
            <br /> & engage.
          </motion.h1>

          {/* Line + paragraph */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex-shrink-0">
              <div className="mx-auto md:mx-0  sm:w-14 md:w-70 h-1 sm:h-1.5 md:h-2 bg-[#2DE72c] rounded" />
            </div>

            <p className="text-gray-400 font-bold text-base sm:text-lg md:max-w-2xl leading-relaxed">
              I’m on a path of learning and building, creating digital
              experiences that balance design, usability, and performance.
            </p>
          </motion.div>
        </div>
      </header>

      <div className="flex justify-between mx-4 my-4 font-quicksand">
        <motion.nav
          className="hidden sm:flex flex-wrap justify-start gap-4 px-4 sm:px-6 lg:px-16 py-4 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {socials.map((itm, id) => (
            <SocialBtn
              key={id}
              path={itm.path}
              Icon={itm.Icon}
              styling="text-white hover:text-blue-400 text-2xl sm:text-3xl"
            />
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className=""
        >
          <AnimatedBtn
            title="Know Me Better"
            sectilte="About me"
            link={"/about"}
          />
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* About */}
      <section className="sm:px-6 lg:px-16 py-12 bg-black font-quicksand">
        <AboutSec
          title="✧ ABOUT ME ✧"
          description="I am Haad Sheikh, a self-taught MERN Stack Developer with a strong focus on building clean, responsive, and functional web and mobile applications. Since January 2023, I have been working on real-world projects using React, Node, Firebase, and Tailwind CSS. I enjoy solving problems through code, creating modern UIs, and continuously improving my skills to deliver efficient digital solutions."
        />
      </section>

      {/* Portfolio */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-black font-quicksand">
        <LeftSec
          heading="✧ My Work"
          title="Selected Projects"
          subheading="Here's a curated selection showcasing my expertise and the achieved results."
        />
        <div className="flex flex-wrap justify-around gap-0 md:gap-10 mt-6">
          {projects.map((itm, i) => (
            <div key={i} className={i % 2 === 0 ? "mt-20" : "mt-10"}>
              <PortfolioCard name={itm.name} Img={itm.image} id={itm.id} />
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="px-4 sm:px-6 lg:px-16 py-12 bg-black font-quicksand">
        <LeftSec heading="✧ Speciality" title="Areas of Expertise" />
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-6">
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
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mb-4 mt-4 font-quicksand">
        <hr className="border-gray-900" />

        <SkillsMarquee />
        <hr className="border-gray-900" />
      </div>

      {/* Contact */}
      <section className="px-2 sm:px-6 lg:px-16 py-10 bg-black font-quicksand">
        <ContactSec />
      </section>

    </>
  );
};

export default Home;
