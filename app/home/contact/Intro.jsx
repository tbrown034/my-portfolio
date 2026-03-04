export default function Intro() {
  return (
    <div>
      {/* Subsection header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
        <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400">
          About Working Together
        </h2>
      </div>

      {/* Text */}
      <div className="space-y-4 text-gray-600 dark:text-neutral-300 leading-relaxed text-sm mb-6">
        <p>
          I work best where data meets design — elections dashboards, news
          applications, interactive storytelling, data visualization or any
          project where complex information needs to be clear and usable.
        </p>
        <p>
          I'm open to full-time roles and freelance work. If you need someone
          who can build the thing and explain the thing, reach out.
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-3">
        <a
          href="/about"
          className="px-6 py-2.5 font-semibold text-center text-white bg-blue-800 dark:bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-500 hover:shadow-lg hover:-translate-y-0.5 active:bg-blue-900 dark:active:bg-blue-700 active:shadow-sm active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          About + Resume
        </a>
        <a
          href="#top"
          className="px-6 py-2.5 font-semibold text-center text-gray-800 dark:text-gray-100 bg-white dark:bg-neutral-900 border-2 border-gray-400 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-800 dark:hover:text-blue-400 hover:shadow-md hover:-translate-y-0.5 active:bg-gray-100 dark:active:bg-gray-950 active:shadow-none active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2"
        >
          <span>↑</span> Back to Top
        </a>
      </div>
    </div>
  );
}
