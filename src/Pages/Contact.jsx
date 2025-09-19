// ContactSection.jsx
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaFacebook,
} from "react-icons/fa";
import Available from "../Components/Available";
import AnimatedBtn from "../Components/AnimatedBtn";
import LeftSec from "../Components/LeftSec";
import Footer from "../Components/Footer";
import Accordian from "../Components/Accordian";
import mypic from '../assets/mypic.webp'

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
    { path: "https://github.com/sheikhhaad", Icon: FaGithub, hover: "hover:text-white" },
    { path: "https://linkedin.com/in/sheikhhaad", Icon: FaLinkedin, hover: "hover:text-[#0077b5]" },
    { path: "https://instagram.com/sheikhhaad_", Icon: FaInstagram, hover: "hover:text-[#E1306C]" },
    { path: "https://www.facebook.com/profile.php?id=61555704857977", Icon: FaFacebook, hover: "hover:text-[#1877F2]" },
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };

  return (
    <>
      <div className="min-h-screen mt-20 font-quicksand">
        <LeftSec heading="Connect With Me" title="Let's start a project together" />

        <div className="flex items-center justify-around py-4 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl z-10">
            {/* Left Form */}
            <div className="bg-gradient-to-br from-[rgba(78,78,78,0.2)] to-[rgba(78,78,78,0.0)] rounded-3xl p-5 shadow-2xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#0f0f11] border border-gray-800 text-white outline-none focus:border-purple-500 transition-all duration-300 resize-none"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <AnimatedBtn title="Send Message" icon={<FaPaperPlane className="ml-2" />} />
              </form>
            </div>

            {/* Right Card */}
            <div className="bg-gradient-to-br from-[rgba(78,78,78,0.2)] to-[rgba(78,78,78,0.0)] rounded-3xl p-5 flex flex-col shadow-2xl border border-gray-800">
              <div className="mb-6 self-start"><Available /></div>

              <div className="relative self-start mb-6">
                <div className="rounded-full border border-green-300 p-2">
                  <img
                    src={mypic}
                    alt="profile"
                    className="w-28 h-28 rounded-full border-2 border-blue-800"
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                My inbox is always open. Whether you have a project or just want to say Hi. Feel free to contact me and I'll get back to you quickly.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>sheikhhaad6@gmail.com</p>
                  <p>+92 332 2859 107</p>
                  <p>Karachi, Pakistan</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
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

        {/* FAQ Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-16 mb-20 px-6 lg:px-20">
          <LeftSec heading="FAQ'S" title="Have Questions" />
          <div className="flex-1 space-y-4">
            {question.map((itm, indx) => (
              <Accordian key={indx} title={itm.question} description={itm.answer} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
