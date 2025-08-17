import TechIcon from "./TechIcons";

export default function Intro() {
  const techStack = [
    "Data Analysis", "Interactive Graphics", "Statistical Modeling", "Geospatial Mapping", "Dashboard Design", "Story Development"
  ];

  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Data Visualization
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Visual Storytelling
          </h3>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Data visualization bridges my journalism and development skills. I create charts, maps, and interactive graphics that make complex information accessible and compelling for readers.
          </p>
          
          <p>
            Using tools like D3.js, Python, and Observable, I transform datasets into stories that reveal patterns, trends, and insights that might otherwise remain hidden in spreadsheets.
          </p>
        </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-green-700 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors duration-300">Tools</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">D3.js, Python, Observable, Tableau</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-green-700 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors duration-300">Focus</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Interactive charts, maps, storytelling</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4 transition-all duration-300 hover:pl-6 hover:border-green-700 hover:scale-105 group cursor-default">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-green-800 dark:group-hover:text-green-400 transition-colors duration-300">Approach</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Data-driven narratives, accessibility</p>
            </div>
          </div>

          {/* Tech Stack section */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Skills & Technologies
            </h4>
            
            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Tech Icons Grid */}
            <TechIcon />
          </div>
        </div>
      </div>
    </section>
  );
}