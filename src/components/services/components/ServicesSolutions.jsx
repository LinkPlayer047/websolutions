import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const ServicesSolutions = () => {
  return (
    <>
      <div className="w-full bg-[#f8f8f8] flex flex-col items-center text-center justify-center py-16">
        <div className="w-[80%] flex flex-col items-center justify-between gap-3 py-10">
          <h2 className="text-[#002b46] lg:text-[36px] text-[22px] tracking-tight font-bold">
            A web development agency with a solutions-based approach
          </h2>
          <p className="text-black lg:text-[24px] text-[18px] tracking-tight font-light">
            We take a collaborative approach to setting your vision and defining
            your web development and marketing objectives. Our entire team
            advocates for what is strategically best for you and successfully
            executes the plan with precision.
          </p>
        </div>
        <div className="w-[80%] flex flex-col lg:flex-row items-center justify-between gap-12 py-10">
          <div className="lg:w-1/2 relative w-full bg-[#ffffff] flex flex-col items-center justify-center rounded-xl py-15 px-8">
            <img src="/focus.svg" alt="" className="h-12 md:h-16" />

            <h2 className="text-[22px] md:text-[36px] tracking-tight text-[#002b46] mt-2">
              web <span className="font-bold">focus</span>
            </h2>

            <p className="text-[16px] md:text-[24px] md:px-5 tracking-tight font-light mt-5 leading-relaxed">
              When your needs are concentrated on specific marketing services,
              including project-based and introductory engagements, we tailor
              your program and focus on just the solutions and services you
              need.
            </p>

            <div className="flex flex-col gap-4 mt-4 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start lg:items-center gap-3">
                  <FaCheck className="text-[#4698cb] text-[20px] md:text-[22px]" />
                  <span className="text-[16px] tracking-tight font-light md:text-[20px]">
                    Professional & Reliable Team
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="group mt-5 absolute -bottom-5 flex items-center justify-center gap-2 bg-[#005c96] text-white py-2 px-5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#173b63]"
            >
              Learn More
              <FaPlay className="text-[10px] text-white transition-all" />
            </Link>
          </div>
          <div className="lg:w-1/2 relative w-full bg-[#ffffff] flex flex-col items-center justify-center rounded-xl py-15 px-8">
            <img src="/360.svg" alt="" className="h-12 md:h-16" />

            <h2 className="text-[22px] md:text-[36px] tracking-tight text-[#002b46] mt-2">
              exposure <span className="font-bold">360</span>
            </h2>

            <p className="text-[16px] md:text-[24px] md:px-5 tracking-tight font-light mt-5 leading-relaxed">
              Explore your opportunities for growth with a comprehensive,
              holistic marketing program that brings strategy and execution full
              circle with continuous optimization to ensure cohesive and
              sustained success.
            </p>

            <div className="flex flex-col gap-4 mt-4 w-full">
              {[
                "360° Strategy Development",
                "Full-Service Solutions",
                "Senior Account Management",
              ].map((text, i) => (
                <div key={i} className="flex items-start lg:items-center gap-3">
                  <FaCheck className="text-[#4698cb] text-[20px] md:text-[22px]" />
                  <span className="text-[16px] tracking-tight font-light md:text-[20px]">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/"
              className="group mt-5 absolute -bottom-5 flex items-center justify-center gap-2 bg-[#c5003e] text-white py-2 px-5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#173b63]"
            >
              Learn More
              <FaPlay className="text-[10px] text-white transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSolutions;
