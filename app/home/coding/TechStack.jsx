import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiMysql,
} from "react-icons/si";

export default function TechStack() {
  const techs = [
    {
      name: "JavaScript",
      Icon: SiJavascript,
      description:
        "Dynamic programming language for building interactive web applications and server-side logic.",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      description:
        "Type-safe JavaScript that improves code quality and developer experience in larger projects.",
    },
    {
      name: "React",
      Icon: SiReact,
      description:
        "Component-based UI library for building interactive user interfaces with modern patterns.",
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      description:
        "Full-stack React framework with server-side rendering, routing, and optimal performance.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description:
        "Versatile programming language for data analysis, automation, and backend development.",
    },
    {
      name: "Postgres",
      Icon: SiPostgresql,
      description:
        "Powerful relational database for complex data relationships and reliable data storage.",
    },
    {
      name: "MySQL",
      Icon: SiMysql,
      description:
        "Widely-used relational database for web applications and data storage.",
    },
    {
      name: "Tailwind",
      Icon: SiTailwindcss,
      description:
        "Utility-first CSS framework for rapid UI development with consistent design systems.",
    },
  ];

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div>
          <h3 className="text-sm uppercase tracking-wider font-semibold text-gray-600 dark:text-neutral-400 pb-2 mb-4 border-b border-gray-300 dark:border-neutral-700">
            Technology Stack
          </h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {techs.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-all duration-200"
                title={tech.description}
              >
                <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
                <span className="text-xs font-medium text-center text-gray-600 dark:text-neutral-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
