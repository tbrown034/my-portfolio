import TechIcon from "./techIcons";

export default function TechStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold font-montserrat sm:text-4xl lg:text-center ">
        Technologies and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I have experienced analyzing, sorting, cleaning and visualizing data
        using{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Excel & Google Sheets
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Tableau,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap ">
          DataWrapper,
        </span>{" "}
        and{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Flourish.
        </span>{" "}
      </p>

      <div className="px-6 py-2 lg:px-16">
        <TechIcon />
      </div>
      <p className="text-xl leading-normal font-robotoSlab">
        I am in the process of also seeing how new languages and technologies,
        including{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Python,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap">
          Chart.js,
        </span>{" "}
        <span className="px-0.5 bg-blue-800 rounded shadow-md text-blue-50 whitespace-nowrap ">
          D3,
        </span>{" "}
        and any other in my contining coding journey.
      </p>
    </section>
  );
}
