import React from "react";

const SingleBlog = async ({ params }) => {
  const { slug } = params;

  // Fetch blog from backend
  const res = await fetch(`http://localhost:5000/api/blogs/${slug}`);
  const blog = await res.json();

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div>{blog.content}</div>
    </div>
  );
};

export default SingleBlog;
