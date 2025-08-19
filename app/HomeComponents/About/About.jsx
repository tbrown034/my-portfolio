"use client";
import { useState } from "react";
import SimpleContactForm from "../contact/ContactForm";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState("");

  const copyToClipboard = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(""), 2000);
  };
  return (
    <section className="w-full subSection min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Contact
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Let's Work Together
          </h3>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm available for freelance development projects, data
              visualization work and consulting on digital strategy. Whether you
              need a website built, data analyzed, or stories told through
              interactive graphics, I'd love to help.
            </p>

            <p>
              Withd my background bridging journalism and technology, I bring a
              unique perspective to projects that need both technical execution
              and clear communication.
            </p>

            <p>
              I'm also open to full-time employment opportunities, especially
              those at the intersection of technology and journalism where I can
              leverage both skill sets to build meaningful products.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-800 border-2 border-blue-800 rounded-2xl dark:text-blue-950 dark:bg-blue-50 dark:border-blue-50 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 dark:hover:border-blue-200 focus:outline-none focus:ring focus:ring-blue-400 cursor-pointer"
            >
              View Resume
            </a>
            <a
              href="https://github.com/trevorbrown-school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 active:bg-gray-200 dark:active:bg-gray-900 focus:bg-gray-100 dark:focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-400 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Contact Form Section */}
          <div className="mt-8">
            {/* Form header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                Send a Message
              </h2>
            </div>

            {/* Contact Form */}
            <SimpleContactForm />
          </div>

          {/* Quick Contact CTAs */}
          <div className="mt-8">
            {/* Direct contact header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
              <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                Direct Contact
              </h2>
            </div>
            <div className="grid gap-3 max-w-2xl">
              {/* Email */}
              <div className="flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-l-4 group">
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
              <div className="flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-l-4 group">
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

              {/* Bluesky */}
              <div className="flex items-center justify-between p-4 border-l-2 border-blue-800 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-l-4 group">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
