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
            className="text-6xl font-bold text-center text-blue-900 sm:text-start font-montserrat lg:text-6xl xl:text-8xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello World, I'm Trevor.
          </motion.h1>
          <div className="flex flex-col flex-wrap gap-1 text-xl text-blue-800 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-montserrat">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I'm a FullStack Developer,
            </motion.h2>

            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Investigative Reporter,
            </motion.h2>

            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Data Visualizer &
            </motion.h2>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Builder
            </motion.h2>
          </div>

          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="text-xl leading-normal sm:text-2xl lg:text-3xl font-robotoSlab"
          >
            Blending{" "}
            <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
              modern web development
            </span>{" "}
            skills with insights I’ve cultivated from more than a decade’s worth
            of experience as an{" "}
            <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
              award-winning investigative reporter
            </span>
            , I tell compelling stories and build powerful application for the
            web.{" "}
            <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
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
