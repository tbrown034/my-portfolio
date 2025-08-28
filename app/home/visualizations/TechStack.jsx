import {
  SiMicrosoftexcel,
  SiPython,
  SiTableau,
  SiChartdotjs,
  SiPostgresql
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

export default function TechStack() {
  const skills = [
    "Visual Analysis",
    "Statistical Modeling",
    "Interactive Visualizations",
    "Public Records",
    "Interactive Graphics",
    "Database Queries",
  ];

  const techs = [
    {
      name: "Excel",
      Icon: SiMicrosoftexcel,
      description:
        "Industry-standard spreadsheet tool for analysis, pivot tables, and quick visualizations.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description:
        "Versatile programming language with powerful analysis and visualization libraries.",
    },
    {
      name: "Tableau",
      Icon: SiTableau,
      description:
        "Business intelligence tool for creating interactive dashboards and visual stories.",
    },
    {
      name: "Chart.js",
      Icon: SiChartdotjs,
      description:
        "Simple yet flexible JavaScript charting library for creating responsive visualizations.",
    },
    {
      name: "SQL",
      Icon: SiPostgresql,
      description:
        "Query language for managing and analyzing relational databases efficiently.",
    },
    {
      name: "Datawrapper",
      Icon: FaChartBar,
      description:
        "User-friendly tool for creating embeddable charts and maps for digital journalism.",
    },
  ];

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main content container */}
        <div className="space-y-10">
          {/* Skills tags */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-slate-400 pb-2 mb-4 border-b border-gray-300 dark:border-slate-600">
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
            <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-slate-400 pb-2 mb-4 border-b border-gray-300 dark:border-slate-600">
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
                  <span className="text-xs font-medium text-center text-gray-600 dark:text-slate-400">
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