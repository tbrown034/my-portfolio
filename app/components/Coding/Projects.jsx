"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { webProjects } from "../../data/webProjects.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DiGithubBadge } from "react-icons/di";

export default function Projects() {
  const [displayCount, setDisplayCount] = useState(4);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
        Projects and Freelance Work
      </h1>
      <p className="text-xl font-robotoSlab ">
        I specialize in building responsive, dynamic websites that focus on
        clean UI and UX. Drawing from my journalism background, I understand
        that effective websites must be consistent, clear, and engaging to
        capture and maintain user attention in today's competitive digital
        landscape.
      </p>
      <p className="text-xl font-robotoSlab ">
        Beyond creating visually appealing interfaces, I excel at integrating
        databases and API endpoints to fetch, sort, and present data in
        meaningful ways. Here's a showcase of recent projects that demonstrate
        these capabilities.
      </p>

      <section className="grid grid-cols-1 gap-8 px-2 py-2 lg:px-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {webProjects.slice(0, displayCount).map((project, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between gap-2 pb-4 border-4 :border-white shadow-lg rounded-t-2xl  dark:text-blue-950 dark:bg-blue-100  rounded-2xl   bg-white ${
              index === displayCount - 1 && displayCount === 4
                ? "lg:col-start-2 lg:col-end-3"
                : ""
            }`}
          >
            <Image
              alt={`Screenshot of ${project.title}`}
              className="border border-white shadow-lg rounded-t-2xl dark:border-gray-500" // Added border and shadow here
              src={project.image}
              width={1200}
              height={800}
            />
            <h1 className="px-2 font-montserrat">{project.title}</h1>

            <div className="flex flex-wrap gap-1 px-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 font-firaCode"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="px-2">{project.description}</h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 text-sm font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={project.githubLink}
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-12 h-12" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href={project.siteLink}
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-12 h-12" />
              </Link>
            </div>
          </div>
        ))}
      </section>
      {displayCount < webProjects.length && (
        <div className="flex justify-center p-2">
          <button
            className="w-3/4 p-2 px-4 text-xl font-bold text-white bg-blue-800 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400 "
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
