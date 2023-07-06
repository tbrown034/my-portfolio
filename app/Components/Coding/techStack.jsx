import {
  JavascriptPlain,
  ReactOriginal,
  NodejsPlain,
  NextjsOriginal,
  PostgresqlPlain,
  TailwindcssPlain,
} from "devicons-react";

export default function techStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold font-montserrat ">
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
      <p className="text-xl font-robotoSlab">
        I also have experience using JS libraries that includes{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Framer Motion,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
          Chart.js,
        </span>{" "}
        <span className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 ">
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
      <div className="flex flex-wrap gap-2">
        <JavascriptPlain size={100} />
        <NodejsPlain size={100} />

        <ReactOriginal size={100} />
        <NextjsOriginal size={100} />
        <TailwindcssPlain size={100} />

        <PostgresqlPlain size={100} />
      </div>
    </section>
  );
}
