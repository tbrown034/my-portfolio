import Projects from "./Projects.jsx";
import TechStack from "./TechStack.jsx";
import Intro from "./Intro.jsx";

export default function page() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Intro />
      <Projects />
      <TechStack />
    </section>
  );
}
