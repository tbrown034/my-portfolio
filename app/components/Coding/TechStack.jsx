import TechIcon from "./TechIcons";

export default function TechStack() {
  const coreStack = [
    "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"
  ];
  
  const libraries = [
    "Framer Motion", "Chart.js", "MUI", "Axios"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {coreStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Libraries & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {libraries.map((lib) => (
                <span 
                  key={lib}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                >
                  {lib}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Icons Grid */}
        <TechIcon />
      </div>
    </section>
  );
}
