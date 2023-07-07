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
  SiMotion,
} from "react-icons/si";

export default function techStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold underline font-montserrat ">
        Tech Stack and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I specialize in a tech stack that features{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          JavaScript,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Node.js,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap ">
          React,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Next.js,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          PostgreSQL,
        </span>{" "}
        and{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Tailwind CSS.
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        <SiJavascript className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiNodedotjs className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiReact className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiNextdotjs className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiTailwindcss className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiPostgresql className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiFramer className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiChartdotjs className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiBootstrap className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiMui className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiSemanticuireact className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiAxios className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
      </div>
      <p className="text-xl leading-normal font-robotoSlab">
        I also have experience using JS libraries that includes{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Framer Motion,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Chart.js,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap ">
          React Bootstrap,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          MUI,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Semantic UI,
        </span>{" "}
        and{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Axios.
        </span>
      </p>
    </section>
  );
}
