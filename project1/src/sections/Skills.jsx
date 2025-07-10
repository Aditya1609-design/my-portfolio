import React from 'react';

// Import skill icons (make sure they exist in assets/skills/)
import htmlLogo from '../assets/Skills/html.png';
import cssLogo from '../assets/Skills/css.png';
import jsLogo from '../assets/Skills/javascript.png';
import reactLogo from '../assets/Skills/react.png';
import nodeLogo from '../assets/Skills/node.png';
import mongoLogo from '../assets/Skills/mongodb.png';
import tailwindLogo from '../assets/Skills/tailwind.png';


const skills = [
  { name: 'HTML', img: htmlLogo },
  { name: 'CSS', img: cssLogo },
  { name: 'JavaScript', img: jsLogo },
  { name: 'React', img: reactLogo },
  { name: 'Node.js', img: nodeLogo },
  { name: 'MongoDB', img: mongoLogo },
  { name: 'Tailwind', img: tailwindLogo },

];

const Skills = () => {
    return (
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
  
          <div className="flex overflow-x-auto gap-x-20 scrollbar-hide justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-24 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="object-contain w-full h-full"
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
