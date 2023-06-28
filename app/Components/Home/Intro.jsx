"use client";
import Image from "next/image";
import photo from "../../../public/images/Trevor1crop.JPG";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center p-4 sm:px-12 lg:px-20">
      <div className="grid-cols-12 space-x-6 sm:grid ">
        <div className="flex flex-col justify-around col-span-8 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center p-2 border-2 border-blue-800 border-dashed rounded-full border-opacity-70 sm:hidden"
          >
            <Image
              className="flex w-1/2 p-2 border-2 border-blue-800 border-opacity-50 border-dashed rounded-full "
              src={photo}
              alt="Trevor Brown"
            />
          </motion.div>
          <div className="flex flex-col gap-2 ">
            <motion.h1
              className="text-6xl font-bold text-center lg:text-8xl sm:text-start font-montserrat"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm Trevor.
            </motion.h1>
            <div className="">
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

          <div className="flex gap-4 text-xl">
            <button className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400">
              About
            </button>

            <button className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400">
              Resume
            </button>

            <button className="p-2 bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-300 active:bg-blue-400">
              Contact
            </button>
          </div>
        </div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center col-span-4 rounded-3xl "
        >
          <Image
            className="hidden border-2 border-gray-300 shadow-lg rounded-3xl sm:flex "
            src={photo}
            alt="Trevor Brown"
          />
        </motion.div>
      </div>
    </section>
  );
}
