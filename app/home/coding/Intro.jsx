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
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Background
          </h2>
        </div>


        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I started as editor-in-chief of{" "}
                <a
                  href="https://www.idsnews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
                >
                  Indiana University's student newspaper
                </a>{" "}
                and spent the next 15-plus years as a journalist in several
                states. My most recent work was as the statehouse reporter for
                the{" "}
                <a
                  href="https://www.wyomingnews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
                >
                  Wyoming Tribune Eagle
                </a>{" "}
                and as an investigative reporter with{" "}
                <a
                  href="https://oklahomawatch.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
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
                  className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
                >
                  OU Outreach's Fullstack Academy Web Development Bootcamp
                </a>
                , a 260-hour program that honed my skills in modern, full-stack
                web technologies.
              </p>

              <p>
                Now I'm working at the intersection of journalism, technology,
                politics and AI. I'm particularly interested in LLM integration
                and exploring use cases that could transform how we gather,
                verify and distribute information.
              </p>
              
              <p>
                My core stack includes React, Next.js, TypeScript and PostgreSQL. But I'm always 
                eager to adopt emerging tools – AI integrations, new frameworks, whatever best 
                serves the user.
              </p>
            </div>
            
        </div>
      </div>
    </section>
  );
}
