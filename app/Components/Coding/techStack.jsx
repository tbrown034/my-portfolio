import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiJavascript,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

export default function techStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold underline font-montserrat ">
        Tech Stack and Skills{" "}
      </h1>
      <p className="text-xl font-robotoSlab">
        I specialize in a tech stack that features{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          JavaScript,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Node.js,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          React,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Next.js,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          PostgreSQL,
        </span>{" "}
        and{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Tailwind CSS.
        </span>
      </p>
      <div className="flex flex-wrap justify-center gap-8 py-4 text-blue-900">
        <div className="">
          <SiJavascript className="" size={60} />
        </div>
        <div className="">
          <SiNodedotjs size={60} />
        </div>
        <div className="">
          <SiReact size={60} />
        </div>
        <div className="">
          <SiNextdotjs size={60} />
        </div>
        <div className="">
          <SiTailwindcss size={60} />
        </div>
        <div className="">
          <SiPostgresql size={60} />
        </div>
      </div>
      <p className="text-xl font-robotoSlab">
        I also have experience using JS libraries that includes{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Framer Motion,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Chart.js,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap ">
          React Bootstrap,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          MUI,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Semantic UI,
        </span>{" "}
        and{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Axios.
        </span>
      </p>
    </section>
  );
}
