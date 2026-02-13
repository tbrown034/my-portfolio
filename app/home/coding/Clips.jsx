import Link from "next/link";
import { demoProjects } from "@content/demos.js";
import HomeProjectCard from "./HomeProjectCard";

const FEATURED_PROJECTS = [
  { id: 1, type: "Professional" },
  { id: 2, type: "Hobby" },
  { id: 3, type: "Hobby" },
  { id: 5, type: "Local" },
];

const featuredProjects = FEATURED_PROJECTS.map(({ id, type }) => {
  const project = demoProjects.find((p) => p.id === id);
  return project ? { ...project, type } : null;
}).filter(Boolean);

export default function Clips() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-neutral-400">
            Selected Projects
          </h2>
        </div>

        {/* Stacked project rows */}
        <div>
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`py-10 lg:py-14 ${
                index < featuredProjects.length - 1
                  ? "border-b border-gray-300 dark:border-neutral-700"
                  : ""
              }`}
            >
              <HomeProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
