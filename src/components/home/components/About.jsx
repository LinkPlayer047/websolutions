import React from "react";
import { FaCheck } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="w-full bg-[#005c96] relative text-white flex flex-col md:flex-row items-center justify-center py-10">
        <div className="w-[80%] main-h-screen md:w-[90%] flex flex-col md:flex-row items-center gap-15 justify-between">
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img src="about-600.webp" alt="" className="relative lg:absolute lg:-top-8" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-5 pr-5">
            <h1 className="text-white text-[22px] lg:text-[36px] font-bold">
              Count on Web Solutions{" "}
              <span className="font-normal">
                to get your web projects done right
              </span>
            </h1>
            <p className="text-white lg:text-[22px] text-[19px]">
              With hundreds of successful projects and meaningful relationships
              you can be confident that our team will become an extension of
              yours.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-3">
                <FaCheck className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Professional & Reliable Team
                </span>
              </div>

              <div className="flex items-center gap-3">
                <GiTrophy className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Fast Turnaround Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCode className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Pixel Perfect Designs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <RiTeamFill className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Search Engine Optimized
                </span>
              </div>

              <div className="flex items-center gap-3">
                <IoPersonSharp className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Fully Responsive Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MdOutlineSupportAgent className="text-[#4698cb] text-[22px]" />
                <span className="text-[18px] lg:text-[20px]">
                  Affordable & Transparent Pricing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f2f6fb] flex items-center justify-center py-20 px-5">
        <div className="lg:w-[80%] w-[95%] flex flex-col gap-10">
          <p className="text-[#002b46] tracking-tight lg:text-[32px] text-[22px] font-normal italic">
            Web Solutions delivers a very rich solution provided in a very
            professional way. Their agency’s ability to take Carby’s vision for
            a communication and educational tool and mold it into a
            comprehensive website design delivering on all the messages we want
            to communicate was the key to success.
          </p>
          <h3 className="lg:text-[22px] text-[18px] font-bold text-[#002b46]">-Kenneth Ruh, <span className="font-normal italic">President & CEO, Carby</span></h3>
        </div>
      </div>
    </>
  );
};

export default About;
