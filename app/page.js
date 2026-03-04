import Hero from "./home/hero/Hero.jsx";
import ProjectsTeaser from "./home/sections/ProjectsTeaser.jsx";
import JournalismTeaser from "./home/sections/JournalismTeaser.jsx";
import Contact from "./home/contact/Contact.jsx";

export default function Page() {
  return (
    <main id="main-content" className="flex flex-col scroll-smooth">
      <div className="bg-slate-100 dark:bg-neutral-900 pt-0 pb-12">
        <Hero />
      </div>
      <div className="bg-slate-200 dark:bg-black py-12">
        <ProjectsTeaser />
      </div>
      <div className="bg-slate-100 dark:bg-neutral-900 py-12">
        <JournalismTeaser />
      </div>
      <div className="bg-slate-200 dark:bg-black py-12">
        <Contact />
      </div>
    </main>
  );
}
