// src/Components/CosmicSkills.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiSocketdotio,
  SiVite,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import { Terminal, Cpu, Layers, Database, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Layers className="w-5 h-5 text-accent" />,
    description: "Architecting responsive, high-performance, and accessible web interfaces.",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, status: "Primary" },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, status: "Primary" },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, status: "Active" },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-[#F7DF1E]" />, status: "Primary" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, status: "Primary" },
      { name: "HTML5 / CSS3", icon: <FaHtml5 className="text-[#E34F26]" />, status: "Core" },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, status: "Core" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Cpu className="w-5 h-5 text-accent" />,
    description: "Developing resilient RESTful APIs, business logic, and authentication systems.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#5FA04E]" />, status: "Primary" },
      { name: "Express.js", icon: <SiExpress className="text-white" />, status: "Primary" },
      { name: "REST APIs", icon: <Terminal className="w-4 h-4 text-accent" />, status: "Primary" },
      { name: "JWT Auth", icon: <Layers className="w-4 h-4 text-white" />, status: "Active" },
    ],
  },
  {
    id: "database",
    title: "Databases & Cloud",
    icon: <Database className="w-5 h-5 text-accent" />,
    description: "Data modeling, schema design, and cloud database integrations.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, status: "Primary" },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, status: "Active" },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" />, status: "Exploring" },
    ],
  },
  {
    id: "mobile-realtime",
    title: "Mobile & Real-Time",
    icon: <Smartphone className="w-5 h-5 text-accent" />,
    description: "Cross-platform mobile applications and bidirectional socket communications.",
    skills: [
      { name: "React Native", icon: <FaReact className="text-[#61DAFB]" />, status: "Internship Exp" },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" />, status: "Active" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Infrastructure",
    icon: <Wrench className="w-5 h-5 text-accent" />,
    description: "Modern development workflows, version control, and deployment pipelines.",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, status: "Daily" },
      { name: "GitHub", icon: <FaGithub className="text-white" />, status: "Daily" },
      { name: "Vercel", icon: <SiVercel className="text-white" />, status: "Primary" },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, status: "Primary" },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, status: "Daily" },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, status: "Design Handoff" },
    ],
  },
];

const CosmicSkills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
            activeCategory === "all"
              ? "bg-accent text-black font-bold shadow-[0_0_20px_rgba(0,255,0,0.4)]"
              : "glass text-gray-400 hover:text-white hover:border-white/20"
          }`}
        >
          All Technologies
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
              activeCategory === cat.id
                ? "bg-accent text-black font-bold shadow-[0_0_20px_rgba(0,255,0,0.4)]"
                : "glass text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-[0_10px_35px_rgba(0,255,0,0.08)] flex flex-col justify-between"
          >
            {/* Top metallic bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-accent/60 transition-all duration-500" />

            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/30 transition-colors">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-accent uppercase tracking-widest">
                    SYSTEM // VERIFIED
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                {cat.description}
              </p>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-xs font-medium text-gray-200 font-sans">
                      {skill.name}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-gray-400 border border-white/5">
                      {skill.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Telemetry Detail */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>MODULE: 0{idx + 1}</span>
              <span className="text-accent/70">● ACTIVE PIPELINE</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CosmicSkills;
