import Clips from "./Clips";
import Header from "./Header";
import Intro from "./Intro";
import TechStack from "./TechStack.jsx";

import React from "react";

const Coding = () => {
  return (
    <section id="coding" className="bg-white dark:bg-blue-950 flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Intro />
        <TechStack />
        <Clips />
      </div>
    </section>
  );
};

export default Coding;
