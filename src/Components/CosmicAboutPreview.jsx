// src/Components/CosmicAboutPreview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mypic from "../assets/mypic.webp";
import { ArrowUpRight, CheckCircle2, Sparkles, Building2, MapPin, GraduationCap } from "lucide-react";

const CosmicAboutPreview = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Authentic Portrait in Holographic Cosmic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-white/5 rounded-3xl blur-2xl -z-10 opacity-70" />

          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-3 group">
            {/* Corner metallic brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/40">
              <img
                src={mypic}
                alt="Haad Sheikh - MERN Stack Developer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Status Pill on Photo */}
              <div className="absolute bottom-4 left-4 right-4 glass px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Haad Sheikh</p>
                  <p className="text-accent font-mono text-[11px]">Front-End Developer @ Digitano</p>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Floating Info Tag */}
          <div className="absolute -bottom-6 -right-4 glass px-4 py-2 rounded-xl border border-white/10 hidden sm:flex items-center gap-2 text-xs font-mono text-gray-300 shadow-xl">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Pakistan · Remote Friendly</span>
          </div>
        </motion.div>

        {/* Right: Narrative & Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-mono text-xs uppercase tracking-widest font-semibold">
              // 01. ABOUT ME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight font-display">
            Engineering Web Products with{" "}
            <span className="text-chrome">Thoughtful Craft</span> &{" "}
            <span className="text-accent">Scalability</span>.
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
            I am a <strong className="text-white">MERN Stack & Front-End Developer</strong> based in Pakistan. My software development journey started in <strong className="text-white">2024</strong> through the Certified Modern Web & App Development program at <strong className="text-white">SMIT</strong>. Since then, I've designed and delivered robust web systems combining aesthetic interfaces with rock-solid backends.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Currently working at <strong className="text-white">Digitano (Private) Limited</strong> as a Front-End Developer, following previous full-stack development at <strong className="text-white">SmW Global</strong> and mobile application internship at <strong className="text-white">Hybrid Innovations</strong>.
          </p>

          {/* Key Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="glass p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <h4 className="text-white font-bold text-sm">Clean Frontend Code</h4>
              </div>
              <p className="text-gray-400 text-xs">
                Reusable React & Next.js architectures, fluid micro-interactions, responsive design.
              </p>
            </div>

            <div className="glass p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <h4 className="text-white font-bold text-sm">Full-Stack Execution</h4>
              </div>
              <p className="text-gray-400 text-xs">
                Node.js, Express, MongoDB schemas, secure authentication, and RESTful API integrations.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-black font-bold font-mono text-xs tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] hover:scale-105 transition-all duration-300"
            >
              Full Profile & Story
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1lshpZf8SA6-ojToOMcwBI_WSnjPYsv2T/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-mono text-xs tracking-wider uppercase hover:border-white/30 hover:text-accent transition-colors"
            >
              View Official Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CosmicAboutPreview;
