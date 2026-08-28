import React from "react";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.webp";
import AnimatedBtn from "../Components/AnimatedBtn";
import ContactSec from "../Components/ContactSec";
import ChingariBackground from "../Components/AnimatedBackground.jsx";
import Timeline from "../Components/Timeline.jsx";

const About = () => {
  return (
    <>
      <ChingariBackground />

      <div className="pt-32 pb-12 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto relative z-10">
        {/* Top Hero / Narrative Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: Narrative */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <span className="text-accent font-mono text-sm tracking-widest uppercase font-semibold block mb-2">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-display">
                Building Modern Web Experiences with{" "}
                <span className="text-gradient">
                  Purpose & <span className="bg-accent text-black px-1.5 rounded">Precision</span>.
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-gray-300 font-sans text-lg leading-relaxed">
              <p>
                My professional web development journey started in{" "}
                <span className="text-white font-semibold">2024</span> when I
                enrolled in the{" "}
                <span className="bg-accent text-black px-1 rounded font-medium">
                  Certified Modern Web & App Development
                </span>{" "}
                program at{" "}
                <span className="text-white font-medium">
                  SMIT (Saylani Mass IT Training)
                </span>
                . That intensive training provided the foundational cornerstone
                for my career, focusing on modern web standards, component-driven
                architecture, and practical software engineering.
              </p>

              <p>
                My academic path began with Matriculation from{" "}
                <span className="text-white font-medium">
                  Muslim Secondary School
                </span>{" "}
                in 2023 (64%), followed by Intermediate from{" "}
                <span className="text-white font-medium">
                  SR. Public School & College
                </span>
                , where I achieved 81%. To continue expanding my knowledge, I am
                also pursuing my university studies at the{" "}
                <span className="text-white font-medium">
                  Virtual University of Pakistan
                </span>
                .
              </p>

              <p>
                Following my initial training, I gained valuable hands-on
                experience as a{" "}
                <span className="text-white font-medium">
                  React Native Intern
                </span>{" "}
                at{" "}
                <span className="text-white font-medium">
                  Hybrid Innovations
                </span>{" "}
                in July 2025. From October 2025 to July 2026, I worked as a{" "}
                <span className="bg-accent text-black px-1 rounded font-medium">
                  MERN Stack Developer
                </span>{" "}
                at{" "}
                <span className="text-white font-medium">
                  SmW Global (Private) Limited
                </span>
                , developing full-stack web applications with React.js, Next.js,
                Node.js, Express.js, MongoDB, and secure RESTful services.
              </p>

              <p>
                Currently, since August 2026, I work as a{" "}
                <span className="bg-accent text-black px-1 rounded font-medium">
                  Front-End Developer
                </span>{" "}
                at{" "}
                <span className="text-white font-medium">
                  Digitano (Private) Limited
                </span>
                , where I concentrate on building clean, high-performance, and
                responsive web interfaces.
              </p>
            </div>
          </div>

          {/* Right: Photo & Tools */}
          <div className="lg:col-span-2 space-y-12 lg:sticky lg:top-32">
            <motion.div
              className="relative rounded-3xl overflow-hidden glass p-2 w-full max-w-[400px] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent/40 blur-3xl -z-10"></div>
              <img
                src={mypic}
                alt="Haad Sheikh"
                className="w-full object-cover rounded-2xl h-[450px]"
              />
            </motion.div>

            {/* Tools List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                What I Use
              </h2>

              <div className="space-y-4">
                {/* Frontend */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-start sm:items-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-accent font-mono font-bold tracking-widest text-sm w-24">
                    FRONTEND
                  </span>
                  <span className="text-gray-300 flex-1 sm:text-right font-sans">
                    React.js, Next.js, Tailwind CSS, Framer Motion, JavaScript (ES6+)
                  </span>
                </div>

                {/* Backend / Fullstack */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-start sm:items-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-accent font-mono font-bold tracking-widest text-sm w-24">
                    BACKEND
                  </span>
                  <span className="text-gray-300 flex-1 sm:text-right font-sans">
                    Node.js, Express.js, MongoDB, REST APIs, Authentication
                  </span>
                </div>

                {/* Mobile */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-start sm:items-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-accent font-mono font-bold tracking-widest text-sm w-24">
                    MOBILE
                  </span>
                  <span className="text-gray-300 flex-1 sm:text-right font-sans">
                    React Native
                  </span>
                </div>

                {/* Workflow */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-start sm:items-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-white font-mono font-bold tracking-widest text-sm w-24">
                    WORKFLOW
                  </span>
                  <span className="text-gray-300 flex-1 sm:text-right font-sans">
                    Git, GitHub, Postman, Figma, Vercel
                  </span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <AnimatedBtn
                  title="My Resume"
                  link="https://drive.google.com/file/d/1lshpZf8SA6-ojToOMcwBI_WSnjPYsv2T/view?usp=sharing"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Timeline />
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="p-5 mt-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactSec />
      </motion.div>
    </>
  );
};

export default About;
