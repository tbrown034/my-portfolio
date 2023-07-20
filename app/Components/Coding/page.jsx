import Projects from "./projects";
import TechStack from "./techStack";
import Intro from "./intro";
export default function code() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 bg-sky-100 md:px-16 ">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
