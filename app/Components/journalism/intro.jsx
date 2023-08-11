import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function Intro() {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-blue-300  dark:text-blue-800  lg:self-center self-start gap-2">
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
          <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline whitespace-nowrap  dark:text-blue-100">
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
          <span className="px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 whitespace-nowrap font-robotoSlab hover:underline ">
            Reporter of the Year
          </span>{" "}
          in 2020 , The Great Plains Newspaper{" "}
          <span className="whitespace-nowrap px-0.5 bg-blue-300 rounded shadow-md  dark:text-blue-100 dark:bg-blue-600 font-robotoSlab hover:underline">
            Writer of the Year
          </span>{" "}
          in 2021 and Oklahoma SPJʼs{" "}
          <span className=" px-0.5 whitespace-nowrap bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline  dark:text-blue-100">
            first place awards
          </span>{" "}
          in 2022 for In-depth Enterprise and Investigative Reporting and
          Government Reporting.{" "}
        </p>
      </div>
    </section>
  );
}
