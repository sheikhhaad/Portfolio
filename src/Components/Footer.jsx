import React from 'react';
import SocialBtn from './SocialBtn';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { path: "https://github.com/your-username", Icon: FaGithub },
  { path: "https://linkedin.com/in/your-username", Icon: FaLinkedin },
  { path: "https://instagram.com/your-username", Icon: FaInstagram },
  { path: "https://facebook.com/your-username", Icon: FaFacebook },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <p className="text-gray-400 text-sm md:text-base">
            © {currentYear} Haad Sheikh. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          {socials.map((item, index) => (
            <SocialBtn
              key={index}
              path={item.path}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;