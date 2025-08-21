import Clips from "./Clips";
import Header from "./Header";
import Intro from "./Intro";
import TechStack from "./TechStack";

import React from "react";

const Data = () => {
  return (
    <section id="data" className="bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-col gap-8">
        <Intro />
        <TechStack />
        <Clips />
      </div>
    </section>
  );
};

export default Data;
