import Image from "next/image";
import Link from "next/link";
import { clips } from "../../resources/journalismClips.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import mug from "../../../public/images/trevorPhoto2.jpeg";

export default function journalism() {
  return (
    <section className="flex flex-col justify-between gap-4 p-8 bg-indigo-50">
      <div className="flex flex-col gap-2">
        <div className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 gap-2 self-start">
          <CodeBracketIcon className="w-6 h-6" />
          <p>Journalism </p>
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

        <div className="grid grid-cols-1 gap-4 py-4 space-y-1 md:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-4 pb-4 border-4 border-blue-900 rounded-lg "
            >
              <Image alt="alt" src={clip.image}></Image>
              <div className="flex flex-col gap-4">
                <h1 className="px-2 text-xl font-montserrat">
                  {clip.headline}
                </h1>
                <div className="flex items-center gap-2 px-2">
                  <Image
                    className="rounded-full"
                    height={75}
                    src={mug}
                    alt="mug"
                  ></Image>
                  <h3>
                    By <span className="font-bold">Trevor Brown</span>
                  </h3>
                  <h3 className="text-xs">{clip.date}</h3>
                </div>
                <div className="flex gap-1 px-2">
                  {" "}
                  <h2 className="p-1 text-sm bg-blue-800 rounded-lg text-blue-50 font-firaCode">
                    {clip.publication}
                  </h2>
                </div>
              </div>

              <p className="px-2">{clip.text}</p>

              <div className="flex w-1/2 gap-4 px-2 py-4 border-t-2 border-blue-600">
                <Link
                  className="flex items-center gap-2 p-1 font-bold border-2 border-blue-800 rounded-lg hover:bg-blue-300 active:bg-blue-400"
                  href={clip.siteLink}
                >
                  <p>Full Article</p>
                  <GlobeAltIcon className="w-12 h-12" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
