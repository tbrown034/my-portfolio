import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiFramer,
  SiChartdotjs,
  SiBootstrap,
  SiAxios,
  SiMui,
  SiSemanticuireact,
} from "@/components/icons";
export default function TechIcon() {
  const techs = [
    {
      name: "JavaScript",
      Icon: SiJavascript,
      description:
        "My foundation in web development, JavaScript has allowed me to build interactive websites for 5 years.",
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      description:
        "I've used Node.js to create efficient, scalable back-end solutions for various projects over 4 years.",
    },
    {
      name: "React",
      Icon: SiReact,
      description:
        "React's component-based approach has been integral to my UI development process for the past 3 years.",
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      description:
        "Next.js has empowered me to build high-performance, server-side rendered applications for the past 2 years.",
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
      description:
        "Tailwind's utility classes have been a real time saver and opened up new avenues of creativity in my front-end development.",
    },
    {
      name: "PostgreSQL",
      Icon: SiPostgresql,
      description:
        "With PostgreSQL, I've been able to handle complex data efficiently and securely in various applications for 3 years.",
    },
    {
      name: "Framer",
      Icon: SiFramer,
      description:
        "Framer has been my tool of choice for prototyping and interaction design, providing a seamless bridge between design and development.",
    },
    {
      name: "Chart.js",
      Icon: SiChartdotjs,
      description:
        "Chart.js has been instrumental in visualizing data in a compelling, easy-to-understand way in my projects.",
    },
    {
      name: "Bootstrap",
      Icon: SiBootstrap,
      description:
        "Bootstrap's responsive design features have expedited my development process, enabling fast, aesthetic page layouts.",
    },
    {
      name: "Material-UI",
      Icon: SiMui,
      description:
        "Material-UI's components have consistently provided a solid basis for my React applications, providing a balance between customization and design consistency.",
    },
    {
      name: "Semantic UI React",
      Icon: SiSemanticuireact,
      description:
        "Semantic UI React has allowed me to integrate user-friendly elements into my React applications with ease, enhancing UX.",
    },
    {
      name: "Axios",
      Icon: SiAxios,
      description:
        "I've used Axios for HTTP requests in my applications, making asynchronous server communication more manageable.",
    },
  ];

  return (
    <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="group flex flex-col items-center justify-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-default"
          title={tech.description}
        >
          <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200" />
          <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
            {tech.name}
          </span>
        </div>
      ))}
    </section>
  );
}
