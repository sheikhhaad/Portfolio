import React from "react";
import SocialBtn from "./SocialBtn";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const socials = [
  { path: "github.com/sheikhhaad", Icon: FaGithub },
  { path: "linkedin.com/in/sheikhhaad", Icon: FaLinkedin },
  { path: "instagram.com/sheikhhaad_", Icon: FaInstagram },
  { path: "facebook.com/sheikhhaad0", Icon: FaFacebook },
];

const Footer = () => {
  return (
    <footer className="text-white py-2 font-quicksand">
      <div className="container mx-auto flex flex-col border-b md:flex-row items-center justify-between gap-4 pb-2">
        <p className="text-gray-400 text-[12px] md:text-base text-center md:text-left">
          Haad Sheikh.
        </p>
        <div className="flex justify-center md:justify-end gap-4">
          {socials.map((item, i) => (
            <SocialBtn key={i} path={item.path} Icon={item.Icon} />
          ))}
        </div>
      </div>
      <span className="block text-center text-gray-500 text-[11px] pt-1">
        ©2024 All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
