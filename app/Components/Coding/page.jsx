import Link from "next/link";
import Projects from "./projects";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
export default function code() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-sky-100">
      <div className="flex flex-col gap-2">
        <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400  self-start gap-2">
          <CodeBracketIcon className="w-6 h-6" />
          <p>Code </p>
        </div>

        <h2 className="text-3xl font-semibold font-montserrat ">
          From Copy to Code
        </h2>
        <p className="text-xl leading-normal font-robotoSlab">
          After more than a decade in journalism, I decided to carve a new
          career path in 2022. Leaving my job as an investigative reporter with
          <Link
            href="/"
            className="inline px-1 py-0.5  underline rounded shadow-md     font-inter font-semibold "
          >
            Oklahoma Watch
          </Link>
          , I soon after enroleld and when later graduate from
          <Link
            href="/"
            className="inline px-1 py-0.5  underline rounded shadow-md     font-inter font-semibold "
          >
            University of Oklahoma's Outreach Coding Bootcamp
          </Link>
          , a three-month, five-day-a-week course led by{" "}
          <Link
            href="/"
            className="inline px-1 py-0.5  underline rounded shadow-md     font-inter font-semibold "
          >
            FullStack Academy
          </Link>
          . Since them I've been doing freelance, continuing my learning journey
          and seeing what I can build next.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Projects />
      </div>
    </section>
  );
}