import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaSun,
  FaMoon
} from "react-icons/fa";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const detectScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", detectScroll);
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
      {/* Top Navbar for desktop */}
      <AnimatePresence>
        <motion.nav
          key="navbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 transition-all duration-300 z-50 hidden md:block font-quicksand
            ${
              isScrolled
                ? "w-[60%] rounded-full bg-[var(--card)]/10 backdrop-blur-lg shadow-lg border border-[var(--text)]/10"
                : "w-[90%] rounded-xl bg-transparent"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className={`text-[var(--text-light)] text-sm hover:text-[var(--primary)] transition-colors duration-200 ${
                    location.pathname === link.path ? "text-[var(--primary)] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons & Theme Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sheikhhaad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-light)] text-xl hover:text-[var(--text)] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sheikhhaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-light)] text-xl hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/sheikhhaad0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-light)] text-xl hover:text-[#1877F2] transition-colors"
              >
                <FaFacebook />
              </a>
              
              <div className="w-px h-6 bg-[var(--text)]/20 mx-2"></div>
              
              <button 
                onClick={toggleTheme} 
                className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors ml-1 p-2 rounded-full glass flex items-center justify-center transform hover:scale-110 active:scale-95"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-[var(--text)]" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Bottom Tab Bar for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 ml-10 mr-10 mb-2 right-0 rounded-full glass backdrop-blur-[4px] z-50 md:hidden py-2 font-quicksand shadow-lg"
      >
        <div className="flex justify-around items-center relative">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-[var(--primary)] text-shadow-sm scale-110"
                  : "text-[var(--text-light)] hover:text-[var(--text)]"
              }`}
            >
              <span className="text-[16px]">{link.icon}</span>
              <span className="text-[10px] mt-1 font-semibold">{link.name}</span>
            </Link>
          ))}
          
          <div className="w-px h-8 bg-[var(--text)]/20 mx-1"></div>
          
          <button 
            onClick={toggleTheme} 
            className="flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 text-[var(--text-light)] hover:text-[var(--primary)]"
          >
            <span className="text-[16px]">{theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-[var(--text)]" />}</span>
            <span className="text-[10px] mt-1 font-semibold">Theme</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
