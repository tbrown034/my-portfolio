import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function BottomNav() {
  return (
    <nav className="">
      <hr className="w-2/3 p-4 mx-auto border-t-2 border-blue-800 dark:border-blue-200" />

      <div className="flex flex-wrap justify-around gap-4">
        <a
          href="#coding"
          className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400"
        >
          <CodeBracketIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Coding</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </a>

        <a
          href="#journalism"
          className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400"
        >
          <NewspaperIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Journalism</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </a>
        <a
          href="#dataviz"
          className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400"
        >
          <ChartBarIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Data Visualizations</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </a>
        <Link
          href="#about"
          className="flex items-center gap-1 p-1 rounded-lg cursor-pointer hover:bg-blue-300 active:bg-blue-400"
        >
          <UserIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">About</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
