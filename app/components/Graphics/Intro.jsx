export default function Intro() {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 py-12 sm:px-8 lg:px-12 xl:px-16 bg-gray-100 dark:bg-gray-800/50">
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
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Tools</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">D3.js, Python, Observable, Tableau</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Focus</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Interactive charts, maps, storytelling</p>
            </div>
            <div className="border-l-2 border-blue-800 pl-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Approach</h4>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Data-driven narratives, accessibility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}