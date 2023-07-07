import { UserIcon } from "@heroicons/react/24/outline";

export default function intro() {
  return (
    <section className="flex flex-col gap-2">
      <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 gap-2 self-start">
        <UserIcon className="w-6 h-6" />
        <p>About </p>
      </div>

      <h2 className="text-3xl font-semibold font-montserrat ">
        Let's Connect and Build
      </h2>
      <p className="text-xl leading-normal font-robotoSlab">
        Hello again! You've already learned about my professional journey, my
        passion for blending tech with investigative reporting, and some of my
        work. But who am I beyond the codes and the stories?
      </p>
      <p className="text-xl leading-normal font-robotoSlab">
        Outside of work, you might find me with a book in hand – I'm an avid
        reader who believes that stories not only entertain but also teach us
        empathy and broaden our horizons. But even more likely, I'll be hanging
        out with my lovely girlfriend, Lauren, my golden doodle, Indy, and
        perhaps a nice IPA.
      </p>
    </section>
  );
}
