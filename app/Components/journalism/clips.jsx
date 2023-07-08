import Image from "next/image";
import photo from "../../../public/images/okwatch.png";
import Link from "next/link";
import { clips } from "../../resources/journalismClips.js";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import mug from "../../../public/images/trevorPhoto2.jpeg";
export default function Clips() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold underline font-montserrat underline-offset-6 ">
        Selected Clips
      </h1>
      <div className="grid grid-cols-1 gap-4 py-4 space-y-1 md:grid-cols-2 lg:grid-cols-3">
        {clips.map((clip, index) => (
          <div
            key={index}
            className="flex flex-col justify-between gap-4 pb-4 border-4 border-blue-900 rounded-lg "
          >
            <Image alt="alt" src={clip.image}></Image>
            <div className="px-6">
              <Image alt="Oklahoma Watch logo" src={photo}></Image>
            </div>
            <h1 className="px-2 text-xl font-montserrat">{clip.headline}</h1>

            <div className="flex items-center gap-2 px-2">
              <Image
                className="rounded-full"
                height={75}
                src={mug}
                alt="mug"
              ></Image>
              <div className="flex flex-col justify-start gap-2 text ">
                <h3>
                  By <span className="font-semibold">Trevor Brown</span>{" "}
                </h3>
                <h3 className="text-sm">Published: {clip.date}</h3>
              </div>{" "}
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
    </section>
  );
}
