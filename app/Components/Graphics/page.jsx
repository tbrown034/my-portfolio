import Intro from "./intro";
import TechStack from "./techStack";
import Projects from "./projects";

export default function Page() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 bg-blue-100 sm:gap-12 dark:bg-blue-900 dark:text-blue-100 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
