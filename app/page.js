import Hero from "../app/Components/Home/Hero.jsx";
import Code from "./code/page.jsx";
import Journalism from "./journalism/page.jsx";
import DataViz from "./dataViz/page.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Code />
      <Journalism />
      <DataViz />
    </main>
  );
}
