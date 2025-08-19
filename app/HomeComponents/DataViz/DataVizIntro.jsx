export default function Intro() {
  const skills = [
    "Data Analysis", "Interactive Graphics", "Dashboard Design", "Statistical Analysis", "Data Storytelling", "Chart Optimization"
  ];
  

  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 subSection">
      <div className="max-w-7xl mx-auto w-full animate-fadeInUp">
        {/* Section header - indented on larger screens */}
        <div className="md:pl-12 lg:pl-16 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2 inline-block">
            Data Visualization
          </h2>
        </div>

        {/* Main content - indented on larger screens */}
        <div className="md:pl-12 lg:pl-16 space-y-6 max-w-4xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Visual Storytelling
          </h3>
        
        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I've always thought of myself as a data-driven reporter through the years – whether teaching myself the cooler parts of Excel, or learning Datawrapper, Tableau, and other visualization tools. Data storytelling has been a constant thread in my journalism career.
          </p>
          
          <p>
            Now I use tools like D3.js, Python, and Observable to transform datasets into stories that reveal patterns, trends, and insights that might otherwise remain hidden in spreadsheets. Every chart and graphic is another way to hold power accountable.
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

          {/* Skills section */}
          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
            {/* Skills Section */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mb-4">
                Core Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}