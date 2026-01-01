import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Code, Layout, Zap } from "lucide-react";
import { motion } from "framer-motion";
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
import AnimatedBtn from "../Components/AnimatedBtn";
import ContactSec from "../Components/ContactSec";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

const Detailpage = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  const work = [
    {
      id: 3,
      name: "Donation Web",
      overview: "Online donation platform with real-time tracking.",
      description:
        "This project was built for handling donations using Firebase Auth and Firestore. Donors can donate in real-time, and features like donor summaries and progress bars are included.",
      features: [
        "Login with Firebase Auth",
        "Real-time donations",
        "Donor summary",
        "Dynamic progress bar",
        "Responsive design",
        "Animations",
      ],
      techStack: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
      link: "https://lifthumanity.vercel.app/",
      image: donation,
      codeLink: "https://github.com/sheikhhaad/donation-user-web",
    },
    {
      id: 4,
      name: "Gemini Chatbot AI",
      overview: "AI chatbot UI inspired by Gemini.",
      description:
        "This project is a front-end clone of the Gemini chatbot. It provides a chat interface where users can type messages, and includes a typing animation effect for a real-time feel.",
      features: [
        "Chat interface",
        "Styled input/output",
        "Responsive layout",
        "Real-time typing effect",
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "API Integration"],
      link: "https://chat-bot-gemini-sepia.vercel.app/",
      image: gemini,
      codeLink: "https://github.com/sheikhhaad/ChatBot-Gemini",
    },
    {
      id: 5,
      name: "Chat App",
      overview: "Real-time messaging app with Firebase backend.",
      description:
        "The Chat App is a complete messaging platform supporting one-to-one and group chats. It uses Firebase Auth and Firestore for real-time messaging and media sharing.",
      features: [
        "One-to-one chat",
        "Group chat support",
        "Read receipts",
        "Typing indicators",
        "Media sharing",
        "Responsive UI",
      ],
      techStack: ["React", "Firebase (Auth, Firestore, Storage)"],
      link: "https://chat-app-rose-theta.vercel.app/",
      image: chatAppImage,
      codeLink: "https://github.com/sheikhhaad/Chat-App",
    },
    {
      id: 6,
      name: "Blog App",
      overview: "Platform for creating and sharing blogs.",
      description:
        "The Blog App is a CMS-style platform where users can create, edit, and delete blogs. It includes Firebase Auth for login, Firestore for real-time storage, and image upload functionality.",
      features: [
        "User authentication",
        "CRUD blogs",
        "Rich text editor",
        "Image upload",
        "Responsive design",
        "Blog detail pages",
      ],
      techStack: [
        "React",
        "Firebase (Auth, Firestore, Storage)",
        "Tailwind CSS",
      ],
      link: "https://blogg-app-tech.vercel.app/",
      image: blogAppImage,
      codeLink: "https://github.com/sheikhhaad/Blogg-App-tech",
    },
    {
      id: 8,
      name: "Portfolio",
      overview: "Personal developer portfolio website.",
      description:
        "This is my personal portfolio website that includes sections for About, Projects, and Contact. It uses Tailwind CSS and Framer Motion for animations and a smooth UI experience.",
      features: [
        "About section",
        "Projects showcase",
        "Contact form",
        "Animations",
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://haad-portfolio-haad-sheikhs-projects.vercel.app/",
      image: portfolioImage,
      codeLink: "https://github.com/sheikhhaad/Haad",
    },

    {
      id: 10,
      name: "Soni UI",
      overview: "Automotive brand UI concept.",
      description:
        "Soni UI is a design concept for an automotive website. It features a product showcase with a gradient-styled UI for a modern look and feel.",
      features: ["Product showcase", "Gradient UI", "Clean layout"],
      techStack: ["React", "Tailwind CSS"],
      link: "https://soni-auto-ui-react.vercel.app/",
      image: Soni,
      codeLink: "https://github.com/sheikhhaad/Soni-Auto-UI-react",
    },
  ];

  useEffect(() => {
    let findWork = work.find((itm) => itm.id == id);
    setData(findWork);
  }, [id]);

  if (!data)
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 bg-[#2DE72c] text-white rounded-lg hover:bg-[#25c722] transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </motion.div>
    );

  return (
    <>
      <ChingariBackground />

      <motion.div
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={"/projects"}
              className="inline-flex items-center text-[#2DE72c] hover:text-[#25c722] mb-6 font-medium transition-colors underline"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            className="rounded-2xl shadow-sm p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.h1
              className="text-4xl font-bold text-[#2DE72c] mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {data.name}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {data.overview}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatedBtn
                title="Live Preview"
                sectilte="See My Work"
                link={data.link}
              />

              <motion.button
                className="flex items-center px-5 py-3 text-blue-800 rounded-full font-semibold hover:bg-white transition-colors"
                onClick={() => window.open(data.codeLink, "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={18} className="mr-2" />
                View Code
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            className="rounded-2xl shadow-sm p-2 mb-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-auto rounded-xl object-cover shadow-md"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features Section */}
            <motion.div
              className="rounded-2xl shadow-sm p-6 border-r border-[#2DE72c]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg mr-3">
                  <Zap size={24} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#2DE72c]">
                  Key Features
                </h2>
              </div>

              <ul className="space-y-4">
                {data.features.map((f, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
                  >
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 bg-[#2DE72c] rounded-full"></div>
                    </div>
                    <span className="text-white">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div
              className="rounded-2xl shadow-green-600 p-6 border-l border-[#2DE72c]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg mr-3">
                  <Layout size={24} className="text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#2DE72c]">
                  Tech Stack
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {data.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-[rgba(78,78,78,0.2)] rounded-full text-white font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project Description */}
          <motion.div
            className="rounded-2xl shadow-sm p-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-[#2DE72c] mb-4">
              Project Overview
            </h2>
            <p className="text-white leading-relaxed">{data.overview}</p>

            {data.description && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-[#2DE72c] mb-3">
                  Description
                </h3>
                <p className="text-white leading-relaxed">{data.description}</p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactSec />
      </motion.div>
    </>
  );
};

export default Detailpage;
