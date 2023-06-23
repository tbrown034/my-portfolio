import Image from "next/image";
import logo from "../../../public/images/>-logos_black1.png";
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Image width={120} src={logo} alt="logo"></Image>

      <div className="hidden gap-8 sm:flex opacity-80">
        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-slate-300 active:bg-slate-400"
          href="/"
        >
          <CodeBracketIcon className="w-6 h-6" />
          <p>Coding</p>
        </Link>
        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-slate-300 active:bg-slate-400"
          href="/"
        >
          <NewspaperIcon className="w-6 h-6" />
          <p>Journalism</p>
        </Link>

        <Link
          className="flex gap-1 p-1 rounded-lg hover:bg-slate-300 active:bg-slate-400"
          href="/"
        >
          <ChartBarIcon className="w-6 h-6"></ChartBarIcon>

          <p>Data Viz</p>
        </Link>
      </div>
      <div className="sm:hidden ">
        <Bars3Icon className="w-6 h-6" />
      </div>
      <button className="hidden gap-1 p-1 border-2 border-opacity-50 rounded-lg opacity-80 border-slate-800 sm:flex hover:bg-slate-300 active:bg-slate-400">
        <MoonIcon className="w-6 h-6" />
        <p>Dark Mode</p>
      </button>
    </header>
  );
}
