export default function Intro() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-slate-600 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-slate-400">
            Background
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-slate-300 leading-relaxed">
            <p>
              I've always been a data-driven reporter – from learning Excel 
              to building visualizations in Datawrapper, Tableau and Flourish. 
              Visual storytelling has been a constant thread in my journalism career.
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
