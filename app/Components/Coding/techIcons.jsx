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
} from "react-icons/si";
export default function techIcon() {
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
    <div className="flex flex-wrap justify-center gap-8 p-4 py-6 lg:px-16 sm:py-16">
      <section className="grid grid-cols-2 gap-4 rounded-xl md:grid-cols-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-4 m-2 space-x-4 transition-all duration-300 ease-in-out transform bg-white rounded-md cursor-pointer hover:scale-105 hover:shadow-lg"
          >
            <tech.Icon className="w-icon-lg h-icon-lg" />
            <h3 className="text-xl font-semibold">{tech.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
