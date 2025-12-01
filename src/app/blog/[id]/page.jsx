"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_BASE = "https://backend-plum-rho-jbhmx6o6nc.vercel.app/api/blogs";

export default function SingleBlogPage() {
  const { id } = useParams(); // ye exact _id MongoDB se match hona chahiye
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE}/${id}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-lg"
        />
      )}
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      <h2 className="text-gray-600 text-lg">{blog.subtitle}</h2>
      <div className="mt-6 text-gray-800 leading-8">{blog.content}</div>
    </div>
  );
}
