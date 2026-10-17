// src/Pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import {
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  Terminal,
  Cpu,
} from "lucide-react";

import AnimatedBackground from "../Components/AnimatedBackground.jsx";
import CosmicHeroVisual from "../Components/CosmicHeroVisual.jsx";
import Marquee from "../Components/Marquee.jsx";
import CosmicAboutPreview from "../Components/CosmicAboutPreview.jsx";
import CosmicProjects from "../Components/CosmicProjects.jsx";
import CosmicSkills from "../Components/CosmicSkills.jsx";
import ExpertiseSec from "../Components/ExpertiseSec.jsx";
import Timeline from "../Components/Timeline.jsx";
import ContactSec from "../Components/ContactSec.jsx";

const socials = [
  { name: "GitHub", href: "https://github.com/sheikhhaad", icon: <FaGithub /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sheikhhaad/", icon: <FaLinkedin /> },
  { name: "Instagram", href: "https://www.instagram.com/sheikhhaad_/", icon: <FaInstagram /> },
  { name: "Facebook", href: "https://www.facebook.com/sheikhhaad0", icon: <FaFacebook /> },
  { name: "YouTube", href: "https://www.youtube.com/channel/UC5dq3xrGBgE5-Gk-eaYqAew", icon: <FaYoutube /> },
];

const Home = () => {
  return (
    <>
      {/* 3D Cosmic Animated Starfield Universe */}
      <AnimatedBackground />

      {/* ── 1. SIGNATURE HERO SECTION ── */}
      <section className="relative min-h-[92vh] pt-32 pb-16 px-4 sm:px-6 lg:px-16 flex items-center z-10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Personal Identity & Typography */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/30 text-xs font-mono text-accent"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FF00]" />
                <span className="uppercase tracking-widest text-[11px] font-semibold">
                  AVAILABLE FOR SELECT PROJECTS // 2026
                </span>
              </motion.div>

              {/* Name & Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-sm sm:text-base font-mono uppercase tracking-[0.25em] text-accent font-semibold">
                    HAAD SHEIKH
                  </h2>
                  <span className="text-gray-500 font-mono text-xs">//</span>
                  <span className="text-xs sm:text-sm font-mono text-gray-300 uppercase tracking-widest">
                    MERN STACK DEVELOPER
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight font-display">
                  Building Digital <br className="hidden sm:block" />
                  Experiences{" "}
                  <span className="text-chrome">Beyond The</span>{" "}
                  <span className="text-accent relative inline-block">
                    Ordinary.
                    <span className="absolute bottom-1 left-0 w-full h-[3px] bg-accent/40 rounded-full" />
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Narrative */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 font-sans text-base sm:text-lg max-w-2xl leading-relaxed"
              >
                I build modern web applications and immersive digital experiences, combining thoughtful frontend engineering with practical full-stack development. Currently crafting high-performance interfaces at <strong className="text-white">Digitano</strong>.
              </motion.p>

              {/* Credentials / Status Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2.5 pt-1"
              >
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg glass border border-white/10 text-gray-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  Front-End @ Digitano
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg glass border border-white/10 text-gray-300">
                  Ex: SmW Global
                </span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg glass border border-white/10 text-gray-300">
                  MERN · Next.js · React Native
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <a
                  href="#featured-work"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-black font-mono text-xs uppercase tracking-wider font-extrabold hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] hover:scale-105 transition-all duration-300"
                >
                  Explore My Work
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/15 text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-accent hover:text-accent hover:bg-white/10 transition-all duration-300"
                >
                  Let's Connect
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 pt-4 text-gray-400"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mr-2">
                  SOCIALS:
                </span>
                {socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="text-lg hover:text-accent hover:scale-110 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </motion.div>

            </div>

            {/* Right Column: 3D Cosmic Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <CosmicHeroVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. COSMIC MARQUEE ── */}
      <div className="relative z-10">
        <Marquee />
      </div>

      {/* ── 3. ABOUT SECTION ── */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <CosmicAboutPreview />
      </section>

      {/* ── 4. FEATURED PROJECTS ── */}
      <section id="featured-work" className="relative z-10 py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold">
              // 02. PORTFOLIO SHOWCASE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Featured <span className="text-chrome">Work</span> & Platforms.
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base mt-2 max-w-xl">
            Real-world applications engineered with modern architecture, sub-second response times, and clean code.
          </p>
        </div>

        <CosmicProjects />
      </section>

      {/* ── 5. TECHNICAL STACK & SKILLS ── */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-accent/20 text-xs font-mono text-accent mb-3">
            <Cpu className="w-3.5 h-3.5" />
            TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            A Futuristic <span className="text-chrome">Technical</span> System.
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Categorized overview of verified technologies and workflows I use to build scalable products.
          </p>
        </div>

        <CosmicSkills />
      </section>

      {/* ── 6. VALUE ADD & SERVICES ── */}
      <div className="relative z-10 border-t border-white/10">
        <ExpertiseSec />
      </div>

      {/* ── 7. CAREER & EDUCATION TIMELINE ── */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto border-t border-white/10">
        <Timeline />
      </section>

      {/* ── 8. CINEMATIC CONTACT ENDING ── */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto border-t border-white/10">
        <ContactSec />
      </section>
    </>
  );
};

export default Home;
