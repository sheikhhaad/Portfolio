// src/Pages/Project.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Filter } from "lucide-react";

import donation from "../assets/donationweb.png";
import gemini from "../assets/gemini.png";
import chatAppImage from "../assets/ChatApp.png";
import blogAppImage from "../assets/BlogApp.png";
import portfolioImage from "../assets/portfolio.png";
import smw from "../assets/smw.png";
import Soni from "../assets/Soni.png";
import expenseTracker from "../assets/expenseTracker.png";
import studentPortal1 from "../assets/StudentPortal1.png";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";

const projects = [
  {
    id: 3,
    name: "Donation Web Platform",
    image: donation,
    category: "Full-Stack",
    tagline: "Scalable MERN Charitable Contribution Ecosystem",
    problem: "Lack of a centralized, secure platform to track charitable contributions transparently.",
    outcome: "Built a highly available MERN app that processes donations with real-time analytics.",
    link: "https://lifthumanity.vercel.app/",
    github: "https://github.com/sheikhhaad/donation-user-web",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    spanClass: "md:col-span-2",
  },
  {
    id: 4,
    name: "Google Gemini AI Assistant",
    image: gemini,
    category: "React",
    tagline: "Conversational Intelligence with Streaming Responses",
    problem: "Users needed a conversational AI interface mapped to specific context parameters.",
    outcome: "Integrated Gemini API effectively with streaming response rendering and syntax highlighting.",
    link: "https://chat-bot-gemini-sepia.vercel.app/",
    github: "https://github.com/sheikhhaad/ChatBot-Gemini",
    tech: ["React.js", "Google Gemini API", "Tailwind CSS"],
    spanClass: "md:col-span-1",
  },
  {
    id: 5,
    name: "Real-Time Chat App",
    image: chatAppImage,
    category: "Full-Stack",
    tagline: "Low-Latency Synchronous Messaging Platform",
    problem: "Synchronous communication requiring low latency without dropped messages.",
    outcome: "Implemented WebSockets for real-time delivery with 99.9% uptime and online status indicators.",
    link: "https://chat-app-rose-theta.vercel.app/",
    github: "https://github.com/sheikhhaad",
    tech: ["React.js", "Socket.IO", "Node.js", "MongoDB"],
    spanClass: "md:col-span-1",
  },
  {
    id: 7,
    name: "SMW Financial Platform",
    image: smw,
    category: "Next.js",
    tagline: "Corporate Fiscal Transparency & Automated Workflows",
    problem: "Complex fiscal calculations and report compilation across international entities.",
    outcome: "Built a Next.js SSR digital portal for managing multi-tier financial data with sub-second latency.",
    link: "https://smw-website.vercel.app/",
    github: "https://github.com/sheikhhaad",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    spanClass: "md:col-span-2",
  },
  {
    id: 11,
    name: "Student Query Management",
    image: studentPortal1,
    category: "Full-Stack",
    tagline: "Academic Support & Real-Time Ticket Resolution",
    problem: "Fragmented communication and delayed query resolutions between students and teachers.",
    outcome: "Built a full-stack platform with real-time Socket.IO chat, role-based dashboards, and instant notifications.",
    link: "https://github.com/sheikhhaad/help-desk",
    github: "https://github.com/sheikhhaad/help-desk",
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "Socket.IO"],
    spanClass: "md:col-span-1",
  },
  {
    id: 10,
    name: "Expense Tracker Application",
    image: expenseTracker,
    category: "Full-Stack",
    tagline: "Mobile Personal Finance with JWT Authentication",
    problem: "Tracking daily transactions and monthly financial balances accurately across platforms.",
    outcome: "Developed mobile app with React Native, Expo & Node.js featuring real-time calculations and JWT auth.",
    link: "https://github.com/sheikhhaad",
    github: "https://github.com/sheikhhaad",
    tech: ["React Native", "Expo", "Node.js", "JWT Auth"],
    spanClass: "md:col-span-1",
  },
  {
    id: 6,
    name: "Modern Tech Blog App",
    image: blogAppImage,
    category: "Next.js",
    tagline: "SEO-Optimized Technical Content Engine",
    problem: "SEO was extremely poor on traditional React SPA for content delivery.",
    outcome: "Migrated to Next.js SSR, boosting organic traffic and Lighthouse scores to 95+.",
    link: "https://blogg-app-tech.vercel.app/",
    github: "https://github.com/sheikhhaad",
    tech: ["Next.js", "Tailwind CSS", "Markdown"],
    spanClass: "md:col-span-1",
  },
  {
    id: 9,
    name: "Soni Auto UI",
    image: Soni,
    category: "React",
    tagline: "High-Fidelity Automotive Product Experience",
    problem: "Outdated legacy interface failing to communicate automotive specs clearly.",
    outcome: "Crafted modern single-page application with responsive interactive components.",
    link: "https://soni-auto-ui-react.vercel.app/",
    github: "https://github.com/sheikhhaad",
    tech: ["React.js", "Tailwind CSS"],
    spanClass: "md:col-span-1",
  },
  {
    id: 8,
    name: "Creative Developer Portfolio",
    image: portfolioImage,
    category: "React",
    tagline: "Interactive 3D Cosmic Space Portfolio",
    problem: "Standard generic developer portfolios failed to convey artistic 3D and frontend capabilities.",
    outcome: "Engineered cosmic futuristic experience with Three.js WebGL, Framer Motion, and Tailwind CSS.",
    link: "https://sheikhhaad.vercel.app",
    github: "https://github.com/sheikhhaad/Portfolio",
    tech: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    spanClass: "md:col-span-1",
  },
];

const filters = ["All", "Full-Stack", "React", "Next.js"];

const Project = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.category === filter
  );

  return (
    <>
      <AnimatedBackground />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto relative z-10 font-sans">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/30 text-xs font-mono text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FF00]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              FEATURED ARTIFACTS // PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
            Engineered <span className="text-chrome">Projects</span> & Deployments.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3 font-sans">
            A comprehensive catalog of real web applications, client solutions, and open-source experiments built with modern frontend and full-stack technologies.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-accent" />
              Filter:
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  filter === f
                    ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(0,255,0,0.4)]"
                    : "glass text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-accent/40 transition-all duration-500 flex flex-col justify-between ${
                  proj.spanClass || "col-span-1"
                }`}
              >
                {/* Visual Area */}
                <div className="relative h-64 overflow-hidden bg-black/50 border-b border-white/10">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass border border-white/10 text-[10px] font-mono text-accent">
                    {proj.category}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 font-display">
                      {proj.name}
                    </h3>
                    <p className="text-accent font-mono text-xs mb-3">
                      {proj.tagline}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                      {proj.outcome || proj.problem}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <Link
                      to={`/projects/detailpage/${proj.id}`}
                      className="text-xs font-mono uppercase tracking-wider text-white hover:text-accent flex items-center gap-1.5 transition-colors"
                    >
                      Case Study
                      <ArrowUpRight className="w-4 h-4 text-accent" />
                    </Link>

                    <div className="flex items-center gap-3">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg glass text-gray-300 hover:text-accent transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
                        title="GitHub Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </>
  );
};

export default Project;
