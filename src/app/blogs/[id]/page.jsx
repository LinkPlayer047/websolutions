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
    console.log("Blog ID from useParams():", id); // Debugging

    if (!id) {
      setError("Blog ID not found in URL");
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE}/${id}`);
        console.log("Fetch response:", res);

        if (!res.ok) {
          const errMsg = `Error ${res.status}: ${res.statusText}`;
          throw new Error(errMsg);
        }

        const data = await res.json();
        console.log("Fetched blog data:", data);
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
  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  // Error state
  if (error || !blog)
    return <p className="text-center mt-10 text-red-500">{error || "Blog not found"}</p>;

  // Single blog detail page
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg"
        />
      )}
      <h1 className="text-4xl font-bold mt-6">{blog.title}</h1>
      {blog.subtitle && <h2 className="text-gray-600 text-xl mt-2">{blog.subtitle}</h2>}
      <div className="mt-6 text-gray-800 leading-8 whitespace-pre-line">{blog.content}</div>
    </div>
  );
}
