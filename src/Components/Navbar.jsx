import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let detectScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-2 transition-all duration-300 z-50 hidden md:block font-quicksand
          ${
            isScrolled
              ? "w-[60%]  rounded-full bg-[rgba(90,90,90,0.1)] backdrop-blur-lg"
              : "w-[90%] rounded-xl bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold ">
            <Logo />
          </div>

          {/* Links for desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="text-gray-200 text-sm hover:text-[#2DE72c] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Tab Bar for mobile */}
      <div className="fixed bottom-0 left-0 ml-6 mr-6 mb-5 right-0 rounded-full bg-[rgba(78,78,78,0.4)] backdrop-blur-lg z-50 md:hidden py-2 font-quicksand ">
        <div className="flex justify-around items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-lg transition-all duration-200 ${
                location.pathname === link.path
                  ? "text-[#2DE72c] "
                  : "text-gray-300"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu for top navbar (if needed for other elements) */}
      {open && (
        <div className="fixed right-4 top-16 flex w-48 flex-col gap-4 rounded-xl p-5 shadow-lg md:hidden z-50 font-quicksand">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-200 font-medium transition hover:text-[#2DE72c]"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
