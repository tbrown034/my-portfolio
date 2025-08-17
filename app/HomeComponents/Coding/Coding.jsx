import Projects from "./CodingClips.jsx";
import TechStack from "./CodingTechStack.jsx";
import Intro from "./CodingIntro.jsx";

export default function page() {
  return (
    <section className="">
      <Intro />
      <Projects />
      <TechStack />
    </section>
  );
}
