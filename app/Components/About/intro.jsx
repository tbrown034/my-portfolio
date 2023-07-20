import { UserIcon } from "@heroicons/react/24/outline";

export default function intro() {
  return (
    <section className="flex flex-col gap-4">
      <div className="bg-blue-100 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700  dark:text-blue-400 lg:self-center self-start gap-2">
        <UserIcon className="w-6 h-6 font-bold" />
        <p className="text-lg">About </p>
      </div>

      <h2 className="text-3xl font-bold lg:text-center font-montserrat sm:text-4xl">
        Let's Connect and Build
      </h2>
      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl"></p>
      <p className="text-xl leading-normal font-robotoSlab sm:text-2xl">
        Outside of work, you might find me with a book in hand – I'm an avid
        reader who believes that stories not only entertain but also teach us
        empathy and broaden our horizons. But even more likely, I'll be hanging
        out with my lovely girlfriend, Lauren, my golden doodle, Indy, and
        perhaps a nice IPA.
      </p>
    </section>
  );
}
