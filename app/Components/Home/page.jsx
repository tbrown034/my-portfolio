// app > Components > Home > Hero.jsx

import Intro from "./Intro";
import BottomNav from "./BottomNav";

export default function Home() {
  return (
    <section className="flex flex-col justify-around min-h-screen">
      <Intro />
      <BottomNav />
    </section>
  );
}
