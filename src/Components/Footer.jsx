import React from "react";
import SocialBtn from "./SocialBtn";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { path: "https://github.com/sheikhhaad", Icon: FaGithub },
  { path: "https://linkedin.com/in/sheikhhaad", Icon: FaLinkedin },
  { path: "https://instagram.com/sheikhhaad_", Icon: FaInstagram },
  {
    path: "https://www.facebook.com/profile.php?id=61555704857977",
    Icon: FaFacebook,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Copyright */}
        <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
          © {currentYear} Haad Sheikh. All rights reserved.
        </p>

        {/* Right side - Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          {socials.map((item, index) => (
            <SocialBtn key={index} path={item.path} Icon={item.Icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
