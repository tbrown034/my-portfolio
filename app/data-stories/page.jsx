"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dataStories } from "../data/data-stories";

export default function DataStoriesPage() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-12">
          <div className="border-b border-white/10 pb-2 mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              Data Stories
            </h2>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visual Journalism
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Charts, maps, and interactive graphics that reveal patterns in data and make complex stories accessible to readers.
          </p>
        </div>

        {/* Stories grid */}
        <section>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStories.slice(0, displayCount).map((story) => (
              <li key={story.id}>
                <Link
                  href={story.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl bg-white/8 backdrop-blur-md ring-1 ring-white/10 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_16px_48px_-24px_rgba(0,0,0,0.8)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_24px_64px_-32px_rgba(0,0,0,0.9)] focus:outline-none focus:ring-2 focus:ring-white/60 motion-reduce:hover:transform-none"
                >
                  {/* Badge row */}
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>Oklahoma Watch</span>
                    <span>•</span>
                    <span>{story.year}</span>
                    {story.type && (
                      <>
                        <span>•</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                          {story.type}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:underline decoration-2 underline-offset-2">
                    {story.title}
                  </h3>

                  {/* Dek */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {story.dek}
                  </p>

                  {/* Tools */}
                  {story.tools && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-800/50">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300 motion-reduce:group-hover:transform-none"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Show more/fewer buttons */}
        {displayCount < dataStories.length && (
          <div className="flex justify-center mt-12">
            <button
              className="px-6 py-3 p-2 border-2 border-white/20 hover:border-white/40 rounded-lg text-white font-medium transition-all duration-200 hover:bg-white/5"
              onClick={() => setDisplayCount((prevCount) => prevCount + 3)}
            >
              View More Stories
            </button>
          </div>
        )}
        {displayCount > 4 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 p-2 border-2 border-white/20 hover:border-white/40 rounded-lg text-white font-medium transition-all duration-200 hover:bg-white/5"
              onClick={() => setDisplayCount(4)}
            >
              Show Fewer
            </button>
          </div>
        )}
      </div>
    </main>
  );
}