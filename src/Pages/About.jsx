import React from "react";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.webp";
import AnimatedBtn from "../Components/AnimatedBtn";
import ContactSec from "../Components/ContactSec";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

const About = () => {
  return (
    <>
      <ChingariBackground />

      <div className="pt-32 pb-12 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left: 60% Narrative */}
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Humanizing the <br />
              <span className="text-gradient">
                Digital <span className="bg-accent text-black">Experience</span>
                .
              </span>
            </h1>

            <div className="space-y-6 text-gray-300 font-sans text-lg leading-relaxed">
              <p>
                My journey began with a traditional Computer Science degree in
                2023. Driven by pure curiosity and a passion for building things
                that live on the internet, I embraced a self-taught approach
                that has made me resourceful, adaptable, and deeply focused on
                delivering real value through code.
              </p>
              <p>
                In 2024, I completed a{" "}
                <span className="bg-accent text-black">
                  Certified Modern Web & App Development
                </span>
                course from{" "}
                <span className="bg-accent text-black">
                  SMIT (Saylani Mass IT Training)
                </span>
                . Since October 2025, I have been working as a{" "}
                <span className="bg-accent text-black">
                  Front-End Developer
                </span>{" "}
                at <span className="bg-accent text-black">SmW Global</span>
                (Private) Limited in Karachi, where I build modern, responsive
                web interfaces and collaborate with cross-functional teams on
                real-world projects.
              </p>
              <p>
                As a{" "}
                <span className="bg-accent text-black">
                  Front-End Developer
                </span>{" "}
                at <span className="bg-accent text-black">SmW Global</span>, I
                play a key role in creating high-performance, visually
                compelling, and user-centric web applications. I work closely
                with design, product, and engineering teams to deliver seamless
                digital experiences that meet international development
                standards.
              </p>
            </div>
            {/* Timeline */}
            {/* <div className="mt-16 relative">
               <h2 className="text-2xl font-bold text-white mb-8">My Journey</h2>
                <div className="pl-6 border-l-2 border-white/10 space-y-12">
                  <div className="relative">
                     <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,0,0.8)] border-4 border-bg"></div>
                     <span className="text-accent font-mono text-xs tracking-widest font-semibold uppercase mb-2 block">Jan 2023</span>
                     <h3 className="text-xl font-bold text-white">Wrote my first "Hello World."</h3>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,0,0.8)] border-4 border-bg"></div>
                     <span className="text-accent font-mono text-xs tracking-widest font-semibold uppercase mb-2 block">June 2023</span>
                     <h3 className="text-xl font-bold text-white">Mastered the MERN stack.</h3>
                  </div>
                  <div className="relative">
                     <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,0,0.8)] border-4 border-bg"></div>
                     <span className="text-white font-mono text-xs tracking-widest font-semibold uppercase mb-2 block">2024 - Present</span>
                     <h3 className="text-xl font-bold text-white">Building production-ready apps.</h3>
                  </div>
               </div>
            </div> */}
          </div>

          {/* Right: 40% Photo & Tools */}
          <div className="lg:col-span-2 space-y-16 lg:sticky lg:top-32">
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
                    React, Next.js, React Native, Tailwind CSS, Framer Motion
                  </span>
                </div>

                {/* Backend */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between items-start sm:items-center p-4 rounded-xl glass hover:bg-white/10 transition-colors cursor-default">
                  <span className="text-accent font-mono font-bold tracking-widest text-sm w-24">
                    BACKEND
                  </span>
                  <span className="text-gray-300 flex-1 sm:text-right font-sans">
                    Node.js, Express.js, MongoDB, REST APIs, JWT Auth
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
                  link="https://drive.google.com/file/d/1CSV4LJ3vHIZTlyxhlOH9FRtIvjKXYqJD/view?usp=drive_link"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="p-5 mt-20 relative z-10"
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
