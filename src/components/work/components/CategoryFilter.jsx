"use client";

const categories = [
  { label: "All", value: "all" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Retail", value: "retail" },
  { label: "Nonprofit", value: "nonprofit" },
  { label: "Marketing", value: "marketing" },
];

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="flex gap-3 justify-center mb-10 flex-wrap">
      {categories.map(cat => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-4 py-2 rounded-full border
            ${selected === cat.value ? 
              "bg-black text-white" : 
              "bg-white text-black"
            }`
          }
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
