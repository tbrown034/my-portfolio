import Projects from "./Projects.jsx";
import TechStack from "./TechStack.jsx";
import Intro from "./Intro.jsx";

export default function page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50">
      <Intro />
      <Projects />
      <TechStack />
    </section>
  );
}
