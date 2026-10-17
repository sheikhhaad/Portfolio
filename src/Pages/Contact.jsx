// src/Pages/Contact.jsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, MessageSquare } from "lucide-react";
import Available from "../Components/Available";
import Accordian from "../Components/Accordian";
import AnimatedBackground from "../Components/AnimatedBackground.jsx";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [copied, setCopied] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your primary development stack?",
      answer: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js, along with TypeScript, Tailwind CSS, and interactive 3D WebGL interfaces with Three.js.",
    },
    {
      question: "What is your current availability?",
      answer: "I am currently working as a Front-End Developer at Digitano and am open to discussing select high-impact freelance projects, contract engagements, and innovative full-stack collaborations.",
    },
    {
      question: "How do you approach a typical project workflow?",
      answer: "I begin with understanding your project architecture and business goals, followed by wireframing and design handoff, rapid sprint development with clean component architecture, and comprehensive testing prior to deployment.",
    },
    {
      question: "How fast can you deliver a modern web product?",
      answer: "Timelines depend on complexity: high-impact landing pages or portfolio experiences typically take 1–2 weeks, while full-stack platforms with authentication and databases typically take 3–5 weeks.",
    },
  ];

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const copyEmail = () => {
    navigator.clipboard.writeText("sheikhhaad6@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError("");

    const payload = {
      access_key: "3c210d8f-e94f-44dd-8cac-7cf4acfe4d59",
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject || "New Portfolio Inquiry from " + formData.name,
      message: formData.message,
    };

    try {
      const res = await axios.post("https://api.web3forms.com/submit", payload);
      if (res.data.success) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setSendError("Message could not be sent. Please email directly at sheikhhaad6@gmail.com");
      }
    } catch (error) {
      console.error(error);
      setSendError("Network error. Please email directly at sheikhhaad6@gmail.com");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <AnimatedBackground />

      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto relative z-10 font-sans">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-accent/30 text-xs font-mono text-accent mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00FF00]" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">
              TRANSMISSION // INITIATE CONTACT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display max-w-3xl">
            Let's Build Something{" "}
            <span className="text-chrome">Extraordinary</span> Together.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mt-3 font-sans">
            Have a project in mind, want to explore a potential collaboration, or simply discuss modern web engineering? My inbox is always open.
          </p>
        </motion.div>

        {/* Two-Column Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Direct Communication Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Email Block */}
              <div>
                <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-2 mt-1">
                  <a
                    href="mailto:sheikhhaad6@gmail.com"
                    className="text-white hover:text-accent font-semibold text-lg sm:text-xl transition-colors truncate"
                  >
                    sheikhhaad6@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <FaCheck className="text-accent" /> : <FaCopy />}
                  </button>
                </div>
              </div>

              {/* Phone Block */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                  PHONE / WHATSAPP
                </span>
                <a
                  href="tel:+923322859107"
                  className="text-white hover:text-accent font-semibold text-lg sm:text-xl transition-colors"
                >
                  +92 3322 859107
                </a>
              </div>

              {/* Location Block */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                  LOCATION & TIMEZONE
                </span>
                <p className="text-gray-200 font-medium">
                  Pakistan (PKT / UTC+5) · Open to Global Remote Work
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-3">
                  VERIFIED NETWORKS
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/sheikhhaad/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#0077b5] hover:bg-[#0077b5]/20 transition-all duration-300"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="https://github.com/sheikhhaad"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/sheikhhaad_/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#E1306C] hover:bg-[#E1306C]/20 transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/sheikhhaad0"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#1877F2] hover:bg-[#1877F2]/20 transition-all duration-300"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC5dq3xrGBgE5-Gk-eaYqAew"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF0000] hover:bg-[#FF0000]/20 transition-all duration-300"
                  >
                    <FaYoutube size={18} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Cosmic Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
              
              {/* Success Notification */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent mb-4 shadow-[0_0_30px_rgba(0,255,0,0.5)]">
                      <FaCheck size={28} />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 font-display">
                      Message Dispatched!
                    </h3>
                    <p className="text-gray-300 text-sm max-w-sm mb-6">
                      Thank you for reaching out. Your transmission has been received and I will respond to your email promptly.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-6 py-2.5 rounded-full glass border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:border-accent hover:text-accent"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-accent mb-2">
                    01 // What is your name? *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-accent mb-2">
                    02 // What is your email address? *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-accent mb-2">
                    03 // Subject or Project Type
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Web App / Frontend Architecture"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-accent mb-2">
                    04 // Message Details *
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product requirements, timeline, or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-sans text-sm sm:text-base resize-none"
                  ></textarea>
                </div>

                {sendError && (
                  <p className="text-red-400 text-xs font-mono">{sendError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSending || isSent}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-accent text-black font-mono text-xs uppercase tracking-widest font-extrabold hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] hover:scale-105 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSending ? "Transmitting..." : "Send Transmission"}
                  <FaPaperPlane />
                </button>
              </form>

            </div>
          </motion.div>

        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2 font-semibold">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Questions & Common Inquiries
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Accordian
                key={idx}
                title={faq.question}
                description={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
