"use client";

import React, { useEffect, useState } from "react";

export default function SingleArticlePage({ params }) {
  const { slug } = params;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/:slug`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!blog) {
    return <p className="text-center py-20 text-xl">Loading...</p>;
  }

  return (
    <div className="w-full bg-white py-10 flex flex-col items-center">
      <div className="w-[90%] md:w-[70%]">
        <img
          src={blog.image}
          className="w-full h-96 object-cover rounded-xl"
          alt={blog.title}
        />

        <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
        <h2 className="text-xl text-gray-600 mt-2">{blog.subtitle}</h2>

        <div className="mt-4 text-sm text-gray-500 flex gap-4">
          {blog.author && <p>By: {blog.author}</p>}
          {blog.category && <p>Category: {blog.category}</p>}
        </div>

        <div
          className="mt-6 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </div>
  );
}
