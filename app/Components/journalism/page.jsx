import Intro from "./Intro";
import Clips from "./Clips";

import Timeline from "./Timeline.jsx";

export default function Page() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16">
      <Intro />
      <Timeline />
      <Clips />
    </section>
  );
}
