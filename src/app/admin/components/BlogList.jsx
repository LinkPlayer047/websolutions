"use client";

import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from backend API
    fetch("/api/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    // Delete blog from backend API
    await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    // Refresh blog list
    setBlogs(blogs.filter(blog => blog._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className="mb-2">
            <h3>{blog.title}</h3>
            <button onClick={() => handleDelete(blog._id)}>Delete</button>
            {/* You can add Edit button linking to blog edit form */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
