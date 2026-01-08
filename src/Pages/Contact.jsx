// ContactSection.jsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Available from "../Components/Available";
import AnimatedBtn from "../Components/AnimatedBtn";
import LeftSec from "../Components/LeftSec";
import Footer from "../Components/Footer";
import Accordian from "../Components/Accordian";
import mypic from "../assets/mypic.webp";
import SendBtn from "../Components/SendBtn";
import ChingariBackground from "../Components/AnimatedBackground.jsx";
import axios from "axios";

const Contact = () => {
  const question = [
    {
      question: "What is your current role?",
      answer:
        "I work as a full-stack developer, mainly focused on frontend, UI/UX, and clean performance-driven web apps.",
    },
    {
      question: "How much does it cost for a high performing website?",
      answer:
        "Cost depends on features, design, and complexity. Simple sites are more affordable, while advanced custom builds cost more. I usually discuss requirements first, then share a clear estimate.",
    },
    {
      question: "How long will the work take from start to finish?",
      answer:
        "Timelines vary by project scope. A basic site can take 1–2 weeks, while larger projects may take a month or more. After requirements, I provide a proper delivery plan.",
    },
    {
      question: "Are you available to join as full time?",
      answer:
        "I am open to discussing full-time opportunities, depending on the role and project requirements.",
    },
  ];

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
      path: "https://www.facebook.com/sheikhhaad0",
      Icon: FaFacebook,
      hover: "hover:text-[#1877F2]",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openIndex, setopenIndex] = useState(null);

  const handleToggle = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const d = {
      access_key: "3c210d8f-e94f-44dd-8cac-7cf4acfe4d59",
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };
    await axios.post("https://api.web3forms.com/submit", d);
    setFormData({ name: "", email: "", msg: "" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <ChingariBackground />

      <div className="min-h-screen mt-20 font-quicksand">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LeftSec
            heading="✧ Connect With Me"
            title="Let's start a project together"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-around py-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl z-10 p-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Form */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[rgba(78,78,78,0.2)] to-[rgba(78,78,78,0.0)] rounded-3xl p-5 shadow-2xl border border-gray-800"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-full bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-full bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300 resize-none"
                    placeholder="Type your message..."
                  ></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <SendBtn />
                </motion.div>
              </form>
            </motion.div>

            {/* Right Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[rgba(78,78,78,0.2)] to-[rgba(78,78,78,0.0)] rounded-3xl p-5 flex flex-col shadow-2xl border border-gray-800"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 self-start">
                <Available />
              </div>

              <motion.div
                className="relative self-start mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-full border border-[#2DE72c] p-2">
                  <img
                    src={mypic}
                    alt="profile"
                    className="w-28 h-28 rounded-full border-2 border-blue-800"
                  />
                </div>
              </motion.div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                My inbox is always open. Whether you have a project or just want
                to say Hi. Feel free to contact me and I'll get back to you
                quickly.
              </motion.p>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Contact Info
                </h3>
                <div className="text-[#2DE72c] text-sm space-y-2">
                  <p>sheikhhaad6@gmail.com;</p>
                  <p>+92 332 2859 107;</p>
                  <p>Karachi, Pakistan;</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex gap-5">
                  {socials.map(({ path, Icon, hover }, idx) => (
                    <motion.a
                      key={idx}
                      href={path}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-gray-400 ${hover} transition-colors duration-300 p-3 bg-[#0f0f11] rounded-lg hover:scale-110 transform`}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="flex flex-col lg:flex-row gap-10 mt-16 mb-20 px-2 lg:px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <LeftSec heading="✧ FAQ'S" title="Have Questions" />
          </motion.div>

          <div className="flex-1 space-y-4">
            {question.map((itm, indx) => (
              <motion.div
                key={indx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: indx * 0.1 }}
              >
                <Accordian
                  title={itm.question}
                  description={itm.answer}
                  isOpen={openIndex === indx}
                  onToggle={() => handleToggle(indx)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
