import Link from "next/link";
import DemosHeader from "./components/DemosHeader";
import DemoCard from "./components/DemoCard";
import VizSection from "./components/VizSection";
import { demoProjects } from "@content/demos.js";
import { graphics } from "@content/visualizations.js";

export const metadata = {
  title: "Projects - Trevor Brown",
  description:
    "Screenshots, interactive walkthroughs and live links for Trevor Brown's development projects.",
};

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-6">
        <div className="flex items-start justify-between gap-6">
          <DemosHeader />
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0 mt-1"
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Section navigation — full table of contents */}
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="space-y-3">
          {/* Web Projects */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mr-3">
              Web Projects
            </span>
            <div className="inline-flex flex-wrap gap-1.5 mt-1">
              {demoProjects.map((project) => (
                <a
                  key={project.id}
                  href={`#${project.slug}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>

          {/* Data Visualizations */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mr-3">
              Data Viz
            </span>
            <div className="inline-flex flex-wrap gap-1.5 mt-1">
              {graphics.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.slug}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.navLabel}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Web Projects - stacked full-width rows */}
      <div
        id="web-projects"
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12"
      >
        {demoProjects.map((project, index) => (
          <div
            key={project.id}
            className={`py-12 lg:py-16 ${
              index < demoProjects.length - 1
                ? "border-b border-gray-200 dark:border-slate-800"
                : ""
            }`}
          >
            <DemoCard project={project} index={index} />
          </div>
        ))}
      </div>

      {/* Data Visualizations */}
      <div
        id="data-viz"
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16"
      >
        <VizSection />
      </div>

      {/* Portfolio Navigation */}
      <div className="border-t border-gray-200 dark:border-slate-800 mt-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <p className="text-sm uppercase tracking-wider font-semibold text-gray-400 dark:text-neutral-500 mb-6 text-center">
            Explore the full portfolio
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <Link
              href="/journalism"
              className="group px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 text-center"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                Journalism & Data
              </span>
            </Link>
            <Link
              href="/resume"
              className="group px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 text-center"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                Resume
              </span>
            </Link>
            <Link
              href="/#contact"
              className="group px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 text-center"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-gray-100 dark:border-slate-800/50 py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &uarr; Top
            </a>
            <Link
              href="/"
              className="px-4 py-2 text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              &larr; Homepage
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 text-xs font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
