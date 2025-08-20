import { 
  SiMicrosoftexcel, 
  SiPython, 
  SiWordpress, 
  SiGoogle, 
  SiSlack,
  SiAdobeacrobat
} from "react-icons/si";

export default function JournalismTechStack() {
  const techs = [
    {
      name: "Excel",
      Icon: SiMicrosoftexcel,
      description:
        "Spreadsheet software for data analysis, organizing information, and investigative reporting.",
    },
    {
      name: "Python",
      Icon: SiPython,
      description:
        "Programming language for data journalism, web scraping, and automated reporting.",
    },
    {
      name: "WordPress",
      Icon: SiWordpress,
      description:
        "Content management system for publishing articles and managing newsroom workflows.",
    },
    {
      name: "Google Docs",
      Icon: SiGoogle,
      description:
        "Collaborative document editing for drafting stories and sharing with editors.",
    },
    {
      name: "Slack",
      Icon: SiSlack,
      description:
        "Team communication platform for newsroom collaboration and source communications.",
    },
    {
      name: "Adobe",
      Icon: SiAdobeacrobat,
      description:
        "Document management and PDF tools for handling public records and documents.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header - matching Hero style */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Tech Stack
        </h2>
      </div>
      
      {/* Tech Icons Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200"
            title={tech.description}
          >
            <tech.Icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
            <span className="text-xs font-medium text-center text-gray-600 dark:text-gray-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}