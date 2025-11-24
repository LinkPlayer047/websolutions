import React from "react";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/admin/blogs" className="text-blue-600 hover:underline">
          Manage Blogs
        </Link>
        <Link href="/admin/blogs/new" className="text-blue-600 hover:underline">
          Add New Blog
        </Link>
      </nav>
    </div>
  );
};

export default AdminDashboard;
