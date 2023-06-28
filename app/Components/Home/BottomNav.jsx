import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function BottomNav() {
  return (
    <nav className="flex justify-around pt-20 text-sm lg:text-2xl sm:text-lg">
      <Link href="/" className="flex items-center space-x-2">
        <CodeBracketIcon className="w-6 h-6" />
        <span>Coding</span>
        <ChevronDoubleDownIcon className="w-4 h-4 " />
      </Link>

      <Link href="/" className="flex items-center space-x-2 ">
        <NewspaperIcon className="w-6 h-6" />
        <span>Journalism</span>
        <ChevronDoubleDownIcon className="w-4 h-4 " />
      </Link>
      <Link href="/" className="flex items-center space-x-2 ">
        <ChartBarIcon className="w-6 h-6 " />
        <span>Data</span>
        <ChevronDoubleDownIcon className="w-4 h-4" />
      </Link>
    </nav>
  );
}
