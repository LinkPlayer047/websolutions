"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_BASE = "https://backend-plum-rho-jbhmx6o6nc.vercel.app/api/blogs";

export default function SingleBlogPage() {
  const { id } = useParams(); // Dynamic URL se id le raha hai
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Pehli render pe id undefined ho sakta hai

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}/${id}`);
        
        // Backend se error ka exact message read karo
        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Blog not found");
        }

        const data = await res.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  // Loading state
  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  // Error state
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  // No blog found
  if (!blog)
    return <p className="text-center mt-10 text-red-500">Blog not found</p>;

  // Single blog detail page
  return (
    <div className="w-full bg-[#004b87]">
    <div className="max-w-4xl mx-auto py-20 px-4">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg"
        />
      )}
      <h1 className="text-4xl text-white font-bold mt-6">{blog.title}</h1>
      {blog.subtitle && (
        <h2 className="text-gray-300 text-xl mt-2">{blog.subtitle}</h2>
      )}
      <div className="mt-6 text-white leading-8 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
    </div>
  );
}
