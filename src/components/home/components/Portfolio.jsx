import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <h1 className="text-black text-[36px] tracking-tight">
        Browse our portfolio of{" "}
        <span className="font-bold">impactful work:</span>
      </h1>
      <div className="w-[90%] mt-5 columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">
        {/* ITEM 1 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-crs_2.webp"
            className="w-full h-auto object-contain"
            alt=""
          />

          {/* HOVER OVERLAY */}
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">Camp Rising Sun</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-LBB_3.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">LLB Specialist</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-warner.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">Warner Theatre</p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-CTForum.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">CT Forum</p>
          </div>
        </div>

        {/* ITEM 5 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-aqua-turf_3.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">Aqua turf club</p>
          </div>
        </div>

        {/* ITEM 6 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-nkr-new2.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">NKR</p>
          </div>
        </div>

        {/* ITEM 7 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-usj.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                       flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">
              University of Saint Joseph
            </p>
          </div>
        </div>

        {/* ITEM 8 */}
        <div className="relative group overflow-hidden break-inside-avoid">
          <img
            src="/thumb-lifeway.webp"
            className="w-full h-auto object-contain"
            alt=""
          />
          <div
            className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                          flex items-center justify-center"
          >
            <p className="text-white text-2xl font-bold">Lifeway Mobility</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <Link
          href="/"
          className="group flex items-center justify-center px-7 text-[20px] gap-2 
             border-2 border-gray-300 text-black py-3 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
        >
          See More
          <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
