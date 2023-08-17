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
    <main className="flex flex-col gap-4 p-8">
      {/* Mobile Screen */}
      <section className="flex flex-col gap-4 sm:hidden">
        <div className="flex items-center justify-center">
          <Mug />
        </div>
        <HelloWorld />
        <IAm />
        <Intro />
        <MyLinks />
        <BottomNav />
      </section>

      {/* Larger Screens */}
      <section className="hidden sm:flex sm:flex-col sm:gap-4">
        <HelloWorld />
        <div className="sm:grid sm:grid-cols-12 sm:gap-4">
          <div className="flex flex-col justify-center col-span-8 gap-4">
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
