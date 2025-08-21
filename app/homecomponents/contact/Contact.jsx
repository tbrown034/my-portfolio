import Header from "./Header";
import Intro from "./Intro";
import Form from "./Form";
import Links from "./Links";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Intro />
        <Form />
        <Links />
      </div>
    </section>
  );
}