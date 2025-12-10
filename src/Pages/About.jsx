import React from "react";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.webp";
import AnimatedBtn from "../Components/AnimatedBtn";
import SkillMarquee from "../Components/SkillsMarquee";
import ContactSec from "../Components/ContactSec";
import ChingariBackground from "../Components/AnimatedBackground.jsx";

const About = () => {

  return (
    <>
      <ChingariBackground />
      
      <div className="flex flex-col md:flex-row items-center min-h-screen justify-center md:justify-around px-6 sm:px-10 lg:px-20 gap-6">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-b-full overflow-hidden shadow-lg border-[0.5px] border-[#7eee2e] w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px]"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={mypic}
            alt="Haad Sheikh"
            className="w-full h-[420px] object-cover rounded-b-3xl shadow-lg"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A{" "}
            <motion.span 
              className="bg-[#2DE72c] text-black px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              creative developer
            </motion.span>
            <br /> & digital designer
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I work with brands globally to design and build websites that
            deliver results, align with business goals, and create meaningful
            digital experiences.
          </motion.p>

          {/* Button */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatedBtn
              title="My Resume"
              link="https://drive.google.com/file/d/1CSV4LJ3vHIZTlyxhlOH9FRtIvjKXYqJD/view?usp=drive_link"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div 
        className="mb-10 mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.hr
          className="border-gray-900"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <SkillMarquee />
        <motion.hr
          className="border-gray-900"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="p-5"
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