import Hero from "./components/Hero/page.jsx";
import Introduction from "./components/Introduction/page.jsx";
import Code from "./components/Coding/page.jsx";
import Journalism from "./components/Journalism/page.jsx";
import DataViz from "./components/Graphics/page.jsx";
import About from "./components/About/page.jsx";

export default function Page() {
  return (
    <main className=" flex flex-col gap-2 scroll-smooth">
      <Hero />
      <Introduction />
      <div id="coding">
        <Code />
      </div>
      <div id="dataviz">
        <DataViz />
      </div>
      <div id="journalism">
        <Journalism />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
