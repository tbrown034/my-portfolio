import Link from "next/link";
import JournalismHeader from "./components/JournalismHeader";
import Awards from "@/app/home/journalism/Awards";
import VizCard from "@/app/projects/components/VizCard";
import { clips } from "@content/journalism.js";
import { graphics } from "@content/visualizations.js";
import Image from "next/image";

export const metadata = {
  title: "Journalism & Data Visualization - Trevor Brown",
  description:
    "15 years of investigative reporting, public records analysis and visual storytelling across Oklahoma and Wyoming.",
};

export default function JournalismPage() {
  const sortedClips = [...clips].sort((a, b) => a.id - b.id);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-6">
        <JournalismHeader />
      </div>

      {/* Table of contents nav */}
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
        <div className="inline-flex flex-wrap gap-1.5">
          {[
            { href: "#awards", label: "Awards" },
            { href: "#investigations", label: "Investigations" },
            { href: "#data-viz", label: "Data Visualizations" },
            { href: "#background", label: "Background" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-neutral-700 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Awards Section */}
      <section id="awards" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-12">
        <Awards showAllByDefault={true} />
      </section>

      {/* Investigations Section */}
      <section id="investigations" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-gray-200 dark:border-slate-800">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Selected Investigations
          </h2>
          <div className="border-t-2 border-gray-900 dark:border-white w-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sortedClips.map((article) => (
            <div key={article.id} className="group relative">
              <div className="relative bg-white dark:bg-neutral-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700">
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                        {article.publication || "Oklahoma Watch"}
                      </span>
                      <span className="text-gray-500 dark:text-neutral-400">
                        {article.date}
                      </span>
                    </div>

                    <Link
                      href={article.siteLink || "https://oklahomawatch.org"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
                        {article.headline}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-neutral-100 leading-relaxed text-sm">
                      {article.text}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-neutral-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
                      href={article.siteLink || "https://oklahomawatch.org"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Read Article
                    </Link>
                  </div>
                </div>

                {article.image && (
                  <div className="relative">
                    <Link
                      href={article.siteLink || "https://oklahomawatch.org"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-1/2 cursor-pointer"
                    >
                      <div className="border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300">
                        <div className="h-32 overflow-hidden">
                          <Image
                            alt={`Screenshot for ${article.headline}`}
                            className="w-full h-auto object-top hover:scale-105 transition-transform duration-300"
                            src={article.image}
                            width={400}
                            height={500}
                            sizes="(max-width: 768px) 66vw, (max-width: 1024px) 33vw, 25vw"
                            loading="lazy"
                            quality={85}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data Visualizations Section */}
      <section id="data-viz" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-gray-200 dark:border-slate-800">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Data Visualizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-4">
            Interactive graphics and data analysis built with Tableau, Datawrapper
            and Flourish at Oklahoma Watch
          </p>
          <div className="border-t-2 border-gray-900 dark:border-white w-full" />
        </div>

        {graphics.map((item, index) => (
          <div
            key={item.id}
            className={`py-12 lg:py-16 ${
              index < graphics.length - 1
                ? "border-b border-gray-200 dark:border-slate-800"
                : ""
            }`}
          >
            <VizCard item={item} index={index} />
          </div>
        ))}
      </section>

      {/* Background Section */}
      <section id="background" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-gray-200 dark:border-slate-800">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Background
          </h2>
          <div className="border-t-2 border-gray-900 dark:border-white w-full mt-4" />
        </div>

        <div className="max-w-4xl space-y-4 text-gray-600 dark:text-neutral-200 leading-relaxed">
          <p>
            My journalism career began at{" "}
            <a
              href="https://www.idsnews.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              Indiana University
            </a>
            , where I was editor-in-chief of The Indiana Daily Student and
            graduated with bachelor's degrees in political science and
            journalism. I then spent 15-plus years reporting in several states,
            most recently as the statehouse reporter for the{" "}
            <a
              href="https://www.wyomingnews.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              Wyoming Tribune Eagle
            </a>{" "}
            and as an investigative reporter with{" "}
            <a
              href="https://oklahomawatch.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              Oklahoma Watch
            </a>
            , a nonprofit newsroom based out of Oklahoma City.
          </p>

          <p>
            My reporting has led to policy changes, legislative reforms and
            increased government transparency. From exposing racial profiling
            patterns to investigating hospital billing practices, I've
            specialized in stories that serve the public interest and hold
            institutions accountable.
          </p>

          <p>
            I've always been a data-driven reporter — from learning Excel
            to building visualizations in Datawrapper, Tableau and Flourish.
            Visual storytelling has been a constant thread in my journalism career.
            Now I use tools, including JavaScript and Python libraries, to
            transform datasets into stories that reveal patterns, trends and
            insights.
          </p>

          <p>
            Looking to expand beyond reporting, I graduated from{" "}
            <a
              href="https://bootcamp.outreach.ou.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              OU Outreach's Fullstack Academy Web Development Bootcamp
            </a>
            , a 260-hour program that honed my skills in modern, full-stack
            web technologies. Now I work at the intersection of journalism,
            technology, politics and AI.
          </p>
        </div>
      </section>

      {/* Portfolio Navigation */}
      <div className="border-t border-gray-200 dark:border-slate-800 mt-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <p className="text-sm uppercase tracking-wider font-semibold text-gray-400 dark:text-neutral-500 mb-6 text-center">
            Explore the full portfolio
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto">
            <Link
              href="/projects"
              className="group px-4 py-3 rounded-lg bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-200 text-center"
            >
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-200 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors">
                Web Development
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
