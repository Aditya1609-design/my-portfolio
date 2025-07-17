import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-4 py-24 flex justify-center items-center min-h-screen"
    >
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
  className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-2xl  rounded-2xl px-6 sm:px-10 md:px-16 py-14 max-w-6xl w-full text-center space-y-12"
>

        <h2 className="text-4xl font-bold text-indigo-400 tracking-wide">
          About Me
        </h2>

     
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Love turning ideas into functional, visually appealing web experiences. I enjoy working with the MERN stack, building responsive UIs with React and Tailwind, and diving into the backend with Node.js and MongoDB.
        </p>

    
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-left">
          
          {/* Frontend */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-300 border-b border-indigo-500 pb-2">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              <TechPill icon={<FaReact />} label="React" />
              <TechPill icon={<SiTailwindcss />} label="Tailwind CSS" />
              <TechPill icon={<FaHtml5 />} label="HTML5" />
              <TechPill icon={<FaCss3Alt />} label="CSS3" />
              <TechPill icon={<FaJs />} label="JavaScript" />
            </div>
          </div>

          {/* Backend */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-300 border-b border-indigo-500 pb-2">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              <TechPill icon={<FaNodeJs />} label="Node.js" />
              <TechPill icon={<SiExpress />} label="Express.js" />
              <TechPill icon={<SiMongodb />} label="MongoDB" />
              <TechPill icon={<FaDatabase />} label="REST APIs" />
            </div>
          </div>

          {/* Database */}
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-semibold text-indigo-300 border-b border-indigo-500 pb-2">
              Database
            </h3>
            <div className="flex flex-wrap gap-3">
              <TechPill icon={<SiMongodb />} label="MongoDB" />
              <TechPill icon={<FaDatabase />} label="SQL" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};


const TechPill = ({ icon, label }) => (
  <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-sm hover:scale-105 transition-transform duration-200">
    {icon} {label}
  </span>
);

export default About;
