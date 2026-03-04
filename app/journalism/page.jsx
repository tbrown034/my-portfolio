import Link from "next/link";
import Image from "next/image";
import JournalismHeader from "./components/JournalismHeader";
import Awards from "@/app/home/journalism/Awards";
import VizCard from "@/app/projects/components/VizCard";
import { clips } from "@content/journalism.js";
import { graphics } from "@content/visualizations.js";
import { awards } from "@content/awards.js";

export const metadata = {
  title: "Journalism & Data Visualization - Trevor Brown",
  description:
    "15 years of investigative reporting, public records analysis and visual storytelling across Oklahoma and Wyoming.",
};

export default function JournalismPage() {
  const sortedClips = [...clips].sort((a, b) => b.id - a.id);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* ───── HEADER ───── */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-6">
        <JournalismHeader />
      </div>

      {/* ───── LEDE — Background bio, establishes credibility ───── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-10">
        <div className="columns-1 md:columns-2 gap-x-10 text-gray-600 dark:text-neutral-200 leading-relaxed [&>p]:mb-4 [&>p]:break-inside-avoid">
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
            graduated with bachelor&apos;s degrees in political science and
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
            increased government transparency. From uncovering gaps in racial
            profiling enforcement to investigating hospital billing practices,
            I&apos;ve
            specialized in stories that serve the public interest and hold
            institutions accountable.
          </p>

          <p>
            I&apos;ve always been a data-driven reporter — from learning Excel
            to building visualizations in Datawrapper, Tableau and Flourish.
            Visual storytelling has been a constant thread in my journalism
            career. Now I use tools, including JavaScript and Python libraries,
            to transform datasets into stories that reveal patterns, trends and
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
              OU Outreach&apos;s Fullstack Academy Web Development Bootcamp
            </a>
            , a 260-hour program that honed my skills in modern, full-stack web
            technologies. Now I work at the intersection of journalism,
            technology, politics and AI.
          </p>
        </div>
      </section>

      {/* ───── TOC NAV ───── */}
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="inline-flex flex-wrap gap-1.5">
          {[
            { href: "#awards", label: "Awards" },
            { href: "#investigations", label: "Investigations" },
            { href: "#data-viz", label: "Data Visualizations" },
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

      {/* ───── AWARDS ───── */}
      <section
        id="awards"
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-12"
      >
        <Awards showAllByDefault={true} />
      </section>

      {/* ───── INVESTIGATIONS ───── */}
      <section
        id="investigations"
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-gray-200 dark:border-slate-800"
      >
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Selected Investigations
          </h2>
          <div className="border-t-2 border-gray-900 dark:border-white w-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8">
          {sortedClips.map((article) => (
            <article key={article.id} className="group">
              <a
                href={article.siteLink || "https://oklahomawatch.org"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image */}
                {article.image && (
                  <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-900 mb-4">
                    <Image
                      src={article.image}
                      alt={article.headline}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded font-medium">
                      {article.publication || "Oklahoma Watch"}
                    </span>
                    <span className="text-gray-400 dark:text-neutral-500">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {article.headline}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                    {article.text}
                  </p>

                  <span className="inline-block text-sm font-medium text-blue-800 dark:text-blue-400 pt-1">
                    Read Article &rarr;
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ───── DATA VISUALIZATIONS ───── */}
      <section
        id="data-viz"
        className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-gray-200 dark:border-slate-800"
      >
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-montserrat text-gray-900 dark:text-white mb-2">
            Data Visualizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-300 max-w-3xl mb-4">
            Interactive graphics and data analysis built with Tableau,
            Datawrapper and Flourish at Oklahoma Watch
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

      {/* ───── PORTFOLIO NAV ───── */}
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
                Web Projects
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
