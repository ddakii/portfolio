import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaSass,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  
} from "react-icons/fa";
import { SiPhp, SiPhpmyadmin, SiAdobephotoshop,SiFigma, SiAdobeillustrator } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "PHP (basic)", icon: <SiPhp className="text-indigo-500" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Sass", icon: <FaSass className="text-pink-500" /> },
    ],
  },
  {
    title: "CMS & Platforms",
    skills: [
      { name: "WordPress", icon: <FaWordpress className="text-blue-700" /> },
    ],
  },
  {
    title: "Design Tools",
    skills: [
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Adobe Photoshop (basic)", icon: <SiAdobephotoshop className="text-blue-400" /> },
    { name: "Adobe Illustrator (basic)", icon: <SiAdobeillustrator className="text-orange-400" /> },
  ],
  },
  {
    title: "Databases",
    skills: [
    { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
    { name: "phpMyAdmin", icon: <FaDatabase className="text-gray-600" /> },
  ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className='max-w-[1200px] mx-auto my-14 glass p-6' id="skills">
      <h2 className='text-4xl mb-4 text-gray-300'>My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {skillCategories.map((category, i) => (
          <div
            key={i}
            className="bg-white glass p-4 rounded-xl shadow-lg animate-fade-in opacity-0"
            style={{ animationDelay: `${i * 200}ms`, animationFillMode: "forwards" }}
          >
            <h3 className='text-2xl text-gray-50 font-bold mb-4 '>{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center w-24 p-2 bg-gray-300 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl">{skill.icon}</div>
                  <p className="mt-1 text-sm font-medium text-gray-700">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
