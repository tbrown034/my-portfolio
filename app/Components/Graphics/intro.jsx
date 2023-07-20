import { ChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700  dark:text-blue-400 lg:self-center self-start gap-2">
        <ChartBarIcon className="w-6 h-6 font-bold" />
        <p className="text-lg">Graphics</p>
      </div>
      <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl ">
        Data + Design
      </h2>
      <p className="text-xl leading-normal font-robotoSlab">
        {" "}
        Through a mix of self-learning and training through the Investiative
        Reporters and Editors' National Institute for Computer Assisted
        Reporting{" "}
        <Link
          href="/"
          className="px-0.5 bg-blue-300 rounded shadow-md dark:bg-blue-600 font-robotoSlab hover:underline whitespace-nowrap"
        >
          (IRE and NICAR){" "}
        </Link>
        , I became a newsroom leader at Oklahoma Watch for our graphics and
        visualzing work.
      </p>
      <p className="text-xl leading-normal font-robotoSlab">
        {" "}
        In addition to collaborating with fellow reporters and holding my own
        training sessions, I produced dozens of graphics, interactive databases
        and other utilitiles with programs such as Tableau, Flourish and
        DataWrapper.
      </p>
    </section>
  );
}
