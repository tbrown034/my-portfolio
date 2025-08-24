export default function Intro() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Background
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I've always thought of myself as a data-driven reporter through
              the years – whether teaching myself the cooler parts of Excel, or
              learning Datawrapper, Tableau and other visualization tools.
              Visual storytelling has been a constant thread in my journalism
              career.
            </p>

            <p>
              Now I use tools, including JavaScript and Python libraries, to
              transform datasets into stories that reveal patterns, trends and
              insights. Every chart and graphic is another way to tell a story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
