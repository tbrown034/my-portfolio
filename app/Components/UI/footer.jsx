import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

export default function BottomNav() {
  return (
    <nav className="p-10 sm:text-2xl lg:text-3xl">
      <hr className="w-2/3 p-4 mx-auto border-t-2 border-blue-800 dark:border-blue-200" />

      <div className="flex flex-wrap justify-around gap-4">
        <a href="/#coding" className="flex items-center gap-1">
          <CodeBracketIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Coding</span>
          <ChevronDoubleUpIcon className="w-4 h-4" />
        </a>

        <a href="/#journalism" className="flex items-center gap-1">
          <NewspaperIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Journalism</span>
          <ChevronDoubleUpIcon className="w-4 h-4" />
        </a>
        <a href="/#dataviz" className="flex items-center gap-1">
          <ChartBarIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Data</span>
          <ChevronDoubleUpIcon className="w-4 h-4" />
        </a>
        <a href="/#about" className="flex items-center gap-1">
          <UserIcon className="w-4 sm:w-6 lg:w-8" />
          <span className="">Contact</span>
          <ChevronDoubleUpIcon className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
