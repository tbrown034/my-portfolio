import React from "react";
import HeroHeader from "./HeroHeader.jsx";
import Intro from "./Intro";
import Mug from "./Mug.jsx";
import HeroLinks from "./HeroLinks";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="flex flex-col px-6 pb-0 pt-2 sm:px-8 lg:px-12 xl:px-16 ">
      {/* Mobile layout (below md breakpoint) */}
      <section className="flex flex-col gap-4 md:gap-5 md:hidden max-w-3xl mx-auto pt-3">
        <HeroHeader />
        <div className="flex justify-center">
          <Mug />
        </div>
        <Intro />
        <HeroCTA />
        <HeroLinks />
      </section>

      {/* Tablet layout (md to lg) - exactly like mobile but with 2-column About Me */}
      <section className="hidden md:flex lg:hidden md:flex-col gap-4 md:gap-5 max-w-3xl mx-auto md:pt-3">
        <HeroHeader />

        {/* About Me section with 2-column intro */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-neutral-400 inline-flex items-center px-1.5 py-0.5 rounded-md hover:bg-white/5">
            About Me
          </h2>
          <Intro showDesktopLayout="large" />
        </div>

        {/* Mug - centered like mobile */}
        <div className="flex justify-center mt-6 mb-6">
          <Mug />
        </div>

        <HeroCTA />
        <HeroLinks />
      </section>

      {/* Desktop layout (lg and up) */}
      <section className="hidden lg:flex lg:flex-col max-w-7xl mx-auto lg:pb-8 lg:pt-2 w-full">
        <div className="flex flex-col gap-8">
          <HeroHeader />

          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Left column: About content */}
            <div className="col-span-2 space-y-6 order-1">
              <div className="space-y-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-neutral-400 inline-flex items-center px-1.5 py-0.5 rounded-md hover:bg-white/5">
                  About Me
                </h2>
                <Intro showDesktopLayout="large" />
              </div>
            </div>

            {/* Right column: Photo */}
            <div className="col-span-1 flex items-start justify-center pt-8 order-2">
              <Mug />
            </div>
          </div>
        </div>
        <div className="flex mt-8 flex-col gap-8">
          <HeroCTA />
          <HeroLinks />
        </div>
      </section>
    </section>
  );
}
