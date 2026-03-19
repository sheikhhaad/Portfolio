import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiDatabase, FiSearch, FiPenTool, FiTool, FiSend } from "react-icons/fi";
import coding from "../assets/coding.mp4";
import AnimatedBtn from "./AnimatedBtn";
import LeftSec from "./LeftSec";

const ExpertiseSec = () => {
  const services = [
    {
      id: 1,
      title: "Web App Development",
      description: "Focusing on extreme scalability and ironclad security. I build full-stack architecture that grows with your business needs.",
      icon: <FiCode className="text-3xl text-[#3b82f6]" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
    {
      id: 2,
      title: "UI/UX Implementation",
      description: "Turning Figma designs into pixel-perfect, interactive code. Every animation and micro-interaction is carefully crafted.",
      icon: <FiLayout className="text-3xl text-[#10b981]" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    },
    {
      id: 3,
      title: "API Architecture",
      description: "Building robust, RESTful and GraphQL backends that don't break. Optimized for fast data delivery and seamless front-end integration.",
      icon: <FiDatabase className="text-3xl text-[#3b82f6]" />,
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "Understanding your goals, target audience, and technical requirements.", icon: <FiSearch /> },
    { num: "02", title: "Design", desc: "Creating wireframes, UI/UX mockups, and planning the system architecture.", icon: <FiPenTool /> },
    { num: "03", title: "Development", desc: "Writing clean, scalable code in rapid iteration cycles with constant feedback.", icon: <FiTool /> },
    { num: "04", title: "Deployment", desc: "Rigorous testing, optimization, and finally launching the product globally.", icon: <FiSend /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 md:py-24 rounded-2xl w-full">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={coding} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/90 via-[#030712]/80 to-[#030712]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <LeftSec heading="✧ Value Add" title="Services & Expertise" />
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-mono font-light">
            Delivering high-performance digital products engineered for scale.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className={`group glass p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border border-white/10 ${srv.glowColor} cursor-default`}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{srv.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{srv.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          className="mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white">The Workflow</h2>
             <div className="w-20 h-1 bg-[#10b981] mx-auto mt-4 rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 justify-between lg:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#3b82f6]/30 via-[#10b981]/50 to-[#3b82f6]/30 -z-10"></div>
              
              {processSteps.map((step, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="flex flex-col items-center text-center relative"
                 >
                    <div className="w-20 h-20 rounded-full glass border border-white/20 flex items-center text-3xl text-white justify-center shadow-lg bg-[#030712] mb-6 relative group transform hover:scale-110 transition-transform duration-300 cursor-default">
                      {step.icon}
                      <span className="absolute -top-2 -right-2 text-xs font-mono font-bold bg-[#3b82f6] text-white w-6 h-6 rounded-full flex items-center justify-center border border-[#030712]">{step.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-widest uppercase text-sm md:text-lg">{step.title}</h3>
                    <p className="text-gray-400 text-sm max-w-[200px]">{step.desc}</p>
                 </motion.div>
              ))}
           </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-24"
        >
          <AnimatedBtn title={"Let's Build Together"} link="/contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSec;
