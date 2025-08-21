import Hero from "./homecomponents/hero/Hero.jsx";
import Code from "./homecomponents/coding/Coding.jsx";
import Data from "./homecomponents/data/Data.jsx";
import JournalismIntro from "./homecomponents/journalism/JournalismIntro.jsx";
import JournalismClips from "./homecomponents/journalism/JournalismClips.jsx";
import About from "./homecomponents/contact/Contact.jsx";

export default function Page() {
  return (
    <main className="flex flex-col gap-2 scroll-smooth">
      <Hero />

      <div id="coding">
        <Code />
      </div>
      <div id="data">
        <Data />
      </div>
      <JournalismIntro />
      <div id="journalism">
        <JournalismClips />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
