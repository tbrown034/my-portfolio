export default function Intro() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400">
            Background
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-neutral-200 leading-relaxed">
            <p>
              My journalism career began at{" "}
              <a
                href="https://www.idsnews.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
              >
                Indiana University
              </a>
              , where I was editor-in-chief of The Indiana Daily Student and
              graduated with bachelor's degrees in political science and
              journalism. I then spent 15-plus years reporting in several states,
              most recently as the statehouse reporter for the{" "}
              <a
                href="https://www.wyomingnews.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
              >
                Wyoming Tribune Eagle
              </a>{" "}
              and as an investigative reporter with{" "}
              <a
                href="https://oklahomawatch.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
              >
                Oklahoma Watch
              </a>
              , a nonprofit newsroom based out of Oklahoma City.
            </p>

            <p>
              My reporting has led to policy changes, legislative reforms and
              increased government transparency. From exposing racial profiling
              patterns to investigating hospital billing practices, I've
              specialized in stories that serve the public interest and hold
              institutions accountable.
            </p>

            <p>
              Looking to expand beyond reporting, I graduated from{" "}
              <a
                href="https://bootcamp.outreach.ou.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
              >
                OU Outreach's Fullstack Academy Web Development Bootcamp
              </a>
              , a 260-hour program that honed my skills in modern, full-stack
              web technologies. Now I work at the intersection of journalism,
              technology, politics and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
