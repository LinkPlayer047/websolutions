import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#e8e8e8] flex justify-center">
      <div className="w-[90%] md:w-[85%] lg:w-[75%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h2 className="text-[16px] text-[#173b63] font-bold">Creativity</h2>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Strategy
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Branding
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Compaigns
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Graphic Design
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Content Development
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Video Production
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h2 className="text-[16px] text-[#173b63] font-bold">Development</h2>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Web Design
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Custom Development
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            eCommerce
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Support Services
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Managed Hosting
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            CMS Solutions
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h2 className="text-[16px] text-[#173b63] font-bold">Marketing</h2>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Search Engine Optimization
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Digital Advertising
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Social Media Marketing
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Email Marketing
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Lead Generation
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Data & Analytics
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <Link
            href="/contact"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Sales Inquiry
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Support
          </Link>
          <Link
            href="/career"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Careers
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Login
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Privacy
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Terms
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Accessibility
          </Link>
          <Link
            href="/"
            className="flex items-center text-[16px] text-[#005c96] hover:text-[#c5003e]"
          >
            Site Map
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <p className="flex items-center text-[18px] italic text-[#005c96]">
            Search
          </p>
          <div className="relative w-full max-w-xs">
            <input
              type="search"
              className="w-full py-2 pl-3 pr-10 rounded-full bg-white focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#005c96] text-white p-2 rounded-full hover:bg-[#c5003e]">
              <IoSearch size={18} />
            </button>
          </div>
          <div className="flex gap-5 items-center py-7">
            <Link
              href="/"
              className="text-[#005c96] hover:text-[#c5003e]"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="text-[#005c96] hover:text-[#c5003e]"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="text-[#005c96] hover:text-[#c5003e]"
            >
              <BsTwitterX className="h-5 w-5" />
            </Link>
            <Link
              href="/"
              className="text-[#005c96] hover:text-[#c5003e]"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
