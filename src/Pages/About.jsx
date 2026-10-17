// src/Pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.webp";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";
import Timeline from "../Components/Timeline.jsx";
import ContactSec from "../Components/ContactSec.jsx";
import CosmicSkills from "../Components/CosmicSkills.jsx";
import {
  Sparkles,
  ArrowUpRight,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
} from "lucide-react";

const About = () => {
  return (
    <>
      <AnimatedBackground />

      <div className="pt-32 pb-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative z-10 font-sans">
        
        {/* Top Header Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/30 text-xs font-mono text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FF00]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              BIOGRAPHY // PROFESSIONAL TRAJECTORY
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display max-w-4xl">
            Engineering Web Systems with{" "}
            <span className="text-chrome">Aesthetic Depth</span> &{" "}
            <span className="text-accent">Practical Functionality</span>.
          </h1>
        </motion.div>

        {/* Narrative & Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-12">
          
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            <p>
              Hello, I am <strong className="text-white">Haad Sheikh</strong> — a passionate MERN Stack and Frontend Developer from Pakistan. My software development trajectory began in <strong className="text-white">2024</strong> when I enrolled in the <span className="text-accent font-semibold">Certified Modern Web & App Development</span> program at <strong className="text-white">SMIT (Saylani Mass IT Training)</strong>.
            </p>

            <p>
              That intensive training cemented my technical foundation in modular component design, state management, asynchronous data flows, and modern JavaScript standards. I believe the best web applications sit at the intersection of robust engineering and breathtaking visual presentation.
            </p>

            <div className="glass p-6 rounded-2xl border border-white/10 my-6">
              <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-accent" />
                Current & Past Experience
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-1">▹</span>
                  <div>
                    <strong className="text-white">Front-End Developer at Digitano (Private) Limited</strong> (Aug 2026 – Present): Building high-performance, modern web interfaces and responsive experiences.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-1">▹</span>
                  <div>
                    <strong className="text-white">MERN Stack Developer at SmW Global</strong> (Oct 2025 – July 2026): Engineered full-stack applications with React, Next.js, Node.js, Express, MongoDB, and REST APIs.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent mt-1">▹</span>
                  <div>
                    <strong className="text-white">React Native Intern at Hybrid Innovations</strong> (July 2025): Developed mobile UI components and gained practical cross-platform application experience.
                  </div>
                </li>
              </ul>
            </div>

            <p>
              On the academic front, I completed Matriculation from <strong className="text-white">Muslim Secondary School</strong> (2023, 64%), and Intermediate from <strong className="text-white">SR. Public School & College</strong> (81%). To support lifelong learning and technical depth, I am actively pursuing university studies at the <strong className="text-white">Virtual University of Pakistan</strong>.
            </p>

            {/* Resume & Portfolio CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a
                href="https://drive.google.com/file/d/1lshpZf8SA6-ojToOMcwBI_WSnjPYsv2T/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-black font-bold font-mono text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] hover:scale-105 transition-all duration-300"
              >
                Download Official Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:sheikhhaad6@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass border border-white/15 text-white font-mono text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
              >
                Direct Inquiry
              </a>
            </div>
          </motion.div>

          {/* Right Column: Holographic Photo & Key Facts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Holographic Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-3 group shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/50">
                <img
                  src={mypic}
                  alt="Haad Sheikh portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 glass px-4 py-3 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm">Haad Sheikh</h4>
                      <p className="text-accent font-mono text-xs">MERN & Frontend Developer</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-accent/20 border border-accent/40 text-[10px] font-mono text-accent uppercase font-bold">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Fact Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  LOCATION
                </span>
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Pakistan
                </span>
              </div>
              <div className="glass p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  CURRENT ROLE
                </span>
                <span className="text-white font-bold text-sm flex items-center gap-1.5 truncate">
                  <Building2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  Digitano
                </span>
              </div>
              <div className="glass p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  JOURNEY START
                </span>
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent" />
                  2024 (SMIT)
                </span>
              </div>
              <div className="glass p-4 rounded-xl border border-white/10">
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1">
                  EDUCATION
                </span>
                <span className="text-white font-bold text-sm flex items-center gap-1.5 truncate">
                  <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
                  VU Pakistan
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Technical Skills Matrix */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="mb-12">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2 font-semibold">
              // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Technologies & Development Stack
            </h2>
          </div>
          <CosmicSkills />
        </div>

        {/* Timeline Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <Timeline />
        </div>

        {/* Contact Ending */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <ContactSec />
        </div>

      </div>
    </>
  );
};

export default About;
