import { ChartBarIcon } from "@heroicons/react/24/outline";

export default function projects() {
  return (
    <section className="flex flex-col gap-2">
      <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md gap-2 dark:bg-gray-700 dark:text-blue-400  self-start">
        <ChartBarIcon className="w-6 h-6" />
        <p>Graphics</p>
      </div>

      <h2 className="text-3xl font-semibold font-montserrat ">Data + Design</h2>
      <p className="text-xl leading-normal font-robotoSlab">
        {" "}
        Through a mix of self-learning and training through the Investiative
        Reporters and Editors' National Institute for Computer-Assisted
        Reporting, I became a newsroom leader at Oklahoma Watch for our graphics
        and visualzing work. In addition to collaborating with fellow reporters
        and holding my own training sessions, I produced dozens of graphics,
        interactive databases and other utilitiles with programs such as
        Tableau, Flourish and DataWrapper.
      </p>
    </section>
  );
}
