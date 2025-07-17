import React, { useState, useEffect } from "react";
import RobotLook from "@/components/common/RobotLook";
import AdityaPhoto from "@/assets/aditya.jpg"; 


const rotatingTexts = [
  "Aditya 👋",
  "a Web Developer 💻",
  "a MERN Enthusiast 🚀",
  "a ML Learner 🤖",
  "a Tech Explorer 🌐",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const current = rotatingTexts[loopIndex % rotatingTexts.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        setSpeed(120);
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1500); 
        }
      } else {
        setText(current.substring(0, text.length - 1));
        setSpeed(60);
        if (text === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, speed]);

  return (
    <section className="flex justify-between items-center px-6 md:px-10 py-16 bg-slate-900 min-h-screen">
      <div className="text-white max-w-xl space-y-6 -mt-20 flex flex-col items-start">
        
        {/* Profile Image */}
        <img
          src={AdityaPhoto}
          alt="Aditya"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-2 whitespace-nowrap overflow-hidden">
          <span className="text-indigo-400">Hi, I’m </span>
          <span className="relative text-white">
            {text}
            <span className="absolute -right-2 top-0 animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
          I'm a 3rd-year IT student at DTU, passionate about modern web apps, the MERN stack, and machine learning.
        </p>
      </div>

      {/* Robot Animation */}
      <div className="w-[200px] md:w-[260px] lg:w-[300px] translate-x-[-60px] md:translate-x-[-120px]">
        <RobotLook />
      </div>
    </section>
  );
};

export default Hero;














