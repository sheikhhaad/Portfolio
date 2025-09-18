import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 shadow-lg shadow-black/40 transition-all duration-300 z-50
        ${isScrolled
          ? "w-[50%] rounded-full bg-[rgba(78,78,78,0.4)] backdrop-blur-lg"
          : "w-[90%] rounded-xl bg-transparent"
        }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-2xl">
          <Logo />
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-200 hover:text-green-400 transition-colors duration-200"
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

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <span className="h-[3px] w-6 rounded bg-white"></span>
            <span className="h-[3px] w-6 rounded bg-white"></span>
            <span className="h-[3px] w-6 rounded bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute right-0 top-full mt-2 flex w-48 flex-col gap-4 rounded-b-xl bg-[#1f2937] p-5 shadow-lg md:hidden">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-200 font-medium transition hover:text-green-400"
              onClick={() => setOpen(false)} // menu band hote hi close ho
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
