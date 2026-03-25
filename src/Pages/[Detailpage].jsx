import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Layout,
  Zap,
  Globe,
  Github,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import donation from "../assets/donationweb.png";
import gemini from "../assets/gemini.png";
import chatAppImage from "../assets/ChatApp.png";
import blogAppImage from "../assets/BlogApp.png";
import portfolioImage from "../assets/portfolio.png";
import Soni from "../assets/Soni.png";
import smw from "../assets/smw.png";
import ContactSec from "../Components/ContactSec";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

/* ─── Reveal wrapper ─── */
const Reveal = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 36 : direction === "down" ? -36 : 0,
      x: direction === "left" ? 36 : direction === "right" ? -36 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Tech Badge ─── */
const TechBadge = ({ tech, index }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.75 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.07 + 0.3, ease: "backOut" }}
    whileHover={{ scale: 1.06, y: -2 }}
    className="relative group inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold cursor-default overflow-hidden font-mono text-gray-200 border border-white/10 bg-white/5"
  >
    <span
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0,255,0,0.12) 0%, transparent 70%)",
      }}
    />
    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
    {tech}
  </motion.span>
);

/* ─── Feature Item ─── */
const FeatureItem = ({ feature, index }) => (
  <motion.li
    className="group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-300 border-l-2 border-transparent hover:border-accent"
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: index * 0.07 + 0.3, ease: "easeOut" }}
    whileHover={{ x: 4 }}
  >
    <div className="mt-0.5 flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center bg-accent/15">
      <ChevronRight size={12} className="text-accent" />
    </div>
    <span className="text-slate-300 leading-relaxed text-sm sm:text-base">
      {feature}
    </span>
  </motion.li>
);

/* ─── Stat Pill ─── */
const StatPill = ({ label, value, delay }) => (
  <Reveal delay={delay} direction="up">
    <div className="flex flex-col items-center px-2 py-4 sm:px-8 sm:py-5 rounded-2xl bg-white/5 border border-white/10">
      <span className="text-2xl sm:text-3xl font-black mb-1 text-accent font-display">
        {value}
      </span>
      <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-slate-500 font-mono text-center leading-tight">
        {label}
      </span>
    </div>
  </Reveal>
);

/* ─── Work data ─── */
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
    year: "2024",
    category: "Full-Stack",
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
    year: "2024",
    category: "AI / Frontend",
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
    year: "2024",
    category: "Full-Stack",
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
    techStack: ["React", "Firebase (Auth, Firestore, Storage)", "Tailwind CSS"],
    link: "https://blogg-app-tech.vercel.app/",
    image: blogAppImage,
    codeLink: "https://github.com/sheikhhaad/Blogg-App-tech",
    year: "2024",
    category: "Full-Stack",
  },
   {
    id: 7, // Incremented for your sequence
    name: " Financial Ecosystem",
    overview: "A convergence of Finance, AI, and Automation.",
    description:
      "A high-tier Financial Architecture platform designed to 'Unlock Growth' for global organizations. This system redefines traditional accounting by integrating AI-driven insights with automated fiscal workflows. Developed with a focus on precision and scalability, it serves as a digital headquarters for managing complex financial data with sub-second latency.",
    features: [
      "AI-Powered Fiscal Analytics",
      "Automated Bookkeeping Workflows",
      "Real-time Growth Modeling",
      "Enterprise-Grade Data Security",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    link: "https://smw-website.vercel.app/",
    image: smw, // Ensure this variable is defined in your code
    codeLink: "https://github.com/sheikhhaad/smw-website",
    year: "2024",
    category: "Web",
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
    year: "2024",
    category: "Frontend",
  },
  {
    id: 9,
    name: "Soni UI",
    overview: "Automotive brand UI concept.",
    description:
      "Soni UI is a design concept for an automotive website. It features a product showcase with a gradient-styled UI for a modern look and feel.",
    features: ["Product showcase", "Gradient UI", "Clean layout"],
    techStack: ["React", "Tailwind CSS"],
    link: "https://soni-auto-ui-react.vercel.app/",
    image: Soni,
    codeLink: "https://github.com/sheikhhaad/Soni-Auto-UI-react",
    year: "2024",
    category: "UI Design",
  },
 
];

/* ─── Page ─── */
const Detailpage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(work.find((itm) => itm.id == id) ?? null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!data)
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 w-full max-w-sm">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 font-display">
            Project not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-accent/20 border border-accent/40 text-white hover:bg-accent/30 transition-all"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </motion.div>
    );

  return (
    <>
      <ChingariBackground />

      <style>{`
        /* ── root: kill horizontal scroll ── */
        .dp-root { overflow-x: hidden; width: 100%; }
        .dp-root *, .dp-root *::before, .dp-root *::after { box-sizing: border-box; }

        /* glass cards */
        .dp-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          backdrop-filter: blur(8px);
        }

        /* image wrapper */
        .dp-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
        }
        .dp-img-wrap img { display: block; width: 100%; object-fit: cover; max-height: 480px; }

        /* divider */
        .dp-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(0,255,0,0.22), transparent); }

        /* label */
        .dp-lbl {
          font-size: 0.67rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--color-accent, #22c55e); font-family: monospace;
        }

        /* buttons */
        .dp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 20px; border-radius: 100px;
          font-weight: 700; font-size: 0.83rem; letter-spacing: 0.02em;
          background: var(--color-accent, #22c55e); color: #000;
          border: none; cursor: pointer; text-decoration: none;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          box-shadow: 0 4px 18px rgba(0,255,0,0.18);
          white-space: nowrap; flex-shrink: 0;
        }
        .dp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 26px rgba(0,255,0,0.32); }

        .dp-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; border-radius: 100px;
          font-weight: 600; font-size: 0.83rem;
          background: rgba(255,255,255,0.05); color: #cbd5e1;
          border: 1px solid rgba(255,255,255,0.12); cursor: pointer; text-decoration: none;
          transition: background 0.22s ease, transform 0.22s ease, color 0.22s ease;
          white-space: nowrap; flex-shrink: 0;
        }
        .dp-btn-ghost:hover { background: rgba(255,255,255,0.1); color: #fff; transform: translateY(-2px); }
      `}</style>

      <motion.div
        className="dp-root min-h-screen font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* fixed background glows — use fixed+overflow-hidden so they never affect layout */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "-140px",
              width: "460px",
              height: "460px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,0,0.08) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "280px",
              right: "-140px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,200,80,0.06) 0%, transparent 70%)",
              filter: "blur(90px)",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20">
          {/* ── Back link ── */}
          <Reveal delay={0}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 mb-10 sm:mb-12 group"
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              <motion.span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowLeft size={13} />
              </motion.span>
              <span className="text-sm font-medium font-mono tracking-widest group-hover:text-white transition-colors">
                ALL PROJECTS
              </span>
            </Link>
          </Reveal>

          {/* ── Heading block ── */}
          <div className="mb-10 sm:mb-12">
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="dp-lbl">Project Detail</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-accent/15 border border-accent/30 text-accent">
                  {data.category || "Web App"}
                </span>
                {data.year && <span className="dp-lbl">{data.year}</span>}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                className="font-display font-black text-slate-100 tracking-tight mb-3"
                style={{
                  fontSize: "clamp(1.9rem, 5.5vw, 3.8rem)",
                  lineHeight: 1.07,
                }}
              >
                {data.name}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed mb-7">
                {data.overview}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="dp-btn-primary"
                >
                  <Globe size={14} /> Live Preview
                </a>
                <a
                  href={data.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="dp-btn-ghost"
                >
                  <Github size={14} /> View Source
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
            <StatPill
              label="Tech Stack"
              value={data.techStack.length}
              delay={0.2}
            />
            <StatPill
              label="Features"
              value={data.features.length}
              delay={0.25}
            />
            <StatPill label="Status" value="Live" delay={0.3} />
          </div>

          {/* ── Image — plain img, no parallax (fixes mobile scroll jank) ── */}
          <Reveal delay={0.15}>
            <div className="dp-img-wrap mb-12 sm:mb-14">
              {/* fake browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border-b border-white/10">
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <span
                    key={c}
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: c }}
                  />
                ))}
                <span
                  className="ml-3 text-[10px] sm:text-xs px-3 py-0.5 rounded-full bg-white/5 text-slate-500 font-mono truncate"
                  style={{ maxWidth: "min(200px, 45vw)" }}
                >
                  {data.link}
                </span>
              </div>
              <img src={data.image} alt={data.name} />
            </div>
          </Reveal>

          <div className="dp-divider mb-12 sm:mb-14" />

          {/* ── Features + Stack ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-14">
            <Reveal delay={0.05} direction="left">
              <div className="dp-card p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-accent/15 flex-shrink-0">
                    <Zap size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="dp-lbl">What it does</p>
                    <h2 className="font-display font-bold text-slate-100 text-lg sm:text-xl tracking-tight">
                      Key Features
                    </h2>
                  </div>
                </div>
                <ul className="space-y-0.5">
                  {data.features.map((f, i) => (
                    <FeatureItem key={i} feature={f} index={i} />
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1} direction="right">
              <div className="dp-card p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-accent/15 flex-shrink-0">
                    <Layout size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="dp-lbl">Built with</p>
                    <h2 className="font-display font-bold text-slate-100 text-lg sm:text-xl tracking-tight">
                      Tech Stack
                    </h2>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((tech, i) => (
                    <TechBadge key={i} tech={tech} index={i} />
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      Each technology was chosen for performance, developer
                      experience, and real-world reliability.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Description ── */}
          <Reveal delay={0.1}>
            <div className="dp-card p-6 sm:p-10 mb-10 sm:mb-14">
              <p className="dp-lbl mb-1">About the project</p>
              <h2 className="font-display font-bold text-slate-100 text-xl sm:text-2xl tracking-tight mb-5">
                Project Overview
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-5">
                {data.overview}
              </p>

              {data.description && (
                <>
                  <div className="dp-divider my-5" />
                  <h3 className="dp-lbl mb-3">In Depth</h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {data.description}
                  </p>
                </>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-6 border-t border-white/10">
                <span className="text-slate-500 text-xs sm:text-sm font-mono">
                  Ready to explore?
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noreferrer"
                    className="dp-btn-primary"
                  >
                    <ExternalLink size={13} /> Open Live Site
                  </a>
                  <a
                    href={data.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="dp-btn-ghost"
                  >
                    <Code size={13} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Contact ── */}
        <motion.div
          className="px-4 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactSec />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Detailpage;
