"use client";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-6 p-4 sm:w-2/3">
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
        <span className="px-1 font-bold underline rounded bg-zink-300">
          full-stack web developer
        </span>{" "}
        with a knack for{" "}
        <span className="px-1 font-bold underline rounded bg-zink-300">
          data-driven
        </span>{" "}
        programming and storytelling. After more than a decade as an{" "}
        <span className="px-1 font-bold underline bg-zink-300">
          award-winning investigative journalist
        </span>
        , I'm now looking for new opportunities in the world of tech. Let's
        build something cool.
      </h3>

      <motion.div className="w-1/2 overflow-hidden shadow-lg rounded-2xl">
        <Image src={photo} alt="Trevor Brown" />
      </motion.div>

      <div className="flex justify-center gap-4">
        <button className="p-2 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400">
          About
        </button>

        <button className="p-2 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400">
          Resume
        </button>

        <button className="p-2 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400">
          Contact
        </button>
      </div>
    </div>
  );
}
