import Link from "next/link";
import HeroBuildSomething from "./HeroBuildSomething";

export default function Intro() {
  return (
    <section className="space-y-4">
      <div className="max-w-4xl">
        {/* Subhead */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          I spent 15+ years chasing public records and holding power
          accountable.
        </h3>

        {/* Body — two columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
            Now I build{" "}
            <Link
              href="/projects"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              interactive tools
            </Link>{" "}
            that transform complex data into clear insights. I turn government
            databases, public records and raw information into stories people
            can actually understand and use.
          </p>

          <p className="text-lg text-gray-600 dark:text-neutral-200 leading-relaxed">
            My work bridges{" "}
            <Link
              href="/journalism"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              investigative reporting
            </Link>{" "}
            and{" "}
            <Link
              href="/projects"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              modern web development
            </Link>{" "}
            — building responsive sites,{" "}
            <Link
              href="/journalism#data-viz"
              className="font-medium text-blue-800 dark:text-blue-400 underline decoration-1 underline-offset-2 hover:decoration-2 transition-colors duration-200"
            >
              data visualizations
            </Link>{" "}
            and applications that turn raw data into understanding.
          </p>
        </div>
      </div>

      {/* Build something together */}
      <div className="pt-2">
        <HeroBuildSomething />
      </div>
    </section>
  );
}
