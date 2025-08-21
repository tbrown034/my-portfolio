import Hero from "./homecomponents/hero/Hero.jsx";
import Code from "./homecomponents/coding/Coding.jsx";
import Data from "./homecomponents/data/Data.jsx";
import Journalism from "./homecomponents/journalism/Journalism.jsx";
import Contact from "./homecomponents/contact/Contact.jsx";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 scroll-smooth">
      <Hero />
      <Code />
      <Data />
      <Journalism />
      <Contact />
    </main>
  );
}
