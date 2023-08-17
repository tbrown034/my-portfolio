import Intro from "./Intro.jsx";
import Form from "./Form.jsx";
import Links from "./Links.jsx";
import Resume from "./Resume.jsx";
import AboutPhoto from "./AboutPhoto.jsx";
import AboutText from "./AboutText.jsx";

export default function page() {
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
