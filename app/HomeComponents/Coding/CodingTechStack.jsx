import TechIcon from "./TechIcons";

export default function TechStack() {
  const techStack = [
    "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
      {/* Section header - matching Hero style */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
        <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
          Tech Stack
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Tech badges */}
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-8">
          <TechIcon />
        </div>
      </div>
    </section>
  );
}
