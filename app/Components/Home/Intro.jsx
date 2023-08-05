"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center ">
      <div className="flex flex-col justify-around col-span-8 gap-8">
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
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
      </div>
    </section>
  );
}
