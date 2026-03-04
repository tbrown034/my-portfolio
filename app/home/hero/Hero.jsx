import HeroHeader from "./HeroHeader.jsx";
import Intro from "./Intro";
import Mug from "./Mug.jsx";
import HeroLinks from "./HeroLinks";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="flex flex-col px-6 pb-0 pt-2 sm:px-8 lg:px-12 xl:px-16">
      {/* Mobile layout (below md) */}
      <section className="flex flex-col gap-4 md:hidden max-w-3xl mx-auto pt-3">
        <HeroHeader />
        <div className="flex justify-center">
          <Mug />
        </div>
        <Intro />
        <HeroCTA />
        <HeroLinks />
      </section>

      {/* Desktop layout (md and up) */}
      <section className="hidden md:flex md:flex-col max-w-7xl mx-auto md:pb-8 md:pt-2 w-full">
        <HeroHeader />

        {/* Two-column: text + photo */}
        <div className="grid grid-cols-3 gap-8 mt-8">
          <div className="col-span-2">
            <Intro />
          </div>
          <div className="col-span-1 flex items-start justify-center">
            <Mug />
          </div>
        </div>

        <div className="flex mt-8 items-center gap-8">
          <HeroCTA />
          <HeroLinks />
        </div>
      </section>
    </section>
  );
}
