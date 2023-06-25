"use client";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 sm:w-2/3">
      <motion.h1
        className="text-5xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hello👋, I'm Trevor.
      </motion.h1>
      <h3 className="text-2xl">
        I'm a{" "}
        <span className="px-1 font-bold underline rounded bg-slate-300">
          full-stack web developer
        </span>{" "}
        with a knack for{" "}
        <span className="px-1 font-bold underline rounded bg-slate-300">
          data-driven
        </span>{" "}
        programming and storytelling. After more than a decade as an{" "}
        <span className="px-1 font-bold underline bg-slate-300">
          award-winning investigative journalist
        </span>
        , I'm now looking for new opportunities in the world of tech. Let's
        build something cool.
      </h3>

      <div className="w-1/2 overflow-hidden rounded-full">
        <Image src={photo} alt="Trevor Brown" />
      </div>

      <div className="flex justify-center gap-4">
        <button className="p-2 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
          About
        </button>

        <button className="p-2 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
          Resume
        </button>

        <button className="p-2 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
          Contact
        </button>
      </div>
    </div>
  );
}
