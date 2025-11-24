import React, { useState, useEffect } from "react";

const BlogForm = ({ blog = null, onSuccess }) => {
  const [title, setTitle] = useState(blog ? blog.title : "");
  const [content, setContent] = useState(blog ? blog.content : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = blog ? "PUT" : "POST";
    const url = blog ? `/api/blogs/${blog._id}` : "/api/blogs";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      onSuccess();
    } else {
      alert("Error saving blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        {blog ? "Update Blog" : "Add Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
