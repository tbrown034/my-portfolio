import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

export default function journalism() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-indigo-50">
      <div className="flex flex-col gap-2">
        <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 gap-2 self-start">
          <UserIcon className="w-6 h-6" />
          <p>About </p>
        </div>

        <h2 className="text-3xl font-semibold font-montserrat ">
          Award-Winning Investigavie Journalism
        </h2>
        <p className="text-xl leading-normal font-robotoSlab">
          {" "}
          I bring nearly two decades of reporting experience, including most
          recently working as an investigative journalist with Oklahoma Watch, a
          nonprofit newsroom just a bit north of you all. I covered politics,
          Oklahoma’s legislature and vulnerable populations before I created a
          new beat reporting on voting rights and democracy.{" "}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold font-montserrat">Clips</h1>
      </div>
    </section>
  );
}
