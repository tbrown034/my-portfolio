import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <div className="flex items-center justify-center text-xl font-bold text-white rounded-full bg-blue-950 dark:bg-blue-50 dark:text-blue-900 hover:bg-blue-700 dark:hover:bg-blue-300">
      <button className="flex items-center justify-center w-2/3 p-2 text-center rounded-l-full bg-blue-950 dark:bg-blue-50">
        View Resume
      </button>
      <button className="flex items-center justify-center w-1/3 p-2 bg-blue-800 rounded-r-full dark:bg-blue-200">
        <AiOutlineDownload className="w-icon-sm h-icon-sm" />
      </button>
    </div>
  );
}
