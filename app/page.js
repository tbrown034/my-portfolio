import Hero from "./home/hero/Hero.jsx";
import Code from "./home/coding/Coding.jsx";
import Visualizations from "./home/visualizations/Visualizations.jsx";
import Journalism from "./home/journalism/Journalism.jsx";
import Contact from "./home/contact/Contact.jsx";

export default function Page() {
  return (
    <main className="flex flex-col scroll-smooth">
      <div className="bg-slate-100 dark:bg-neutral-900 pt-0 pb-12">
        <Hero />
      </div>
      <div className="bg-slate-200 dark:bg-black py-12">
        <Code />
      </div>
      <div className="bg-slate-100 dark:bg-neutral-900 py-12">
        <Visualizations />
      </div>
      <div className="bg-slate-200 dark:bg-black py-12">
        <Journalism />
      </div>
      <div className="bg-slate-100 dark:bg-neutral-900 py-12">
        <Contact />
      </div>
    </main>
  );
}
