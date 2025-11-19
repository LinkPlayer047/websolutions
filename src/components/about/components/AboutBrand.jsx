import React from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const AboutBrand = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full py-20 bg-[#002b46]">
        <div className="w-[80%] flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-3 lg:pr-20 items-start justify-start">
            <h1 className="text-[32px] text-white tracking-tight font-bold">
              Award-Winning <span className="font-light">Work</span>
            </h1>
            <p className="text-[20px] text-white font-light tracking-tight">
              Our work and our workplace have been recognized by LogoLounge, the
              Connecticut Art Directors Club, Graphic Design USA, New England
              Museum Association, Public Relations Society of America, the
              National Episcopal Communicators Organization, Midstate Chamber of
              Commerce, Boys & Girls Club of America (national conference), CT
              Law Tribune, and more.
            </p>
            <Link
              href="/"
              className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black lg:text-[20px] text-[18px] px-10 py-3 border border-blue-300 shadow rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:border-none hover:text-white"
            >
              View Our Timeline
              <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
            </Link>
          </div>
          <div className="lg:w-1/2 w-full flex flex-row items-start justify-start">
            <div className="w-[50%] flex flex-col gap-10 items-center justify-center">
              <img src="/gold.svg" alt="" />
              <img src="/ad.svg" alt="" />
              <img src="/usa.svg" alt="" />
              <img src="/nema.svg" alt="" />
            </div>
            <div className="w-[50%] flex flex-col gap-10 items-center justify-center">
              <img src="/cadc.svg" alt="" />
              <img src="/episcopal.svg" alt="" />
              <img src="/silver.svg" alt="" />
              <img src="/best.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-15 flex flex-col text-center items-center justify-center">
        <h1 className="lg:text-[36px] text-[22px] px-5 text-[#002b46] tracking-tight">
          Some of our{" "}
          <span className="font-bold">valued client relationships:</span>
        </h1>
        <div className="w-[90%] mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
            <Link href="/" className="hover:scale-105">
            <img src="brand1.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand2.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand3.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand4.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand5.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand6.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand7.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand8.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand9.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand01.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand02.svg" alt="" />
            </Link>
            <Link href="/" className="hover:scale-105">
            <img src="brand03.svg" alt="" />
            </Link>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
