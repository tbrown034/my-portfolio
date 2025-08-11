"use client";
import React from "react";
import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import Mug from "./Mug.jsx";
import MyLinks from "./MyLinks.jsx";
import HelloWorld from "./HelloWorld.jsx";
import IAm from "./IAm.jsx";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16">
      {/* Mobile Screen */}
      <section className="flex flex-col gap-8 sm:hidden max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Mug />
        </div>
        <HelloWorld />
        <IAm />
        <Intro />
        <MyLinks />
        <BottomNav />
      </section>

      {/* Larger Screens */}
      <section className="hidden sm:flex sm:flex-col sm:gap-12 max-w-7xl mx-auto">
        <HelloWorld />
        <div className="sm:grid sm:grid-cols-12 sm:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center col-span-8 gap-8 lg:gap-10">
            <IAm />
            <Intro />
          </div>
          <div className="flex items-center justify-center col-span-4">
            <Mug />
          </div>
        </div>
        <MyLinks />
        <BottomNav />
      </section>
    </main>
  );
}
