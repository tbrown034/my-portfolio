"use client";
import MyLinks from "./MyLinks";

import { motion } from "framer-motion";
import WideMug from "./WideMug";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center ">
      <div className="grid-cols-12 space-x-6 sm:grid ">
        <div className="flex flex-col justify-around col-span-8 gap-8">
          <motion.h1
            className="text-6xl font-bold text-center sm:text-start font-montserrat lg:text-8xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Trevor.
          </motion.h1>
          <div className="flex flex-col flex-wrap gap-1 text-2xl sm:text-3xl lg:text-4xl">
            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-blue-600 font-montserrat"
            >
              I'm a FullStack Developer &
            </motion.h2>

            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-blue-500 font-montserrat"
            >
              Investigative Reporter &
            </motion.h2>

            <motion.h2
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-blue-400 font-montserrat"
            >
              Data Visualizer
            </motion.h2>
          </div>

          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl leading-normal sm:text-2xl lg:text-3xl font-robotoSlab"
          >
            Blending{" "}
            <span className="inline px-1 py-0.5  hover:underline dark:bg-blue-600 bg-blue-300 rounded shadow-md     font-inter font-semibold ">
              cutting-edge web development
            </span>{" "}
            skills with insights I’ve cultivated from more than a decade’s worth
            of experience as an{" "}
            <span className="inline px-1 py-0.5  hover:underline dark:bg-blue-600 bg-blue-300 rounded shadow-md  font-inter font-semibold">
              award-winning investigative reporter
            </span>
            , I tell compelling stories and build powerful application for the
            web.{" "}
            <span className="inline px-1 py-0.5  hover:underline dark:bg-blue-600 bg-blue-300 rounded shadow-md  font-inter font-semibold">
              Let's connect
            </span>{" "}
            and create something impactful.
          </motion.h3>
          <MyLinks />
        </div>
        <div className="items-center hidden col-span-4 sm:flex">
          <WideMug />
        </div>
      </div>
    </section>
  );
}
