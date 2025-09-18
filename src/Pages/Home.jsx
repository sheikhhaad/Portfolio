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
import ServicebgImg from "../Components/ServicebgImg.jsx";
import ServiceCard from "../Components/ServiceCard.jsx";
import Accordian from "../Components/Accordian.jsx";
import laptop from "../assets/laptop.png";
import ContactSec from "../Components/ContactSec.jsx";
import Footer from "../Components/Footer.jsx";
// import Footer from "../Components/Footer.jsx";

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
  const projectData = [
    {
      title: "Development",
      description:
        "       Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
    },
    {
      title: "Branding",
      description:
        "Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.",
    },
  ];

  const accordionItems = [
    {
      title: "Development",
      description:
        "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
      icon: <FaCode className="text-blue-400 text-2xl" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-centric, modern interfaces that shapes how the audience interacts with the product.",
      icon: <FaPaintBrush className="text-pink-400 text-2xl" />,
    },
    {
      title: "Branding",
      description:
        "Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.",
      icon: <FaBullhorn className="text-yellow-400 text-2xl" />,
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
          <AnimatedBtn  title='Know Me Better' sectilte='About me'/>
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
            <PortfolioCard name={itm.name} Img={itm.image} id={itm.id} />
          </div>
        ))}
      </div>

      <div className="mt-10 ">
        <LeftSec heading="Speciality" title="Areas of Expertise" />
        <div>
          <div className="flex justify-between mb-10 mx-10 gap-3">
            <div>
              {accordionItems.map((item, i) => (
                <Accordian
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="">
              <img src={laptop} alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-20">
        <ContactSec  />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
