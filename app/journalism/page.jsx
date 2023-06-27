import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function journalist() {
  return (
    <section className="flex flex-col min-h-screen gap-8 p-4 pt-8 bg-blue-300 dark:bg-blue-700">
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
      <div>
        <h1 className="text-4xl font-montserrat">Tech Stack</h1>
        <h3 className="text-lg font-roboto">
          I specialize in a NERD stack (Node.js, Express, React, Databases using
          SQL), but I'm most home currently with React. I'm always learning
          more, but here are the main technologies I have used.
        </h3>
      </div>
      <div>
        <h1 className="text-4xl font-montserrat">My Web Dev Projects</h1>
        <h3 className="text-lg font-roboto">
          In addition to the projects and web applications I built during my
          coding education, I enjoy exploring new technologies and finding new
          ways to grab, filter and display infomration.
        </h3>
      </div>
    </section>
  );
}
