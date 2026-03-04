import Link from "next/link";
import DemosHeader from "./components/DemosHeader";
import DemoCard from "./components/DemoCard";
import VizSection from "./components/VizSection";
import { demoProjects } from "@content/demos.js";
import { graphics as allGraphics } from "@content/visualizations.js";

// Cherry-picked data viz: COVID Memorial (5), Churches & Vaccines (3), Hospital Lawsuits (2)
const CHERRY_PICKED_VIZ_IDS = [5, 3, 2];
const graphics = CHERRY_PICKED_VIZ_IDS.map((id) =>
  allGraphics.find((g) => g.id === id)
).filter(Boolean);

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
        <div className="space-y-4">
          {/* Web Projects */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white underline underline-offset-4 decoration-1 mr-3">
              Web Projects
            </span>
            <div className="inline-flex flex-wrap gap-x-4 gap-y-1 mt-2">
              {demoProjects.map((project) => (
                <a
                  key={project.id}
                  href={`#${project.slug}`}
                  className="text-sm text-gray-600 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 underline decoration-gray-300 dark:decoration-neutral-600 underline-offset-2 hover:decoration-blue-400 transition-colors"
                >
                  {project.title}
                </a>
              ))}
            </div>
          </div>

          {/* Data Journalism */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-white underline underline-offset-4 decoration-1 mr-3">
              Data Journalism
            </span>
            <div className="inline-flex flex-wrap gap-x-4 gap-y-1 mt-2">
              {graphics.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.slug}`}
                  className="text-sm text-gray-600 dark:text-neutral-300 hover:text-blue-800 dark:hover:text-blue-400 underline decoration-gray-300 dark:decoration-neutral-600 underline-offset-2 hover:decoration-blue-400 transition-colors"
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
        <VizSection graphics={graphics} />
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
                Data Journalism
              </span>
            </Link>
            <Link
              href="/about"
              className="group px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 text-center"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                About
              </span>
            </Link>
            <Link
              href="/about#contact"
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
              href="/about#contact"
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
