"use client";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ project }) {
  return (
    <Link href={`/work/${project.slug}`}>
      <div className="relative group overflow-hidden break-inside-avoid mb-4">
        {/* Image */}
        <div className="relative w-full">
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay + Text */}
        <div className="absolute inset-0">
          {/* Semi-transparent black overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Text appears only on hover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
