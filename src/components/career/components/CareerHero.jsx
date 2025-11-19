import React from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const CareerHero = () => {
  return (
    <div className="bg-[#002b46] py-20 flex items-center justify-center w-full">
      <div className="w-[95%] lg:w-[55%] flex flex-col items-center justify-center text-center gap-6 mt-10">
        <h1 className="text-[40px] text-white tracking-tight">
          Get to <span className="font-bold">Love Your Job</span>
        </h1>
        <p className="text-[24px] text-white tracking-tight">
          Going to work every day should be exciting and rewarding. We encourage
          our team members to grow professionally, think strategically, and
          create the best work of their careers.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-5 w-[85%]">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Digital Marketing Specialist
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Senior Digital Marketing Specialist
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-center">
            <Link
              href="/"
              className="group flex items-center justify-center gap-2 
             bg-white text-black py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Send Us Your Resume
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default CareerHero;
