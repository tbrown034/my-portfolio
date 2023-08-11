import Projects from "./projects";
import TechStack from "./techStack";
import Intro from "./intro";
export default function code() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 bg-blue-100 sm:gap-12 dark:bg-blue-900 dark:text-blue-100 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
