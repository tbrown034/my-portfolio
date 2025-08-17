"use client";
import React from "react";
import HeroHeader from "./HeroHeader.jsx";
import HeroAboutMe from "./HeroAboutMe.jsx";
import Mug from "./Mug.jsx";

export default function Hero() {
  return (
    <main className="flex flex-col px-6 pb-0 pt-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Vertical layout for mobile only */}
      <section className="flex flex-col gap-4 sm:hidden max-w-3xl mx-auto pt-8">
        <HeroHeader />
        <HeroAboutMe />
      </section>

      {/* Layout for small screens and up */}
      <section className="hidden sm:flex sm:flex-col max-w-7xl mx-auto sm:pb-8 sm:pt-4 w-full">
        <div className="flex flex-col gap-8">
          <HeroHeader />
          
          {/* Two column layout for desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: About content (2/3 width) */}
            <div className="lg:col-span-2 space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
                About Me
              </h2>
              <HeroAboutMe showDesktopLayout="large" />
            </div>
            
            {/* Right column: Photo (1/3 width) */}
            <div className="lg:col-span-1 flex items-start justify-center lg:pt-8">
              <Mug />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}