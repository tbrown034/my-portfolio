import {
  SiJavascript,
  SiTableau,
  SiD3Dotjs,
  SiChartdotjs,
  SiMicrosoftexcel,
  SiPython,
} from "react-icons/si";

export default function TechIcon() {
  const techs = [
    {
      name: "JavaScript",
      Icon: SiJavascript,
      description:
        "Core language for interactive web-based data visualizations and dynamic charts.",
    },
    {
      name: "Tableau",
      Icon: SiTableau,
      description:
        "Business intelligence tool for creating interactive dashboards and data stories.",
    },
    {
      name: "D3.js",
      Icon: SiD3Dotjs,
      description:
        "Powerful JavaScript library for creating custom, interactive data visualizations.",
    },
    {
      name: "Chart.js",
      Icon: SiChartdotjs,
      description:
        "Simple yet flexible JavaScript charting library for designers and developers.",
    },
    {
      name: "Excel",
      Icon: SiMicrosoftexcel,
      description:
        "Foundational tool for data cleaning, analysis, and basic visualization.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description:
        "Versatile language for data analysis, machine learning, and visualization.",
    },
  ];

  return (
    <section className="grid grid-cols-3 md:grid-cols-7 gap-4">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="group flex flex-col items-center justify-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-default"
          title={tech.description}
        >
          <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200" />
          <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
            {tech.name}
          </span>
        </div>
      ))}
    </section>
  );
}
