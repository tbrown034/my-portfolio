import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700  dark:text-blue-400 lg:self-center self-start gap-2">
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
        <Link
          href="/"
          className="px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline whitespace-nowrap"
        >
          University of Oklahoma's
        </Link>{" "}
        Outreach Web Development Bootcamp.
      </p>
      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl">
        Since earning my certificate from the three-month, five-day-a-week
        course led by{" "}
        <Link
          href="/"
          className="px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline whitespace-nowrap"
        >
          FullStack Academy
        </Link>
        , I've been doing freelance, continuing my learning journey and seeing
        what I can build next.
      </p>
    </section>
  );
}
