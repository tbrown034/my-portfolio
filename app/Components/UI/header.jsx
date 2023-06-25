"use client";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 text-2xl">
      <h1
        className={`font-majorMono text-3xl`}
        style={{ textShadow: "rgba(0, 0, 0, 0.5) 1px 0px 0px" }}
      >
        &lt;TrevorBrown /&gt;
      </h1>

      <div className="hidden gap-8 sm:flex opacity-80">
        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-blue-300 active:bg-blue-400"
          href="/"
        >
          <CodeBracketIcon className="w-6 h-6" />
          <p>Coding</p>
        </Link>
        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-blue-300 active:bg-blue-400"
          href="/"
        >
          <NewspaperIcon className="w-6 h-6" />
          <p>Journalism</p>
        </Link>

        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-blue-300 active:bg-blue-400"
          href="/"
        >
          <ChartBarIcon className="w-6 h-6"></ChartBarIcon>

          <p>Data Viz</p>
        </Link>
      </div>
      <div className="sm:hidden ">
        <Bars3Icon className="w-8 h-8" />
      </div>
      <button className="items-center justify-center hidden gap-1 p-1 border-2 border-blue-800 border-opacity-50 rounded-lg opacity-80 sm:flex hover:bg-blue-300 active:bg-blue-400">
        <MoonIcon className="w-6 h-6 text-blue-300 fill-blue-800" />
        <p>Dark Mode</p>
      </button>
    </header>
  );
}
