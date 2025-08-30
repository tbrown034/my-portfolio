import Hero from "./home/hero/Hero.jsx";
import Code from "./home/coding/Coding.jsx";
import Visualizations from "./home/visualizations/Visualizations.jsx";
import Journalism from "./home/journalism/Journalism.jsx";
import Contact from "./home/contact/Contact.jsx";

export default function Page() {
  return (
    <main className="flex flex-col scroll-smooth">
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Hero />
      </div>
      <div className="bg-slate-200 dark:bg-slate-900 py-12">
        <Code />
      </div>
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Visualizations />
      </div>
      <div className="bg-slate-200 dark:bg-slate-900 py-12">
        <Journalism />
      </div>
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Contact />
      </div>
      {/* CTA Buttons after contact */}
      <div className="bg-white dark:bg-blue-900 py-8">
        <div className="flex justify-center gap-4 px-6">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-800 dark:bg-sky-500 dark:text-slate-900 rounded-xl hover:bg-blue-900 dark:hover:bg-sky-400 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            ↑ Back to Top
          </a>
          <a
            href="/resume"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 dark:text-slate-100 border-2 border-gray-900 dark:border-slate-400 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 hover:border-blue-800 dark:hover:border-sky-400 transition-all duration-200"
          >
            View Resume
          </a>
        </div>
      </div>
    </main>
  );
}
