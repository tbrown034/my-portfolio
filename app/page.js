import Home from "./Components/Home/page.jsx";
import Code from "./code/page.jsx";
import Journalism from "./journalism/page.jsx";
import DataViz from "./dataviz/pages.jsx";

export default function Page() {
  return (
    <main>
      <Home />
      <Code />
      <Journalism />
      <DataViz />
    </main>
  );
}
