import Intro from "./intro";
import TechStack from "./techStack";
import Projects from "./projects";

export default function page() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-indigo-100">
      <Intro />
      <TechStack />
      <Projects />
    </section>
  );
}
