import { UserIcon } from "@heroicons/react/24/outline";

export default function Intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-blue-300  dark:text-blue-800  self-start gap-2">
        <UserIcon className="w-6 h-6 font-bold" />
        <p className="text-lg">Contact</p>
      </div>

      <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl">
        Let's Connect and Build
      </h2>
      <p className="text-xl leading-normal font-robotoSlab">
        I am available for full-time or freelance work in both journalism and
        web development — or something involving both!
      </p>
      <p className="text-xl leading-normal font-robotoSlab">
        I didn't know exactly what was in store for me when I decided to quit my
        journalism job in 2022 and chart a new career path for myself. But I'm
        ready to build and continue my web development journey. With a passion
        for storytelling and a knack for coding, I'm eager to merge these worlds
        and create impactful digital experiences.
      </p>
      <p className="text-xl leading-normal font-robotoSlab">
        If you're looking for someone with a unique blend of storytelling and
        technical skills, or just want to share ideas and collaborate, please
        don't hesitate to reach out. I'm always open to new opportunities and
        challenges.
      </p>
    </section>
  );
}
