"use client";

import { useState } from "react";
import WorkGrid from "./components/WorkGrid";
import CategoryFilter from "./components/CategoryFilter";
import { projects } from "@/lib/projects";

export default function Work() {
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // number of projects per page

  // Filter projects
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.category === category);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-[90%] mx-auto py-10">
      <CategoryFilter category={category} setCategory={setCategory} />
      <WorkGrid projects={currentProjects} />

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border hover:bg-black hover:text-white disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 rounded border ${
              currentPage === page
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border hover:bg-black hover:text-white disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
