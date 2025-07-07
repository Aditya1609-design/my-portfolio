import React from 'react';
import RobotLook from '@/components/common/RobotLook';
import AdityaPhoto from '@/assets/aditya.jpg'; // update path if needed

const Hero = () => {
  return (
    <section className="flex justify-between items-center px-10 py-16 bg-slate-900 min-h-screen">
      <div className="text-white max-w-xl space-y-6 -mt-20 flex flex-col items-start">
      <img
  src={AdityaPhoto}
  alt="Aditya"
  className="w-72 h-72 rounded-full object-cover shadow-lg"
/>

  <h1 className="text-6xl font-bold mb-2">
    <span className="text-indigo-400">Hi, I’m</span> Aditya 👋
  </h1>

  <p className="text-xl text-gray-300">
    I'm a 3rd-year Information Technology student at DTU, passionate about crafting modern web apps, exploring the MERN stack, and diving into machine learning.
  </p>
</div>



      {/* Robot Animation with better scale */}
      <div className="w-[260px] md:w-[300px] translate-x-[-120px]">
        <RobotLook />
      </div>
    </section>
  );
};

export default Hero;











