import Hero from "./homecomponents/hero/Hero.jsx";
import Code from "./homecomponents/coding/Coding.jsx";
import Data from "./homecomponents/data/Data.jsx";
import Journalism from "./homecomponents/journalism/Journalism.jsx";
import Contact from "./homecomponents/contact/Contact.jsx";

export default function Page() {
  return (
    <main className="flex flex-col scroll-smooth">
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Hero />
      </div>
      <div className="bg-slate-200 dark:bg-blue-900 py-12">
        <Code />
      </div>
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Data />
      </div>
      <div className="bg-slate-200 dark:bg-blue-900 py-12">
        <Journalism />
      </div>
      <div className="bg-slate-100 dark:bg-blue-950 py-12">
        <Contact />
      </div>
    </main>
  );
}
