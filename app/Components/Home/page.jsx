// app > Components > Home > Hero.jsx

import Intro from "./Intro.jsx";
import BottomNav from "./BottomNav.jsx";
import MyLinks from "./MyLinks.jsx";

export default function Home() {
  return (
    <section className="flex flex-col justify-around gap-4 p-4 sm:h-95-screen sm:px-12 lg:px-20">
      <Intro />
      <MyLinks />
      <BottomNav />
    </section>
  );
}
