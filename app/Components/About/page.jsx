import Intro from "./intro";
import Contact from "./contact";
import Links from "./links";
import Resume from "./Resume";

import Mug from "./Mug";

export default function about() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <Mug />
      <Resume />
      <Contact />
      <Links />
    </section>
  );
}
