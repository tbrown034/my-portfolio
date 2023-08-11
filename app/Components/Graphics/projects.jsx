"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../../../public/images/okwatch.png";
import { graphics } from "../../data/datavizProjects.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

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
            className={`flex flex-col justify-between gap-2 pb-4 "border border-white shadow-lg rounded-t-2xl dark:border-gray-500" dark:text-blue-950 dark:bg-blue-100  rounded-2xl   bg-sky-50 ${
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
            <h1 className="px-2 font-montserrat">{viz.title}</h1>
            <h3 className="px-2">{viz.description}</h3>
            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={viz.siteLink}
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {displayCount < graphics.length && (
        <div className="flex justify-center p-2">
          <button
            className="p-2 px-4 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            onClick={() => setDisplayCount((prevCount) => prevCount + 4)}
          >
            Show More
          </button>
        </div>
      )}
      {displayCount > 4 && (
        <div className="flex justify-center p-2">
          <button
            className="p-2 px-4 text-xl font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            onClick={() => setDisplayCount(4)}
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
}
