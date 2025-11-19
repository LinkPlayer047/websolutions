import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-[#072039] flex items-center justify-center py-30 w-full">
      <div className="w-[80%] flex flex-col gap-5 items-center text-center justify-center">
        <h1 className="lg:text-[40px] md:text-[34px] text-[28px] text-white font-bold">An experienced team <span className="font-light">with the know-how to get the job done right</span></h1>
        <div className="lg:w-[70%] w-full  flex text-center justify-center">
          <p className="lg:text-[24px] md:text-[20px] text-[18px] text-white tracking-tight">
            We thrive on collaboration—diving deep into each client’s unique
            challenges to craft tailored marketing solutions that drive
            meaningful, measurable outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
