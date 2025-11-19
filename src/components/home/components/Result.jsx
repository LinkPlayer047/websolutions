import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBlog, FaCheck, FaDollarSign, FaInstagram } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";


const data = [
  {
    icon: <IoSearch className="text-[#4698cb]" />,
    percent: "414%",
    description: "increase in non-branded organic traffic 12 mo. after launch",
  },
  {
    icon: <FaBlog className="text-[#4698cb]" />,
    percent: "530%",
    description: "increase in organic search traffic from new blog content",
  },
  {
    icon: <FaCheck className="text-[#4698cb]" />,
    percent: "706%",
    description: "increase in organic search conversions",
  },
  {
    icon: <FaDollarSign className="text-[#4698cb]" />,
    percent: "197%",
    description: "increase in ecomm revenue from Google Ads campaigns",
  },
  {
    icon: <FaInstagram className="text-[#4698cb]" />,
    percent: "210%",
    description: "increase in Instagram account engagement",
  },
];

const Result = () => {
  return (
    <div className="bg-[#c5003e] w-full flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-12">
      <h1 className="text-white text-center text-3xl sm:text-4xl md:text-[36px] font-normal tracking-tight max-w-3xl">
        Engagement that produces{" "}
        <span className="font-bold">better results:</span>
      </h1>
      <div className="w-full mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-5 justify-center">
        {data.map(({ icon, percent, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-lg shadow-md p-8 text-center"
            style={{ flexBasis: "calc(20% - 1rem)" }}
          >
            <div className="text-[#c5003e] text-5xl mb-4">{icon}</div>
            <h3 className="text-[48px] font-bold mb-3 text-black">{percent}</h3>
            <p className="text-gray-600 text-[18px]">{description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Link
            href="/"
            className="group flex items-center justify-center gap-2 
             bg-white text-black px-5 py-2 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#002b46] hover:text-white"
          >
            See More Results
            <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
          </Link>
      </div>
    </div>
  );
};

export default Result;
