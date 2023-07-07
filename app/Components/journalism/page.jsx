import Intro from "./intro";
import Clips from "./clips";

import Timeline from "./timeline.jsx";

export default function journalism() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-indigo-50">
      <Intro />
      <Timeline />
      <Clips />
    </section>
  );
}
