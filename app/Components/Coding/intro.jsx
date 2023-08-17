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
        After a decade and a half in journalism, feeling the burnout that many
        experienced as of late, I took a leap in 2022. I left the job I'd held
        for the last seven years and enrolled in the{" "}
        <a
          href="https://bootcamp.outreach.ou.edu/"
          target="_blank"
          className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100"
        >
          University of Oklahoma's
        </a>{" "}
        Outreach Web Development Bootcamp in 2022.
      </p>
      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl">
        Despite the challenges, I fell in love with programming. And since
        earning my certificate from the{" "}
        <a
          href="https://www.fullstackacademy.com/"
          target="_blank"
          className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100"
        >
          FullStack Academy
        </a>
        -led course, I've building up my skills, doing freelance work and seeing
        what I can build next.
      </p>
    </section>
  );
}
