import { NewspaperIcon } from "@heroicons/react/24/outline";

export default function intro() {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 gap-2 self-start">
          <NewspaperIcon className="w-6 h-6" />
          <p>Journalism </p>
        </div>

        <h2 className="text-3xl font-semibold font-montserrat ">
          Award-Winning Investigavie Journalism
        </h2>
        <p className="text-xl leading-normal font-robotoSlab">
          I bring nearly two decades of reporting experience, covering politics,
          threats to democracy, health issues and policies and just about
          everythign else in between. Most recently, I was{" "}
          <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
            an investigative journalist with Oklahoma Watch
          </span>
          , a non-profit newsroom based in Oklahoam City. In addition to writing
          a weekly newsletter that went out to thousands, freuqently being a
          guest on our weekly podcast, my work was regularly picked up by the
          largest papers in the state, including the Oklahoman and Tulsa World.
        </p>
        <p className="text-xl leading-normal font-robotoSlab">
          During my time there, I was awarded Oklahoma Society of Professional
          Journalists'{" "}
          <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
            Reporter of the Year in 2020
          </span>
          , The Great Plains Newspaper{" "}
          <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
            Writer of the Year in 2021
          </span>{" "}
          and Oklahoma SPJʼs{" "}
          <span className=" px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline">
            first place awards in 2022
          </span>{" "}
          for In-depth Enterprise and Investigative Reporting and Government
          Reporting.{" "}
        </p>
      </div>
    </section>
  );
}
