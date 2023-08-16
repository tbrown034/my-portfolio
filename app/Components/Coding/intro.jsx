import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-blue-300  dark:text-blue-800  self-start gap-2">
        <CodeBracketIcon className="w-6 h-6 font-bold" />
        <p className="text-lg">Code </p>
      </div>

      <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
        From Copy to Code
      </h2>

      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl">
        In 2022, after more than a decade in journalism, I decided to take a
        leap and puruse my lifelong goal of expanding my tech knowlege. So after
        applying and being accepted into the{" "}
        <a
          href="https://bootcamp.outreach.ou.edu/"
          target="_blank"
          className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100"
        >
          University of Oklahoma's
        </a>{" "}
        Outreach Web Development Bootcamp.
      </p>
      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl">
        Since earning my certificate from the three-month, five-day-a-week
        course led by{" "}
        <a
          href="https://www.fullstackacademy.com/"
          target="_blank"
          className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100"
        >
          FullStack Academy
        </a>
        , I've been doing freelance, continuing my learning journey and seeing
        what I can build next.
      </p>
    </section>
  );
}
