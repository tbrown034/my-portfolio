import Hero from "./homecomponents/hero/Hero.jsx";
import Code from "./homecomponents/coding/Coding.jsx";
import Data from "./homecomponents/data/Data.jsx";
import Journalism from "./homecomponents/journalism/Journalism.jsx";
import Contact from "./homecomponents/contact/Contact.jsx";
import Footer from "@/components/Layout/Footer/Footer";

export default function Page() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <section className="bg-slate-100 dark:bg-blue-950 min-h-screen snap-start flex items-center py-12">
        <Hero />
      </section>
      <section className="bg-slate-200 dark:bg-blue-900 min-h-screen snap-start flex items-center py-12">
        <Code />
      </section>
      <section className="bg-slate-100 dark:bg-blue-950 min-h-screen snap-start flex items-center py-12">
        <Data />
      </section>
      <section className="bg-slate-200 dark:bg-blue-900 min-h-screen snap-start flex items-center py-12">
        <Journalism />
      </section>
      <section className="bg-slate-100 dark:bg-blue-950 min-h-screen snap-start flex flex-col">
        <div className="flex-1 flex items-center py-12">
          <Contact />
        </div>
        <Footer />
      </section>
    </main>
  );
}
