"use client";
import { useState } from "react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Links() {
  const [copiedItem, setCopiedItem] = useState("");

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(""), 2000);
  };

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Direct Contact
          </h2>
        </div>
        <div className="flex flex-wrap gap-6 max-w-4xl">
        {/* Email */}
        <div className="flex-1 flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:border-l-4">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-3 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Email
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {PERSONAL_INFO.email}
              </p>
            </div>
          </a>
          <button
            onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
            className="p-2 text-gray-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title="Copy email"
          >
            {copiedItem === "email" ? (
              <svg
                className="w-5 h-5 text-green-800 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* LinkedIn */}
        <div className="flex-1 flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:border-l-4">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                LinkedIn
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                trevorabrown
              </p>
            </div>
          </a>
          <button
            onClick={() =>
              copyToClipboard(SOCIAL_LINKS.linkedin, "linkedin")
            }
            className="p-2 text-gray-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title="Copy LinkedIn URL"
          >
            {copiedItem === "linkedin" ? (
              <svg
                className="w-5 h-5 text-green-800 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Bluesky - Commented out until account is active */}
        {/* <div className="flex-1 flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:border-l-4">
          <a
            href={SOCIAL_LINKS.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <svg
              className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-800 dark:group-hover:text-blue-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Bluesky
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {SOCIAL_LINKS.blueskyHandle}
              </p>
            </div>
          </a>
          <button
            onClick={() =>
              copyToClipboard(SOCIAL_LINKS.blueskyHandle, "bluesky")
            }
            className="p-2 text-gray-500 hover:text-blue-800 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            title="Copy Bluesky handle"
          >
            {copiedItem === "bluesky" ? (
              <svg
                className="w-5 h-5 text-green-800 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div> */}
      </div>
      </div>
    </section>
  );
}