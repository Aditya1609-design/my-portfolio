import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 px-4 py-24 flex justify-center items-center min-h-screen"
    >
      <div className="bg-slate-800 shadow-xl border border-indigo-500 rounded-2xl px-8 md:px-14 py-10 max-w-3xl w-full text-center space-y-8">
        
        <h2 className="text-4xl font-bold text-indigo-400">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Love turning ideas into functional, visually appealing web experiences. I enjoy working with the MERN stack, building responsive UIs with React and Tailwind, and diving into the backend with Node.js and MongoDB.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 text-left">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">React</span>
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">HTML5</span>
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">CSS3</span>
              <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          {/* Backend */}
          <div>
          <h3 className="text-2xl font-semibold text-indigo-300 mb-4">Backend</h3>
         <div className="flex flex-wrap gap-3">
         <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Node.js</span>
         <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Express.js</span>

    
         <span className="w-full h-0"></span>

        <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">MongoDB</span>
         </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default About;



