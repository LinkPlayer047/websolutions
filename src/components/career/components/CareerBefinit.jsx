import React from "react";

const CareerBefinit = () => {
  return (
    <div className="w-full flex items-center justify-between py-15 bg-[#173b63]">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-5 items-start w-full">
        <div className="lg:w-1/2 w-full flex items-start px-5">
          <img src="Capitol.webp" alt="" />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-3 items-start px-5 lg:px-30">
          <h1 className="lg:text-[36px] text-[22px] text-white tracking-tight">How You’ll <span className="font-bold">Benefit</span></h1>
          <p className="lg:text-[24px] text-[20px] text-white tracking-tight">
            Because we believe in our employees and the impact they can have on
            Web Solutions’ success, we provide traditional benefits plus some
            novel perks that give each team member what they need for a healthy,
            balanced life.
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Schedule flexibility that puts family first

          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            40-hour work week
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Health insurance
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Access to supplemental vision and dental insurance
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            401(k) savings plan with company matching
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Profit-sharing opportunities
          </p>
          <p
            className="flex lg:text-[20px] text-[18px] text-white font-light items-center gap-3 px-5"
          >
            <img src="/caret-right-red.svg" className="w-3 h-3" />
            Competitive salaries commensurate with experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerBefinit;
