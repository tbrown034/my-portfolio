import Intro from "./intro";
import Clips from "./clips";

import Timeline from "./timeline.jsx";

export default function Page() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16">
      <Intro />
      <Timeline />
      <Clips />
    </section>
  );
}
