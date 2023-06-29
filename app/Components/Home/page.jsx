// app > Components > Home > Hero.jsx
"use client";
import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import { motion } from "framer-motion";
import MobileMug from "./MobileMug";

export default function Home() {
  return (
    <section className="flex flex-col justify-around gap-4 p-4 sm:h-95-screen sm:px-12 lg:px-20">
      <div className="hidden sm:flex">
        <MobileMug />
      </div>
      <Intro />
      <BottomNav />
    </section>
  );
}
