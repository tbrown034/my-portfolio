import Image from "next/image";
import resume from "../../public/images/Resume.jpg";
import {
  AiOutlineDownload,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";

export default function Page() {
  return (
    <section className="flex flex-col gap-4 px-8 dark:bg-blue-900 ">
      <Image src={resume} alt="Resume for Trevor Brown"></Image>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row ">
        <a
          className="flex flex-col items-center justify-center w-2/3 p-2 px-4 font-bold text-white bg-blue-800 sm:w-1/3 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400 "
          href="/trevorBrownResume.pdf"
          download="trevorResume"
        >
          <AiOutlineHome className="w-icon-sm h-icon-sm" />
          <p className="text-sm font-semibold text-center">Back to Home</p>
        </a>
        <a
          className="flex flex-col items-center justify-center w-2/3 p-2 px-4 text-xl font-bold text-white bg-blue-800 sm:w-1/3 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
          href="/trevorBrownResume.pdf"
          download="trevorResume"
        >
          {" "}
          <AiOutlineMail className="w-icon-sm h-icon-sm" />
          <p className="text-sm font-semibold text-center">Get in Contact</p>
        </a>
        <a
          className="flex flex-col items-center justify-center w-2/3 p-2 px-4 text-xl font-bold text-white bg-blue-800 sm:w-1/3 rounded-2xl sm:px-8 dark:text-blue-950 dark:bg-blue-50 hover:bg-blue-600 active:bg-blue-950 focus:bg-blue-500 dark:hover:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-400"
          href="/trevorBrownResume.pdf"
          download="trevorResume"
        >
          {" "}
          <AiOutlineDownload className="w-icon-sm h-icon-sm" />
          <p className="text-sm font-semibold text-center">Download Resume</p>
        </a>
      </div>
    </section>
  );
}
