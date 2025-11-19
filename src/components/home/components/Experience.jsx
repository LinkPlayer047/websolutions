"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { RiShoppingCart2Line } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { RiAdvertisementLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineDollar } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaRegMap } from "react-icons/fa6";
import { GiPaddles } from "react-icons/gi";
import { FaLaptopFile } from "react-icons/fa6";
import { LiaBatteryQuarterSolid } from "react-icons/lia";

const Experience = () => {
  return (
    <div className="w-full bg-[#f3f3f3] flex flex-col items-center py-15">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-3 text-center">
        <h1 className="text-[#002b46] tracking-tight text-[28px] md:text-[40px] leading-tight">
          A leading <span className="font-bold">web development company</span> for over 25 years
        </h1>
        <p className="text-black tracking-tight text-[16px] md:text-[24px] leading-relaxed">
          Web Solutions isn’t just our name—it’s what we do. We solve your
          digital challenges with dynamic solutions and a realistic approach. We
          simplify technology, design engaging experiences, and build websites
          that drive your marketing success.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-5 md:p-10 w-full">
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Creativity</h2>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <FaRegLightbulb className="w-4 h-4" /> Strategy
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/branding.svg" className="w-4 h-4" /> Branding
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <FaRegMap className="w-4 h-4" /> Compaigns
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <MdDesignServices className="w-4 h-4" /> Graphic Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/marketing.svg" className="w-4 h-4" /> Content Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <IoVideocamOutline className="w-4 h-4" /> Video Production
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Development</h2>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <FaLaptopFile className="w-4 h-4" /> Web Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <FaLaptopCode className="w-4 h-4" /> Custom Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <RiShoppingCart2Line className="w-4 h-4" /> eCommerce
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <GiPaddles className="w-4 h-4" /> Support Services
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <LuShieldCheck className="w-4 h-4" /> Managed Hosting
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <LiaBatteryQuarterSolid className="w-4 h-4" /> CMS Solutions
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Marketing</h2>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <IoSearchSharp className="w-4 h-4" /> Search Engine Optimization
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <RiAdvertisementLine className="w-4 h-4" /> Digital Advertising
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/marketing.svg" className="w-4 h-4" /> Social Media Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <TfiEmail className="w-4 h-4" /> Email Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <AiOutlineDollar className="w-4 h-4" /> Lead Generation
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <AiOutlineLineChart className="w-4 h-4" /> Data & Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 py-10">
          <div className="lg:w-1/2 relative w-full bg-[#ffffff] flex flex-col items-center justify-center rounded-xl py-15 px-8">
            <img src="/focus.svg" alt="" className="h-12 md:h-16" />

            <h2 className="text-[22px] md:text-[36px] tracking-tight text-[#002b46] mt-2">
              web <span className="font-bold">focus</span>
            </h2>

            <p className="text-[16px] md:text-[24px] tracking-tight font-light mt-5 leading-relaxed">
              When your needs are concentrated on specific marketing services,
              including project-based and introductory engagements, we tailor
              your program and focus on just the solutions and services you need.
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

            <p className="text-[16px] md:text-[24px] tracking-tight font-light mt-5 leading-relaxed">
              Explore your opportunities for growth with a comprehensive,
              holistic marketing program that brings strategy and execution full
              circle with continuous optimization to ensure cohesive and sustained success.
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
    </div>
  );
};

export default Experience;
