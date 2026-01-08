import React, { useState } from "react";
import {
  FiPlus,
  FiMinus,
  FiStar,
  FiAward,
  FiTrendingUp,
  FiGlobe,
  FiCode,
  FiCloud,
} from "react-icons/fi";
import { motion } from "framer-motion";
import coding from "../assets/coding.mp4";
import AnimatedBtn from "./AnimatedBtn";
import LeftSec from "./LeftSec";

const ExpertiseSec = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const expertiseData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Modern, responsive websites using React, Next.js, and cutting-edge technologies. We build fast, SEO-friendly web applications that convert visitors into customers.",
      icon: <FiCode className="text-blue-400" />,
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality. We create intuitive interfaces that enhance user experience and drive engagement.",
      icon: <FiAward className="text-purple-400" />,
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies. We help businesses migrate to cloud with AWS, Azure, and Google Cloud Platform solutions.",
      icon: <FiCloud className="text-green-400" />,
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies that boost online presence. From SEO to social media campaigns, we deliver measurable results and ROI.",
      icon: <FiTrendingUp className="text-orange-400" />,
    },
    {
      id: 5,
      title: "Global Consulting",
      description:
        "International business expansion and market penetration strategies. We help brands go global with localized solutions and cultural insights.",
      icon: <FiGlobe className="text-indigo-400" />,
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-24 rounded-2xl">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={coding} type="video/mp4" />
        </video>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80" />

        {/* Animated particles overlay */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ y: -100, x: Math.random() * 100 }}
              animate={{
                y: [0, 1000],
                x: [Math.random() * 100, Math.random() * 100],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <LeftSec heading="✧ Speciality" title="Areas of Expertise" />
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Discover our specialized services that combine innovation with
            excellence. Each area represents years of refined skill and proven
            success.
          </p>
        </motion.div>

        {/* Accordions Section */}
        <div className="space-y-4 max-w-4xl mx-auto mt-12">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 rounded-2xl backdrop-blur-sm bg-white/5 overflow-hidden"
            >
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="text-xl font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <div className="text-2xl text-green-400">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </div>
              </div>

              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-4">
            Ready to transform your business with our expertise?
          </p>
          <AnimatedBtn title={"Schedule Meeting"} />
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSec;
