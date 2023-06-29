// app > Components > Home > Hero.jsx
"use client";
import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import MyLinks from "./MyLinks.jsx";
import { motion } from "framer-motion";
import MobileMug from "./MobileMug";

export default function Home() {
  return (
    <section className="flex flex-col justify-around gap-4 p-4 sm:h-95-screen sm:px-12 lg:px-20">
      <motion.h1
        className="text-6xl font-bold text-center lg:text-8xl sm:text-start font-montserrat"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm Trevor.
      </motion.h1>
      <MobileMug />

      <Intro />
      <BottomNav />
    </section>
  );
}
