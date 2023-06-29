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
            className="text-6xl font-bold text-center lg:text-8xl sm:text-start font-montserrat"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm Trevor.
          </motion.h1>
          <div className="flex flex-col gap-1 ">
            <h2 className="text-3xl text-blue-800 font-montserrat">
              I'm a FullStack Developer &
            </h2>

            <h2 className="text-3xl text-blue-700 font-montserrat">
              Investigative Reporter &
            </h2>

            <h2 className="text-3xl text-blue-600 font-montserrat">
              Data Visualizer
            </h2>
          </div>

          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl leading-normal font-robotoSlab"
          >
            Blending{" "}
            <span className="inline px-1 py-0.5 text-xl  underline dark:bg-blue-600 bg-blue-300 rounded shadow-md font-firaCode">
              cutting-edge web development
            </span>{" "}
            skills with insights I’ve cultivated from more than a decade’s worth
            of experience as an{" "}
            <span className="inline px-1 py-0.5 text-xl underline dark:bg-blue-600 bg-blue-300 rounded shadow-md font-firaCode">
              investigative reporter
            </span>
            , I tell compelling stories and build powerful application for the
            web. Let’s create something impactful.
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
