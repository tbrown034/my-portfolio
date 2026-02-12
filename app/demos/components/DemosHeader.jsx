import { demoProjects } from "@content/demos.js";

export default function DemosHeader() {
  const liveCount = demoProjects.filter((p) => p.siteLink).length;
  const totalCount = demoProjects.length;

  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
        See It in Action
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-3">
        Project Demos
      </h1>

      <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-4">
        Interactive walkthroughs and live links for selected development
        projects
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 dark:text-neutral-500 mb-6">
        <span>{totalCount} projects</span>
        <span className="text-gray-300 dark:text-neutral-700">&middot;</span>
        <span>{liveCount} live</span>
      </div>

      <div className="border-t-2 border-gray-900 dark:border-white w-full" />
    </div>
  );
}
