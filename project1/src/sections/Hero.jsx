import React from 'react';
import RobotLook from '@/components/common/RobotLook';

const Hero = () => {
  return (
    <section className="flex justify-between items-center px-10 py-16 bg-slate-900 min-h-screen">
      
     
      <div className="text-white max-w-xl">
        <h1 className="text-5xl font-bold mb-4">Hello, I’m Aditya 👋</h1>
        <p className="text-xl text-gray-300">Welcome to my portfolio.</p>
      </div>

      {/* Robot Animation with better scale */}
      <div className="w-[260px] md:w-[300px] translate-x-[-120px]">
              <RobotLook />
        </div>

      
    </section>
  );
};

export default Hero;


