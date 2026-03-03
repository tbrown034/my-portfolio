import Link from "next/link";
import Image from "next/image";

export default function VizCard({ item, index }) {
  const isEven = index % 2 === 0;
  const primaryUrl =
    item.vizUrls?.[0]?.url ||
    (Array.isArray(item.graphicLink) ? item.graphicLink[0] : item.graphicLink);

  return (
    <div
      id={item.slug || undefined}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Image column */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        <Link
          href={primaryUrl || item.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            <div className="rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">
              <Image
                src={item.image}
                alt={item.headline}
                className="block w-full h-auto"
                width={1200}
                height={750}
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={85}
                priority={index === 0}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Text column */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <Link
          href={item.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            {item.headline}
          </h3>
        </Link>

        <p className="text-base text-gray-400 dark:text-neutral-500 mt-1 mb-4">
          {item.date} &middot; {item.publication}
        </p>

        {/* Award badge */}
        {item.award && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400 ring-1 ring-amber-200/50 dark:ring-amber-700/30">
              {item.award}
            </span>
          </div>
        )}

        {/* Tool tags */}
        {item.tools && item.tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tools.map((tool, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs text-gray-500 dark:text-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-900 font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-neutral-300 leading-relaxed mb-4">
          {item.summary || item.text}
        </p>

        {/* Individual graphic links */}
        {item.vizUrls && item.vizUrls.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mb-5">
            {item.vizUrls.map((viz, i) => (
              <span key={i} className="inline-flex items-center">
                <Link
                  href={viz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
                >
                  {viz.label} ({viz.tool})
                </Link>
                {i < item.vizUrls.length - 1 && (
                  <span className="text-gray-300 dark:text-neutral-600 ml-1.5">
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Read article link */}
        <Link
          href={item.siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
        >
          Read Article &rarr;
        </Link>
      </div>
    </div>
  );
}
