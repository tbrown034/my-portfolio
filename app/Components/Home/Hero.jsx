export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col w-2/3 gap-2">
        <h1 className="text-4xl">Hello👋, I'm Trevor.</h1>

        <h3>
          I'm a{" "}
          <span className="underline text-bold underline-offset-4">
            full-stack web developer
          </span>{" "}
          with a knack for{" "}
          <span className="underline text-bold underline-offset-4">
            data-driven
          </span>{" "}
          programming and storytelling. After more than a decade as an{" "}
          <span className="underline text-bold underline-offset-4">
            award-winning investigate journalist
          </span>
          , I'm now looking for new opporutnites in the world of tech. Let's
          build something cool .
        </h3>
        <div className="flex gap-4">
          <button className="p-1 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
            More About Me
          </button>
          <button className="p-1 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            View My Resume
          </button>
          <button className="p-1 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
