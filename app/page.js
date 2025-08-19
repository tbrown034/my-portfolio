import Hero from "./homecomponents/hero/Hero.jsx";
import Introduction from "./homecomponents/introduction/Introduction.jsx";
import Code from "./homecomponents/coding/Coding.jsx";
import DataVizIntro from "./homecomponents/dataviz/DataVizIntro.jsx";
import DataVizClips from "./homecomponents/dataviz/DataVizClips.jsx";
import JournalismIntro from "./homecomponents/journalism/JournalismIntro.jsx";
import JournalismClips from "./homecomponents/journalism/JournalismClips.jsx";
import About from "./homecomponents/about/About.jsx";

export default function Page() {
  return (
    <main className="flex flex-col gap-2 scroll-smooth">
      <Hero />
      <Introduction />
      <div id="coding">
        <Code />
      </div>
      <DataVizIntro />
      <div id="dataviz">
        <DataVizClips />
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
