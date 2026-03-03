import Link from "next/link";
import Image from "next/image";
import { graphics } from "@content/visualizations.js";

export default function VizSection() {
  return (
    <section>
      {/* Section header */}
      <div className="border-b border-gray-200 dark:border-slate-800 pb-2 mb-10">
        <p className="text-xs uppercase tracking-widest font-medium text-gray-400 dark:text-neutral-500 mb-1">
          Journalism
        </p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Data Visualizations
        </h2>
        <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">
          Interactive graphics built with Tableau, Datawrapper and Flourish for
          Oklahoma Watch
        </p>
      </div>

      {/* Viz grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {graphics.map((item) => {
          const graphicUrl = Array.isArray(item.graphicLink)
            ? item.graphicLink[0]
            : item.graphicLink;

          return (
            <div
              key={item.id}
              className="group bg-white dark:bg-neutral-900 rounded-xl border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-200 overflow-hidden"
            >
              {/* Image */}
              <Link
                href={graphicUrl || item.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <div className="h-44 overflow-hidden bg-gray-50 dark:bg-neutral-800">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                    width={600}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                {/* Meta row */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                    {item.program}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-neutral-500">
                    {item.publication}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2">
                  {item.headline}
                </h3>

                {/* Summary */}
                <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                  {item.summary || item.text}
                </p>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {graphicUrl && (
                    <Link
                      href={graphicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                    >
                      View Graphic &rarr;
                    </Link>
                  )}
                  <Link
                    href={item.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Read Article
                  </Link>
                  {Array.isArray(item.graphicLink) &&
                    item.graphicLink.length > 1 && (
                      <span className="text-xs text-gray-400 dark:text-neutral-500">
                        +{item.graphicLink.length - 1} more
                      </span>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
