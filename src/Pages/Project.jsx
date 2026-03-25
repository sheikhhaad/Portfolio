import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import smw from "../assets/smw.png";
import Soni from "../assets/Soni.png";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

const Project = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      name: "Donation Web",
      image: donation,
      id: 3,
      link: "https://lifthumanity.vercel.app/",
      category: "Full-Stack",
      problem:
        "Lack of a centralized, secure platform to track charitable contributions transparently.",
      outcome:
        "Built a highly available MERN app that processes donations with real-time analytics.",
      spanClass: "md:col-span-2 md:row-span-2",
    },
    {
      name: "Google Gemini",
      image: gemini,
      id: 4,
      link: "https://chat-bot-gemini-sepia.vercel.app/",
      category: "React",
      problem:
        "Users needed a conversational AI interface mapped to specific context parameters.",
      outcome:
        "Integrated the Gemini API effectively resulting in 30% faster query responses.",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      name: "Chat App",
      image: chatAppImage,
      id: 5,
      link: "https://chat-app-rose-theta.vercel.app/",
      category: "Full-Stack",
      problem:
        "Synchronous communication requiring low latency without dropped messages.",
      outcome:
        "Implemented WebSockets for real-time delivery with 99.9% uptime.",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      name: "Blog App",
      image: blogAppImage,
      id: 6,
      link: "https://blogg-app-tech.vercel.app/",
      category: "Next.js",
      problem:
        "SEO was extremely poor on traditional React SPA for content delivery.",
      outcome:
        "Migrated to Next.js SSR, boosting organic traffic and Lighthouse scores to 95+.",
      spanClass: "md:col-span-1 md:row-span-2",
    },

    {
      id: 7, // Incremented for your sequence
      name: "SMW",
      overview: "A convergence of Finance, AI, and Automation.",
      description:
        "A high-tier Financial Architecture platform designed to 'Unlock Growth' for global organizations. This system redefines traditional accounting by integrating AI-driven insights with automated fiscal workflows. Developed with a focus on precision and scalability, it serves as a digital headquarters for managing complex financial data with sub-second latency.",

      category: "Next.js",
      link: "https://smw-website.vercel.app/",
      image: smw, // Ensure this variable is defined in your code
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      name: "Portfolio",
      image: portfolioImage,
      id: 8,
      link: "https://haad-portfolio-haad-sheikhs-projects.vercel.app/",
      category: "React",
      problem:
        "Personal brand lacked premium feel to attract high-paying international clients.",
      outcome:
        "Redesigned with glassmorphism and 3D interactions, increasing conversions.",
      spanClass: "md:col-span-1 md:row-span-1",
    },
    {
      name: "Soni Auto UI",
      image: Soni,
      id: 9,
      link: "https://soni-auto-ui-react.vercel.app/",
      category: "React",
      problem:
        "This project is a modern, single-page application (SPA) built using React.js",
      spanClass: "md:col-span-1 md:row-span-1",
    },
  ];

  const filters = ["All", "React", "Next.js", "Full-Stack"];

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter,
  );

  return (
    <>
      <ChingariBackground />

      <motion.div
        className="mt-20 px-4 sm:px-6 lg:px-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LeftSec
          heading="✧ My Work"
          title="Featured Projects"
          subheading="Creating next level digital products, brands & experiences."
        />

        {/* Filter System */}
        <div className="flex flex-wrap gap-3 mt-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                filter === f
                  ? "bg-accent text-black shadow-[0_0_15px_rgba(0,255,0,0.5)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="px-4 sm:px-6 lg:px-16 mb-24 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, type: "spring" }}
              className={`w-full h-full ${project.spanClass || "col-span-1"}`}
            >
              <PortfolioCard
                Img={project.image}
                name={project.name}
                id={project.id}
                category={project.category}
                problem={project.problem}
                outcome={project.outcome}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Project;
