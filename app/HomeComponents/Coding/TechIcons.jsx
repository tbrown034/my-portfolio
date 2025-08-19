import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export default function TechIcon() {
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
  );
}