import Home from "./Components/Home/page.jsx";
import Code from "./code/page.jsx";
import Journalism from "./journalism/page.jsx";
import DataViz from "./dataviz/page.jsx";

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
    </main>
  );
}
