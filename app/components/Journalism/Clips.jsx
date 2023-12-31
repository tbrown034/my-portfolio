"use client";
import { useState } from "react";
import Image from "next/image";
import photo from "../../../public/images/okwatch.png";
import Link from "next/link";
import { clips } from "../../data/journalismClips.js";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import mug from "../../../public/images/trevorPhoto2.jpeg";

export default function Clips() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl">
        Selected Articles
      </h1>
      <p className="text-xl font-robotoSlab ">
        As a data-driven investigative reporter for more than 15 years, I have
        written hundreds, if not thousands, of articles about politics,
        government corruption or inefficiencies and stories that matter to the
        community.
      </p>
      <p className="text-xl font-robotoSlab ">
        I pride myself on well-researched, well-sourced articles that explain,
        reveal or uncover something that would otherwise remain hidden. Here are
        some of my top work in the past years.
      </p>
      <section className="grid grid-cols-1 gap-4 px-2 py-2 lg:px-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {clips.slice(0, displayCount).map((clip, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-2 pb-4 border-4 :border-white shadow-lg rounded-t-2xl  dark:text-blue-950 dark:bg-blue-100  rounded-2xl   bg-white${
              index === displayCount - 1 && displayCount === 4
                ? "lg:col-start-2 lg:col-end-3"
                : ""
            }`}
          >
            <Image
              className="border border-white shadow-lg rounded-t-2xl dark:border-gray-500"
              alt="alt"
              src={clip.image}
            ></Image>
            <div className="px-6">
              <Image alt="Oklahoma Watch logo" src={photo}></Image>
            </div>
            <h1 className="px-2 text-xl font-montserrat">{clip.headline}</h1>

            <div className="flex items-center gap-2 px-2">
              <Image
                className="rounded-full"
                height={75}
                src={mug}
                alt="mug"
              ></Image>
              <div className="flex flex-col justify-start gap-2 text ">
                <h3>
                  By <span className="font-semibold">Trevor Brown</span>{" "}
                </h3>
                <h3 className="text-sm">Published: {clip.date}</h3>
              </div>{" "}
            </div>
            <p className="px-2">{clip.text}</p>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={clip.siteLink}
              >
                <p>Full Article</p>
                <NewspaperIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      {displayCount < clips.length && (
        <div className="flex justify-center p-2">
          <button
            className="w-3/4 p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
            onClick={() => setDisplayCount((prevCount) => prevCount + 4)}
          >
            Show More
          </button>
        </div>
      )}
      {displayCount > 4 && (
        <div className="flex justify-center p-2">
          <button
            className="w-3/4 p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
            onClick={() => setDisplayCount(4)}
          >
            Show Fewer
          </button>
        </div>
      )}
    </section>
  );
}
