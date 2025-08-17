import {
  SiMicrosoftexcel,
  SiTableau,
  SiGooglesheets,
  SiPython,
  SiChartdotjs,
  SiD3Dotjs,
} from "@/components/icons";

export default function TechIcon() {
  const techs = [
    {
      name: "Excel & Google Sheets",
      Icon: SiMicrosoftexcel,
    },
    {
      name: "Tableau",
      Icon: SiTableau,
    },
    {
      name: "DataWrapper",
      Icon: SiGooglesheets, // Please replace with the correct icon for DataWrapper
    },
    {
      name: "Python",
      Icon: SiPython,
    },
    {
      name: "Chart.js",
      Icon: SiChartdotjs,
    },
    {
      name: "D3",
      Icon: SiD3Dotjs,
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 ">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center px-1 py-2 transition-all duration-300 ease-in-out transform bg-white rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg dark:bg-blue-50 dark:text-blue-800"
        >
          <tech.Icon className="w-icon-sm h-icon-sm" />
          <h3 className="text-sm font-semibold text-center">{tech.name}</h3>
        </div>
      ))}
    </section>
  );
}
