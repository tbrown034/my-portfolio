"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SunIcon,
  MoonIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function HomeProjectCard({ project, index }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const isEven = index % 2 === 0;
  const hasScreenshots = project.screenshots?.desktopLight;
  const hasDarkVariants =
    project.screenshots?.desktopDark || project.screenshots?.mobileDark;
  const hasMobile =
    project.screenshots?.mobileLight || project.screenshots?.mobileDark;

  const getScreenshot = () => {
    if (mobileView) {
      return darkMode
        ? project.screenshots?.mobileDark || project.screenshots?.mobileLight
        : project.screenshots?.mobileLight || project.screenshots?.mobileDark;
    }
    return darkMode
      ? project.screenshots?.desktopDark || project.screenshots?.desktopLight
      : project.screenshots?.desktopLight;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Screenshot column */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        {hasScreenshots ? (
          <div>
            {/* Toolbar */}
            <div className="flex items-center justify-end gap-2 mb-3">
              {hasMobile && (
                <div className="flex items-center rounded-full bg-white/60 dark:bg-neutral-800 p-0.5">
                  <button
                    onClick={() => setMobileView(false)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      !mobileView
                        ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
                    }`}
                    aria-label="Desktop view"
                  >
                    <ComputerDesktopIcon className="w-3 h-3" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setMobileView(true)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      mobileView
                        ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
                    }`}
                    aria-label="Mobile view"
                  >
                    <DevicePhoneMobileIcon className="w-3 h-3" />
                    <span>Mobile</span>
                  </button>
                </div>
              )}

              {hasDarkVariants && (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/60 dark:bg-neutral-800 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-xs font-medium"
                  aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                >
                  {darkMode ? (
                    <>
                      <SunIcon className="w-3 h-3" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-3 h-3" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Screenshot in gradient backdrop */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
              <div
                className={`rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] ${
                  mobileView ? "max-w-[220px] mx-auto" : ""
                }`}
              >
                <img
                  src={getScreenshot()}
                  alt={`${project.title} ${mobileView ? "mobile" : "desktop"} screenshot`}
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl bg-gradient-to-br from-white via-slate-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-slate-50 dark:bg-neutral-950 flex items-center justify-center ring-1 ring-black/[0.04] dark:ring-white/[0.04]">
              <div className="relative text-center px-8">
                <div className="text-3xl sm:text-4xl font-black font-montserrat text-gray-200 dark:text-neutral-800 select-none">
                  {project.title}
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-neutral-600 uppercase tracking-widest font-medium">
                  Local Project
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text column */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        {project.type && (
          <span
            className={`inline-block px-2.5 py-1 text-xs rounded font-medium mb-3 ${
              project.type === "Professional"
                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                : project.type === "Local"
                  ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-neutral-200"
            }`}
          >
            {project.type}
          </span>
        )}

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h3>
        <p className="text-base text-gray-400 dark:text-neutral-500 mt-1 mb-4">
          {project.subtitle}
        </p>

        <p className="text-base text-gray-600 dark:text-neutral-300 leading-relaxed mb-6">
          {project.oneLiner}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 flex-wrap">
          {project.siteLink && (
            <Link
              className="text-sm font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors"
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site &rarr;
            </Link>
          )}
          {project.githubLink && (
            <Link
              className="text-sm font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          )}
          {!project.siteLink && !project.githubLink && (
            <span className="text-sm text-gray-400 dark:text-neutral-500">
              Private / Local
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
