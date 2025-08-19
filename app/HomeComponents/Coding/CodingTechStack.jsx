import TechIcon from "./TechIcons";

export default function TechStack() {
  const skills = [
    "LLM Integration",
    "Analytics", 
    "Marketing",
    "Full-Stack Dev",
    "Data Visualization",
    "SEO/PPC"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        {/* Section header */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Skills & Technologies
        </h2>
        
        {/* Skills tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Tech Icons Grid */}
        <TechIcon />
      </div>
    </section>
  );
}
