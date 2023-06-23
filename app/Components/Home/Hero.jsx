import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10">
      {/* Introduction */}
      <div className="flex flex-col w-2/3 gap-4 mb-16">
        <h1 className="text-5xl">Hello👋, I'm Trevor.</h1>
        <h3 className="text-lg">
          I'm a{" "}
          <span className="px-1 font-bold underline rounded bg-slate-300">
            full-stack web developer
          </span>{" "}
          with a knack for{" "}
          <span className="px-1 font-bold underline bg-slate-300">
            data-driven
          </span>{" "}
          programming and storytelling. After more than a decade as an{" "}
          <span className="px-1 font-bold underline bg-slate-300">
            award-winning investigative journalist
          </span>
          , I'm now looking for new opportunities in the world of tech. Let's
          build something cool.
        </h3>
        <div className="flex justify-center gap-4">
          <button className="p-2 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
            About
          </button>
          <button className="p-2 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            Resume
          </button>
          <button className="p-2 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
