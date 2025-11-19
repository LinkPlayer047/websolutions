import React from 'react'
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const CareerButtons = () => {
  return (
    <div className='w-full bg-[#002b46] py-20 flex items-center justify-center'>
        <div className='w-[70%] flex flex-col md:flex-row items-center justify-between'>
            <div className='lg:w-1/2 w-full flex items-start lg:pr-10'>
            <h1 className='text-white lg:text-[36px] text-[24px] font-bold tracking-tight'>Loving your job <span className='font-light'>could be just the beginning.</span></h1>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col items-start lg:pl-10'>
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black text-[16px] py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Digital Marketing Specialist
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black text-[16px] py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Senior Digital Marketing Specialist
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black text-[16px] py-3 px-10 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
            >
              Send Us Your Resume
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
            </div>
        </div>
    </div>
  )
}

export default CareerButtons