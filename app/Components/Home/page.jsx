"use client";
import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import { motion } from "framer-motion";
import MobileMug from "./MobileMug";

export default function Home() {
  return (
    <section className="flex flex-col justify-between gap-4 px-4 sm:h-95-screen sm:px-12 lg:px-20">
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
