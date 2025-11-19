// ...existing code...
"use client";

import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    text:
      "The National Kidney Registry’s partnership with Web Solutions is essential to helping patients and living organ donors understand our programs and why they should entrust us with their transplant journey. Through website design, media campaigns, blog posts, social media outreach, video design and more, Web Solutions has doubled our reach nearly every year. We are perpetually grateful to have them on our team.",
  },
  {
    id: 2,
    text:
      "Web Solutions has been a true partner to Rockwood in the development and management of our new website. They collaborated with us every step of the way on the overall strategy, content, design and SEO and provided valuable counsel and expertise throughout the process.",
  },
  {
    id: 3,
    text:
      "Not only is the finished product exactly what we had hoped for, the whole process from beginning to end was extraordinary. They were able to understand the complexities of our offerings, organize them, and then create solutions that are easy for the user to navigate, get information, and ultimately buy tickets.",
  },
  {
    id: 4,
    text:
      "An A++ team, creative, knowledgeable, and always there to guide, suggest, help and assist. We will remain partners now and into the future!",
  },
  {
    id: 5,
    text:
      "Their staff is fantastic! Everyone is responsive to our needs, provides guidance and advise regarding best practices, and is always available to provide technical support.",
  },
];

const AboutSlider = () => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoRef = useRef(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isPlaying]);

  const startAuto = () => {
    stopAuto();
    if (!isPlaying) return;
    autoRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
  };

  const stopAuto = () => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const goTo = (i) => setIndex(i);

  const togglePlay = () => {
    setIsPlaying((p) => !p);
    if (isPlaying) stopAuto();
    else startAuto();
  };

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="py-16 w-full bg-[#005c96] flex items-center justify-center">
      <div className="w-[92%] sm:w-[88%] md:w-[80%] flex flex-col items-center relative">
        
        {/* Slides container */}
        <div className="w-full overflow-hidden rounded-md">
          <div className="relative h-auto min-h-[160px] sm:min-h-[180px] md:min-h-[210px] lg:min-h-[250px]" aria-live="polite">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center px-4 sm:px-8 md:px-12 text-center ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <p className="text-white tracking-tight font-light italic text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-snug md:leading-normal">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: dots + play/pause */}
        <div className="mt-8 w-full flex items-center justify-center gap-4 flex-wrap">
          
          {/* Prev button */}
          <button
            onClick={prev}
            className="hidden md:inline-flex items-center justify-center p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Previous slide"
          >
            ‹
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  i === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="ml-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#005c96] font-semibold hover:opacity-90 transition"
            aria-pressed={!isPlaying}
            aria-label={isPlaying ? "Pause slides" : "Play slides"}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="hidden md:inline-flex items-center justify-center p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;

// ...existing code...
