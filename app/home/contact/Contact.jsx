import Header from "./Header";
import Intro from "./Intro";
import Form from "./Form";
import Links from "./Links";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Left column — Form (primary action) */}
          <div className="flex-1 min-w-0">
            <Form />
          </div>

          {/* Right column — Intro, links, navigation */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0 flex flex-col gap-8">
            <Intro />
            <Links />
          </div>
        </div>
      </div>
    </section>
  );
}
