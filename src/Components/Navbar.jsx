import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
                ? "w-[60%] rounded-full backdrop-blur-lg shadow-lg border border-white/5"
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
                  className={`text-gray-300 text-sm hover:text-[#10b981] transition-colors duration-200 ${
                    location.pathname === link.path ? "text-[#10b981] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sheikhhaad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sheikhhaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl hover:text-[#0077b5] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/sheikhhaad0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xl hover:text-[#1877F2] transition-colors"
              >
                <FaFacebook />
              </a>
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
        <div className="flex justify-around items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-[#10b981] text-shadow-sm scale-110"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-[16px]">{link.icon}</span>
              <span className="text-[10px] mt-1 font-semibold">{link.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
