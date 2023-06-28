import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function BottomNav() {
  return (
    <nav className="text-sm rounded-lg p lg:text-2xl sm:text-lg">
      <div className="bg-white  text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2 self-start">
        <p>Discover More</p>
      </div>
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
