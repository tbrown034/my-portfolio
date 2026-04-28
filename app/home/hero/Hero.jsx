import HeroHeader from "./HeroHeader.jsx";
import Intro from "./Intro";
import Mug from "./Mug.jsx";
import HeroLinks from "./HeroLinks";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="flex flex-col px-6 pb-0 pt-2 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto w-full md:pb-8 md:pt-2">
      <HeroHeader />

      {/* On mobile: photo between header and intro. On desktop: photo right column. */}
      <div className="flex justify-center mt-4 md:hidden">
        <Mug />
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-8 md:mt-8">
        <div className="md:col-span-2">
          <Intro />
        </div>
        <div className="hidden md:flex md:col-span-1 items-start justify-center">
          <Mug />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4 md:flex-row md:mt-8 md:items-center md:gap-8">
        <HeroCTA />
        <HeroLinks />
      </div>
    </section>
  );
}
