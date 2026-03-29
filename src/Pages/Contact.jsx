import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Available from "../Components/Available";
import LeftSec from "../Components/LeftSec";
import Accordian from "../Components/Accordian";
import mypic from "../assets/mypic.webp";
import ChingariBackground from "../Components/AnimatedBackground.jsx";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [openIndex, setopenIndex] = useState(null);

  const question = [
    { question: "What is your current role?", answer: "I work as a full-stack developer, mainly focused on frontend, UI/UX, and clean performance-driven web apps." },
    { question: "How much does it cost for a high performing website?", answer: "Cost depends on features, design, and complexity. Simple sites are more affordable, while advanced custom builds cost more. I usually discuss requirements first, then share a clear estimate." },
    { question: "How long will the work take from start to finish?", answer: "Timelines vary by project scope. A basic site can take 1–2 weeks, while larger projects may take a month or more. After requirements, I provide a proper delivery plan." },
    { question: "Are you available to join as full time?", answer: "I am open to discussing full-time opportunities, depending on the role and project requirements." },
  ];

  const handleToggle = (index) => setopenIndex(openIndex === index ? null : index);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const d = {
      access_key: "3c210d8f-e94f-44dd-8cac-7cf4acfe4d59",
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", d);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => { setIsSent(false); }, 4000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <ChingariBackground />

      <div className="min-h-screen pt-32 pb-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
        
        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 w-full">
          
          {/* Left Column */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
               <Available />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Let's grab a <br/>
              <span className="text-gradient">
                digital coffee.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-sans max-w-md leading-relaxed">
              My inbox is always open. Whether you have a project, an idea, or just want to say hi, I'll get back to you quickly.
            </p>
            
            <div className="pt-4 space-y-6">
              <div>
                <span className="block text-accent font-mono text-sm tracking-widest mb-1">EMAIL</span>
                <a href="mailto:sheikhhaad6@gmail.com" className="text-white text-xl md:text-2xl font-semibold hover:text-accent transition-colors">sheikhhaad6@gmail.com</a>
              </div>
               <div>
                <span className="block text-accent font-mono text-sm tracking-widest mb-1">PHONE NUMBER</span>
                <a href="" className="text-white text-xl md:text-2xl font-semibold hover:text-accent transition-colors">+92 3322 859107</a>
              </div>
             
              <div className="pt-6">
                <span className="block text-accent font-mono text-sm tracking-widest mb-4">SOCIALS</span>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/sheikhhaad" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-accent hover:text-black hover:scale-110 transition-all duration-300">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a href="https://github.com/sheikhhaad" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a href="https://instagram.com/sheikhhaad_" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#E1306C] hover:scale-110 transition-all duration-300">
                    <FaInstagram className="text-2xl" />
                  </a>
                   <a href="https://instagram.com/sheikhhaad0" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/10 w-full">
               {/* Success State Overlay */}
               <AnimatePresence>
                 {isSent && (
                   <motion.div 
                     initial={{ opacity: 0 }} 
                     animate={{ opacity: 1 }} 
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 z-20 bg-bg/95 backdrop-blur-md flex flex-col items-center justify-center"
                   >
                     <motion.div
                       initial={{ x: -100, y: 100, scale: 0 }}
                       animate={{ x: [0, 50, 200, 500], y: [0, -50, -200, -500], scale: [1, 1.2, 0.8, 0] }}
                       transition={{ duration: 2, ease: "easeInOut" }}
                       className="text-6xl text-accent"
                     >
                        <FaPaperPlane />
                     </motion.div>
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5, duration: 0.5 }}
                       className="text-center mt-8 absolute"
                     >
                       <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                       <p className="text-accent font-mono">I'll be in touch shortly.</p>
                     </motion.div>
                   </motion.div>
                 )}
               </AnimatePresence>

               <form className="flex flex-col gap-8 relative z-10 w-full" onSubmit={handleSubmit}>
                 <div>
                   <label className="block text-xs font-mono tracking-widest text-accent mb-3 uppercase">01. What's your name?</label>
                   <input
                     type="text"
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-xl outline-none focus:border-accent transition-colors placeholder:text-white/20 font-sans"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-mono tracking-widest text-accent mb-3 uppercase">02. What's your email?</label>
                   <input
                     type="email"
                     name="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-xl outline-none focus:border-accent transition-colors placeholder:text-white/20 font-sans"
                     placeholder="john@example.com"
                   />
                 </div>
                 <div>
                   <label className="block text-xs font-mono tracking-widest text-accent mb-3 uppercase">03. What are we building?</label>
                   <textarea
                     rows="4"
                     name="message"
                     required
                     value={formData.message}
                     onChange={handleChange}
                     className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-xl outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-none font-sans"
                     placeholder="Tell me about your project..."
                   ></textarea>
                 </div>
                 <button 
                   type="submit" 
                   disabled={isSending || isSent}
                   className="mt-4 self-start flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent transition-all duration-300 disabled:opacity-50 group hover:scale-105"
                 >
                   {isSending ? "Sending..." : "Send Message"}
                   <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                 </button>
               </form>
            </div>
          </motion.div>

        </div>

        {/* FAQ Section */}
        <motion.div
           className="max-w-4xl mx-auto"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {question.map((itm, indx) => (
               <Accordian
                 key={indx}
                 title={itm.question}
                 description={itm.answer}
                 isOpen={openIndex === indx}
                 onToggle={() => handleToggle(indx)}
               />
             ))}
           </div>
        </motion.div>
        
      </div>
    </>
  );
};

export default Contact;
