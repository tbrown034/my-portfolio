import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Intro() {
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
          Development
        </h1>
      </div>
    </section>
  );
}
