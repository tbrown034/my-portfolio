import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function Intro() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-blue-300  dark:text-blue-800   self-start gap-2">
          <NewspaperIcon className="w-6 h-6 font-bold" />
          <p className="text-lg">Journalism </p>
        </div>

        <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
          Award-Winning Investigavie Journalism
        </h2>
        <p className="text-xl leading-normal font-robotoSlab">
          I bring nearly two decades of reporting experience, covering politics,
          threats to democracy, health issues and policies and just about
          everythign else in between. Most recently, I was an investigative
          journalist with{" "}
          <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
            Oklahoma Watch
          </span>
          , a non-profit newsroom based in Oklahoam City. In addition to writing
          a weekly newsletter that went out to thousands, freuqently being a
          guest on our weekly podcast, my work was regularly picked up by the
          largest papers in the state, including the Oklahoman and Tulsa World.
        </p>
        <p className="text-xl leading-normal font-robotoSlab">
          During my time there, I was awarded Oklahoma Society of Professional
          Journalists'{" "}
          <a
            href="https://oklahomawatch.org/2020/07/24/oklahoma-watch-journalists-earn-eight-first-place-awards-in-state-contest/"
            target="_blank"
            className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100 "
          >
            Reporter of the Year in 2020
          </a>{" "}
          in, The Great Plains Newspaper{" "}
          <a
            href="https://oklahomawatch.org/2021/05/10/oklahoma-watchs-trevor-brown-earns-writer-of-year-honors-in-great-plains-journalism-contest/"
            target="_blank"
            className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100"
          >
            Writer of the Year in 2021
          </a>{" "}
          and Oklahoma SPJʼs{" "}
          <span className="border-b-2 border-blue-800 dark:border-blue-200 hover:border-blue-400 active:border-blue-100">
            first place awards in 2022
          </span>{" "}
          for In-depth Enterprise and Investigative Reporting and Government
          Reporting.{" "}
        </p>
      </div>
    </section>
  );
}
