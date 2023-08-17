import Home from "./Components/Home/page.jsx";
import Code from "./Components/Coding/page.jsx";
import Journalism from "./Components/Journalism/page.jsx";
import DataViz from "./Components/Graphics/page.jsx";
import About from "./Components/About/page.jsx";

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
