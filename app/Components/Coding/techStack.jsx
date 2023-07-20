import TechIcon from "./techIcons";

export default function techStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold font-montserrat sm:text-4xl lg:text-center">
        Tech Stack and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I specialize in a tech stack that features{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          JavaScript,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Node.js,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap ">
          React,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Next.js,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          PostgreSQL,
        </span>{" "}
        and{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Tailwind CSS.
        </span>
      </p>
      <div className="px-6 py-2 lg:px-16">
        <TechIcon />
      </div>

      <p className="text-xl leading-normal font-robotoSlab">
        I also have experience using JS libraries that includes{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Framer Motion,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Chart.js,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          React Bootstrap,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          MUI,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Semantic UI,
        </span>{" "}
        and{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Axios.
        </span>
      </p>
    </section>
  );
}
