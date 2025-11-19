"use client";
import React from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="w-full bg-[#f3f3f3] flex flex-col items-center py-15">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-3 text-center">

        {/* HEADING */}
        <h1 className="text-[#002b46] tracking-tight text-[28px] md:text-[40px] leading-tight">
          A leading <span className="font-bold">web development company</span> for over 25 years
        </h1>

        {/* PARAGRAPH */}
        <p className="text-black tracking-tight text-[16px] md:text-[24px] leading-relaxed">
          Web Solutions isn’t just our name—it’s what we do. We solve your
          digital challenges with dynamic solutions and a realistic approach. We
          simplify technology, design engaging experiences, and build websites
          that drive your marketing success.
        </p>

        {/* SERVICES GRID */}
        <div className="w-full flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-5 md:p-10 w-full">

            {/* COLUMN 1 */}
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Creativity</h2>

              <div className="shrink-0">
                <Link href="/web-design" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/strategy.svg" className="w-4 h-4" /> Strategy
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/web-development" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/branding.svg" className="w-4 h-4" /> Branding
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/seo" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/campaigns.svg" className="w-4 h-4" /> Compaigns
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/branding" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/graphic.svg" className="w-4 h-4" /> Graphic Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/content-writing" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/marketing.svg" className="w-4 h-4" /> Content Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/content-writing" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/video.svg" className="w-4 h-4" /> Video Production
                </Link>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Development</h2>

              <div className="shrink-0">
                <Link href="/ui-ux" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/design.svg" className="w-4 h-4" /> Web Design
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/graphics" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/development.svg" className="w-4 h-4" /> Custom Development
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/smm" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/ecommerce.svg" className="w-4 h-4" /> eCommerce
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/ads" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/maintenance.svg" className="w-4 h-4" /> Support Services
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/email-marketing" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/hosting.svg" className="w-4 h-4" /> Managed Hosting
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/email-marketing" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/cms.svg" className="w-4 h-4" /> CMS Solutions
                </Link>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col items-start gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Marketing</h2>

              <div className="shrink-0">
                <Link href="/ecommerce" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/seo.svg" className="w-4 h-4" /> Search Engine Optimization
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/crm" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/advertising.svg" className="w-4 h-4" /> Digital Advertising
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/app-dev" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/marketing.svg" className="w-4 h-4" /> Social Media Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/hosting" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/email.svg" className="w-4 h-4" /> Email Marketing
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/maintenance" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/lead.svg" className="w-4 h-4" /> Lead Generation
                </Link>
              </div>

              <div className="shrink-0">
                <Link href="/maintenance" className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white transition">
                  <img src="/analytics.svg" className="w-4 h-4" /> Data & Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* TWO LARGE BOXES */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 py-10">

          {/* LEFT BOX */}
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

          {/* RIGHT BOX */}
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
