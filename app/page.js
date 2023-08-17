import Home from "./components/Home/page.jsx";
import Code from "./components/Coding/page.jsx";
import Journalism from "./components/Journalism/page.jsx";
import DataViz from "./components/Graphics/page.jsx";
import About from "./components/About/page.jsx";

export default function Page() {
  return (
    <main className=" scroll-smooth">
      <Home />
      <div id="coding">
        <Code />
      </div>
      <div id="journalism">
        <Journalism />
      </div>
      <div id="dataviz">
        <DataViz />
      </div>
      <div id="about">
        <About />
      </div>
    </main>
  );
}
