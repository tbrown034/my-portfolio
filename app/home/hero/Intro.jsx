import Link from "next/link";
import Mug from "./Mug";
import HeroBuildSomething from "./HeroBuildSomething";

export default function Intro({ showDesktopLayout }) {
  // Desktop layout for large screens (2 columns)
  if (showDesktopLayout === "large") {
    return (
      <div className="space-y-6">
        {/* Main content in 2 columns - aligned with space-between */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Column 1: Subhead and Lede */}
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              I spent 15+ years chasing public records and holding power
              accountable.
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Now I build{" "}
              <Link
                href="#journey"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                interactive tools
              </Link>{" "}
              that transform complex data into clear insights. I turn government
              databases, public records and raw information into stories people
              can actually understand and use.
            </p>
          </div>

          {/* Column 2: Nutgraph and body */}
          <div className="flex flex-col justify-between h-full">
            <p className=" text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My work bridges{" "}
              <Link
                href="#journalism"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                investigative reporting
              </Link>{" "}
              and{" "}
              <Link
                href="#coding"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                modern web development
              </Link>{" "}
              – building responsive sites,{" "}
              <Link
                href="#data"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                data visualizations
              </Link>{" "}
              and applications that turn raw data into useful informationm.
            </p>

            <p className=" text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Whether I’m reporting or coding, my guiding principle is the same:
              make truth and information accessible, keep the user experience
              seamless and ensure the end product feels useful.
            </p>

            {/* Let's build something together link - desktop only */}
            <div className="mt-8 hidden lg:block">
              <HeroBuildSomething />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout (mobile and default)
  return (
    <section className="space-y-4">
      {/* About Me Section */}
      <div className="space-y-3">
        {/* Mobile image placement */}
        <div className="flex justify-center my-6 md:hidden">
          <Mug />
        </div>
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
          About Me
        </h2>

        {/* Main content */}
        <div className="space-y-4 max-w-4xl">
          {/* Subhead */}
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            I spent 15+ years chasing public records and holding power
            accountable.
          </h3>

          {/* Lede */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Now I build{" "}
            <Link
              href="#coding"
              className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
            >
              interactive tools
            </Link>{" "}
            that transform complex data into clear insights. I turn government
            databases, public records and raw information into stories people
            can actually understand and use.
          </p>

          {/* Nutgraph */}
          <div className="space-y-3">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              My work bridges{" "}
              <Link
                href="#journalism"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                investigative reporting
              </Link>{" "}
              and{" "}
              <Link
                href="#coding"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                modern web development
              </Link>{" "}
              – building responsive sites,{" "}
              <Link
                href="#data"
                className="font-medium text-blue-800 dark:text-blue-300 hover:underline hover:decoration-2 hover:underline-offset-2 transition-colors duration-200"
              >
                data visualizations
              </Link>{" "}
              and applications that turn raw data into understanding. Each field
              demands deep research, precision and an instinct for discovery.
            </p>

            {/* Body */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether I'm digging into public records or architecting a React
              application, my guiding principle is the same: make truth and
              information accessible and make the experience seamless.
            </p>
          </div>
        </div>
      </div>

      {/* Let's build something together link - mobile only */}
      <div className="md:hidden">
        <HeroBuildSomething />
      </div>
    </section>
  );
}
