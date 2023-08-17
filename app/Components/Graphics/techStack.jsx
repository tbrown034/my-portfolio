import TechIcon from "./TechIcons";

export default function TechStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold font-montserrat sm:text-4xl lg:text-center ">
        Technologies and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I have experience analyzing, sorting, cleaning and visualizing data
        using{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Excel & Google Sheets
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Tableau
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100 ">
          DataWrapper
        </span>
        ,{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Flourish
        </span>{" "}
        and{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Chart.js
        </span>
        .
      </p>

      <div className="px-6 py-2 lg:px-16">
        <TechIcon />
      </div>
      <p className="text-xl leading-normal font-robotoSlab">
        I am in the process of also seeing how new languages and technologies,
        including{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
          Python
        </span>{" "}
        and{" "}
        <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-100 active:border-blue-100">
          D3.
        </span>
      </p>
    </section>
  );
}
