import {
  SiD3Dotjs,
  SiPython,
  SiTableau,
  SiObservable,
  SiPostgresql,
  SiR
} from "react-icons/si";

export default function TechStack() {
  const skills = [
    "Data Analysis",
    "Statistical Modeling",
    "Data Visualization",
    "Public Records",
    "Interactive Graphics",
    "Database Queries",
  ];

  const techs = [
    {
      name: "D3.js",
      Icon: SiD3Dotjs,
      description:
        "JavaScript library for creating dynamic, interactive data visualizations in web browsers.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description:
        "Versatile programming language with powerful data analysis and visualization libraries.",
    },
    {
      name: "Tableau",
      Icon: SiTableau,
      description:
        "Business intelligence tool for creating interactive dashboards and data stories.",
    },
    {
      name: "Observable",
      Icon: SiObservable,
      description:
        "Collaborative platform for creating interactive data visualizations and notebooks.",
    },
    {
      name: "SQL",
      Icon: SiPostgresql,
      description:
        "Query language for managing and analyzing relational databases efficiently.",
    },
    {
      name: "R",
      Icon: SiR,
      description:
        "Statistical computing language specialized for data analysis and visualization.",
    },
  ];

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Skills & Technologies
          </h2>
        </div>

        {/* Main content container */}
        <div className="space-y-10">
          {/* Skills tags */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-4">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Icons Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-4">
              Technology Stack
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200"
                  title={tech.description}
                >
                  <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" />
                  <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}