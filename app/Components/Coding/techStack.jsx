import { NodejsOriginalWordmark } from "devicons-react";

export default function techStack() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold font-montserrat">Tech Stack</h1>
        <h3 className="text-lg font-roboto">
          I specialize in a NERD stack (Node.js, Express, React, Databases using
          SQL), but I'm most home currently with React. I'm always learning
          more, but here are the main technologies I have used.
        </h3>
        <div className="h-20">
          <NodejsOriginalWordmark />
        </div>
      </div>
    </>
  );
}
