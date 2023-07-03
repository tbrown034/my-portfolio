import Image from "next/image";
import Link from "next/link";
import photo from "../../public/images/photo.png";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { DiGithubBadge } from "react-icons/di";
import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function code() {
  return (
    <section className="flex flex-col justify-between gap-4 p-10">
      <div className="flex flex-col gap-2">
        <div className="bg-purple-100 text-purple-800 text-sm gap-2 font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2 self-start">
          <NewspaperIcon className="w-6 h-6" />
          <p> Journalism</p>
        </div>
        <h2 className="text-6xl font-extrabold ">
          Award-Winning Investigavie Journalism
        </h2>
        <p className="text-lg font-roboto">
          I bring nearly two decades of reporting experience, including most
          recently working as an investigative journalist with Oklahoma Watch, a
          nonprofit newsroom just a bit north of you all. I covered politics,
          Oklahoma’s legislature and vulnerable populations before I created a
          new beat reporting on voting rights and democracy.{" "}
        </p>{" "}
        <p className="text-lg font-roboto">
          In those roles, I was awarded Oklahoma Society of Professional
          Journalists' Reporter of the Year in 2020, The Great Plains Newspaper
          Writer of the Year in 2021 and Oklahoma SPJ’s first place awards for
          In-depth Enterprise and Investigative Reporting and Government
          Reporting in 2022.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-montserrat">Timeline</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-montserrat">Top Reporting Clips</h1>

        <div className="grid grid-cols-1 gap-4 py-4 space-y-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-2 pb-4 border-4 border-blue-900 rounded-lg bg-slate-300 ">
            <Image src={photo} alt="alt"></Image>
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
            <Image alt="alt" src={photo}></Image>
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
            <Image alt="alt" src={photo}></Image>
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
            <Image alt="alt" src={photo}></Image>
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
            <Image src={photo} alt="alt"></Image>
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
            <Image src={photo} alt="alt"></Image>
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
