"use client";
import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import MobileMug from "./MobileMug";

export default function Home() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 sm:min-h-95-screen">
      <div className="flex sm:hidden">
        <MobileMug />
      </div>
      <div className="flex items-center justify-center flex-grow">
        <Intro />
      </div>
      <div className="">
        <BottomNav />
      </div>
    </section>
  );
}
