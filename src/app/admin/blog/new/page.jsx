"use client";
import React from "react";
import BlogForm from "../../components/BlogForm";
import { useRouter } from "next/navigation";

const AddNewBlog = () => {
  const router = useRouter();

  const handleSuccess = () => {
    alert("Blog added successfully!");
    router.push("/admin/blogs");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
      <BlogForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddNewBlog;
