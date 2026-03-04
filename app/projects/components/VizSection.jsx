import VizCard from "./VizCard";
import { graphics as allGraphics } from "@content/visualizations.js";

export default function VizSection({ graphics }) {
  const items = graphics || allGraphics;

  return (
    <section>
      {/* Section header — matches DemosHeader pattern */}
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
          Investigative Journalism
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-3">
          Data Visualization & Public Records
        </h2>

        <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-4">
          Interactive graphics and data analysis built with Tableau, Datawrapper
          and Flourish at Oklahoma Watch — an independent nonprofit newsroom
          covering elections, policy and accountability in Oklahoma.
        </p>

        <div className="border-t-2 border-gray-900 dark:border-white w-full" />
      </div>

      {/* Stacked viz cards with border separators */}
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`py-12 lg:py-16 ${
            index < items.length - 1
              ? "border-b border-gray-200 dark:border-slate-800"
              : ""
          }`}
        >
          <VizCard item={item} index={index} />
        </div>
      ))}
    </section>
  );
}
