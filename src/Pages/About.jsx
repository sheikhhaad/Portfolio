import React from "react";
import { motion } from "framer-motion";
import mypic from "../assets/mypic.webp";
import AnimatedBtn from "../Components/AnimatedBtn";
import SkillMarquee from "../Components/SkillsMarquee";
import ContactSec from "../Components/ContactSec";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center min-h-screen justify-center md:justify-around px-6 sm:px-10 lg:px-20 gap-6">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-b-full overflow-hidden shadow-lg border-[0.5px] border-[#7eee2e] w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px]"
        >
          <img
            src={mypic}
            alt="Haad Sheikh"
            className="w-full h-[420px] object-cover rounded-b-3xl shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            A{" "}
            <span className="bg-[#2DE72c] text-black px-2">
              creative developer
            </span>
            <br /> & digital designer
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I work with brands globally to design and build websites that
            deliver results, align with business goals, and create meaningful
            digital experiences.
          </motion.p>

          {/* Button */}
          <div className="mt-8">
            <AnimatedBtn
              title="My Resume"
              link="https://drive.google.com/file/d/1CSV4LJ3vHIZTlyxhlOH9FRtIvjKXYqJD/view?usp=drive_link"
            />
          </div>
        </div>
      </div>

      <div className="mb-10  ">
      <hr className="border-gray-900" />
     <SkillMarquee />
      <hr className="border-gray-900" />

      </div>
 <div className="p-10">
      <ContactSec/>

 </div>
    </>
  );
};

export default About;
