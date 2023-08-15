import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function Timeline() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold lg:text-center font-montserrat sm:text-4xl ">
        Education and Work History{" "}
      </h1>
      <div className="flex items-center px-6 py-2 lg:px-16">
        <ul className="relative border-l border-blue-800 ">
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <AcademicCapIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              Indiana University
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Graduated on May 3, 2008
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Graduated with bachlelor's of arts degrees in journalism and
              political science. Served as editor in chief of the Indiana Daily
              Student in additoin to several other editorial and reporting
              positoins.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <BriefcaseIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              Indianapolis Star
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Summer 2008
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Earned the national Pulliam Fellowship to work at the Indianapolis
              Star immediatley after college.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <BriefcaseIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              Staunton News Leader
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2008-2009
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Wrote for this Gannett-owned daily newspaper covering city and
              county governments in Staunton, Virginia.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <BriefcaseIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              Community Newspaper Holding Inc. (CNHI)
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2010-2011
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Served as the State Capitol Reporter for 14 newspapers throughotu
              Oklahoma in the CNHI chain.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <BriefcaseIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              Wyoming Tribune Eagle
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2011-2016
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Worked as the state governement and military beat reporter for
              this daily newspaper in Cheyenne, Wyoming.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <BriefcaseIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              Oklahoma Watch
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2016-2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Served as the Capitol and Democracy beat reporter for this
              non-profit investigasgive news group.
            </p>
          </li>
          <li className="pl-6 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white ">
              <AcademicCapIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-blue-900 dark:text-white">
              University of Oklahoma Outreach Coding Bootcamp
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Winter 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {" "}
              Graduated Winter 2022
            </p>
          </li>
        </ul>
      </div>{" "}
    </section>
  );
}
