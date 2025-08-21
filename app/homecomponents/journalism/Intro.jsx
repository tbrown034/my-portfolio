export default function Intro() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Subsection header */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
          <h2 className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
            Background
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-4xl">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I was editor-in-chief of <a href="https://www.idsnews.com" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">The Indiana Daily Student</a> and graduated from Indiana University with a degree in political science and journalism. I spent the next 15 years covering government accountability and investigative stories, most recently with <a href="https://oklahomawatch.org" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200">Oklahoma Watch</a>, a nonprofit newsroom focused on democracy and transparency.
            </p>
            
            <p>
              My reporting has led to policy changes, legislative reforms and increased government transparency. From exposing racial profiling patterns to investigating hospital billing practices, I've specialized in stories that serve the public interest and hold institutions accountable.
            </p>
            
            <p>
              Over nearly two decades, I won state and national awards for investigative reporting, covered everything from city council meetings to statewide campaigns and built a reputation for thorough, fair reporting that makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}