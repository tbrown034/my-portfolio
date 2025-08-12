import Hero from "./components/Hero/page.jsx";
import Introduction from "./components/Introduction/page.jsx";
import Code from "./components/Coding/page.jsx";
import DataVizIntro from "./components/Graphics/Intro.jsx";
import DataVizClips from "./components/Graphics/Clips.jsx";
import JournalismIntro from "./components/Journalism/JournalismIntro.jsx";
import JournalismClips from "./components/Journalism/Clips.jsx";
import About from "./components/About/page.jsx";

export default function Page() {
  return (
    <main className=" flex flex-col gap-2 scroll-smooth">
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
