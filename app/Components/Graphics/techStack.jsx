import {
  SiMicrosoftexcel,
  SiTableau,
  SiGooglesheets,
  SiPython,
  SiChartdotjs,
  SiD3Dotjs,
} from "react-icons/si";

export default function TechStack() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold underline font-montserrat ">
        Technologies and Skills{" "}
      </h1>
      <p className="text-xl leading-normal font-robotoSlab ">
        I have experienced analyzing, sorting, cleaning and visualizing data
        using{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Excel & Google Sheets
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Tableau,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap ">
          DataWrapper,
        </span>{" "}
        and{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Flourish.
        </span>{" "}
      </p>

      <div className="flex flex-wrap justify-center gap-8 p-4">
        <SiMicrosoftexcel className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiGooglesheets className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiTableau className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiPython className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiChartdotjs className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
        <SiD3Dotjs className="w-icon-sm h-icon-sm md:w-icon-md md:h-icon-md lg:w-icon-lg lg:h-icon-lg " />
      </div>
      <p className="text-xl leading-normal font-robotoSlab">
        I am in the process of also seeing how new languages and technologies,
        including{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Python,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap">
          Chart.js,
        </span>{" "}
        <span className="p-1 text-base bg-blue-800 rounded-lg text-blue-50 whitespace-nowrap ">
          D3,
        </span>{" "}
        and any other in my contining coding journey.
      </p>
    </section>
  );
}
