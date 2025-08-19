import Intro from "./JournalismIntro.jsx";
import TechStack from "./JournalismTechStack.jsx";
import Clips from "./JournalismClips.jsx";

export default function page() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50">
      <Intro />
      <TechStack />
      <Clips />
    </section>
  );
}
