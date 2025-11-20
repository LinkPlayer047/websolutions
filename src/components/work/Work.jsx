"use client";

import { useState } from "react";
import WorkHeader from "./components/WorkHeader";
import CategoryFilter from "./components/CategoryFilter";
import WorkGrid from "./components/WorkGrid";
import { projects } from "../../lib/projects";

export default function Work() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  return (
    <div className="px-6 py-10">
      <WorkHeader />
      <CategoryFilter selected={category} onChange={setCategory} />
      <WorkGrid projects={filtered} />
    </div>
  );
}
