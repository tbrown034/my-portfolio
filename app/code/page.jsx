import Image from "next/image";
import Link from "next/link";
import weather from "../../public/images/weather.png";
import brew from "../../public/images/beer.png";
import campaign from "../../public/images/campaign.png";
import dental from "../../public/images/kabdds.png";
import dentalgpt from "../../public/images/dentalgpt.png";
import shipit from "../../public/images/shipit1.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DiGithubBadge } from "react-icons/di";

export default function code() {
  return (
    <section className="flex flex-col justify-around min-h-screen gap-4 p-4 bg-blue-200 sm:px-12 lg:px-20">
      <div className="flex flex-col gap-2">
        <div className="bg-purple-100 text-purple-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2 self-start">
          <svg
            className="w-3 h-3 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            ></path>
          </svg>
          Code
        </div>

        <h2 className="text-6xl font-extrabold ">From Copy to Code</h2>
        <p className="text-lg font-roboto">
          After more than a decade in journalism, I decided to carve a new
          career path in 2022. Leaving my job as an investigative reporter with
          Oklahoma Watch, I soon after enroleld and when later graduate from
          University of Oklahoma's Outreach Coding Bootcamp, a nearly
          three-month, five-day-a-week course powered by FullStack Academy.
          Since them I've been doing freelance, continuing my learning journey
          and seeing what I can build next.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl underline font-montserrat">Tech Stack</h1>
        <h3 className="text-lg font-roboto">
          I specialize in a NERD stack (Node.js, Express, React, Databases using
          SQL), but I'm most home currently with React. I'm always learning
          more, but here are the main technologies I have used.
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl underline font-montserrat">
          My Web Dev Projects
        </h1>

        <div className="grid grid-cols-1 gap-4 py-4 space-y-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-4 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={dental}></Image>
            <h1 className="px-2 text-4xl font-montserrat">Keith Brown DDS</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={weather}></Image>
            <h1 className="px-2 text-4xl font-montserrat">MyWeatherApp</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center justify-between gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={campaign}></Image>
            <h1 className="px-2 text-4xl font-montserrat">MyCampaignApp</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center justify-between gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={shipit}></Image>
            <h1 className="px-2 text-4xl font-montserrat">MyShipItApp</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={dentalgpt}></Image>
            <h1 className="px-2 text-4xl font-montserrat">MyDentalGPTApp</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={brew}></Image>
            <h1 className="px-2 text-4xl font-montserrat">MyBrewApp</h1>

            <div className="flex gap-1 px-2">
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                JavaScript
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                React
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Express
              </span>
              <span className="p-1 text-sm bg-blue-600 rounded-lg font-firaCode">
                Axios
              </span>
            </div>

            <h3 className="px-2">
              Created this app that fetches weather information and displays it
              after a user enters their zipcode.
            </h3>

            <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>Github</p>

                <div>
                  <DiGithubBadge className="w-16 h-16" />
                </div>
              </Link>

              <Link
                className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                href="/"
              >
                <p>View Site</p>
                <GlobeAltIcon className="w-16 h-16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}