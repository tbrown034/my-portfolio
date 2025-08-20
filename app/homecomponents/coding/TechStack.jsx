import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function TechStack() {
  const skills = [
    "LLM Integration",
    "Analytics",
    "Marketing",
    "Full-Stack Dev",
    "Data Visualization",
    "SEO/PPC",
  ];

  const techs = [
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      description:
        "Full-stack React framework with server-side rendering, routing, and optimal performance.",
    },
    {
      name: "React",
      Icon: SiReact,
      description:
        "Component-based UI library for building interactive user interfaces with modern patterns.",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      description:
        "Type-safe JavaScript that improves code quality and developer experience in larger projects.",
    },
    {
      name: "JavaScript",
      Icon: SiJavascript,
      description:
        "Dynamic programming language for building interactive web applications and server-side logic.",
    },
    {
      name: "PostgreSQL",
      Icon: SiPostgresql,
      description:
        "Powerful relational database for complex data relationships and reliable data storage.",
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      description:
        "Utility-first CSS framework for rapid UI development with consistent design systems.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        {/* Section header */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Skills & Technologies
        </h2>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200"
              title={tech.description}
            >
              <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
              <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
