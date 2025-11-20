"use client";
import WorkCard from "./WorkCard";

export default function WorkGrid({ projects }) {
  return (
    <div className="w-[90%] mx-auto mt-5 columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
      {projects.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
}
