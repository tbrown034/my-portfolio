import { AiOutlineDownload } from "react-icons/ai";

export default function Resume() {
  return (
    <section className="flex justify-center">
      <div className="flex items-center justify-center w-5/6 text-xl font-bold text-white rounded-full bg-blue-950 dark:bg-blue-50 dark:text-blue-900 ">
        <a
          href="https://helloimtrevor.com/resume"
          className="flex items-center justify-center w-2/3 p-2 text-center rounded-l-full bg-blue-950 dark:bg-blue-50"
        >
          View Resume
        </a>
        <a
          href="/app/data/assets/trevorBrownResume.pdf"
          download="trevorBrownResume"
          className="flex items-center justify-center w-1/3 p-2 bg-blue-800 rounded-r-full dark:bg-blue-200"
        >
          <AiOutlineDownload className="w-icon-sm h-icon-sm" />
        </a>
      </div>
    </section>
  );
}
