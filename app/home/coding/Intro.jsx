export default function Intro() {
  const milestones = [
    { year: "2001-2019", label: "Investigative Journalist", highlight: true },
    { year: "2023", label: "Full-stack Bootcamp Graduate", highlight: true },
    {
      year: "2024-Present",
      label: "Developer & Data Visualizer",
      highlight: false,
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-300 dark:border-neutral-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-neutral-400">
            Background
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-neutral-200 leading-relaxed">
            <p>
              My journalism career began at{" "}
              <a
                href="https://www.idsnews.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                Indiana University
              </a>
              , where I led the student newspaper. I then spent 15-plus years reporting in several
              states. My most recent work was as the statehouse reporter for the{" "}
              <a
                href="https://www.wyomingnews.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                Wyoming Tribune Eagle
              </a>{" "}
              and as an investigative reporter with{" "}
              <a
                href="https://oklahomawatch.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                Oklahoma Watch
              </a>
              , a nonprofit newsroom based out of Oklahoma City.
            </p>

            <p>
              Looking to expand beyond reporting, I graduated from{" "}
              <a
                href="https://bootcamp.outreach.ou.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-800 dark:text-blue-400 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                OU Outreach's Fullstack Academy Web Development Bootcamp
              </a>
              , a 260-hour program that honed my skills in modern, full-stack
              web technologies.
            </p>

            <p>
              Now I work at the intersection of journalism,
              technology, politics and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
