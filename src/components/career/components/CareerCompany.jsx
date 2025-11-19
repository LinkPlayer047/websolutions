import React from "react";

const CareerCompany = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-[95%] flex flex-col gap-5 items-center justify-center">
        <h1 className="text-[36px] text-[#002b46] font-bold lg:pl-30">
          Enjoy the company <span className="font-normal">you’ll keep.</span>
        </h1>
        <div className="mt-5 columns-1 sm:columns-2 w-full lg:columns-4 gap-10 space-y-5">
          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/pot-luck.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-black/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Food Days</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/holiday.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-blue-400/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Parties</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/picnics.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-blue-400/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Picnics</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/disc-golf.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-red-500/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Games</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/happy-hour.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-red-500/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Happy Hours</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/community-support.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />

            <div
              className="absolute inset-0 bg-blue-400/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Community Support</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/sports-events.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />

            <div
              className="absolute inset-0 bg-blue-400/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Sporting Events</p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-full break-inside-avoid">
            <img
              src="/skiing.jpg"
              className="w-full h-auto object-contain hover:opacity-100 hover:cursor-pointer"
              alt=""
            />
            <div
              className="absolute inset-0 bg-black/80 opacity-100 group-hover:opacity-0 transition-all duration-300
                flex items-center justify-center pointer-events-none"
            >
              <p className="text-white text-2xl">Team Building</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-15 gap-20 flex-col md:flex-row w-[85%]">
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <img src="/careers-growth.webp" alt="" />
          </div>
          <div className="lg:w-1/2 w-full gap-3 flex flex-col items-start">
            <h2 className="lg:text-[36px] text-[22px] tracking-tight text-[#c5003e]">
              Professional <span className="font-bold">Growth</span>
            </h2>
            <p className="lg:text-[22px] text-[18px] tracking-tight">
              Our company is made up of talented designers, developers, account
              managers & digital marketers and more. We give them the support
              and resources they need to innovate and grow.
            </p>
            <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
              <img src="/caret-right-red.svg" className="w-3 h-3" />
              Challenging and diverse projects
            </p>
            <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
              <img src="/caret-right-red.svg" className="w-3 h-3" />
              Collaborative environment receptive to new ideas
            </p>
            <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
              <img src="/caret-right-red.svg" className="w-3 h-3" />
              Opportunities to attend professional events, training programs,
              and conferences
            </p>
            <p className="flex lg:text-[20px] text-[16px] text-black font-light items-center gap-3 px-5">
              <img src="/caret-right-red.svg" className="w-3 h-3" />
              Continuing education opportunities and in-office learning library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCompany;
