"use client";
import Image from "next/image";
import Link from "next/link";
import photo from "../../../public/images/Trevor1crop.JPG";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex flex-col p-4 sm:px-8 ">
      <div className="grid-cols-12 space-x-6 sm:grid ">
        <div className="flex flex-col justify-around col-span-8 gap-4">
          <motion.h1
            className="text-6xl font-montserrat"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Trevor
          </motion.h1>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center sm:hidden"
          >
            <Image
              className="flex w-1/2 rounded-3xl "
              src={photo}
              alt="Trevor Brown"
            />
          </motion.div>

          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl leading-relaxed font-robotoSlab"
          >
            I'm a{" "}
            <span className="inline px-1 py-0.5 text-xl underline dark:bg-blue-600 bg-blue-300 rounded shadow-md font-firaCode">
              full-stack web developer
            </span>{" "}
            with a knack for{" "}
            <span className="inline px-1 py-0.5 text-xl  dark:bg-blue-600 underline bg-blue-300 rounded shadow-md font-firaCode">
              data-driven
            </span>{" "}
            programming and storytelling. After more than a decade as an{" "}
            <span className="inline px-1 py-0.5 text-xl underline  dark:bg-blue-600 bg-blue-300 rounded shadow-md font-firaCode">
              award-winning investigative journalist
            </span>
            , I'm now looking for new opportunities in the world of tech. Let's
            build something cool.
          </motion.h3>
          <div className="flex gap-4">
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

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center col-span-4 "
        >
          <Image
            className="hidden rounded-3xl sm:flex"
            src={photo}
            alt="Trevor Brown"
          />
        </motion.div>
      </div>
      <div className="flex justify-between pt-20 text-sm lg:text-2xl sm:text-lg">
        <div className="flex flex-col">
          <div href="/" className="flex items-center space-x-2">
            <CodeBracketIcon className="w-6 h-6" />
            <span>Coding</span>
            <ChevronDoubleDownIcon className="w-4 h-4 " />
          </div>
        </div>
        <Link href="/" className="flex items-center space-x-2 ">
          <NewspaperIcon className="w-6 h-6" />
          <span>Journalism</span>
          <ChevronDoubleDownIcon className="w-4 h-4 " />
        </Link>
        <Link href="/" className="flex items-center space-x-2 ">
          <ChartBarIcon className="w-6 h-6 " />
          <span>Data</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
