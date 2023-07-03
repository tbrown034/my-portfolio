import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function Footer() {
  return (
    <nav className="text-sm ">
      <hr className="w-2/3 p-4 mx-auto border-t-2 border-blue-800 dark:border-blue-200" />

      <div className="flex justify-around gap-4">
        <Link href="#coding" className="flex items-center gap-1">
          <CodeBracketIcon className="w-4 h-4" />
          <span className="">Coding</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>

        <Link href="#journalism" className="flex items-center gap-1">
          <NewspaperIcon className="w-4 h-4" />
          <span className="">Journalism</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>
        <Link href="#data" className="flex items-center gap-1">
          <ChartBarIcon className="w-4 h-4" />
          <span className="">Data</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>
        <Link href="#about" className="flex items-center gap-1">
          <UserIcon className="w-4 h-4" />
          <span className="">About</span>
          <ChevronDoubleDownIcon className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
