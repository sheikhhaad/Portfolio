// src/Components/CosmicProjects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Terminal } from "lucide-react";

import donationImg from "../assets/donationweb.png";
import geminiImg from "../assets/gemini.png";
import chatAppImg from "../assets/ChatApp.png";
import smwImg from "../assets/smw.png";
import studentPortalImg from "../assets/StudentPortal1.png";
import expenseTrackerImg from "../assets/expenseTracker.png";

const projectsData = [
  {
    id: 3,
    title: "Donation Web Platform",
    tagline: "High-Throughput Charitable Contribution Architecture",
    description:
      "A scalable full-stack MERN application engineered for transparent donation processing, real-time campaign tracking, and donor analytics across global initiatives.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    image: donationImg,
    liveUrl: "https://lifthumanity.vercel.app/",
    githubUrl: "https://github.com/sheikhhaad/donation-user-web",
    featured: true,
    stats: { label: "Donation Speed", val: "< 1.2s" },
  },
  {
    id: 4,
    title: "Google Gemini AI Assistant",
    tagline: "Conversational Intelligence with Context Memory",
    description:
      "A responsive AI chat interface powered by Google Gemini API, providing context-aware streaming responses, syntax-highlighted code blocks, and conversation history.",
    tags: ["React.js", "Google Gemini API", "Tailwind CSS", "Framer Motion"],
    image: geminiImg,
    liveUrl: "https://chat-bot-gemini-sepia.vercel.app/",
    githubUrl: "https://github.com/sheikhhaad/ChatBot-Gemini",
    featured: false,
    stats: { label: "Stream Latency", val: "Sub-second" },
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    tagline: "Low-Latency Synchronous Messaging Platform",
    description:
      "Real-time communication system built with WebSockets for bidirectional instant messaging, online presence indicators, and responsive message synchronization.",
    tags: ["React.js", "Node.js", "Socket.IO", "Express.js", "MongoDB"],
    image: chatAppImg,
    liveUrl: "https://chat-app-rose-theta.vercel.app/",
    githubUrl: "https://github.com/sheikhhaad",
    featured: false,
    stats: { label: "Uptime", val: "99.9%" },
  },
  {
    id: 7,
    title: "SMW Financial Architecture",
    tagline: "Enterprise Fiscal Automation & AI-Driven Insights",
    description:
      "A financial architecture platform designed for corporate fiscal transparency, automated accounting workflows, and high-precision data handling.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Modern Web"],
    image: smwImg,
    liveUrl: "https://smw-website.vercel.app/",
    githubUrl: "https://github.com/sheikhhaad",
    featured: false,
    stats: { label: "Architecture", val: "Next.js SSR" },
  },
  {
    id: 11,
    title: "Student Query Management System",
    tagline: "Role-Based Academic Workflow Platform",
    description:
      "Full-stack query management system connecting students and academic staff with real-time ticket workflows, status tracking, and categorized resolution feeds.",
    tags: ["Next.js", "React.js", "Node.js", "Express.js", "Socket.IO"],
    image: studentPortalImg,
    liveUrl: "https://github.com/sheikhhaad/help-desk",
    githubUrl: "https://github.com/sheikhhaad/help-desk",
    featured: false,
    stats: { label: "Workflow", val: "Ticket System" },
  },
  {
    id: 10,
    title: "Expense Tracker Mobile App",
    tagline: "Cross-Platform Personal Finance Ecosystem",
    description:
      "Mobile personal financial tracking application developed with React Native and Expo featuring real-time budget computation, category analytics, and JWT authentication.",
    tags: ["React Native", "Expo", "Node.js", "JWT Auth", "Mobile UI"],
    image: expenseTrackerImg,
    liveUrl: "https://github.com/sheikhhaad",
    githubUrl: "https://github.com/sheikhhaad",
    featured: false,
    stats: { label: "Platform", val: "iOS & Android" },
  },
];

const CosmicProjects = () => {
  const featured = projectsData[0];
  const supporting = projectsData.slice(1, 3);
  const additional = projectsData.slice(3, 6);

  return (
    <div className="w-full space-y-12">
      {/* 1. Large Hero Featured Project (Donation Web) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl overflow-hidden border border-white/10 group hover:border-accent/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Info Side */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between relative z-10 bg-[#0d0d0d]/80 backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  PRIMARY SHOWCASE
                </span>
                <span className="text-gray-400 font-mono text-xs">
                  {featured.stats.label}: <strong className="text-white">{featured.stats.val}</strong>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-display">
                {featured.title}
              </h3>
              <p className="text-accent font-mono text-xs sm:text-sm mb-4">
                {featured.tagline}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {featured.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <Link
                to={`/projects/detailpage/${featured.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-black font-bold font-mono text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:scale-105 transition-all duration-300"
              >
                Case Study
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={featured.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass text-white font-mono text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full glass text-gray-300 hover:text-white hover:border-white/30 transition-colors"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full overflow-hidden bg-black/60 flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full h-full max-h-[440px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 ease-out">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. Supporting Projects Grid (Gemini & Chat App) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supporting.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-accent/40 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="relative h-60 sm:h-72 overflow-hidden bg-black/40 border-b border-white/10">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass border border-white/10 text-[11px] font-mono text-gray-200">
                {proj.stats.label}: <strong className="text-accent">{proj.stats.val}</strong>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2 font-display">
                  {proj.title}
                </h4>
                <p className="text-accent font-mono text-xs mb-3">
                  {proj.tagline}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <Link
                  to={`/projects/detailpage/${proj.id}`}
                  className="text-xs font-mono uppercase tracking-wider text-white hover:text-accent flex items-center gap-1.5 transition-colors"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </Link>
                <div className="flex items-center gap-3">
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg glass text-gray-300 hover:text-accent transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Additional Real Projects Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {additional.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass p-6 rounded-2xl border border-white/10 group hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20 uppercase">
                  {proj.tags[0]}
                </span>
                <span className="text-[10px] font-mono text-gray-500">
                  REF // 0{idx + 4}
                </span>
              </div>
              <h5 className="text-lg font-bold text-white mb-2 font-display">
                {proj.title}
              </h5>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-sans line-clamp-3">
                {proj.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <Link
                to={`/projects/detailpage/${proj.id}`}
                className="text-xs font-mono text-gray-300 hover:text-accent transition-colors"
              >
                Read Case Study →
              </Link>
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore All Projects Link */}
      <div className="text-center pt-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 text-white font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] transition-all duration-300"
        >
          Explore All Verified Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CosmicProjects;
