import React from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";

const WebSolutions = () => {
  return (
    <div className="py-20 bg-[#e9e9e9] w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col md:flex-row items-center justify-center gap-15">
        <div className="lg:w-1/2 w-full flex items-center">
          <img src="/about-600.webp" alt="" />
        </div>
        <div className="lg:w-1/2 w-full flex items-start flex-col gap-3">
          <h2 className="text-[#c5003e] lg:text-[36px] text-[22px] font-light tracking-tight">
            Why <span className="font-bold">Web Solutions</span>?
          </h2>
          <p className="lg:text-[22px] text-[19px] tracking-tight">
            For more than 25 years, Web Solutions has helped clients achieve
            great results by delivering the right mix of creative, technology,
            and marketing services.
          </p>
          <p className="lg:text-[20px] text-[18px] tracking-tight font-light">
            Our team is made up of passionate professionals who consistently
            advocate for what’s strategically best for your business. We’ve
            built lasting partnerships grounded in trust, transparency, and a
            shared commitment to excellence.
          </p>
          <p className="lg:text-[20px] text-[18px] tracking-tight font-light">
            We embrace the challenges of emerging technologies and a rapidly
            changing digital landscape, all while maintaining a strong focus on
            security, including SOC 2 certification. While we take pride in
            crafting impactful websites and campaigns, what we value most are
            the long-term relationships we’ve built with our clients.
          </p>
          <p className="lg:text-[20px] text-[18px] tracking-tight font-light">
            At our best, we become an extension of your team—collaborating
            closely to help you grow and succeed.
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
      </div>
    </div>
  );
};

export default WebSolutions;
