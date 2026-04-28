import Link from "next/link";
import Image from "next/image";
import { awards } from "@content/awards.js";
import { clips } from "@content/journalism.js";
import { graphics } from "@content/visualizations.js";

// Top awards to feature
const topAwards = awards
  .filter(
    (a) =>
      a.award.includes("Reporter of the Year") ||
      a.award.includes("Writer of the Year")
  )
  .slice(0, 3);

// Featured articles — six leads: three data-driven + three reporting clips
const FEATURED_CLIP_IDS = [1, 2, 3, 4, 7, 8];
const featuredClips = FEATURED_CLIP_IDS
  .map((id) => clips.find((c) => c.id === id))
  .filter(Boolean);

// Featured viz (six leads — the awards-tier set, including War Chests)
const featuredViz = graphics.slice(0, 6);

export default function JournalismTeaser() {
  return (
    <section id="journalism">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section header */}
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-[0.15em] text-blue-800 dark:text-blue-400 mb-2">
            Holding Power Accountable
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Data Journalism
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mt-3">
            15-plus years of investigative reporting across Oklahoma, Wyoming, Indiana and Virginia
            — from statehouse coverage to data-driven investigations that
            changed state policy.
          </p>
          <div className="space-y-1 mt-4">
            <div className="border-t-2 border-gray-900 dark:border-white"></div>
            <div className="border-t border-gray-900 dark:border-white"></div>
          </div>
        </div>

        {/* Awards highlights */}
        {topAwards.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mb-3">
              Awards
            </h3>
            <div className="flex flex-wrap gap-3">
              {topAwards.map((award, i) => (
                <div
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400 ring-1 ring-amber-200/50 dark:ring-amber-700/30"
                >
                  {award.award} ({award.year})
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured data viz — leads the section */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mb-3">
            Data Visualizations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredViz.map((item) => (
              <Link
                key={item.id}
                href={`/journalism#${item.slug}`}
                className="group block bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-neutral-900">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    className="w-full h-full object-cover object-left-top group-hover:scale-[1.02] transition-transform duration-300"
                    width={800}
                    height={500}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                      {item.publication || "Oklahoma Watch"}
                    </span>
                    <span className="text-gray-500 dark:text-neutral-400">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors leading-snug mb-2">
                    {item.headline}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tools.map((tool, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 text-xs text-gray-500 dark:text-neutral-400 rounded bg-gray-100 dark:bg-neutral-900 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Experience — newsroom history, breaks up the page */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mb-3">
            Experience
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Oklahoma Watch",
              "Wyoming Tribune Eagle",
              "CNHI Newspapers",
              "Staunton News Leader",
              "Indianapolis Star",
              "Evansville Courier and Press",
              "Indiana Daily Student",
            ].map((pub) => (
              <div
                key={pub}
                className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-400 ring-1 ring-amber-200/50 dark:ring-amber-700/30"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>

        {/* Featured articles */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-neutral-500 mb-3">
            Selected Investigations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredClips.map((article, i) => (
              <Link
                key={i}
                href={article.siteLink || "https://oklahomawatch.org"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Image if available */}
                {article.image && (
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-neutral-900">
                    <Image
                      src={article.image}
                      alt={article.headline}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      width={800}
                      height={500}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                      {article.publication || "Oklahoma Watch"}
                    </span>
                    <span className="text-gray-500 dark:text-neutral-400">
                      {article.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {article.headline}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/journalism"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200"
          >
            View more news articles and data journalism &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
