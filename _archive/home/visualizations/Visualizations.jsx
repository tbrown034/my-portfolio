import Clips from "./Clips";
import Header from "./Header";
import Intro from "./Intro";
import TechStack from "./TechStack";

import React from "react";

const Visualizations = () => {
  return (
    <section id="visualizations" className="flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Intro />
        <TechStack />
        <Clips />
      </div>
    </section>
  );
};

export default Visualizations;
