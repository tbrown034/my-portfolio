import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10">
      {/* Introduction */}
      <div className="flex flex-col w-2/3 gap-4 mb-16">
        <h1 className="text-5xl">Hello👋, I'm Trevor.</h1>
        <h3 className="text-lg">
          I'm a{" "}
          <span className="px-1 font-bold underline rounded bg-slate-300">
            full-stack web developer
          </span>{" "}
          with a knack for{" "}
          <span className="px-1 font-bold underline bg-slate-300">
            data-driven
          </span>{" "}
          programming and storytelling. After more than a decade as an{" "}
          <span className="px-1 font-bold underline bg-slate-300">
            award-winning investigative journalist
          </span>
          , I'm now looking for new opportunities in the world of tech. Let's
          build something cool.
        </h3>
        <div className="flex justify-center gap-4">
          <button className="p-2 border-2 rounded-lg border-slate-800 hover:bg-slate-300 active:bg-slate-400">
            About
          </button>
          <button className="p-2 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            Resume
          </button>
          <button className="p-2 border-2 rounded-lg hover:bg-slate-300 active:bg-slate-400 border-slate-800">
            Contact
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-rows-3 gap-3 sm:grid-cols-3">
        {/* Coding Card */}
        <div className="flex flex-col justify-between p-6 transition-transform duration-500 transform rounded-lg shadow-md bg-gradient-to-br from-slate-300 to-slate-400 hover:scale-105 hover:shadow-lg">
          <div className="flex items-center mb-4 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            <h2 className="text-2xl font-semibold">Coding</h2>
          </div>
          <p className="text-gray-700">
            With a degree from the University of Oklahoma's Outreach Coding
            Bootcamp (powered by FullStack Academy), I specialize in building
            web applications with React, Next JS, Tailwind, Postgres, and
            Prisma.
          </p>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            <h2 className="text-2xl font-semibold">Journalism</h2>
          </div>
          <p className="text-gray-700">
            I have covered state and local politics for more than a decade. I
            most recently was investigative reporter with Oklahoma Watch, an
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
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
    </section>
  );
}
