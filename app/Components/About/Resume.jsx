import Link from "next/link";
import { AiOutlineDownload, AiOutlineAudit } from "react-icons/ai";

export default function Resume() {
  return (
    <div className="flex gap-4 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 ">
      <Link
        className="flex flex-col items-center flex-1 w-full gap-2 px-4 py-2 text-sm font-bold text-center bg-white border-2 border-blue-800 rounded-lg sm:w-auto hover:bg-blue-300 active:bg-blue-400"
        href="/"
      >
        <AiOutlineAudit className="w-icon-sm h-icon-sm" />
        <p>View Resume</p>
      </Link>
      <Link
        className="flex flex-col items-center flex-1 w-full gap-2 px-4 py-2 text-sm font-bold text-center bg-white border-2 border-blue-800 rounded-lg sm:w-auto hover:bg-blue-300 active:bg-blue-400"
        href="/"
      >
        <AiOutlineDownload className="w-icon-sm h-icon-sm" />
        <p>Download Resume</p>
      </Link>
    </div>
  );
}
