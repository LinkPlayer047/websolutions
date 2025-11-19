import React from "react";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";


const teamMembers = [
  {
    name: "Tom Barton",
    role: "CEO & Founder",
    image: "/tom.webp",
  },
  {
    name: "Lori O'Brien",
    role: "VP of Accounts",
    image: "/lori.webp",
  },
  {
    name: "Stephanie Courchesne",
    role: "Business Development",
    image: "/stephanie.webp",
  },
  {
    name: "Jon Fenwick",
    role: "Creative Director",
    image: "/jon.webp",
  },
  {
    name: "Andrew Smith",
    role: "Account Manager",
    image: "/andrew.webp",
  },
  {
    name: "Emily Goldstein",
    role: "Account Manager",
    image: "/emily.webp",
  },
  {
    name: "Mike Rakiec",
    role: "Marketing Manager",
    image: "/mike.webp",
  },
  {
    name: "Janaura Bishop",
    role: "Marketing Manager",
    image: "/janaura.webp",
  },

];

const AboutTeam = () => {
  return (
    <div className="w-full flex flex-col items-center py-15">
      <div className="w-[80%] flex flex-col md:flex-row items-center justify-center">
        <div className="lg:w-1/2 w-full flex flex-col gap-5 items-start">
          <h1 className="lg:text-[36px] text-[22px] text-[#002b46] tracking-tight font-light">
            Our Leadership <span className="font-bold">Team</span>
          </h1>
          <p className="text-[20px] lg:text-[22px] tracking-tight font-light">
            Web Solutions is led by a seasoned leadership group boasting years
            of experience and a diversity of talents.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex items-center justify-end">
          <Link
            href="/"
            className="group mt-5 flex items-center justify-center gap-2 
             bg-white text-black lg:text-[20px] text-[18px] px-10 py-3 border border-blue-300 shadow rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:border-none hover:text-white"
          >
            Meet the Full Team
            <FaPlay className="text-[10px] text-[#a00033] group-hover:text-white transition-all duration-300" />
          </Link>
        </div>
      </div>
      <div className="mt-20 w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {teamMembers.map((member, idx) => {
          const bgColor = idx % 2 === 0 ? "#005c96" : "#c5003e";

          return (
            <div key={idx} className="flex flex-col items-center">

              <div
                className="mt-10 relative rounded-full overflow-visible flex items-end justify-center w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[182px] md:h-[180px]"
                style={{ background: bgColor }}
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute left-1/2 -translate-x-1/2 -top-7 object-cover rounded-full w-[130px] h-[160px] sm:w-[147px] sm:h-[173px] md:w-[180px] md:h-[209px]"
                />
              </div>

              <div className="mt-5 text-center">
                <h2 className="text-lg font-semibold text-[#1f5670]">
                  {member.name}
                </h2>
                <p className="text-sm text-gray-600 italic">{member.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTeam;
