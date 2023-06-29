import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function BottomNav() {
  return (
    <nav className="text-sm lg:text-2xl sm:text-lg">
      <hr className="w-2/3 mx-auto border-t-2 border-blue-800 dark:border-blue-200" />

      <div className="flex justify-between">
        <Link href="#coding">
          <div className="flex items-center px-4 py-2 space-x-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-blue-200 hover:shadow-lg">
            <CodeBracketIcon className="w-6 h-6" />
            <span className="font-medium">Coding</span>
            <ChevronDoubleDownIcon className="w-4 h-4" />
          </div>
        </Link>

        <Link href="#journalism">
          <div className="flex items-center px-4 py-2 space-x-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-blue-200 hover:shadow-lg">
            <NewspaperIcon className="w-6 h-6" />
            <span className="font-medium">Journalism</span>
            <ChevronDoubleDownIcon className="w-4 h-4" />
          </div>
        </Link>

        <Link href="#data">
          <div className="flex items-center px-4 py-2 space-x-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-blue-200 hover:shadow-lg">
            <ChartBarIcon className="w-6 h-6" />
            <span className="font-medium">Data</span>
            <ChevronDoubleDownIcon className="w-4 h-4" />
          </div>
        </Link>
        <Link href="#about">
          <div className="flex items-center px-4 py-2 space-x-3 transition-all duration-200 rounded-lg cursor-pointer hover:bg-blue-200 hover:shadow-lg">
            <UserIcon className="w-6 h-6" />
            <span className="font-medium">About</span>
            <ChevronDoubleDownIcon className="w-4 h-4" />
          </div>
        </Link>
      </div>
    </nav>
  );
}
