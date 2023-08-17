import Intro from "./Intro";
import Form from "./Form";
import Links from "./Links";
import Resume from "./Resume";
import AboutPhoto from "./AboutPhoto";
import AboutText from "./AboutText";

export default function about() {
  return (
    <section className="flex flex-col justify-around gap-8 px-8 py-8 sm:gap-12 lg:gap-16 xl:gap-20 md:px-16 ">
      <Intro />
      <Resume />
      <Form />
      <AboutText />
      <AboutPhoto />
      <Links />
    </section>
  );
}
