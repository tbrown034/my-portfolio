"use client";
import React from "react";
import Mug from "./Mug.jsx";
import HelloWorld from "./HelloWorld.jsx";
import IAm from "./IAm.jsx";

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-start px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Mobile Screen */}
      <section className="flex flex-col gap-4 sm:hidden max-w-2xl mx-auto pt-8">
        <HelloWorld />
        <IAm />
      </section>

      {/* Medium Screens - 2 columns */}
      <section className="hidden sm:flex lg:hidden sm:flex-col sm:gap-6 max-w-5xl mx-auto pt-12">
        <HelloWorld />
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
            About Me
          </h2>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="col-span-1">
              <IAm showDesktopLayout="medium" />
            </div>
            <div className="col-span-1 flex justify-center">
              <Mug />
            </div>
          </div>
        </div>
      </section>

      {/* Large Screens - 3 columns */}
      <section className="hidden lg:flex lg:flex-col lg:gap-6 max-w-7xl mx-auto pt-12">
        <HelloWorld />
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
            About Me
          </h2>
          <div className="grid grid-cols-3 gap-8 items-start">
            <IAm showDesktopLayout="large" />
            <div className="col-span-1 flex justify-center">
              <Mug />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
