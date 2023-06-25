// app > Components > Home > IntroCards.jsx
import Link from "next/link";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function IntroCards() {
  return (
    <div className="grid grid-rows-3 gap-3 sm:grid-cols-3">
      <div className="flex flex-col justify-between p-6 transition-transform duration-500 transform rounded-lg shadow-md bg-gradient-to-br from-slate-300 to-slate-400 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center mb-4 space-x-2">
          <CodeBracketIcon className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Coding</h2>
        </div>
        <ul>
          <li className="list-disc">
            OU Outreach Coding Bootcamp,powersssed by FullStack Academy,
            graduate
          </li>
          <li>
            Tech StacK: that includes Node, JavaScript, React, Next JS, Postres,
            Tailwind.
          </li>
        </ul>

        <div className="mt-4">
          <Link href="/" className=" hover:underline">
            Read More
          </Link>
          <Link href="/" className="ml-4 hover:underline">
            See My Projects
          </Link>
        </div>
      </div>

      {/* Journalism Card */}
      <div className="p-6 transition-transform duration-500 transform rounded-lg shadow-md bg-gradient-to-br from-slate-300 to-slate-400 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center mb-4 space-x-2">
          <NewspaperIcon className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Journalism</h2>
        </div>
        <p className="text-gray-700">
          I have covered state and local politics for more than a decade. I most
          recently was investigative reporter with Oklahoma Watch, an
          award-winning nonprofit, where I worked for seven years before
          stepping down in 2022 to expand my skillset to also become a
          full-stack Web developer.
        </p>
        <div className="mt-4">
          <Link href="/" className="hover:underline">
            Read More
          </Link>
          <Link href="/" className="ml-4 hover:underline">
            See My Projects
          </Link>
        </div>
      </div>

      {/* Data Viz Card */}
      <div className="flex flex-col justify-between p-6 transition-transform duration-500 transform rounded-lg shadow-md bg-gradient-to-br from-slate-300 to-slate-400 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center mb-4 space-x-2">
          <ChartBarIcon className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Data Vizs</h2>
        </div>
        <p className="text-gray-700">
          Through training with the National Institute for Computer-Assisted
          Reporting and plenty of self-learning, I have been a newsroom leader
          in working with data and creating data visualizations with programs,
          including Tableau, Flourish, DataWrapper, and JavaScript libraries
          including ChartJS.
        </p>
        <div className="mt-4">
          <Link href="/" className="text-indigio-600 hover:underline">
            Read More
          </Link>
          <Link href="/" className="ml-4 text-indigio-600 hover:underline">
            See My Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
