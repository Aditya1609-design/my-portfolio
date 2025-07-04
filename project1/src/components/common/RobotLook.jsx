import React, { useEffect } from 'react';

const RobotLook = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll('.pupil');

    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const pupilX = rect.left + rect.width / 2;
        const pupilY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - pupilY, e.clientX - pupilX);
        const offsetX = Math.cos(angle) * 8;
        const offsetY = Math.sin(angle) * 8;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-slate-700 rounded-full flex justify-center items-center relative">
      <div className="eye left absolute w-10 h-10 bg-white rounded-full top-[60px] left-[50px]">
        <div className="pupil absolute w-[15px] h-[15px] bg-black rounded-full top-[12px] left-[12px] transition-transform duration-100"></div>
      </div>
      <div className="eye right absolute w-10 h-10 bg-white rounded-full top-[60px] right-[50px]">
        <div className="pupil absolute w-[15px] h-[15px] bg-black rounded-full top-[12px] left-[12px] transition-transform duration-100"></div>
      </div>
    </div>
  );
};

export default RobotLook;
