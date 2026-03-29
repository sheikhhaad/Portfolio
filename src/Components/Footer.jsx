import React from "react";
import SocialBtn from "./SocialBtn";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  { path: "https://github.com/sheikhhaad", Icon: FaGithub },
  { path: "https://linkedin.com/in/sheikhhaad", Icon: FaLinkedin },
  { path: "https://instagram.com/sheikhhaad_", Icon: FaInstagram },
  { path: "https://facebook.com/sheikhhaad0", Icon: FaFacebook },
];

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative  pt-16 pb-24 md:pb-8 overflow-hidden font-sans z-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[250px] pointer-events-none opacity-20 bg-gradient-to-b from-accent to-transparent blur-[120px]" />

      <div className="container mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Intro */}
          <div className="lg:col-span-2 space-y-6 md:pr-10">
           <h1 className="font-display text-white tracking-tight hover:opacity-80 transition-opacity">
             <Link
              to="/"
              className="inline-block text-3xl font-display text-white tracking-tight hover:opacity-80 transition-opacity"
            >
              Haad
              <span className="text-accent">
                .
              </span>
            </Link>
           </h1>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">
              Crafting visually stunning, high-performance web experiences.
              Focused on modern design, responsive layouts, and clean code.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:sheikhhaad1@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm sm:text-base"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-all border border-white/5 group-hover:border-accent/30">
                  <FaEnvelope size={14} />
                </div>
                <span>sheikhhaad6@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wider text-sm uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm sm:text-base hover:text-accent hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wider text-sm uppercase">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socials.map((item, i) => (
                <SocialBtn
                  key={i}
                  path={item.path}
                  Icon={item.Icon}
                  styling="!flex"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Haad Sheikh. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">
            <span>Crafted with Haad Sheikh</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span>in Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
