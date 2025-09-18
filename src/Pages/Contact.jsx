// ContactSection.jsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import Available from "../Components/Available";
import AnimatedBtn from "../Components/AnimatedBtn";
import LeftSec from "../Components/LeftSec";

const Contact = () => {
  const socials = [
    {
      path: "https://github.com/sheikhhaad",
      Icon: FaGithub,
      hover: "hover:text-white",
    },
    {
      path: "https://linkedin.com/in/sheikhhaad",
      Icon: FaLinkedin,
      hover: "hover:text-[#0077b5]",
    },
    {
      path: "https://instagram.com/sheikhhaad_",
      Icon: FaInstagram,
      hover: "hover:text-[#E1306C]",
    },
    {
      path: "https://www.facebook.com/profile.php?id=61555704857977",
      Icon: FaFacebook,
      hover: "hover:text-[#1877F2]",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen mt-20">
      <LeftSec
        heading="Connect With Me"
        title="Let's start a project together"
      />

      <div className="flex items-center justify-around py-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl z-10">
          {/* Left Form */}
          <div className="bg-gradient-to-br from-[#111113] to-[#0d0d0f] rounded-3xl p-8 shadow-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300 resize-none"
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <AnimatedBtn
                title="Send Message"
                icon={<FaPaperPlane className="ml-2" />}
              />
            </form>
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-[#111113] to-[#0d0d0f] rounded-3xl p-8 flex flex-col shadow-2xl border border-gray-800">
            {/* Status */}
            <div className="mb-6 self-start">
              <Available />
            </div>

            {/* Profile Image */}
            <div className="relative self-start mb-6">
              <div className="rounded-full border border-green-300 p-2">
                <img
                  src="https://via.placeholder.com/100"
                  alt="profile"
                  className="w-28 h-28 rounded-full border-2 border-blue-500"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              My inbox is always open. Whether you have a project or just want
              to say Hi. I would love to hear from you. Feel free to contact me
              and I'll get back to you as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact Info
              </h3>
              <div className="text-gray-400 text-sm space-y-2">
                <p>sheikhhaad6@gmail.com</p>
                <p>+92 332 2859 107</p>
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-5">
                {socials.map(({ path, Icon, hover }, idx) => (
                  <a
                    key={idx}
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-gray-400 ${hover} transition-colors duration-300 p-3 bg-[#0f0f11] rounded-lg hover:scale-110 transform`}
                  >
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
