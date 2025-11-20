"use client";
import { useState, useEffect } from "react";

export default function CategoryFilter({ category, setCategory }) {
  const categories = ["all", "branding", "web-design", "graphic design" ];
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sticky top-15 z-40 bg-white py-10 mb-4 w-full">
      {isMobile ? (
        <div className="relative w-48 mx-auto">
          <button
            className="w-full px-4 py-2 rounded-full bg-[#c5003e] text-white flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {category.toUpperCase()}
            <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <div className="absolute w-full mt-1 border rounded-md bg-white shadow-lg">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-[#c5003e] hover:text-white ${
                    category === cat ? "bg-[#c5003e] text-white" : ""
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-start gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                category === cat
                  ? "bg-[#c5003e] text-white"
                  : "bg-white text-black hover:bg-[#c5003e] hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
