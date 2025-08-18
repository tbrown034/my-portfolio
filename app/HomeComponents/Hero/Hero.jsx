"use client";
import React from "react";
import HeroHeader from "./HeroHeader.jsx";
import HeroAboutMe from "./HeroAboutMe.jsx";
import Mug from "./Mug.jsx";

export default function Hero() {
  return (
    <main className="flex flex-col px-6 pb-0 pt-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Vertical layout for mobile only (below sm breakpoint) */}
      <section className="flex flex-col gap-4 sm:hidden max-w-3xl mx-auto pt-8">
        <HeroHeader />
        <HeroAboutMe />
      </section>

      {/* Layout for tablets and desktop (sm and up) */}
      <section className="hidden sm:flex sm:flex-col max-w-7xl mx-auto sm:pb-8 sm:pt-4 w-full">
        <div className="flex flex-col gap-8">
          <HeroHeader />
          
          {/* Responsive grid: 1 col on sm, 2 cols on md, 3 cols on lg+ */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {/* Left column: About content */}
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3 order-1">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
                About Me
              </h2>
              <div className="hidden lg:block">
                <HeroAboutMe showDesktopLayout="large" />
              </div>
              <div className="lg:hidden">
                <HeroAboutMe showDesktopLayout="medium" />
              </div>
            </div>
            
            {/* Right column: Photo */}
            <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 flex items-start justify-center sm:pt-8 order-2">
              <Mug />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}