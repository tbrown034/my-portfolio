"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../../../public/images/okwatch.png";
import { graphics } from "../../data/datavizProjects.js";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
        Selected Data Visualization Projects
      </h1>

      <div className="grid grid-cols-1 gap-4 px-2 py-2 lg:px-8 sm:grid-cols-2 lg:grid-cols-3">
        {graphics.slice(0, displayCount).map((viz, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-2 pb-4 border-4 :border-white shadow-lg rounded-t-2xl  dark:text-blue-950 dark:bg-blue-100  rounded-2xl   bg-white ${
              index === displayCount - 1 && displayCount === 4
                ? "lg:col-start-2 lg:col-end-3"
                : ""
            }`}
          >
            <Image
              alt="alt"
              className="border border-white shadow-lg rounded-t-2xl dark:border-gray-500"
              src={viz.image}
            ></Image>
            <div className="px-6">
              <Image alt="Oklahoma Watch logo" src={photo}></Image>
            </div>
            <div className="flex flex-wrap gap-1 px-2">
              <div className="p-1 px-2 text-sm bg-blue-800 rounded-lg text-blue-50 font-firaCode">
                {viz.program}
              </div>{" "}
            </div>

            <p className="px-2 text-sm">Published: {viz.date}</p>
            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={viz.siteLink}
              >
                <p>Full Article</p>
                <NewspaperIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {displayCount < graphics.length && (
        <div className="flex justify-center p-2">
          <button
            className="p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-lg sm:px-8 dark:text-blue-900 dark:bg-blue-100 sm:flex hover:bg-blue-700 dark:hover:bg-blue-300"
            onClick={() => setDisplayCount((prevCount) => prevCount + 4)}
          >
            Show More
          </button>
        </div>
      )}
      {displayCount > 4 && (
        <div className="flex justify-center p-2">
          <button
            className="p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-lg sm:px-8 dark:text-blue-900 dark:bg-blue-100 sm:flex hover:bg-blue-700 dark:hover:bg-blue-300"
            onClick={() => setDisplayCount(4)}
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
}
