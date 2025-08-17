import Hero from "./HomeComponents/Hero/Hero.jsx";
import Introduction from "./HomeComponents/Introduction/Introduction.jsx";
import Code from "./HomeComponents/Coding/Coding.jsx";
import DataVizIntro from "./HomeComponents/DataViz/DataVizIntro.jsx";
import DataVizClips from "./HomeComponents/DataViz/DataVizClips.jsx";
import JournalismIntro from "./HomeComponents/Journalism/JournalismIntro.jsx";
import JournalismClips from "./HomeComponents/Journalism/JournalismClips.jsx";
import About from "./HomeComponents/About/About.jsx";

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
