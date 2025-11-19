import React from "react";
import Link from "next/link";

const CareerAbout = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full">
        <div className="flex flex-col items-start w-full gap-3 px-5 lg:px-30">
          <h1 className="lg:text-[36px] text-[22px] text-[#c5003e] tracking-tight">
            What You’ll <span className="font-bold">Love</span> About Us
          </h1>
          <p className="lg:text-[24px] text-[20px] font-light tracking-tight">
            At Web Solutions, we enjoy bringing talented individuals together to
            do meaningful work for great clients across a variety of industries.
            This not-so-typical agency community is supported by a set of core
            values that includes:
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Genuine work / life balance
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Mutual respect for the team and clients
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Professional integrity
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Commitment to excellence
          </p>
        </div>
        <div className="flex flex-col items-end w-full px-5">
          <img src="/ct-forum.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareerAbout;
