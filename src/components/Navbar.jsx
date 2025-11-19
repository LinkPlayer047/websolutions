"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex justify-center py-3 font-switzer fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="w-full px-5 flex flex-col md:flex-row items-center justify-between">
        {/* LOGO */}
        <div>
          <img
            src={scrolled ? "/logo-web-solutions.svg" : "/logo-web-solutions-ko.svg"}
            alt="logo"
            width={235}
            height={37}
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-3 md:gap-0">
          {/* SERVICES MEGA MENU (Large Screen) */}
          <div className="relative group">
            <div className="px-5 rounded-3xl transition-all duration-200 group-hover:bg-[#c5003e] group-hover:text-white">
              <Link
                href="/"
                className="text-[16px] md:text-[17px] lg:text-[18px] font-bold block"
              >
                services
              </Link>
            </div>

            <div className="fixed left-0 top-[50px] w-screen bg-white shadow-xl z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 p-10">
                {/* COLUMN 1 */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold">Creativity</h2>
                  <div className="shrink-0">
                    <Link
                      href="/web-design"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/strategy.svg" className="w-4 h-4" />
                      Strategy
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/web-development"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/branding.svg" className="w-4 h-4" />
                      Branding
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/seo"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/campaigns.svg" className="w-4 h-4" />
                      Compaigns
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/branding"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/graphic.svg" className="w-4 h-4" />
                      Graphic Design
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/content-writing"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/marketing.svg" className="w-4 h-4" />
                      Content Development
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/content-writing"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/video.svg" className="w-4 h-4" />
                      Video Production
                    </Link>
                  </div>
                </div>

                {/* COLUMN 2 */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold">Development</h2>
                  <div className="shrink-0">
                    <Link
                      href="/ui-ux"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/design.svg" className="w-4 h-4" />
                      Web Design
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/graphics"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/development.svg" className="w-4 h-4" />
                      Custom Development
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/smm"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/ecommerce.svg" className="w-4 h-4" />
                      eCommerce
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/ads"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/maintenance.svg" className="w-4 h-4" />
                      Support Services
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/email-marketing"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/hosting.svg" className="w-4 h-4" />
                      Managed Hosting
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/email-marketing"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/cms.svg" className="w-4 h-4" />
                      CMS Solutions
                    </Link>
                  </div>
                </div>

                {/* COLUMN 3 */}
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold">Marketing</h2>
                  <div className="shrink-0">
                    <Link
                      href="/ecommerce"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/seo.svg" className="w-4 h-4" />
                      Search Engine Optimization
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/crm"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/advertising.svg" className="w-4 h-4" />
                      Digital Advertising
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/app-dev"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/marketing.svg" className="w-4 h-4" />
                      Social Media Marketing
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/hosting"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/email.svg" className="w-4 h-4" />
                      Email Marketing
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/maintenance"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/lead.svg" className="w-4 h-4" />
                      Lead Generation
                    </Link>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/maintenance"
                      className="inline-flex items-center gap-3 px-5 py-2 rounded-3xl hover:bg-[#c5003e] hover:text-white"
                    >
                      <img src="/analytics.svg" className="w-4 h-4" />
                      Data & Analytics
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NORMAL LINKS */}
          <Link
            href="/"
            className="text-[16px] md:text-[17px] lg:text-[18px] px-5 font-bold rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
          >
            work
          </Link>
          <Link
            href="/"
            className="text-[16px] md:text-[17px] lg:text-[18px] px-5 font-bold rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
          >
            insights
          </Link>
          <Link
            href="/about"
            className="hidden md:inline-block md:text-[17px] lg:text-[18px] px-5 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
          >
            about
          </Link>
          <Link
            href="/career"
            className="hidden md:inline-block md:text-[17px] lg:text-[18px] px-5 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
          >
            career
          </Link>
          <Link
            href="/contact"
            className="hidden md:inline-block md:text-[17px] lg:text-[18px] px-5 rounded-3xl hover:bg-[#c5003e] hover:text-white transition"
          >
            contact
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden ml-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full z-50 flex">
          {/* Left blurry overlay */}
          <div
            className="w-1/5 h-full backdrop-blur-sm bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Dropdown panel */}
          <div
            className={`h-full w-4/5 bg-[#090909] text-white flex flex-col gap-5 overflow-y-auto transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button */}
            <button
              className="self-end mb-5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Services */}
            <div className="w-full">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center text-[18px] hover:bg-gray-800 font-bold border-t border-gray-700 rounded px-3 py-3"
              >
                Services
                <span
                  className={`text-gray-400 text-xl transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="flex flex-col p-2 gap-2 mt-2 bg-[#090909] rounded">
                  {/* Column 1 */}
                  <h2 className="text-white font-bold text-lg mt-2">
                    Creativity
                  </h2>
                  <Link
                    href="/web-design"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/strategy.svg" className="w-4 h-4" /> Strategy
                  </Link>
                  <Link
                    href="/web-development"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/branding.svg" className="w-4 h-4" /> Branding
                  </Link>
                  <Link
                    href="/seo"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/campaigns.svg" className="w-4 h-4" /> Compaigns
                  </Link>
                  <Link
                    href="/branding"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/graphic.svg" className="w-4 h-4" /> Graphic
                    Design
                  </Link>
                  <Link
                    href="/content-writing"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/marketing.svg" className="w-4 h-4" /> Content
                    Development
                  </Link>
                  <Link
                    href="/content-writing"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/video.svg" className="w-4 h-4" /> Video
                    Production
                  </Link>

                  {/* Column 2 */}
                  <h2 className="text-white font-bold text-lg mt-2">
                    Development
                  </h2>
                  <Link
                    href="/ui-ux"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/design.svg" className="w-4 h-4" /> Web Design
                  </Link>
                  <Link
                    href="/graphics"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/development.svg" className="w-4 h-4" /> Custom
                    Development
                  </Link>
                  <Link
                    href="/smm"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/ecommerce.svg" className="w-4 h-4" /> eCommerce
                  </Link>
                  <Link
                    href="/ads"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/maintenance.svg" className="w-4 h-4" /> Support
                    Services
                  </Link>
                  <Link
                    href="/email-marketing"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/hosting.svg" className="w-4 h-4" /> Managed
                    Hosting
                  </Link>
                  <Link
                    href="/email-marketing"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/cms.svg" className="w-4 h-4" /> CMS Solutions
                  </Link>

                  {/* Column 3 */}
                  <h2 className="text-white font-bold text-lg mt-2">
                    Marketing
                  </h2>
                  <Link
                    href="/ecommerce"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/seo.svg" className="w-4 h-4" /> Search Engine
                    Optimization
                  </Link>
                  <Link
                    href="/crm"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/advertising.svg" className="w-4 h-4" /> Digital
                    Advertising
                  </Link>
                  <Link
                    href="/app-dev"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/marketing.svg" className="w-4 h-4" /> Social
                    Media Marketing
                  </Link>
                  <Link
                    href="/hosting"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/email.svg" className="w-4 h-4" /> Email Marketing
                  </Link>
                  <Link
                    href="/maintenance"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/lead.svg" className="w-4 h-4" /> Lead Generation
                  </Link>
                  <Link
                    href="/maintenance"
                    className="flex items-center gap-2 hover:bg-gray-700 px-3 py-1 rounded text-white"
                  >
                    <img src="/analytics.svg" className="w-4 h-4" /> Data &
                    Analytics
                  </Link>
                </div>
              )}
            </div>

            {/* Other mobile links */}
            <Link
              href="/"
              className="block p-2 pl-3 w-full text-[18px] hover:bg-gray-800 font-bold border-t border-gray-700 rounded"
            >
              Work
            </Link>
            <Link
              href="/"
              className="block p-2 pl-3 w-full text-[18px] hover:bg-gray-800 font-bold border-t border-gray-700 rounded"
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="block p-2 pl-3 w-full text-[18px] hover:bg-gray-800 rounded border-t border-gray-700"
            >
              About
            </Link>
            <Link
              href="/career"
              className="block p-2 pl-3 w-full text-[18px] hover:bg-gray-800 rounded border-t border-gray-700"
            >
              Career
            </Link>
            <Link
              href="/contact"
              className="block p-2 pl-3 w-full text-[18px] hover:bg-gray-800 rounded border-t border-gray-700"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
