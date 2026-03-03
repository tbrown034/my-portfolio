"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SunIcon,
  MoonIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PlayIcon,
  PhotoIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function DemoCard({ project, index }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showArcade, setShowArcade] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const isEven = index % 2 === 0;
  const hasGallery = project.gallery?.length > 0;
  const hasScreenshots = hasGallery || project.screenshots?.desktopLight;
  const hasDarkVariants =
    project.screenshots?.desktopDark || project.screenshots?.mobileDark;
  const hasMobile =
    project.screenshots?.mobileLight || project.screenshots?.mobileDark;

  // Pick the right screenshot based on toggles
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

  // Lightbox keyboard navigation
  const handleLightboxKeyDown = useCallback(
    (e) => {
      if (!lightboxOpen || !hasGallery) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setGalleryIndex((i) => (i + 1) % project.gallery.length);
      if (e.key === "ArrowLeft")
        setGalleryIndex(
          (i) => (i - 1 + project.gallery.length) % project.gallery.length
        );
    },
    [lightboxOpen, hasGallery, project.gallery?.length]
  );

  useEffect(() => {
    if (lightboxOpen) {
      document.addEventListener("keydown", handleLightboxKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleLightboxKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, handleLightboxKeyDown]);

  return (
    <div
      id={project.slug || undefined}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Screenshot column */}
      <div className={isEven ? "lg:order-1" : "lg:order-2"}>
        {hasScreenshots ? (
          <div>
            {/* Toolbar: view toggles */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 mb-3">
              {/* Gallery view selector */}
              {hasGallery && (
                <>
                  <div className="flex items-center rounded-full bg-gray-100 dark:bg-neutral-800 p-0.5">
                    {project.gallery.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setGalleryIndex(i)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                          galleryIndex === i
                            ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                            : "text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
                        }`}
                        aria-label={`View ${item.label}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-xs font-medium"
                    aria-label="View fullscreen"
                  >
                    <ArrowsPointingOutIcon className="w-3 h-3" />
                    <span>Fullscreen</span>
                  </button>
                </>
              )}

              {/* Desktop / Mobile toggle */}
              {!hasGallery && !showArcade && hasMobile && (
                <div className="flex items-center rounded-full bg-gray-100 dark:bg-neutral-800 p-0.5">
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

              {/* Light / Dark toggle */}
              {!hasGallery && !showArcade && hasDarkVariants && (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-xs font-medium"
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

              {/* Demo toggle */}
              {!hasGallery && project.arcadeLink && (
                <div className="flex items-center rounded-full bg-gray-100 dark:bg-neutral-800 p-0.5">
                  <button
                    onClick={() => setShowArcade(false)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      !showArcade
                        ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
                    }`}
                    aria-label="Show screenshots"
                  >
                    <PhotoIcon className="w-3 h-3" />
                    <span>Screenshots</span>
                  </button>
                  <button
                    onClick={() => setShowArcade(true)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      showArcade
                        ? "bg-white dark:bg-neutral-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-400 dark:text-neutral-500 hover:text-gray-600 dark:hover:text-neutral-300"
                    }`}
                    aria-label="Show demo"
                  >
                    <PlayIcon className="w-3 h-3" />
                    <span>Demo</span>
                  </button>
                </div>
              )}

              {/* Open demo in new window */}
              {!hasGallery && showArcade && project.arcadeLink && (
                <a
                  href={project.arcadeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-400 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-all duration-200 text-xs font-medium"
                  aria-label="Open demo in new window"
                >
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                  <span>Open</span>
                </a>
              )}
            </div>

            {/* Screenshot, Gallery, or Arcade embed */}
            {hasGallery ? (
              <div
                className="relative rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06] cursor-pointer group/gallery"
                onClick={() => setLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxOpen(true);
                  }
                }}
                aria-label={`View ${project.title} screenshots fullscreen`}
              >
                <div className="rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]">
                  <Image
                    key={galleryIndex}
                    src={project.gallery[galleryIndex].image}
                    alt={`${project.title} — ${project.gallery[galleryIndex].label}`}
                    className="block w-full h-auto"
                    width={1200}
                    height={750}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={85}
                    priority={index === 0}
                  />
                </div>
                {/* Hover overlay hint */}
                <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover/gallery:bg-black/5 dark:group-hover/gallery:bg-white/5 transition-colors duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-200 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <span className="text-sm font-medium text-gray-700 dark:text-neutral-300 flex items-center gap-2">
                      <ArrowsPointingOutIcon className="w-4 h-4" />
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            ) : showArcade && project.arcadeLink ? (
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
                <div className="rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]">
                  <div style={{ position: "relative", paddingBottom: "62.5%", height: 0 }}>
                    <iframe
                      src={`${project.arcadeLink}?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true`}
                      title={`${project.title} interactive demo`}
                      frameBorder="0"
                      loading="lazy"
                      allowFullScreen
                      allow="clipboard-write"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        colorScheme: "light",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
                <div
                  className={`rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2),0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] ${
                    mobileView ? "max-w-[220px] mx-auto" : ""
                  }`}
                >
                  <Image
                    src={getScreenshot()}
                    alt={`${project.title} ${mobileView ? "mobile" : "desktop"} screenshot`}
                    className="block w-full h-auto"
                    width={1200}
                    height={750}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={85}
                    priority={index === 0}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          /* No screenshot fallback */
          <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 via-slate-50 to-white dark:from-neutral-900 dark:via-neutral-800/80 dark:to-neutral-900 p-5 sm:p-6 ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-white dark:bg-neutral-950 flex items-center justify-center ring-1 ring-black/[0.04] dark:ring-white/[0.04]">
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
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h3>
        <p className="text-base text-gray-500 dark:text-neutral-400 mt-1 mb-4">
          {project.subtitle}
        </p>

        <div className="space-y-3 mb-6">
          {(Array.isArray(project.oneLiner)
            ? project.oneLiner
            : [project.oneLiner]
          ).map((paragraph, i) => (
            <p
              key={i}
              className="text-base text-gray-600 dark:text-neutral-300 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-6 space-y-1.5 pl-4">
            {project.highlights.map((highlight, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed list-disc marker:text-gray-300 dark:marker:text-neutral-600"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs text-gray-500 dark:text-neutral-400 rounded-md bg-gray-100 dark:bg-neutral-900 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 flex-wrap">
          {hasGallery && !project.siteLink && (
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-800 dark:bg-blue-600 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200"
            >
              <ArrowsPointingOutIcon className="w-4 h-4" />
              Explore Demo
            </button>
          )}
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
          {!project.siteLink && !project.githubLink && !hasGallery && (
            <span className="text-sm text-gray-400 dark:text-neutral-500">
              Private / Local
            </span>
          )}
        </div>
      </div>

      {/* Fullscreen lightbox modal */}
      {lightboxOpen && hasGallery && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} gallery`}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <h4 className="text-white font-semibold text-lg">
                {project.title}
              </h4>
              <div className="flex items-center rounded-full bg-white/10 p-0.5">
                {project.gallery.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIndex(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      galleryIndex === i
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
              aria-label="Close gallery"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Image area */}
          <div
            className="flex-1 flex items-center justify-center px-16 pb-8 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev button */}
            <button
              onClick={() =>
                setGalleryIndex(
                  (i) =>
                    (i - 1 + project.gallery.length) % project.gallery.length
                )
              }
              className="absolute left-4 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Previous screenshot"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <div className="relative max-w-full max-h-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                key={galleryIndex}
                src={project.gallery[galleryIndex].image}
                alt={`${project.title} — ${project.gallery[galleryIndex].label}`}
                className="block max-h-[calc(100vh-120px)] w-auto h-auto object-contain"
                width={1920}
                height={1200}
                sizes="100vw"
                quality={90}
                priority
              />
            </div>

            {/* Next button */}
            <button
              onClick={() =>
                setGalleryIndex((i) => (i + 1) % project.gallery.length)
              }
              className="absolute right-4 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
              aria-label="Next screenshot"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>
          </div>

          {/* Caption */}
          <div
            className="text-center pb-6 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm text-white/50">
              {project.gallery[galleryIndex].label} &middot;{" "}
              {galleryIndex + 1} of {project.gallery.length} &middot; Use arrow
              keys to navigate
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
