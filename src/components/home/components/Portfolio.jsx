"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_BASE = "https://backend-plum-rho-jbhmx6o6nc.vercel.app/api/blogs";

const Portfolio = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  return (
    <div className="w-full bg-white py-16 flex flex-col items-center justify-center">
      <h1 className="text-black text-[36px] tracking-tight">
        Browse our portfolio of{" "}
        <span className="font-bold">impactful work:</span>
      </h1>

      {/* MASONRY Blog Grid */}
      <div className="w-[90%] mt-5 columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">

        {blogs.map((blog) => (
          <Link 
            key={blog._id} 
            href={`/blogs/${blog._id}`}
            className="relative group overflow-hidden break-inside-avoid block"
          >
            {/* Blog Image */}
            <img
              src={blog.image || "/placeholder.webp"}
              className="w-full h-auto object-cover"
              alt={blog.title}
            />

            {/* Hover Overlay */}
            <div
              className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 
                         flex items-center justify-center p-3 text-center"
            >
              <p className="text-white text-2xl font-bold">
                {blog.title}
              </p>
            </div>
          </Link>
        ))}

      </div>

      <div className="flex items-center justify-center mt-20">
        <Link
          href="/blogs"
          className="group flex items-center justify-center px-7 text-[20px] gap-2 
             border border-blue-200 text-black shadow-lg py-3 rounded-full font-semibold 
             transition-all duration-300 transform
             hover:-translate-y-1 hover:bg-[#a00033] hover:text-white"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
