import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  Award,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("all");

  const educationData = [
    {
      title: "University Studies",
      institution: "Virtual University of Pakistan",
      period: "October 2026 - Present",
      isCurrent: true,
      description:
        "Currently pursuing university education to support ongoing academic and technical growth.",
      badge: "Ongoing / Current",
    },
    {
      title: "Certified Modern Web & App Development",
      institution: "SMIT (Saylani Mass IT Training)",
      period: "2024 - 2025",
      isCurrent: false,
      description:
        "Comprehensive professional training program where my web development journey began. Focused on modern web and application development.",
      badge: "Professional Training",
    },
    {
      title: "Intermediate",
      institution: "SR. Public School & College",
      period: "Post-Matriculation",
      score: "81%",
      isCurrent: false,
      description:
        "Completed Intermediate education with high academic achievement.",
      badge: "Academic",
    },
    {
      title: "Matriculation",
      institution: "Muslim Secondary School",
      period: "2023",
      score: "64%",
      isCurrent: false,
      description:
        "Completed secondary school education establishing the initial academic foundation.",
      badge: "Academic",
    },
  ];

  const experienceData = [
    {
      role: "Front-End Developer",
      company: "Digitano (Private) Limited",
      period: "August 2026 - Present",
      isCurrent: true,
      description:
        "Focusing on frontend development, crafting modern, high-performance web interfaces and responsive user experiences.",
      type: "Professional Experience",
      skills: ["React.js", "Next.js", "Tailwind CSS", "UI/UX", "Modern Web"],
    },
    {
      role: "MERN Stack Developer",
      company: "SmW Global (Private) Limited",
      period: "October 2025 - July 2026",
      isCurrent: false,
      description:
        "Built real-world web applications using the MERN stack. Developed responsive UIs, implemented authentication, and integrated REST APIs.",
      type: "Professional Experience",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      role: "React Native Intern",
      company: "Hybrid Innovations",
      period: "July 2025",
      isCurrent: false,
      description:
        "Gained practical mobile app development experience building cross-platform components with React Native.",
      type: "Internship",
      skills: ["React Native", "Mobile UI", "JavaScript"],
    },
  ];

  return (
    <div className="w-full">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-accent">
              <Sparkles className="w-5 h-5" />
            </span>
            Career & Education Journey
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            My development path, practical experience, and academic background
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "experience"
                ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === "education"
                ? "bg-accent text-black font-semibold shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Education
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Experience Column */}
        {(activeTab === "all" || activeTab === "experience") && (
          <motion.div
            className={`space-y-6 ${
              activeTab === "experience" ? "lg:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8">
              {experienceData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-bg transition-transform duration-300 group-hover:scale-125 ${
                      item.isCurrent
                        ? "bg-accent shadow-[0_0_12px_rgba(0,255,0,0.9)] ring-2 ring-accent/50"
                        : "bg-gray-600 border-bg group-hover:bg-accent"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl glass transition-all duration-300 relative overflow-hidden ${
                      item.isCurrent
                        ? "border-accent/40 bg-white/[0.07] shadow-[0_0_25px_rgba(0,255,0,0.08)]"
                        : "hover:border-white/20 hover:bg-white/[0.08]"
                    }`}
                  >
                    {item.isCurrent && (
                      <div className="absolute top-0 right-0">
                        <div className="bg-accent text-black text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                          Current Role
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-accent font-mono text-xs font-semibold tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-300 font-mono text-xs">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {item.role}
                    </h4>

                    <div className="flex items-center gap-1.5 text-gray-300 text-sm font-medium mt-1 mb-3">
                      <Building2 className="w-4 h-4 text-accent" />
                      <span>{item.company}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education Column */}
        {(activeTab === "all" || activeTab === "education") && (
          <motion.div
            className={`space-y-6 ${
              activeTab === "education" ? "lg:col-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10 border border-accent/30 text-accent">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Education & Training
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 border-bg transition-transform duration-300 group-hover:scale-125 ${
                      item.isCurrent
                        ? "bg-accent shadow-[0_0_12px_rgba(0,255,0,0.9)] ring-2 ring-accent/50"
                        : "bg-gray-600 border-bg group-hover:bg-accent"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`p-5 sm:p-6 rounded-2xl glass transition-all duration-300 relative overflow-hidden ${
                      item.isCurrent
                        ? "border-accent/40 bg-white/[0.07] shadow-[0_0_25px_rgba(0,255,0,0.08)]"
                        : "hover:border-white/20 hover:bg-white/[0.08]"
                    }`}
                  >
                    {item.badge && (
                      <div className="absolute top-0 right-0">
                        <div
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1.5 ${
                            item.isCurrent
                              ? "bg-accent text-black"
                              : "bg-white/10 text-gray-300 border-l border-b border-white/10"
                          }`}
                        >
                          {item.isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                          )}
                          {item.badge}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-accent font-mono text-xs font-semibold tracking-wider flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.score && (
                        <>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-white font-mono text-xs font-semibold bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">
                            Score: {item.score}
                          </span>
                        </>
                      )}
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white mt-1">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-1.5 text-gray-300 text-sm font-medium mt-1 mb-3">
                      <Building2 className="w-4 h-4 text-accent" />
                      <span>{item.institution}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
