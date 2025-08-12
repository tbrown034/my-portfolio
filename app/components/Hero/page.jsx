"use client";
import React from "react";
import Intro from "./Intro.jsx";
// import BottomNav from "./BottomNav.jsx";
import Mug from "./Mug.jsx";
// import MyLinks from "./MyLinks.jsx";
import HelloWorld from "./HelloWorld.jsx";
import IAm from "./IAm.jsx";

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-start px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
      {/* Mobile Screen */}
      <section className="flex flex-col gap-3 sm:hidden max-w-2xl mx-auto pt-8">
        <HelloWorld />
        <IAm />
        <div className="flex items-center justify-center my-4">
          <Mug />
        </div>
        <Intro />
        {/* <BottomNav /> */}
        {/* <MyLinks /> */}
      </section>

      {/* Larger Screens */}
      <section className="hidden sm:flex sm:flex-col sm:gap-4 max-w-7xl mx-auto pt-12">
        <HelloWorld />
        <div className="sm:grid sm:grid-cols-12 sm:gap-6 lg:gap-8 items-start">
          <div className="flex flex-col col-span-8 gap-4">
            <IAm />
            <Intro />
            {/* <BottomNav /> */}
          </div>
          <div className="flex items-start justify-center col-span-4 pt-4">
            <Mug />
          </div>
        </div>
        {/* <MyLinks /> */}
      </section>
    </main>
  );
}
