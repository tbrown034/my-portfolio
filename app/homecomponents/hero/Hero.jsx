import React from "react";
import HeroHeader from "./HeroHeader.jsx";
import Intro from "./Intro";
import Mug from "./Mug.jsx";
import HeroLinks from "./HeroLinks";
import HeroCTA from "../coding/HeroCTA";
import HeroBuildSomething from "../coding/HeroBuildSomething";

//Instructions: on

export default function Hero() {
  return (
    <main className="flex flex-col px-6 pb-0 pt-4 sm:px-8 lg:px-12 xl:px-16 fullSubsection">
      {/* Mobile layout (below md breakpoint) */}
      <section className="flex flex-col gap-4 md:hidden max-w-3xl mx-auto pt-8">
        <HeroHeader />
        <Intro />
        <HeroCTA />
        <HeroLinks />
      </section>

      {/* Tablet layout (md to lg) - exactly like mobile but with 2-column About Me */}
      <section className="hidden md:flex lg:hidden md:flex-col gap-4 max-w-3xl mx-auto md:pt-8">
        <HeroHeader />
        
        {/* About Me section with 2-column intro */}
        <div className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
            About Me
          </h2>
          <Intro showDesktopLayout="large" />
        </div>
        
        {/* Mug - centered like mobile */}
        <div className="flex justify-center my-6">
          <Mug />
        </div>
        
        <HeroCTA />
        <HeroBuildSomething />
        <HeroLinks />
      </section>

      {/* Desktop layout (lg and up) */}
      <section className="hidden lg:flex lg:flex-col max-w-7xl mx-auto lg:pb-8 lg:pt-4 w-full">
        <div className="flex flex-col gap-8">
          <HeroHeader />

          {/* 3-column grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left column: About content */}
            <div className="col-span-2 space-y-6 order-1">
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
                  About Me
                </h2>
                <Intro showDesktopLayout="large" />
              </div>
              <HeroCTA />
            </div>

            {/* Right column: Photo */}
            <div className="col-span-1 flex items-start justify-center pt-8 order-2">
              <Mug />
            </div>
          </div>
        </div>
        <HeroLinks />
      </section>
    </main>
  );
}
