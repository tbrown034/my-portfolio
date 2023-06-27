import Image from "next/image";
import Link from "next/link";
import game from "../../public/images/retrograde.png";
import weather from "../../public/images/weather.png";
import brew from "../../public/images/brew.png";
import campaign from "../../public/images/campaign.png";
import dental from "../../public/images/dental.png";
import dentalgpt from "../../public/images/dentalgpt.png";

export default function code() {
  return (
    <section className="flex flex-col min-h-screen p-4 pt-8 bg-blue-400">
      <div className="grid grid-cols-12">
        <div className="flex items-center col-span-2 ">
          <h1 className="text-6xl font-montserrat">Code</h1>
        </div>
        <div className="col-span-10">
          <div className="flex flex-col gap-4 ">
            <div>
              <h1 className="text-4xl font-montserrat">Background and Aim</h1>
              <h3 className="text-2xl font-roboto">
                After more than a decade in journalism, I decided to carve a new
                career path in 2022. Leaving my job as an investigative reporter
                with Oklahoma Watch, I soon after enroleld and when later
                graduate from University of Oklahoma's Outreach Coding Bootcamp,
                a nearly three-month, five-day-a-week course powered by
                FullStack Academy. Since them I've been doing freelance,
                continuing my learning journey and seeing what I can build next.
              </h3>
            </div>
            <div>
              <h1 className="text-4xl font-montserrat">Tech Stack</h1>
              <h3 className="text-2xl font-roboto">
                I specialize in a NERD stack (Node.js, Express, React, Databases
                using SQL), but I'm most home currently with React. I'm always
                learning more, but here are the main technologies I have used.
              </h3>
            </div>
            <div>
              <h1 className="text-4xl font-montserrat">Coding Projects</h1>
              <h3 className="text-2xl font-roboto">
                In addition to the projects and web applications I built during
                my coding education, I enjoy exploring new technologies and
                finding new ways to grab, filter and display infomration.
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={game}></Image>
                  <div>
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                  </div>

                  <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                    <Link
                      className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                      href="/"
                    >
                      Github
                    </Link>
                    <Link
                      className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                      href="/"
                    >
                      Live Site
                    </Link>
                    <Link
                      className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                      href="/"
                    >
                      read.me
                    </Link>
                  </div>
                </div>
                <div className="pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={weather}></Image>
                  <div className="flex flex-col gap-2 p-1">
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                    <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Github
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Live Site
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        read.me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={dental}></Image>
                  <div className="flex flex-col gap-2 p-1">
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                    <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Github
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Live Site
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        read.me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={dentalgpt}></Image>
                  <div className="flex flex-col gap-2 p-1">
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                    <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Github
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Live Site
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        read.me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={campaign}></Image>
                  <div className="flex flex-col gap-2 p-1">
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                    <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Github
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Live Site
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        read.me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="pb-4 border-4 border-blue-900 rounded-lg ">
                  <Image src={brew}></Image>
                  <div className="flex flex-col gap-2 p-1">
                    <h1 className="text-4xl font-montserrat">RetroGrade PC</h1>

                    <div className="flex gap-1">
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
                    <h3>
                      Worked on a team of four to create an e-commerce site with
                      a full-stack utlitizing a database and fetch calls.
                    </h3>
                    <div className="flex w-1/2 gap-4 py-4 border-t-2 border-blue-600">
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Github
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        Live Site
                      </Link>
                      <Link
                        className="p-1 border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                        href="/"
                      >
                        read.me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
