import Projects from "./Projects.jsx";
import TechStack from "./TechStack.jsx";
import Intro from "./Intro.jsx";
export default function page() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 bg-blue-50 sm:gap-12 dark:bg-blue-900 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
