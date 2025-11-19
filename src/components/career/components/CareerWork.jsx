import React from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const CareerWork = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col md:flex-row gap-5 bg-[#f2f2f2] items-center justify-between w-full">
        <div className="flex flex-col items-start gap-3 mt-10 md:w-1/2 w-full px-5 lg:p-20">
          <h1 className="lg:text-[36px] text-[22px] text-[#002b46] font-bold tracking-tight">
            Where You’ll Work
          </h1>
          <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Collaborative meeting spaces
          </p>
          <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Staff lunches & Friday treats
          </p>
          <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Fresh coffee & stocked pantries
          </p>
          <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Abundant nature & tranquil views
          </p>
          <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Games to recharge with the team
          </p>
          <Link
            href="/"
            className="group mt-5 border border-gray-300 flex items-center shadow-md justify-center gap-2 
             bg-white text-black lg:text-[20px] text-[16px] tracking-tight py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#c5003e] hover:border-none hover:text-white"
          >
            Explore Web Solutions
            <FaPlay className="text-[10px] text-[#c5003e] group-hover:text-white transition-all duration-300" />
          </Link>
        </div>
        <div className="md:w-1/2 w-full grid grid-cols-2 grid-rows-2 gap-0">
          <img
            src="/Exterior-Table.webp"
            alt="Workspace 1"
            className="w-full h-full object-cover border-2 border-white"
          />
          <img
            src="/Game-Room.webp"
            alt="Workspace 2"
            className="w-full h-full object-cover border-2 border-white"
          />
          <img
            src="/bbq.webp"
            alt="Workspace 3"
            className="w-full h-full object-cover border-2 border-white"
          />
          <img
            src="/Pit-Conference-Table.webp"
            alt="Workspace 4"
            className="w-full h-full object-cover border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerWork;
