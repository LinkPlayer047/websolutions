import React from "react";
import Link from "next/link";
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

const ServicesHero = () => {
  return (
    <div className="w-full bg-[#072039] flex flex-col items-center py-15">
      <div className="w-[90%] relative md:w-[80%] flex flex-col items-center gap-3 text-center">
        <h1 className="text-white pt-20 font-bold tracking-tight text-[28px] md:text-[40px] leading-tight">
          Everything you need <span className="font-light">to succeed</span>
        </h1>
        <p className="text-white lg:w-[60%]  tracking-tight text-[16px] md:text-[24px] leading-relaxed">
          Our comprehensive web solutions are delivered by an in-house team of
          professionals who are focused on your unique objectives.
        </p>
        <div className="w-full flex justify-center mt-10">
          <div className="grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-5 md:p-10 w-full">
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Creativity</h2>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <FaRegLightbulb className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Strategy
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <img src="/branding.svg" className="w-4 h-4" /> Branding
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <FaRegMap className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Compaigns
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <MdDesignServices className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Graphic Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <img src="/marketing.svg" className="w-4 h-4" /> Content
                  Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <IoVideocamOutline className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Video Production
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Development</h2>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <FaLaptopFile className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Web Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <FaLaptopCode className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Custom Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <RiShoppingCart2Line className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  eCommerce
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <GiPaddles className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Support Services
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <LuShieldCheck className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Managed Hosting
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <LiaBatteryQuarterSolid className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  CMS Solutions
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Marketing</h2>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <IoSearchSharp className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Search Engine Optimization
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <RiAdvertisementLine className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Digital Advertising
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <img src="/marketing.svg" className="w-4 h-4" /> Social Media
                  Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <TfiEmail className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Email Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <AiOutlineDollar className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Lead Generation
                </Link>
              </div>

              <div className="shrink-0">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
                >
                  <AiOutlineLineChart className="w-4 h-4 text-[#65a9d4] group-hover:text-white transition" />{" "}
                  Data & Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="group mt-5 absolute -bottom-20 flex items-center justify-center gap-2 
                     hover:bg-[#005c96] text-white px-10 py-3 rounded-full font-semibold 
                     transition-all duration-300 transform
                     hover:-translate-y-1 bg-[#c5003e] "
        >
          Let's Talk
          <FaPlay className="text-[10px] text-white group-hover:text-white transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesHero;
