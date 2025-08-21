import Header from "./Header";
import Intro from "./Intro";
import Awards from "./Awards";
import Clips from "./Clips";

export default function Journalism() {
  return (
    <section id="journalism" className="bg-white dark:bg-blue-950 flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Intro />
        <Awards />
        <Clips />
      </div>
    </section>
  );
}
