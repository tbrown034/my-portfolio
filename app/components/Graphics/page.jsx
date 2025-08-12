import Intro from "./Intro.jsx";
import Clips from "./Clips.jsx";

export default function page() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50">
      <Intro />
      <Clips />
    </section>
  );
}
