"use client";
import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-20 w-full max-w-5xl px-6 flex flex-col items-center text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Meet your digital problem solvers
        </h1>

        <p className="mt-4 text-lg md:text-2xl font-light max-w-2xl drop-shadow">
          Web Solutions combines the right mix of creativity, technology, and marketing to solve your digital headaches.
        </p>
        <Link
              href="/"
              className="group mt-5 absolute -bottom-35 flex items-center justify-center gap-2 bg-[#c5003e] text-white py-2 px-5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-[#173b63]"
            >
              Let's Talk
              <FaPlay className="text-[10px] text-white transition-all" />
            </Link>
      </div>
    </section>
  );
};

export default Hero;
