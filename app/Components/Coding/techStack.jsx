import TechIcon from "./TechIcons";

export default function TechStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold font-montserrat sm:text-4xl lg:text-center">
        Tech Stack and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I specialize in a tech stack that features{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          JavaScript
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Node.js
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100 ">
          React
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Next.js
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          PostgreSQL
        </span>{" "}
        and{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100p">
          Tailwind CSS.
        </span>
      </p>
      <div className="px-6 py-2 lg:px-16">
        <TechIcon />
      </div>

      <p className="text-xl leading-normal font-robotoSlab">
        I also have experience using JS libraries that includes{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Framer Motion
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Chart.js
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          React Bootstrap
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          MUI
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Semantic UI
        </span>{" "}
        and{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Axios.
        </span>
      </p>
    </section>
  );
}
