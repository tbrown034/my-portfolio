import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Intro() {
  const linkClasses = "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200 underline decoration-2 underline-offset-2";

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 rounded-lg mb-8">
        <CodeBracketIcon className="w-5 h-5" />
        <span className="font-medium">Coding</span>
      </div>

      {/* Editorial Section Header */}
      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-black font-montserrat text-gray-900 dark:text-gray-100 mb-6">
          From Copy to Code
        </h1>
        
        <div className="prose prose-xl prose-gray dark:prose-invert leading-relaxed space-y-6">
          <p className="text-xl text-gray-700 dark:text-gray-300">
            After fifteen years in journalism, I took a leap in 2022. I left my reporting job 
            and enrolled in the{" "}
            <a href="https://bootcamp.outreach.ou.edu/" target="_blank" className={linkClasses}>
              University of Oklahoma's Web Development Bootcamp
            </a>.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Despite the challenges, I fell in love with programming. Since earning my certificate 
            from the{" "}
            <a href="https://www.fullstackacademy.com/" target="_blank" className={linkClasses}>
              FullStack Academy
            </a>
            -led course, I've been building skills through freelance work and personal projects.
          </p>
        </div>
      </div>
    </section>
  );
}
