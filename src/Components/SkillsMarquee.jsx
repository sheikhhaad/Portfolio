import React from "react";
import "../style/marquee.css"; // custom css for marquee
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

// Child component
const SkillItem = ({ SkillIcon, SkillName }) => {
  return (
   <div
      className="flex items-center bg-[rgba(90,90,90,0.2)] gap-1 px-2 py-2 rounded-full 
       backdrop-blur-md text-white font-quicksand
       sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px]
       justify-center hover"
    >
      <span className="text-lg sm:text-xl">{SkillIcon}</span>
      <span className="text-[10px] sm:text-xs font-medium truncate font-quicksand">
        {SkillName}
      </span>
    </div>
  );
};

// Skills data
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

// Parent marquee component
const SkillMarquee = () => {
  return (
    <div className="marquee-wrapper overflow-hidden w-full bg-transparent py-4 font-quicksand">
      <div className="marquee-2 flex gap-6">
        {skills.concat(skills).map((skill, index) => (
          <SkillItem key={index} SkillIcon={skill.icon} SkillName={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;
