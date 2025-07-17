import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Facial Expression Recognition",
    description:
      "A machine learning system that detects and classifies facial emotions in real-time using deep learning models and computer vision.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask"],
  },
  {
    title: "Password Generator",
    description:
      "A modern React web app that generates secure passwords based on length, numbers, and symbols. User-friendly and responsive UI.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Currency Converter",
    description:
      "A lightweight web app that converts currencies in real-time using exchange rate APIs. Features intuitive UI and live updates.",
    tech: ["React", "JavaScript", "REST API", "Tailwind CSS"],
  },
  {
    title: "Theme Changer",
    description:
      "A minimal theme toggler built with React and Tailwind, allowing users to switch between dark, light, and custom color themes dynamically.",
    tech: ["React", "Tailwind CSS", "Context API"],
  },
  {
    title: "Todo App",
    description:
      "A simple yet powerful todo list app with add, edit, delete, and filter functionality. Fully responsive with persistent local storage.",
    tech: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-indigo-400 mb-4 text-center">
        Projects
      </h2>
      <p className="text-gray-400 text-lg text-center max-w-2xl mb-12">
        Some of the recent things I’ve built — from deep learning to frontend utilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => {
          const fromDirection = index % 2 === 0 ? -50 : 50;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: fromDirection }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,       
                ease: "easeInOut",   
                delay: index * 0.15  
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800  rounded-xl p-6 shadow-xl space-y-5 hover:shadow-indigo-700 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-indigo-300">
                {project.title}
              </h3>

              {/* Description */}
              <div>
                <h4 className="text-sm uppercase text-gray-400 mb-1">Description</h4>
                <p className="text-gray-300 text-base">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm uppercase text-gray-400 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;


