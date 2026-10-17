import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const detectScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", detectScroll, { passive: true });
    detectScroll();
    return () => window.removeEventListener("scroll", detectScroll);
  }, []);

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/projects", icon: <FaCode /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Top Floating Glassmorphism Navbar for Desktop */}
      <AnimatePresence>
        <motion.nav
          key="navbar"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 transition-all duration-300 z-50 hidden md:block font-sans
            ${
              isScrolled
                ? "w-[72%] max-w-4xl rounded-full glass border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
                : "w-[92%] max-w-6xl rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo isScrolled={isScrolled} />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {links.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={i}
                    to={link.path}
                    className={`relative text-xs uppercase tracking-widest font-mono transition-colors duration-200 py-1 ${
                      isActive ? "text-accent font-bold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_#00FF00] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-gray-400">
              <a
                href="https://github.com/sheikhhaad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white hover:scale-110 transition-all p-1.5"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sheikhhaad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0077b5] hover:scale-110 transition-all p-1.5"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/sheikhhaad_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E1306C] hover:scale-110 transition-all p-1.5"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC5dq3xrGBgE5-Gk-eaYqAew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#FF0000] hover:scale-110 transition-all p-1.5"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Bottom Floating Dock for Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 rounded-full glass border border-white/15 z-50 md:hidden py-2.5 px-4 font-sans shadow-2xl backdrop-blur-2xl"
      >
        <div className="flex justify-around items-center">
          {links.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={i}
                to={link.path}
                className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-accent scale-105"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-[10px] mt-0.5 font-mono uppercase tracking-wider">
                  {link.name}
                </span>
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-accent mt-0.5 shadow-[0_0_6px_#00FF00]" />
                )}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
