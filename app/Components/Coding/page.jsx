import Projects from "./projects";
import TechStack from "./techStack";
import Intro from "./intro";
export default function code() {
  return (
    <section className="flex flex-col justify-between gap-16 p-8 sm:gap-20 bg-sky-100">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
