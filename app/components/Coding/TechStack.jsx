import TechIcon from "./TechIcons";

export default function TechStack() {
  const coreStack = [
    "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"
  ];
  
  const libraries = [
    "Framer Motion", "Chart.js", "MUI", "Axios"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Editorial Section Header */}
      <div className="max-w-4xl mb-12">
        <h2 className="text-4xl sm:text-5xl font-black font-montserrat text-gray-900 dark:text-gray-100 mb-6">
          Tech Stack & Skills
        </h2>
        
        <div className="prose prose-xl prose-gray dark:prose-invert leading-relaxed space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            My core stack: {coreStack.map((tech, index) => (
              <span key={tech}>
                <strong className="text-emerald-600 dark:text-emerald-400">{tech}</strong>
                {index < coreStack.length - 1 && ", "}
              </span>
            ))}
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Libraries & tools: {libraries.map((lib, index) => (
              <span key={lib}>
                <span className="text-emerald-600 dark:text-emerald-400">{lib}</span>
                {index < libraries.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Tech Icons Grid */}
      <div className="mb-16">
        <TechIcon />
      </div>
    </section>
  );
}
